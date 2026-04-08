#!/usr/bin/env python3
"""
CSVから学科定義TypeScriptファイルを自動生成するスクリプト。

使い方:
  python3 scripts/csv-to-ts.py data/csv/ec-26.csv --dept EC --year 2026 --name 情報通信工学科 --faculty 工学部
  python3 scripts/csv-to-ts.py data/csv/ec-26.csv  # 引数はファイル名から推定

出力: src/data/departments/{dept小文字}-{年度下2桁}.ts
"""

import argparse
import csv
import json
import os
import re
import sys

# 学科コード→学科名マッピング
DEPT_NAMES = {
    "EJ": "電気電子工学科", "EH": "電子システム工学科",
    "ES": "応用化学科", "EK": "機械工学科",
    "EF": "先端機械工学科", "EC": "情報通信工学科",
    "FI": "情報メディア学科", "FR": "ロボット・メカトロニクス学科",
    "FA": "建築学科", "AJ": "情報システム工学科",
    "AD": "デザイン工学科", "NE": "電気電子工学科",
    "NM": "機械工学科", "NC": "情報通信工学科",
    "KMC": "情報通信工学専攻（修士）", "KMJ": "電気電子工学専攻（修士）",
}

DEPT_FACULTY = {
    "EJ": "工学部", "EH": "工学部", "ES": "工学部",
    "EK": "工学部", "EF": "工学部", "EC": "工学部",
    "FI": "未来科学部", "FR": "未来科学部", "FA": "未来科学部",
    "AJ": "システムデザイン工学部", "AD": "システムデザイン工学部",
    "NE": "工学部第二部", "NM": "工学部第二部", "NC": "工学部第二部",
    "KMC": "工学研究科", "KMJ": "工学研究科",
}

# 4年進級の必修科目数（学科別）- 2026年度ベース、他年度は要確認
REQUIRED_SUBJECTS = {
    "EJ": 19, "EH": 20, "ES": 27, "EK": 20, "EF": 23, "EC": 17,
}

def infer_from_filename(filename):
    """ファイル名からdeptとyearを推定"""
    base = os.path.basename(filename).replace(".csv", "")
    m = re.match(r"([a-z]+)-(\d{2})", base)
    if m:
        return m.group(1).upper(), 2000 + int(m.group(2))
    return None, None


def escape_ts(s):
    """TypeScript文字列用エスケープ"""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def generate_ts(csv_path, dept_code, year, name, faculty):
    """CSVからTypeScriptファイルの内容を生成"""
    records = []
    with open(csv_path, encoding="utf-8") as f:
        for row in csv.DictReader(f):
            records.append(row)

    var_name = f"{dept_code.lower()}{str(year)[2:]}"
    id_prefix = f"{dept_code}{str(year)[2:]}"

    lines = []
    lines.append('import type { DepartmentDefinition } from "@/types";')
    lines.append("")
    lines.append(f"/**")
    lines.append(f" * {faculty} {name}（{year}年度入学）")
    lines.append(f" * 自動生成: scripts/csv-to-ts.py")
    lines.append(f" */")
    lines.append(f"export const {var_name}: DepartmentDefinition = {{")
    lines.append(f'  id: "{dept_code.lower()}-{str(year)[2:]}",')
    lines.append(f'  departmentCode: "{dept_code}",')
    lines.append(f"  entranceYear: {year},")
    lines.append(f'  name: "{name}",')
    lines.append(f'  faculty: "{faculty}",')
    lines.append(f"  subjects: [")

    current_cat = ""
    for i, r in enumerate(records):
        cat = r.get("区分", "")
        sub1 = r.get("第二区分", "")
        sub2 = r.get("第三区分", "")
        cat_key = f"{cat}/{sub1}"

        if cat_key != current_cat:
            if current_cat:
                lines.append("")
            current_cat = cat_key

        sid = f"{id_prefix}-{i+1:03d}"
        name_val = escape_ts(r["科目名"])
        credits = float(r["単位数"])
        # 整数の場合は小数点なし
        credits_str = str(int(credits)) if credits == int(credits) else str(credits)
        classification = r.get("必選自", "選択")
        year_val = r.get("配当年", "")
        semester = r.get("配当期", "")
        teaching = r.get("教職コード", "")
        notes = r.get("備考", "")
        jabee_cat = r.get("JABEE目標", "")
        jabee_power = r.get("JABEE電力", "")
        jabee_system = r.get("JABEEシステム", "")
        jabee_device = r.get("JABEEデバイス", "")

        parts = [
            f'id: "{sid}"',
            f'name: "{name_val}"',
            f"credits: {credits_str}",
            f'category: "{cat}"',
            f'classification: "{classification}"',
            f'subcategory1: "{sub1}"',
        ]
        if sub2:
            parts.append(f'subcategory2: "{escape_ts(sub2)}"')
        parts.append(f'year: "{year_val}"')
        parts.append(f'semester: "{semester}"')
        if teaching:
            parts.append(f'teachingCode: "{escape_ts(teaching)}"')
        if jabee_cat:
            parts.append(f'jabeeCategory: "{jabee_cat}"')
        if jabee_power or jabee_system or jabee_device:
            fields = []
            if jabee_power:
                fields.append(f'power: "{jabee_power}"')
            if jabee_system:
                fields.append(f'system: "{jabee_system}"')
            if jabee_device:
                fields.append(f'device: "{jabee_device}"')
            parts.append(f'jabeeFields: {{ {", ".join(fields)} }}')
        if notes:
            parts.append(f'notes: "{escape_ts(notes)}"')

        line = "    { " + ", ".join(parts) + " },"
        lines.append(line)

    lines.append("  ],")

    # 進級・卒業要件（デフォルトテンプレート）
    req_subj = REQUIRED_SUBJECTS.get(dept_code, 17)
    lines.append("  promotionRequirements: [")
    lines.append("    {")
    lines.append('      label: "2年進級",')
    lines.append("      targetYear: 2,")
    lines.append("      items: [")
    lines.append('        { label: "合計", requiredCredits: 24, filter: {} },')
    lines.append("      ],")
    lines.append("    },")
    lines.append("    {")
    lines.append('      label: "4年進級",')
    lines.append("      targetYear: 4,")
    lines.append("      items: [")
    lines.append(f'        {{ label: "人間科学科目", requiredCredits: 10, filter: {{ subcategory1: "人間科学科目" }} }},')
    lines.append(f'        {{ label: "英語科目", requiredCredits: 6, filter: {{ subcategory1: "英語科目" }} }},')
    lines.append(f'        {{ label: "必修科目", requiredCredits: {req_subj}, countMode: "subjects" as const, filter: {{ classification: "必修" }} }},')
    lines.append(f'        {{ label: "合計", requiredCredits: 104, filter: {{}} }},')
    lines.append("      ],")
    lines.append("    },")
    lines.append("    {")
    lines.append('      label: "卒業",')
    lines.append("      targetYear: 4,")
    lines.append("      items: [")
    lines.append('        { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },')
    lines.append('        { label: "技術者教養科目", requiredCredits: 2, filter: { subcategory2: "技術者教養" } },')
    lines.append('        { label: "グローバル教養科目", requiredCredits: 2, filter: { subcategory2: "グローバル教養" } },')
    lines.append('        { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },')
    lines.append('        { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" } },')
    lines.append('        { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },')
    lines.append("        {")
    lines.append('          label: "任意に選択し修得した科目",')
    lines.append("          requiredCredits: 4,")
    lines.append('          countMode: "overflow" as const,')
    lines.append("          overflowSources: [")
    lines.append('            { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },')
    lines.append('            { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },')
    lines.append('            { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" as const } },')
    lines.append('            { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },')
    lines.append("          ],")
    lines.append("          filter: {},")
    lines.append("        },")
    lines.append('        { label: "合計", requiredCredits: 124, filter: {} },')
    lines.append("      ],")
    lines.append("    },")
    lines.append("  ],")
    lines.append('  creditLimits: [{ label: "通常", maxCredits: 24 }],')
    lines.append("};")
    lines.append("")

    return "\n".join(lines), var_name


