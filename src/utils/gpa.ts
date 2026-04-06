import type {
  CourseRecord,
  Grade,
  PromotionRequirement,
  RequirementFilter,
  RequirementItem,
  SemesterKey,
} from "@/types";
import { GRADE_POINTS, isPassingGrade, semesterKeyToString } from "@/types";

/** GPA計算結果 */
export interface GPAResult {
  gpa: number;
  totalCredits: number;
  earnedCredits: number;
  gradeDistribution: Record<Grade, number>;
}

/** 要件判定結果の1項目 */
export interface RequirementCheckItem {
  label: string;
  required: number;
  earned: number;
  shortage: number;
  met: boolean;
  unit: string;
}

/** 進級・卒業判定結果 */
export interface PromotionCheckResult {
  label: string;
  items: RequirementCheckItem[];
  allMet: boolean;
}

/**
 * 指定した科目群のGPAを計算
 */
export const calculateGPA = (courses: CourseRecord[]): GPAResult => {
  const gradeDistribution: Record<Grade, number> = {
    S: 0, A: 0, B: 0, C: 0, D: 0, F: 0, "": 0,
  };

  let totalGP = 0;
  let totalCredits = 0;
  let earnedCredits = 0;

  for (const course of courses) {
    gradeDistribution[course.grade]++;
    const gp = GRADE_POINTS[course.grade];
    if (gp !== null) {
      totalGP += gp * course.credits;
      totalCredits += course.credits;
      if (isPassingGrade(course.grade)) {
        earnedCredits += course.credits;
      }
    }
  }

  return {
    gpa: totalCredits > 0 ? totalGP / totalCredits : 0,
    totalCredits,
    earnedCredits,
    gradeDistribution,
  };
};

/**
 * 学期ごとのGPAを計算
 */
export const calculateSemesterGPAs = (
  allCourses: CourseRecord[]
): Map<string, GPAResult> => {
  const bySemester = new Map<string, CourseRecord[]>();

  for (const course of allCourses) {
    const key = semesterKeyToString({ year: course.year, semester: course.semester });
    const list = bySemester.get(key) ?? [];
    list.push(course);
    bySemester.set(key, list);
  }

  const results = new Map<string, GPAResult>();
  for (const [key, courses] of bySemester) {
    results.set(key, calculateGPA(courses));
  }
  return results;
};

/** フィルタに合致する修得済み科目の単位数を合計 */
const sumPassingCredits = (courses: CourseRecord[], filter: RequirementFilter): number => {
  return courses
    .filter((c) => {
      if (!isPassingGrade(c.grade)) return false;
      if (filter.category && c.category !== filter.category) return false;
      if (filter.classification && c.classification !== filter.classification) return false;
      if (filter.subcategory1 && c.subcategory1 !== filter.subcategory1) return false;
      if (filter.subcategory2 && c.subcategory2 !== filter.subcategory2) return false;
      return true;
    })
    .reduce((sum, c) => sum + c.credits, 0);
};

/**
 * 要件1項目をチェック
 */
const checkRequirementItem = (
  item: RequirementItem,
  courses: CourseRecord[]
): RequirementCheckItem => {
  // overflow: 各区分の超過分を合算
  if (item.countMode === "overflow" && item.overflowSources) {
    let totalOverflow = 0;
    for (const source of item.overflowSources) {
      const earned = sumPassingCredits(courses, source.filter);
      const overflow = Math.max(0, earned - source.requiredCredits);
      totalOverflow += overflow;
    }
    const shortage = Math.max(0, item.requiredCredits - totalOverflow);
    return {
      label: item.label,
      required: item.requiredCredits,
      earned: totalOverflow,
      shortage,
      met: shortage === 0,
      unit: "単位",
    };
  }

  // subjects: 科目数カウント
  if (item.countMode === "subjects") {
    const filtered = courses.filter((c) => {
      if (!isPassingGrade(c.grade)) return false;
      if (item.filter.category && c.category !== item.filter.category) return false;
      if (item.filter.classification && c.classification !== item.filter.classification) return false;
      if (item.filter.subcategory1 && c.subcategory1 !== item.filter.subcategory1) return false;
      if (item.filter.subcategory2 && c.subcategory2 !== item.filter.subcategory2) return false;
      return true;
    });
    const earned = filtered.length;
    const shortage = Math.max(0, item.requiredCredits - earned);
    return {
      label: item.label,
      required: item.requiredCredits,
      earned,
      shortage,
      met: shortage === 0,
      unit: "科目",
    };
  }

  // credits: 通常の単位数カウント（デフォルト）
  const earned = sumPassingCredits(courses, item.filter);
  const shortage = Math.max(0, item.requiredCredits - earned);
  return {
    label: item.label,
    required: item.requiredCredits,
    earned,
    shortage,
    met: shortage === 0,
    unit: "単位",
  };
};

/**
 * 進級・卒業判定
 */
export const checkPromotion = (
  requirement: PromotionRequirement,
  allCourses: CourseRecord[]
): PromotionCheckResult => {
  const items = requirement.items.map((item) =>
    checkRequirementItem(item, allCourses)
  );

  return {
    label: requirement.label,
    items,
    allMet: items.every((i) => i.met),
  };
};

/**
 * 学期の履修単位合計
 */
export const sumCreditsForSemester = (
  courses: CourseRecord[],
  key: SemesterKey
): number =>
  courses
    .filter((c) => c.year === key.year && c.semester === key.semester)
    .reduce((sum, c) => sum + c.credits, 0);
