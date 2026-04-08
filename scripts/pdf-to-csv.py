#!/usr/bin/env python3
"""
PDFの授業科目配当表からCSVを自動生成するスクリプト。

使い方:
  python3 scripts/pdf-to-csv.py /tmp/kougaku2026.pdf 93 94 -o data/csv/ec-26.csv
  python3 scripts/pdf-to-csv.py /tmp/kougaku2023.pdf 57 58 -o data/csv/eh-23.csv

引数:
  pdf_path: PDFファイルパス
  pages: 配当表のページ番号（0-indexed、スペース区切りで複数指定可）
  --out/-o: 出力CSVファイルパス（省略時は標準出力）
"""

import argparse
import csv
import sys

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
    "半期（前）": "前期", "半期(前)": "前期",
    "半期（後）": "後期", "半期(後)": "後期",
    "半期（前/後）": "前期／後期", "半期(前/後)": "前期／後期",
    "半期（前／後）": "前期／後期", "半期(前／後)": "前期／後期",
    "通年": "通年", "年次継続": "年次継続",
}


def normalize_category(raw):
    c = clean(raw)
    for key, val in CATEGORY_KEYWORDS.items():
        if key in c:
            return val
    return c


def normalize_classification(raw):
    c = clean(raw)
    return CLASSIFICATION_MAP.get(c, c)


def normalize_semester(raw):
    c = clean(raw)
    for key, val in SEMESTER_MAP.items():
        if c == key:
            return val
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


def extract(pdf_path, page_numbers):
    all_rows = []

    with pdfplumber.open(pdf_path) as pdf:
        for pn in page_numbers:
            if pn >= len(pdf.pages):
                print(f"Warning: p.{pn} not found (total {len(pdf.pages)})", file=sys.stderr)
                continue
            for table in pdf.pages[pn].extract_tables():
                if not table:
                    continue
                for row in table:
                    all_rows.append(row)

    # ヘッダー検出: 「科目名」を含む行
    header_idx = None
    for i, row in enumerate(all_rows):
        if any("科目名" in clean(c) for c in row if c):
            header_idx = i
            break

    if header_idx is None:
        print("Error: ヘッダー行が見つかりません", file=sys.stderr)
        sys.exit(1)

    data_rows = all_rows[header_idx + 1:]

    # 結合セル（区分）をforward-fill: col 0,1,2
    data_rows = forward_fill(data_rows, [0, 1, 2])

    return data_rows


def to_csv(rows, output):
    csv_header = [
        "科目名", "単位数", "区分", "第二区分", "第三区分",
        "必選自", "配当年", "配当期", "教職コード", "備考",
        "JABEE目標", "JABEE電力", "JABEEシステム", "JABEEデバイス",
    ]
    writer = csv.writer(output)
    writer.writerow(csv_header)

    count = 0
    for row in rows:
        if len(row) < 8:
            continue

        name = clean(row[3]) if len(row) > 3 else ""
        if not name:
            continue

        credits_raw = clean(row[5]) if len(row) > 5 else ""
        try:
            credits = float(credits_raw)
        except (ValueError, TypeError):
            continue

        category = normalize_category(row[0])
        sub1 = clean(row[1])
        sub2 = clean(row[2])
        classification = normalize_classification(row[6]) if len(row) > 6 else ""
        year = clean(row[7]) if len(row) > 7 else ""
        semester = normalize_semester(row[8]) if len(row) > 8 else ""
        notes = clean(row[10]) if len(row) > 10 else ""
        teaching = clean(row[11]) if len(row) > 11 else ""
        if teaching == "コードなし":
            teaching = ""

        writer.writerow([
            name, credits, category, sub1, sub2,
            classification, year, semester, teaching, notes,
            "", "", "", "",
        ])
        count += 1

    print(f"{count} 科目を出力", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(description="PDF配当表 → CSV")
    parser.add_argument("pdf_path")
    parser.add_argument("pages", nargs="+", type=int, help="ページ番号(0-indexed)")
    parser.add_argument("--out", "-o", help="出力ファイル")
    args = parser.parse_args()

    rows = extract(args.pdf_path, args.pages)

    if args.out:
        with open(args.out, "w", newline="", encoding="utf-8") as f:
            to_csv(rows, f)
        print(f"保存: {args.out}", file=sys.stderr)
    else:
        to_csv(rows, sys.stdout)


if __name__ == "__main__":
    main()
