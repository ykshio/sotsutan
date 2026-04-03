import type { DepartmentDefinition } from "@/types";

/**
 * サンプル学科定義（電子情報工学科ベース）
 * Issue #1 の Excel を参考に作成。実際のデータはJSONインポートで差し替え可能。
 */
export const sampleDepartment: DepartmentDefinition = {
  id: "sample-ec",
  name: "情報通信工学科（サンプル）",
  faculty: "工学部",
  subjects: [
    // === 1年前期 ===
    { id: "EC101", name: "微分積分学I", credits: 2, category: "工学基礎", classification: "必修", year: 1, semester: "前期" },
    { id: "EC102", name: "線形代数学I", credits: 2, category: "工学基礎", classification: "必修", year: 1, semester: "前期" },
    { id: "EC103", name: "物理学I", credits: 2, category: "工学基礎", classification: "必修", year: 1, semester: "前期" },
    { id: "EC104", name: "情報リテラシー", credits: 2, category: "専門", classification: "必修", year: 1, semester: "前期" },
    { id: "EC105", name: "プログラミング基礎", credits: 2, category: "専門", classification: "必修", year: 1, semester: "前期" },
    { id: "EC106", name: "英語I", credits: 1, category: "英語", classification: "必修", year: 1, semester: "前期" },
    { id: "EC107", name: "技術者倫理", credits: 2, category: "人間科学", classification: "必修", year: 1, semester: "前期", subcategory: "技術者教養" },
    { id: "EC108", name: "心理学", credits: 2, category: "人間科学", classification: "選択", year: 1, semester: "前期", subcategory: "グローバル教養" },
    // === 1年後期 ===
    { id: "EC201", name: "微分積分学II", credits: 2, category: "工学基礎", classification: "必修", year: 1, semester: "後期" },
    { id: "EC202", name: "線形代数学II", credits: 2, category: "工学基礎", classification: "必修", year: 1, semester: "後期" },
    { id: "EC203", name: "物理学II", credits: 2, category: "工学基礎", classification: "必修", year: 1, semester: "後期" },
    { id: "EC204", name: "プログラミング演習", credits: 2, category: "専門", classification: "必修", year: 1, semester: "後期" },
    { id: "EC205", name: "電気回路I", credits: 2, category: "専門", classification: "必修", year: 1, semester: "後期" },
    { id: "EC206", name: "英語II", credits: 1, category: "英語", classification: "必修", year: 1, semester: "後期" },
    { id: "EC207", name: "社会学", credits: 2, category: "人間科学", classification: "選択", year: 1, semester: "後期", subcategory: "グローバル教養" },
    // === 2年前期 ===
    { id: "EC301", name: "確率統計", credits: 2, category: "工学基礎", classification: "必修", year: 2, semester: "前期" },
    { id: "EC302", name: "データ構造とアルゴリズム", credits: 2, category: "専門", classification: "必修", year: 2, semester: "前期" },
    { id: "EC303", name: "電気回路II", credits: 2, category: "専門", classification: "必修", year: 2, semester: "前期" },
    { id: "EC304", name: "論理回路", credits: 2, category: "専門", classification: "必修", year: 2, semester: "前期" },
    { id: "EC305", name: "英語III", credits: 1, category: "英語", classification: "必修", year: 2, semester: "前期" },
    { id: "EC306", name: "経済学", credits: 2, category: "人間科学", classification: "選択", year: 2, semester: "前期", subcategory: "グローバル教養" },
    // === 2年後期 ===
    { id: "EC401", name: "オブジェクト指向プログラミング", credits: 2, category: "専門", classification: "必修", year: 2, semester: "後期" },
    { id: "EC402", name: "コンピュータアーキテクチャ", credits: 2, category: "専門", classification: "必修", year: 2, semester: "後期" },
    { id: "EC403", name: "信号処理", credits: 2, category: "専門", classification: "選択", year: 2, semester: "後期" },
    { id: "EC404", name: "英語IV", credits: 1, category: "英語", classification: "必修", year: 2, semester: "後期" },
    // === 3年前期 ===
    { id: "EC501", name: "オペレーティングシステム", credits: 2, category: "専門", classification: "必修", year: 3, semester: "前期" },
    { id: "EC502", name: "データベース", credits: 2, category: "専門", classification: "選択", year: 3, semester: "前期" },
    { id: "EC503", name: "ネットワーク工学", credits: 2, category: "専門", classification: "選択", year: 3, semester: "前期" },
    { id: "EC504", name: "ソフトウェア工学", credits: 2, category: "専門", classification: "選択", year: 3, semester: "前期" },
    // === 3年後期 ===
    { id: "EC601", name: "人工知能", credits: 2, category: "専門", classification: "選択", year: 3, semester: "後期" },
    { id: "EC602", name: "情報セキュリティ", credits: 2, category: "専門", classification: "選択", year: 3, semester: "後期" },
    { id: "EC603", name: "実験III", credits: 2, category: "専門", classification: "必修", year: 3, semester: "後期" },
    // === 4年 ===
    { id: "EC701", name: "卒業研究", credits: 6, category: "専門", classification: "必修", year: 4, semester: "前期" },
  ],
  promotionRequirements: [
    {
      label: "2年進級",
      targetYear: 2,
      items: [
        { label: "総修得単位", requiredCredits: 30, filter: {} },
        { label: "必修科目", requiredCredits: 20, filter: { classification: "必修" } },
      ],
    },
    {
      label: "3年進級",
      targetYear: 3,
      items: [
        { label: "総修得単位", requiredCredits: 60, filter: {} },
        { label: "必修科目", requiredCredits: 40, filter: { classification: "必修" } },
      ],
    },
    {
      label: "卒業",
      targetYear: 4,
      items: [
        { label: "総修得単位", requiredCredits: 124, filter: {} },
        { label: "人間科学科目", requiredCredits: 12, filter: { category: "人間科学" } },
        { label: "英語科目", requiredCredits: 4, filter: { category: "英語" } },
        { label: "工学基礎科目", requiredCredits: 14, filter: { category: "工学基礎" } },
        { label: "専門科目", requiredCredits: 76, filter: { category: "専門" } },
        { label: "必修科目", requiredCredits: 60, filter: { classification: "必修" } },
      ],
    },
  ],
  creditLimits: [
    {
      label: "通常",
      maxCredits: 24,
    },
    {
      label: "GPA優秀者",
      maxCredits: 28,
      exceptionCondition: "前学期GPA 3.0以上",
      exceptionMaxCredits: 28,
    },
  ],
};
