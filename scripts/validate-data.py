#!/usr/bin/env python3
"""
学科データの自動バリデーションスクリプト。

使い方:
  python3 scripts/validate-data.py                    # 全学科チェック
  python3 scripts/validate-data.py data/csv/ec-26.csv  # 特定CSVのみ

チェック項目:
  1. 科目数の妥当性（極端に少ない/多いものを警告）
  2. 必修科目の単位合計チェック
  3. 同一学科の年度間diff（科目数の急激な変化を検出）
  4. 全角半角の揺れ検出
  5. 必須フィールドの空欄チェック
  6. 値の妥当性（区分・必選自・配当期の値が正しいか）
"""

import csv
import glob
import os
import re
import sys
import unicodedata


# 期待される科目数の範囲（学科別）
EXPECTED_RANGE = {
    "EJ": (70, 100), "EH": (50, 100), "ES": (70, 90),
    "EK": (40, 85), "EF": (70, 85), "EC": (85, 100),
}
DEFAULT_RANGE = (30, 120)

VALID_CATEGORIES = {"工学基礎科目", "専門教育科目", "共通教育科目"}
VALID_CLASSIFICATIONS = {"必修", "選択", "択一必修", "自由"}
VALID_SEMESTERS = {"前期", "後期", "前期／後期", "通年", "年次継続"}


class Issue:
    def __init__(self, level, file, message):
        self.level = level  # "ERROR" or "WARN"
        self.file = file
        self.message = message

    def __str__(self):
        icon = "!!" if self.level == "ERROR" else "??"
        return f"  {icon} [{self.file}] {self.message}"


def load_csv(path):
    records = []
    with open(path, encoding="utf-8") as f:
        for row in csv.DictReader(f):
            records.append(row)
    return records


def infer_dept_year(filename):
    base = os.path.basename(filename).replace(".csv", "")
    m = re.match(r"([a-z]+)-(\d{2})", base)
    if m:
        return m.group(1).upper(), 2000 + int(m.group(2))
    return None, None


def has_fullwidth_ascii(text):
    """全角英数字が含まれるか"""
    for ch in text:
        if unicodedata.east_asian_width(ch) == 'F' and ch.isascii() is False:
            cp = ord(ch)
            # 全角英数字の範囲
            if 0xFF01 <= cp <= 0xFF5E:
                return True
    return False


def check_single(csv_path, issues):
    """単一CSVのチェック"""
    dept, year = infer_dept_year(csv_path)
    label = f"{dept}-{year}" if dept else os.path.basename(csv_path)
    records = load_csv(csv_path)

    if not records:
        issues.append(Issue("ERROR", label, "科目数が0"))
        return

    # 1. 科目数チェック
    count = len(records)
    lo, hi = EXPECTED_RANGE.get(dept, DEFAULT_RANGE)
    if count < lo:
        issues.append(Issue("WARN", label, f"科目数が少ない: {count} (期待: {lo}-{hi})"))
    elif count > hi:
        issues.append(Issue("WARN", label, f"科目数が多い: {count} (期待: {lo}-{hi})"))

    # 2. 必修科目の単位合計
    required_credits = sum(
        float(r["単位数"]) for r in records
        if r.get("必選自") == "必修"
    )
    if required_credits < 10:
        issues.append(Issue("WARN", label, f"必修単位の合計が少なすぎる: {required_credits}"))

    # 3. フィールドチェック
    for i, r in enumerate(records, 1):
        name = r.get("科目名", "")
        row_label = f"{label}:{i}({name})"

        # 必須フィールドの空欄
        if not name:
            issues.append(Issue("ERROR", row_label, "科目名が空"))
        if not r.get("単位数"):
            issues.append(Issue("ERROR", row_label, "単位数が空"))
        if not r.get("区分"):
            issues.append(Issue("WARN", row_label, "区分が空"))
        if not r.get("必選自"):
            issues.append(Issue("WARN", row_label, "必選自が空"))
        if not r.get("配当年"):
            issues.append(Issue("WARN", row_label, "配当年が空"))
        if not r.get("配当期"):
            issues.append(Issue("WARN", row_label, "配当期が空"))

        # 値の妥当性
        cat = r.get("区分", "")
        if cat and cat not in VALID_CATEGORIES:
            issues.append(Issue("WARN", row_label, f"区分が不正: '{cat}'"))

        cls = r.get("必選自", "")
        if cls and cls not in VALID_CLASSIFICATIONS:
            issues.append(Issue("WARN", row_label, f"必選自が不正: '{cls}'"))

        sem = r.get("配当期", "")
        if sem and sem not in VALID_SEMESTERS:
            issues.append(Issue("WARN", row_label, f"配当期が不正: '{sem}'"))

        # 単位数の妥当性
        try:
            credits = float(r.get("単位数", 0))
            if credits <= 0 or credits > 10:
                issues.append(Issue("WARN", row_label, f"単位数が不正: {credits}"))
        except ValueError:
            issues.append(Issue("ERROR", row_label, f"単位数が数値でない: '{r.get('単位数')}'"))

        # 全角半角の揺れ
        if name and has_fullwidth_ascii(name):
            issues.append(Issue("WARN", row_label, "科目名に全角英数字が含まれる"))


