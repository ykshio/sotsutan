import type { CourseRecord, Grade, Semester, SubjectCategory, SubjectClassification } from "@/types";

/**
 * CSVから履修記録をインポート
 * CSVフォーマット: 科目名,単位数,区分,分類,評定,学年,学期
 */
export const importCoursesFromCSV = (csvText: string): CourseRecord[] => {
  const lines = csvText.trim().split("\n");
  // ヘッダー行をスキップ
  const dataLines = lines[0]?.includes("科目名") ? lines.slice(1) : lines;

  return dataLines
    .filter((line) => line.trim())
    .map((line, index) => {
      const cols = line.split(",").map((c) => c.trim());
      if (cols.length < 7) {
        throw new Error(`行 ${index + 2}: カラム数が不足しています（7列必要、${cols.length}列）`);
      }
      return {
        subjectId: `imported-${index}`,
        subjectName: cols[0],
        credits: Number(cols[1]),
        category: cols[2] as SubjectCategory,
        classification: cols[3] as SubjectClassification,
        grade: (cols[4] || "") as Grade,
        year: Number(cols[5]),
        semester: cols[6] as Semester,
      };
    });
};

/**
 * 履修記録をCSVにエクスポート
 */
export const exportCoursesToCSV = (courses: CourseRecord[]): string => {
  const header = "科目名,単位数,区分,分類,評定,学年,学期";
  const rows = courses.map(
    (c) =>
      `${c.subjectName},${c.credits},${c.category},${c.classification},${c.grade},${c.year},${c.semester}`
  );
  return [header, ...rows].join("\n");
};

/**
 * 履修記録をJSONにエクスポート
 */
export const exportCoursesToJSON = (courses: CourseRecord[]): string => {
  return JSON.stringify(courses, null, 2);
};

/**
 * ファイルダウンロードをトリガー
 */
export const downloadFile = (content: string, filename: string, mimeType: string): void => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
