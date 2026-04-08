#!/usr/bin/env python3
"""
工学部の全学科×全年度のCSVを一括生成するスクリプト。

使い方:
  python3 scripts/batch-extract.py

前提: /tmp/youran/ にPDFがダウンロード済みであること。
出力: data/csv/{学科コード小文字}-{年度下2桁}.csv
"""

import os
import re
import sys

# pdf-to-csv.py の関数を再利用
sys.path.insert(0, os.path.dirname(__file__))
from importlib import import_module

# pdf-to-csv モジュールを直接インポートできないのでファイルから読む
import csv as csv_mod
import pdfplumber


def clean(text):
    if text is None:
        return ""
    return text.replace("\n", "").strip()


CATEGORY_KEYWORDS = {
    "教養教育科目": "工学基礎科目",
    "専門教育科目": "専門教育科目",
    "共通教育科目": "共通教育科目",
}

CLASSIFICATION_MAP = {"必": "必修", "選": "選択", "択": "択一必修", "自": "自由"}

SEMESTER_MAP = {
    "半期（前）": "前期", "半期(前)": "前期", "半期（前": "前期",
    "半期（後）": "後期", "半期(後)": "後期", "半期（後": "後期",
    "半期（前/後）": "前期／後期", "半期(前/後)": "前期／後期",
    "半期（前／後）": "前期／後期", "半期(前／後)": "前期／後期",
    "前期／後期": "前期／後期", "前期/後期": "前期／後期",
    "通年": "通年", "年次継続": "年次継続",
}


def normalize_category(raw):
    c = clean(raw)
    for key, val in CATEGORY_KEYWORDS.items():
        if key in c:
            return val
    # 「専門基礎科目」等も専門教育科目扱い
    if "専門" in c:
        return "専門教育科目"
    return c


def normalize_classification(raw):
    c = clean(raw)
    return CLASSIFICATION_MAP.get(c, c)


def normalize_semester(raw):
    c = clean(raw)
    for key, val in SEMESTER_MAP.items():
        if c == key:
            return val
    # 部分一致
    if "前" in c and "後" in c:
        return "前期／後期"
    if "通年" in c:
        return "通年"
    if "前" in c:
        return "前期"
    if "後" in c:
        return "後期"
    return c


def forward_fill(rows, col_indices):
    last = {}
    for row in rows:
        for idx in col_indices:
            if idx < len(row) and row[idx] and clean(row[idx]):
                last[idx] = row[idx]
            elif idx in last:
                row[idx] = last[idx]
    return rows


def find_dept_pages(pdf_path, dept_code, year):
    """配当表のページ番号を自動検出"""
    pages = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if not text:
                continue
            if "授業科目配当表" in text and (f"{dept_code}（{year}）" in text or f"{dept_code}({year})" in text):
                pages.append(i)
    return pages


def find_common_pages(pdf_path):
    """共通教育科目（人間科学・英語）の配当表ページを検出"""
    pages = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if not text:
                continue
            # 人間科学科目・英語科目の配当表
            if "授業科目配当表" in text and ("人間科学" in text or "英語科目" in text):
                pages.append(i)
            # 共通教育科目配当表
            elif "共通教育科目" in text and "授業科目配当表" in text:
                pages.append(i)
    return sorted(set(pages))


def detect_columns(header_row):
    """ヘッダー行からカラムインデックスを動的に検出"""
    col = {}
    for i, h in enumerate(header_row):
        c = clean(h) if h else ""
        if "科目名" in c:
            col["name"] = i
        elif c in ("コマ", "コマ数"):
            col["koma"] = i
        elif c in ("単位", "単位数"):
            col["credits"] = i
        elif "必選自" in c or c == "必選自":
            col["class"] = i
        elif "配当年" in c:
            col["year"] = i
        elif "配当期" in c:
            col["semester"] = i
        elif "備考" in c:
            col["notes"] = i
        elif "教職" in c:
            col["teaching"] = i

    # 区分カラム: 科目名より前の全カラム
    name_idx = col.get("name", 3)
    col["cat_cols"] = list(range(name_idx))

    return col


