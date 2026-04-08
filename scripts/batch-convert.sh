#!/bin/bash
# data/csv/ の全CSVをTypeScriptに一括変換
# 使い方: bash scripts/batch-convert.sh

set -e

COUNT=0
for csv_file in data/csv/*.csv; do
  # サンプルファイルはスキップ
  if [[ "$csv_file" == *"-sample"* ]] || [[ "$csv_file" == *"-auto"* ]]; then
    continue
  fi

  base=$(basename "$csv_file" .csv)
  ts_file="src/data/departments/${base}.ts"

  # 既にTSファイルがある場合はスキップ
  if [ -f "$ts_file" ]; then
    echo "skip: $base (TS exists)"
    continue
  fi

  echo "convert: $csv_file -> $ts_file"
  python3 scripts/csv-to-ts.py "$csv_file" --no-index
  COUNT=$((COUNT + 1))
done

echo ""
echo "=== 変換完了: ${COUNT}ファイル ==="

# index.tsを再生成
echo ""
echo "index.ts を再生成中..."
python3 scripts/generate-index.py

echo "done!"
