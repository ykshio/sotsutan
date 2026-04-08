#!/usr/bin/env python3
"""
共通教育科目（人間科学・英語）をPDFから抽出し、既存TSファイルに追加するスクリプト。

使い方:
  python3 scripts/add-common-subjects.py

各学部のPDFから共通教育科目を1回抽出し、同学部の全学科TSファイルに追加する。
既に共通教育科目が含まれているファイルはスキップ。
"""

import csv
import glob
import os
import re
import sys

import pdfplumber


def clean(text):
    if text is None:
        return ""
    return text.replace("\n", "").strip()


SEMESTER_MAP = {
    "半期（前）": "前期", "半期(前)": "前期", "半期（前": "前期",
    "半期（後）": "後期", "半期(後)": "後期", "半期（後": "後期",
    "半期（前/後）": "前期／後期", "半期(前/後)": "前期／後期",
    "半期（前／後）": "前期／後期", "半期(前／後)": "前期／後期",
    "前期／後期": "前期／後期", "前期/後期": "前期／後期",
    "通年": "通年", "年次継続": "年次継続",
}

CLASSIFICATION_MAP = {"必": "必修", "選": "選択", "択": "択一必修", "自": "自由"}


def normalize_semester(raw):
    c = clean(raw)
    for key, val in SEMESTER_MAP.items():
        if c == key:
            return val
    if "前" in c and "後" in c:
        return "前期／後期"
    if "通年" in c:
        return "通年"
    if "前" in c:
        return "前期"
    if "後" in c:
        return "後期"
    return c


def forward_fill(rows, cols):
    last = {}
    for row in rows:
        for idx in cols:
            if idx < len(row):
                if row[idx] and clean(row[idx]):
                    last[idx] = row[idx]
                elif idx in last:
                    row[idx] = last[idx]
    return rows


def find_common_pages(pdf_path, keyword):
    """人間科学 or 英語の配当表ページを検出"""
    pages = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if not text:
                continue
            if "授業科目配当表" in text and keyword in text:
                pages.append(i)
    return pages


def extract_common(pdf_path, pages):
    """共通教育科目の配当表からレコードを抽出"""
    all_rows = []
    with pdfplumber.open(pdf_path) as pdf:
        for pn in pages:
            if pn >= len(pdf.pages):
                continue
            for table in pdf.pages[pn].extract_tables():
                if table:
                    all_rows.extend(table)

    # ヘッダー検出
    header_idx = None
    for i, row in enumerate(all_rows):
        if any("科目名" in clean(c) for c in row if c):
            header_idx = i
            break

    if header_idx is None:
        return []

    # カラム検出
    header = all_rows[header_idx]
    name_col = None
    for j, h in enumerate(header):
        if h and "科目名" in clean(h):
            name_col = j
            break

    if name_col is None:
        return []

    cat_cols = list(range(name_col))
    data_rows = all_rows[header_idx + 1:]
    data_rows = forward_fill(data_rows, cat_cols)

    records = []
    for row in data_rows:
        if len(row) <= name_col:
            continue
        name = clean(row[name_col])
        if not name:
            continue

        # 単位数カラムを探す（科目名の次の次あたり）
        credits_col = name_col + 2 if len(row) > name_col + 2 else name_col + 1
        credits_raw = clean(row[credits_col]) if credits_col < len(row) else ""
        try:
            credits = float(credits_raw)
        except (ValueError, TypeError):
            continue

        sub1 = clean(row[cat_cols[-1]]) if cat_cols else ""
        sub2 = clean(row[cat_cols[-2]]) if len(cat_cols) > 1 else ""

        cls_col = credits_col + 1
        classification = CLASSIFICATION_MAP.get(clean(row[cls_col]) if cls_col < len(row) else "", "選択")

        year_col = cls_col + 1
        year_val = clean(row[year_col]) if year_col < len(row) else ""

        sem_col = year_col + 1
        semester = normalize_semester(row[sem_col]) if sem_col < len(row) else ""

        notes_col = sem_col + 2  # 授業形態を飛ばす
        notes = clean(row[notes_col]) if notes_col < len(row) else ""

        teaching_col = notes_col + 1
        teaching = clean(row[teaching_col]) if teaching_col < len(row) else ""
        if teaching == "コードなし":
            teaching = ""

        records.append({
            "name": name, "credits": credits,
            "subcategory1": sub1, "subcategory2": sub2,
            "classification": classification,
            "year": year_val, "semester": semester,
            "teachingCode": teaching, "notes": notes,
        })

    return records