def update_index(ts_dir, var_name, file_stem):
    """index.tsにimportとdepartments配列への追加"""
    index_path = os.path.join(ts_dir, "index.ts")
    with open(index_path, encoding="utf-8") as f:
        content = f.read()

    import_line = f'import {{ {var_name} }} from "./{file_stem}";'
    if import_line in content:
        return False

    # import行の最後に追加
    last_import = content.rfind("import ")
    end_of_last_import = content.index("\n", last_import) + 1
    content = content[:end_of_last_import] + import_line + "\n" + content[end_of_last_import:]

    # departments配列に追加
    content = content.replace(
        "export const departments: DepartmentDefinition[] = [",
        f"export const departments: DepartmentDefinition[] = [{var_name}, ",
    )

    # 重複防止: 既に入っている場合はスキップ
    if f"{var_name}, {var_name}" in content:
        content = content.replace(f"{var_name}, {var_name}", var_name)

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(content)

    return True


def main():
    parser = argparse.ArgumentParser(description="CSV → TypeScript学科定義ファイル")
    parser.add_argument("csv_path", help="入力CSVファイル")
    parser.add_argument("--dept", help="学科コード（省略時はファイル名から推定）")
    parser.add_argument("--year", type=int, help="入学年度（省略時はファイル名から推定）")
    parser.add_argument("--name", help="学科名")
    parser.add_argument("--faculty", help="学部名")
    parser.add_argument("--no-index", action="store_true", help="index.tsを更新しない")
    args = parser.parse_args()

    dept, year = args.dept, args.year
    if not dept or not year:
        d, y = infer_from_filename(args.csv_path)
        dept = dept or d
        year = year or y

    if not dept or not year:
        print("Error: --dept と --year を指定するか、ファイル名を {dept}-{yy}.csv にしてください", file=sys.stderr)
        sys.exit(1)

    name = args.name or DEPT_NAMES.get(dept, dept)
    faculty = args.faculty or DEPT_FACULTY.get(dept, "工学部")

    ts_content, var_name = generate_ts(args.csv_path, dept, year, name, faculty)
    file_stem = f"{dept.lower()}-{str(year)[2:]}"
    out_path = f"src/data/departments/{file_stem}.ts"

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"{out_path} ({len(ts_content)} bytes)")

    if not args.no_index:
        updated = update_index("src/data/departments", var_name, file_stem)
        if updated:
            print(f"index.ts に {var_name} を追加")
        else:
            print(f"index.ts に {var_name} は既に登録済み")


if __name__ == "__main__":
    main()
