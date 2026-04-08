#!/usr/bin/env python3
"""
src/data/departments/ の全TSファイルからindex.tsを自動生成。
"""

import glob
import os
import re

DEPT_DIR = "src/data/departments"

def main():
    ts_files = sorted(glob.glob(os.path.join(DEPT_DIR, "*.ts")))
    ts_files = [f for f in ts_files if not f.endswith("index.ts")]

    imports = []
    var_names = []

    for f in ts_files:
        stem = os.path.basename(f).replace(".ts", "")
        # ファイルからexport名を抽出
        with open(f, encoding="utf-8") as fh:
            content = fh.read()
        m = re.search(r"export const (\w+):", content)
        if m:
            var_name = m.group(1)
        else:
            # フォールバック: ファイル名から推定
            var_name = stem.replace("-", "")
        imports.append(f'import {{ {var_name} }} from "./{stem}";')
        var_names.append(var_name)

    lines = [
        'import type { DepartmentDefinition } from "@/types";',
        *imports,
        "",
        "/** 利用可能な学科一覧 */",
        f"export const departments: DepartmentDefinition[] = [{', '.join(var_names)}];",
        "",
        "export const getDepartment = (id: string): DepartmentDefinition | undefined =>",
        '  departments.find((d) => d.id === id);',
        "",
    ]

    index_path = os.path.join(DEPT_DIR, "index.ts")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"index.ts: {len(var_names)} departments")


if __name__ == "__main__":
    main()