def generate_ts_entries(records, dept_code, year, start_id):
    """レコードからTS科目エントリを生成"""
    lines = []
    id_prefix = f"{dept_code}{str(year)[2:]}"
    for i, r in enumerate(records):
        sid = f"{id_prefix}-C{i+1:03d}"
        parts = [
            f'id: "{sid}"',
            f'name: "{r["name"]}"',
            f'credits: {int(r["credits"]) if r["credits"] == int(r["credits"]) else r["credits"]}',
            f'category: "共通教育科目"',
            f'classification: "{r["classification"]}"',
            f'subcategory1: "{r["subcategory1"]}"',
        ]
        if r["subcategory2"]:
            parts.append(f'subcategory2: "{r["subcategory2"]}"')
        parts.append(f'year: "{r["year"]}"')
        parts.append(f'semester: "{r["semester"]}"')
        if r["teachingCode"]:
            parts.append(f'teachingCode: "{r["teachingCode"]}"')
        if r["notes"]:
            parts.append(f'notes: "{r["notes"]}"')

        lines.append(f'    {{ {", ".join(parts)} }},')
    return lines


def add_to_ts_file(ts_path, entries_lines):
    """TSファイルの subjects 配列の末尾に共通教育科目を追加"""
    with open(ts_path, encoding="utf-8") as f:
        content = f.read()

    # 既に共通教育科目があるかチェック
    if '共通教育科目' in content:
        return False

    # subjects配列の閉じ括弧 "],\n" の直前に挿入
    marker = "  ],\n  promotionRequirements:"
    if marker not in content:
        # フォールバック
        marker = "  ],\n  creditLimits:"

    if marker not in content:
        print(f"  WARN: マーカーが見つからない: {ts_path}", file=sys.stderr)
        return False

    insert = "\n    // ========================================\n"
    insert += "    // 共通教育科目\n"
    insert += "    // ========================================\n"
    insert += "\n".join(entries_lines) + "\n"

    content = content.replace(marker, insert + marker)

    with open(ts_path, "w", encoding="utf-8") as f:
        f.write(content)
    return True


def main():
    # 学部ごとのPDFと共通教育科目ページの設定
    configs = [
        {
            "name": "工学部",
            "pdfs": {
                2026: "/tmp/youran/kougaku-2026.pdf",
                2025: "/tmp/youran/kougaku-2025.pdf",
                2024: "/tmp/youran/kougaku-2024.pdf",
                2023: "/tmp/youran/kougaku-2023.pdf",
                2022: "/tmp/youran/kougaku-2022.pdf",
            },
            "depts": ["EJ", "EH", "ES", "EK", "EF", "EC"],
        },
        {
            "name": "未来科学部",
            "pdfs": {
                2026: "/tmp/youran/mirai-2026.pdf",
                2025: "/tmp/youran/mirai-2025.pdf",
                2024: "/tmp/youran/mirai-2024.pdf",
                2023: "/tmp/youran/mirai-2023.pdf",
            },
            "depts": ["FA", "FI", "FR"],
        },
        {
            "name": "システムデザイン工学部",
            "pdfs": {
                2026: "/tmp/youran/sysdesign-2026.pdf",
                2025: "/tmp/youran/sysdesign-2025.pdf",
                2024: "/tmp/youran/sysdesign-2024.pdf",
                2023: "/tmp/youran/sysdesign-2023.pdf",
            },
            "depts": ["AJ", "AD"],
        },
        {
            "name": "工学部第二部",
            "pdfs": {
                2026: "/tmp/youran/nibu-2026.pdf",
                2025: "/tmp/youran/nibu-2025.pdf",
                2024: "/tmp/youran/nibu-2024.pdf",
            },
            "depts": ["NE", "NM", "NC"],
        },
    ]

    total_added = 0

    for config in configs:
        print(f"\n=== {config['name']} ===")

        for year, pdf_path in sorted(config["pdfs"].items(), reverse=True):
            if not os.path.exists(pdf_path):
                continue

            # 人間科学と英語の配当表ページを検出
            jinbun_pages = find_common_pages(pdf_path, "人間科学")
            eigo_pages = find_common_pages(pdf_path, "英語")

            all_pages = sorted(set(jinbun_pages + eigo_pages))
            if not all_pages:
                print(f"  {year}: 共通教育科目ページ未検出")
                continue

            records = extract_common(pdf_path, all_pages)
            print(f"  {year}: {len(records)}科目抽出 (pages: {all_pages})")

            if not records:
                continue

            # 各学科のTSファイルに追加
            for dept in config["depts"]:
                ts_file = f"src/data/departments/{dept.lower()}-{str(year)[2:]}.ts"
                if not os.path.exists(ts_file):
                    continue

                entries = generate_ts_entries(records, dept, year, 0)
                if add_to_ts_file(ts_file, entries):
                    print(f"    + {dept}-{year}: {len(records)}科目追加")
                    total_added += 1
                else:
                    print(f"    skip {dept}-{year}: 既に含有 or エラー")

    print(f"\n=== 完了: {total_added}ファイルに追加 ===")


if __name__ == "__main__":
    main()
