#!/bin/bash
# 学生要覧PDFをダウンロード

BASE="https://www.dendai.ac.jp/about/campuslife/youran/e5vdec00000016ql-att"
DIR="/tmp/youran"
mkdir -p "$DIR"

download() {
  local name="$1" remote="$2"
  local dest="$DIR/$name"
  if [ -f "$dest" ]; then
    echo "skip: $name"
  else
    echo "download: $name ..."
    curl -sL "$BASE/$remote" -o "$dest"
    echo "  -> $(du -h "$dest" | cut -f1)"
  fi
}

# 工学部
download "kougaku-2026.pdf" "1kougaku2026_rev1.pdf"
download "kougaku-2025.pdf" "1kougakubu2025_r2.pdf"
download "kougaku-2024.pdf" "1kougakubu2024_r3.pdf"
download "kougaku-2023.pdf" "1kogakubu2023_r3.pdf"
download "kougaku-2022.pdf" "1kogakubu2022web_r3.pdf"

# 未来科学部
download "mirai-2026.pdf" "3miraikagakubu2026.pdf"
download "mirai-2025.pdf" "3miraikagakubu2025_r1.pdf"
download "mirai-2024.pdf" "3miraikagakubu2024_r1.pdf"
download "mirai-2023.pdf" "3miraikagakubu2023_r3.pdf"
download "mirai-2022.pdf" "3miraikagakubu2022web_r1.pdf"

# システムデザイン工学部
download "sysdesign-2026.pdf" "4systemdesign2026.pdf"
download "sysdesign-2025.pdf" "4systemdesignkougakubu2025_r1.pdf"
download "sysdesign-2024.pdf" "4systemdesignkougakubu2024.pdf"
download "sysdesign-2023.pdf" "4systemdesignkogakubu2023_r2.pdf"
download "sysdesign-2022.pdf" "4systemdesignkougakubu2022web_r1.pdf"

echo ""
echo "=== 完了 ==="
ls -lh "$DIR/"
