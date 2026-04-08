# sotsutan - 単位計算システム

## プロジェクト概要
東京電機大学の単位計算・進級/卒業判定Webアプリ。Vite + React + TypeScript + Tailwind CSS + shadcn/ui。

## 技術スタック
- フレームワーク: Vite + React (SPA)
- UI: Tailwind CSS v4 + shadcn/ui (base-ui)
- ルーティング: HashRouter (GitHub Pages対応)
- データ: ローカルストレージ (DB不要)
- デプロイ: GitHub Pages (GitHub Actions自動デプロイ)

## ディレクトリ構造
```
src/
  types/index.ts        - 型定義（Grade, SubjectDefinition, CourseRecord等）
  data/departments/     - 学科定義ファイル（★ここにデータを追加）
    index.ts            - 学科一覧のエクスポート
    ec-22.ts            - EC 2022年度
    ec-26.ts            - EC 2026年度（参照用テンプレート）
    eh-26.ts, es-26.ts, ek-26.ts, ef-26.ts, kmc-26.ts
  utils/
    gpa.ts              - GPA計算、進級/卒業判定ロジック
    csv.ts              - CSV/JSONインポート/エクスポート
    storage.ts          - ローカルストレージ管理
  hooks/useUserData.ts  - ユーザーデータ管理フック
  pages/                - 各ページコンポーネント
  components/           - 共通コンポーネント
```

## 学科データ追加手順

### 1. PDFから情報を読み取る

学生要覧PDFから以下を確認：
- **授業科目配当表**（科目名、単位、必選自、配当年、配当期、教職コード）
- **進級条件**（2年進級、4年進級の条件）
- **卒業/修了要件**（区分別必要単位数）
- **必修科目数**（4年進級の学科別要修得必修科目数の表）

### 2. データファイルを作成

`src/data/departments/` に新ファイルを作成。**ec-26.ts をテンプレートとしてコピー**して編集。

#### ファイル名規則
- 学部: `{学科コード小文字}-{入学年度下2桁}.ts` (例: `ec-26.ts`, `ej-26.ts`)
- 大学院: `{専攻コード小文字}-{入学年度下2桁}.ts` (例: `kmc-26.ts`)

#### DepartmentDefinition の構造
```typescript
export const ec26: DepartmentDefinition = {
  id: "ec-26",           // ファイル名と同じ
  departmentCode: "EC",  // 学科コード
  entranceYear: 2026,    // 入学年度
  name: "情報通信工学科", // 学科名
  faculty: "工学部",      // 学部名（"工学研究科"等で修士判定に使用）
  subjects: [...],
  promotionRequirements: [...],
  creditLimits: [...],
};
```

#### SubjectDefinition のフィールド
```typescript
{
  id: "EC26-001",              // {学科コード}{年度}-{連番}
  name: "微分積分学Ⅰ",         // 科目名
  credits: 2,                  // 単位数
  category: "工学基礎科目",     // 第一区分: "工学基礎科目" | "専門教育科目" | "共通教育科目"
  classification: "必修",      // "必修" | "選択" | "択一必修" | "自由"
  subcategory1: "数学",        // 第二区分
  subcategory2?: "基幹科目",   // 第三区分（任意）
  year: "1",                   // 配当年: "1", "2", "全", "1,2", "2,3,4" 等
  semester: "前期",            // "前期" | "後期" | "前期／後期" | "通年" | "年次継続"
  teachingCode?: "110代数",    // 教職コード（"コードなし"は省略）
  teachingRequired?: true,     // 教職必須科目
  notes?: "後期に再履修クラス", // 備考
}
```

#### semester の使い分け
| 値 | 意味 | 履修記録での動作 |
|---|---|---|
| `"前期"` / `"後期"` | 半期科目 | 1学期のみ |
| `"前期／後期"` | 前期でも後期でも履修可能 | 1学期のみ |
| `"通年"` | 1年間通して履修 | 前期+後期に按分展開 |
| `"年次継続"` | 複数年にまたがって履修 | 全配当年の全学期に按分展開 |

