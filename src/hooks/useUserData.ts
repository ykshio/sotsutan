import { useCallback, useEffect, useState } from "react";
import type { CourseRecord, SemesterKey, UserData } from "@/types";
import { semesterKeyToString } from "@/types";
import { createInitialUserData, loadUserData, saveUserData, clearUserData } from "@/utils/storage";
import { getDepartment } from "@/data/departments";

export const useUserData = () => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const saved = loadUserData();
    if (saved && !getDepartment(saved.departmentId)) {
      // 旧データのIDが現在の学科定義に存在しない場合はクリア
      clearUserData();
      setData(null);
    } else {
      setData(saved);
    }
  }, []);

  const save = useCallback((newData: UserData) => {
    setData(newData);
    saveUserData(newData);
  }, []);

  const selectDepartment = useCallback(
    (departmentId: string) => {
      save(createInitialUserData(departmentId));
    },
    [save]
  );

  const getAllCourses = useCallback((): CourseRecord[] => {
    if (!data) return [];
    return data.semesters.flatMap((s) => s.courses);
  }, [data]);

  const setCourses = useCallback(
    (key: SemesterKey, courses: CourseRecord[]) => {
      if (!data) return;
      const keyStr = semesterKeyToString(key);
      const existing = data.semesters.find(
        (s) => semesterKeyToString(s.key) === keyStr
      );
      const newSemesters = existing
        ? data.semesters.map((s) =>
            semesterKeyToString(s.key) === keyStr ? { ...s, courses } : s
          )
        : [...data.semesters, { key, courses }];
      save({ ...data, semesters: newSemesters });
    },
    [data, save]
  );

  /** 複数学期を一括更新（通年・年次継続用） */
  const setMultiCourses = useCallback(
    (updates: { key: SemesterKey; courses: CourseRecord[] }[]) => {
      if (!data) return;
      let newSemesters = [...data.semesters];
      for (const { key, courses } of updates) {
        const keyStr = semesterKeyToString(key);
        const existing = newSemesters.find(
          (s) => semesterKeyToString(s.key) === keyStr
        );
        if (existing) {
          newSemesters = newSemesters.map((s) =>
            semesterKeyToString(s.key) === keyStr ? { ...s, courses } : s
          );
        } else {
          newSemesters = [...newSemesters, { key, courses }];
        }
      }
      save({ ...data, semesters: newSemesters });
    },
    [data, save]
  );

  const importCourses = useCallback(
    (courses: CourseRecord[]) => {
      if (!data) return;
      // 学期ごとにグループ化してマージ
      const bySemester = new Map<string, CourseRecord[]>();
      for (const c of courses) {
        const key = semesterKeyToString({ year: c.year, semester: c.semester });
        const list = bySemester.get(key) ?? [];
        list.push(c);
        bySemester.set(key, list);
      }
      let newData = { ...data };
      for (const [keyStr, newCourses] of bySemester) {
        const existing = newData.semesters.find(
          (s) => semesterKeyToString(s.key) === keyStr
        );
        if (existing) {
          newData = {
            ...newData,
            semesters: newData.semesters.map((s) =>
              semesterKeyToString(s.key) === keyStr
                ? { ...s, courses: [...s.courses, ...newCourses] }
                : s
            ),
          };
        } else {
          const [year, semester] = keyStr.split("-");
          newData = {
            ...newData,
            semesters: [
              ...newData.semesters,
              {
                key: { year: Number(year), semester: semester as "前期" | "後期" },
                courses: newCourses,
              },
            ],
          };
        }
      }
      save(newData);
    },
    [data, save]
  );

  const setRanking = useCallback(
    (key: SemesterKey, rank: number) => {
      if (!data) return;
      save({
        ...data,
        rankings: { ...data.rankings, [semesterKeyToString(key)]: rank },
      });
    },
    [data, save]
  );

  const resetData = useCallback(() => {
    clearUserData();
    setData(null);
  }, []);

  return {
    data,
    selectDepartment,
    getAllCourses,
    setCourses,
    setMultiCourses,
    importCourses,
    setRanking,
    resetData,
    save,
  };
};