def extract_records(pdf_path, page_numbers):
    """指定ページから表を抽出してレコードに変換"""
    all_rows = []

    with pdfplumber.open(pdf_path) as pdf:
        for pn in page_numbers:
            if pn >= len(pdf.pages):
                continue
            for table in pdf.pages[pn].extract_tables():
                if not table:
                    continue
                all_rows.extend(table)

    # ヘッダー検出
    header_idx = None
    for i, row in enumerate(all_rows):
        if any("科目名" in clean(c) for c in row if c):
            header_idx = i
            break

    if header_idx is None:
        return []

    col = detect_columns(all_rows[header_idx])
    data_rows = all_rows[header_idx + 1:]

    # 区分カラムをforward-fill
    data_rows = forward_fill(data_rows, col["cat_cols"])

    records = []
    for row in data_rows:
        if len(row) <= col.get("name", 0):
            continue

        name = clean(row[col["name"]]) if "name" in col else ""
        if not name:
            continue

        credits_raw = clean(row[col["credits"]]) if "credits" in col and col["credits"] < len(row) else ""
        try:
            credits = float(credits_raw)
        except (ValueError, TypeError):
            continue

        # 区分: 最大3カラム（第一/第二/第三）
        cats = col["cat_cols"]
        category = normalize_category(row[cats[0]]) if len(cats) > 0 and cats[0] < len(row) else ""
        sub1 = clean(row[cats[1]]) if len(cats) > 1 and cats[1] < len(row) else ""
        sub2 = clean(row[cats[2]]) if len(cats) > 2 and cats[2] < len(row) else ""

        classification = normalize_classification(row[col["class"]]) if "class" in col and col["class"] < len(row) else ""
        year_val = clean(row[col["year"]]) if "year" in col and col["year"] < len(row) else ""
        semester = normalize_semester(row[col["semester"]]) if "semester" in col and col["semester"] < len(row) else ""
        notes = clean(row[col["notes"]]) if "notes" in col and col["notes"] < len(row) else ""
        teaching = clean(row[col["teaching"]]) if "teaching" in col and col["teaching"] < len(row) else ""
        if teaching in ("コードなし", ""):
            teaching = ""

        if classification == "必修" and "択一必修" in notes:
            classification = "択一必修"

        records.append({
            "科目名": name, "単位数": credits, "区分": category,
            "第二区分": sub1, "第三区分": sub2, "必選自": classification,
            "配当年": year_val, "配当期": semester, "教職コード": teaching,
            "備考": notes,
        })

    return records


def write_csv(records, output_path):
    """レコードをCSVに出力"""
    header = [
        "科目名", "単位数", "区分", "第二区分", "第三区分",
        "必選自", "配当年", "配当期", "教職コード", "備考",
        "JABEE目標", "JABEE電力", "JABEEシステム", "JABEEデバイス",
    ]

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv_mod.writer(f)
        writer.writerow(header)
        for r in records:
            writer.writerow([
                r["科目名"], r["単位数"], r["区分"], r["第二区分"], r["第三区分"],
                r["必選自"], r["配当年"], r["配当期"], r["教職コード"], r["備考"],
                "", "", "", "",
            ])

    return len(records)


def main():
    pdf_dir = "/tmp/youran"
    out_dir = "data/csv"

    configs = [
        # 工学部
        (2026, "kougaku-2026.pdf", ["EJ", "EH", "ES", "EK", "EF", "EC"]),
        (2025, "kougaku-2025.pdf", ["EJ", "EH", "ES", "EK", "EF", "EC"]),
        (2024, "kougaku-2024.pdf", ["EJ", "EH", "ES", "EK", "EF", "EC"]),
        (2023, "kougaku-2023.pdf", ["EJ", "EH", "ES", "EK", "EF", "EC"]),
        (2022, "kougaku-2022.pdf", ["EJ", "EH", "ES", "EK", "EF", "EC"]),
        # 未来科学部
        (2026, "mirai-2026.pdf", ["FA", "FI", "FR"]),
        (2025, "mirai-2025.pdf", ["FA", "FI", "FR"]),
        (2024, "mirai-2024.pdf", ["FA", "FI", "FR"]),
        (2023, "mirai-2023.pdf", ["FA", "FI", "FR"]),
        # システムデザイン工学部
        (2026, "sysdesign-2026.pdf", ["AJ", "AD"]),
        (2025, "sysdesign-2025.pdf", ["AJ", "AD"]),
        (2024, "sysdesign-2024.pdf", ["AJ", "AD"]),
        (2023, "sysdesign-2023.pdf", ["AJ", "AD"]),
        # 工学部第二部
        (2026, "nibu-2026.pdf", ["NE", "NM", "NC"]),
        (2025, "nibu-2025.pdf", ["NE", "NM", "NC"]),
        (2024, "nibu-2024.pdf", ["NE", "NM", "NC"]),
        (2023, "nibu-2023.pdf", ["NE", "NM", "NC"]),
    ]

    total = 0
    results = []

    for year, pdf_file, depts in configs:
        pdf_path = os.path.join(pdf_dir, pdf_file)
        if not os.path.exists(pdf_path):
            print(f"SKIP: {pdf_path} not found")
            continue

        print(f"\n{'='*50}")
        print(f"{year}年度 ({pdf_file})")
        print(f"{'='*50}")

        for dept in depts:
            pages = find_dept_pages(pdf_path, dept, year)
            if not pages:
                print(f"  {dept}: ページ未検出 (SKIP)")
                results.append((year, dept, 0, "SKIP"))
                continue

            records = extract_records(pdf_path, pages)

            out_file = os.path.join(out_dir, f"{dept.lower()}-{str(year)[2:]}.csv")
            count = write_csv(records, out_file)
            total += count

            print(f"  {dept}: p.{pages} -> {count}科目 -> {out_file}")
            results.append((year, dept, count, "OK"))

    print(f"\n{'='*50}")
    print(f"完了: {total}科目（{len([r for r in results if r[3] == 'OK'])}ファイル）")
    print(f"{'='*50}")

    # 失敗リスト
    skipped = [r for r in results if r[3] != "OK"]
    if skipped:
        print(f"\n未処理:")
        for year, dept, count, status in skipped:
            print(f"  {dept} {year}: {status}")


if __name__ == "__main__":
    main()