#### year の書き方
- `"1"` - 1年次配当
- `"全"` - 全学年
- `"1,2"` - 1年でも2年でも履修可能（**展開しない**、ただし semester="年次継続" の場合は展開）
- `"2,3,4"` - 2年以降の学年で履修可能
- `"34"` - 3,4年（カンマなしも可、ただし `"3,4"` 推奨）

#### promotionRequirements の構造
```typescript
promotionRequirements: [
  {
    label: "2年進級",
    targetYear: 2,
    items: [
      { label: "合計", requiredCredits: 24, filter: {} },
    ],
  },
  {
    label: "4年進級",
    targetYear: 4,
    items: [
      { label: "人間科学科目", requiredCredits: 10, filter: { subcategory1: "人間科学科目" } },
      { label: "英語科目", requiredCredits: 6, filter: { subcategory1: "英語科目" } },
      { label: "必修科目", requiredCredits: 17, countMode: "subjects", filter: { classification: "必修" } },
      { label: "合計", requiredCredits: 104, filter: {} },
    ],
  },
  {
    label: "卒業",
    targetYear: 4,
    items: [
      { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },
      { label: "技術者教養科目", requiredCredits: 2, filter: { subcategory2: "技術者教養" } },
      { label: "グローバル教養科目", requiredCredits: 2, filter: { subcategory2: "グローバル教養" } },
      { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },
      { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" } },
      { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },
      {
        label: "任意に選択し修得した科目",
        requiredCredits: 4,
        countMode: "overflow",
        overflowSources: [
          { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },
          { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },
          { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" } },
          { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },
        ],
        filter: {},
      },
      { label: "合計", requiredCredits: 124, filter: {} },
    ],
  },
],
```

#### countMode の種類
- `"credits"` (デフォルト) - 単位数で判定
- `"subjects"` - 科目数で判定
- `"overflow"` - 他区分の超過分を合算して判定

### 3. index.ts に登録

```typescript
import { newDept } from "./new-dept";
// departments配列に追加
export const departments: DepartmentDefinition[] = [..., newDept];
```

### 4. ビルド・デプロイ

```bash
# 文字化けチェック（必須）
grep -rn '��' src/

# ビルド
npm run build

# コミット・push（mainにpushで自動デプロイ）
git add src/data/departments/
git commit -m "feat: XX学科 YYYY年度データを追加"
git push origin main
```

## 共通教育科目について

工学部の共通教育科目（英語科目・人間科学科目）は全学科同じ内容。現在は各学科ファイルにコピーしている（要リファクタ）。新学科追加時は既存ファイル（ec-26.ts等）からコピーし、IDプレフィックスを変更する。

## 学部と大学院の判定

`faculty` フィールドに "研究科" が含まれると修士課程と判定される。
- 修士: タブが「先取り / 1年前期 / 1年後期 / 2年前期 / 2年後期」
- 学部: タブが「1年前期 ～ 4年後期」の8タブ

## ブランチ運用

学科データ追加は**ブランチを切って作業し、PRでマージ**する。

```bash
# ブランチ作成
git checkout -b add/{学科コード小文字}-{年度下2桁}
# 例: git checkout -b add/ej-26

# 作業・コミット後
git push origin add/ej-26

# PRを作成
gh pr create --title "feat: EJ(電気電子工学科) 2026年度データを追加" --body "..."
```

### ブランチ名規則
- 学科データ追加: `add/{学科コード}-{年度}`（例: `add/ej-26`, `add/ec-25`）
- 機能追加: `feat/{機能名}`
- バグ修正: `fix/{内容}`

### 並行作業時の注意
- 学科データファイルは学科ごとに独立しているため、**異なる学科のブランチは競合しない**
- `index.ts` の変更だけ競合する可能性がある → PRマージ後にリベースで解決
- 共通教育科目のリファクタ中は学科追加ブランチとの競合に注意

## 注意事項

- **文字化け**: Editツールで日本語を編集すると稀に文字化けが発生する。ビルド前に `grep -rn '��' src/` で必ず確認する。
- **コミット**: Co-Authored-Byの署名は付けない。
- **言語**: 全て日本語で対応（コメント、コミットメッセージ含む）。