def check_year_diff(csv_files, issues):
    """同一学科の年度間diff"""
    by_dept = {}
    for f in csv_files:
        dept, year = infer_dept_year(f)
        if dept:
            by_dept.setdefault(dept, []).append((year, f))

    for dept, files in by_dept.items():
        files.sort()
        for i in range(1, len(files)):
            year_prev, path_prev = files[i - 1]
            year_curr, path_curr = files[i]

            prev = load_csv(path_prev)
            curr = load_csv(path_curr)

            prev_names = {r["科目名"] for r in prev}
            curr_names = {r["科目名"] for r in curr}

            added = curr_names - prev_names
            removed = prev_names - curr_names

            # 大きな変化を警告
            if len(added) > 15:
                issues.append(Issue("WARN", f"{dept} {year_prev}->{year_curr}",
                    f"追加科目が多い: +{len(added)}"))
            if len(removed) > 15:
                issues.append(Issue("WARN", f"{dept} {year_prev}->{year_curr}",
                    f"削除科目が多い: -{len(removed)}"))

            # 科目数の急激な変化
            diff = len(curr) - len(prev)
            if abs(diff) > 20:
                issues.append(Issue("WARN", f"{dept} {year_prev}->{year_curr}",
                    f"科目数の変化が大きい: {len(prev)} -> {len(curr)} (差{diff:+d})"))


def check_duplicates(csv_path, issues):
    """同一CSV内の重複科目"""
    dept, year = infer_dept_year(csv_path)
    label = f"{dept}-{year}" if dept else os.path.basename(csv_path)
    records = load_csv(csv_path)

    names = [r["科目名"] for r in records]
    seen = set()
    for name in names:
        if name in seen:
            issues.append(Issue("WARN", label, f"重複科目: {name}"))
        seen.add(name)


def main():
    if len(sys.argv) > 1:
        csv_files = sys.argv[1:]
    else:
        csv_files = sorted(glob.glob("data/csv/*.csv"))
        # サンプル・autoファイルを除外
        csv_files = [f for f in csv_files if "-sample" not in f and "-auto" not in f]

    if not csv_files:
        print("CSVファイルが見つかりません")
        sys.exit(1)

    issues = []

    print(f"チェック対象: {len(csv_files)} ファイル")
    print()

    # 個別チェック
    for f in csv_files:
        check_single(f, issues)
        check_duplicates(f, issues)

    # 年度間diff
    check_year_diff(csv_files, issues)

    # 結果出力
    errors = [i for i in issues if i.level == "ERROR"]
    warns = [i for i in issues if i.level == "WARN"]

    if errors:
        print(f"=== ERRORS ({len(errors)}) ===")
        for i in errors:
            print(i)
        print()

    if warns:
        print(f"=== WARNINGS ({len(warns)}) ===")
        for i in warns:
            print(i)
        print()

    if not issues:
        print("問題なし!")
    else:
        print(f"合計: {len(errors)} errors, {len(warns)} warnings")

    # サマリー
    print()
    print("=== サマリー ===")
    for f in csv_files:
        dept, year = infer_dept_year(f)
        records = load_csv(f)
        required = sum(1 for r in records if r.get("必選自") == "必修")
        total_credits = sum(float(r.get("単位数", 0)) for r in records)
        file_issues = [i for i in issues if f"{dept}-{year}" in str(i)]
        status = "OK" if not file_issues else f"{len(file_issues)} issues"
        print(f"  {dept}-{year}: {len(records)}科目, 必修{required}, 計{total_credits:.0f}単位 [{status}]")


if __name__ == "__main__":
    main()
