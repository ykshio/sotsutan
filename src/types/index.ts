/** 評定 */
export type Grade = "S" | "A" | "B" | "C" | "D" | "F" | "";

/** 評定のGPポイント */
export const GRADE_POINTS: Record<Grade, number | null> = {
  S: 4,
  A: 3,
  B: 2,
  C: 1,
  D: 0,
  F: 0,
  "": null, // 未入力
};

/** 評定が単位修得とみなされるか */
export const isPassingGrade = (grade: Grade): boolean =>
  grade === "S" || grade === "A" || grade === "B" || grade === "C";

/** 科目区分 */
export type SubjectCategory =
  | "人間科学"
  | "英語"
  | "工学基礎"
  | "専門"
  | "教職"
  | "その他";

/** 科目分類 */
export type SubjectClassification = "必修" | "選択" | "自由";

/** 科目定義（学科の配当表に基づく） */
export interface SubjectDefinition {
  id: string;
  name: string;
  credits: number;
  category: SubjectCategory;
  classification: SubjectClassification;
  year: number; // 配当年次
  semester: Semester;
  subcategory?: string; // 技術者教養、グローバル教養など
}

/** 学期 */
export type Semester = "前期" | "後期";

/** 学期を特定するキー */
export interface SemesterKey {
  year: number; // 学年（1〜4）
  semester: Semester;
}

/** 履修記録（ユーザーが入力） */
export interface CourseRecord {
  subjectId: string;
  subjectName: string;
  credits: number;
  category: SubjectCategory;
  classification: SubjectClassification;
  grade: Grade;
  year: number;
  semester: Semester;
}

/** 学期ごとの履修データ */
export interface SemesterData {
  key: SemesterKey;
  courses: CourseRecord[];
}

/** 進級・卒業要件の1項目 */
export interface RequirementItem {
  label: string;
  requiredCredits: number;
  /** どの科目がこの要件にカウントされるかのフィルタ */
  filter: {
    category?: SubjectCategory;
    classification?: SubjectClassification;
    subcategory?: string;
  };
}

/** 進級・卒業判定の定義 */
export interface PromotionRequirement {
  label: string; // 例: "2年進級", "卒業"
  targetYear: number;
  items: RequirementItem[];
}

/** 履修上限の定義 */
export interface CreditLimit {
  label: string;
  maxCredits: number;
  /** 上限超過が許可される条件（例: 前学期のGPAが一定以上） */
  exceptionCondition?: string;
  exceptionMaxCredits?: number;
}

/** 学科定義 */
export interface DepartmentDefinition {
  id: string;
  name: string;
  faculty: string; // 学部名
  subjects: SubjectDefinition[];
  promotionRequirements: PromotionRequirement[];
  creditLimits: CreditLimit[];
}

/** アプリ全体のユーザーデータ */
export interface UserData {
  departmentId: string;
  semesters: SemesterData[];
  /** 学期ごとの学科順位（手動入力） */
  rankings: Record<string, number>; // key: "1-前期" のような文字列
}

/** セメスターキーを文字列に変換 */
export const semesterKeyToString = (key: SemesterKey): string =>
  `${key.year}-${key.semester}`;

/** 文字列をセメスターキーに変換 */
export const stringToSemesterKey = (str: string): SemesterKey => {
  const [year, semester] = str.split("-");
  return { year: Number(year), semester: semester as Semester };
};
