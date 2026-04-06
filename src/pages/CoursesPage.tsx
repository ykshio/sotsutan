import { useMemo, useState } from "react";
import type { CourseRecord, DepartmentDefinition, Grade, SemesterKey, SubjectDefinition, UserData } from "@/types";
import { semesterKeyToString } from "@/types";
import { getDepartment } from "@/data/departments";
import { sumCreditsForSemester } from "@/utils/gpa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, AlertTriangle, ChevronDown, ChevronUp, Check } from "lucide-react";

const UNDERGRAD_SEMESTERS: SemesterKey[] = [
  { year: 1, semester: "前期" }, { year: 1, semester: "後期" },
  { year: 2, semester: "前期" }, { year: 2, semester: "後期" },
  { year: 3, semester: "前期" }, { year: 3, semester: "後期" },
  { year: 4, semester: "前期" }, { year: 4, semester: "後期" },
];

/** 修士: 先取り(year=0) + M1前期/後期 + M2前期/後期 */
const MASTER_SEMESTERS: SemesterKey[] = [
  { year: 0, semester: "前期" },
  { year: 1, semester: "前期" }, { year: 1, semester: "後期" },
  { year: 2, semester: "前期" }, { year: 2, semester: "後期" },
];

const isMasterProgram = (faculty: string) => faculty.includes("研究科");

const semesterLabel = (sk: SemesterKey, isMaster: boolean): string => {
  if (isMaster) {
    if (sk.year === 0) return "先取り";
    return `${sk.year}年${sk.semester}`;
  }
  return `${sk.year}年${sk.semester}`;
};

const GRADES: Grade[] = ["S", "A", "B", "C", "D", "-"];

const gradeStyle = (grade: Grade) => {
  switch (grade) {
    case "S": return "bg-blue-100 text-blue-700 border-blue-200";
    case "A": return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "B": return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "C": return "bg-orange-100 text-orange-700 border-orange-200";
    case "D": return "bg-red-100 text-red-700 border-red-200";
    case "-": return "bg-gray-200 text-gray-600 border-gray-300";
    default: return "bg-muted text-muted-foreground";
  }
};

const classificationStyle = (c: string) => {
  switch (c) {
    case "必修": return "bg-red-50 text-red-700 border-red-200";
    case "択一必修": return "bg-orange-50 text-orange-700 border-orange-200";
    case "選択": return "bg-blue-50 text-blue-700 border-blue-200";
    case "自由": return "bg-gray-50 text-gray-600 border-gray-200";
    default: return "";
  }
};

interface Props {
  data: UserData;
  onSetCourses: (key: SemesterKey, courses: CourseRecord[]) => void;
}

export const CoursesPage = ({ data, onSetCourses }: Props) => {
  const dept = getDepartment(data.departmentId);
  if (!dept) return <p>学科データが見つかりません</p>;

  const isMaster = isMasterProgram(dept.faculty);
  const semesters = isMaster ? MASTER_SEMESTERS : UNDERGRAD_SEMESTERS;
  const defaultTab = semesterKeyToString(semesters[0]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">履修記録</h2>
      <Tabs defaultValue={defaultTab}>
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
          {semesters.map((sk) => {
            const keyStr = semesterKeyToString(sk);
            const hasData = data.semesters.some(
              (s) => semesterKeyToString(s.key) === keyStr && s.courses.length > 0
            );
            return (
              <TabsTrigger
                key={keyStr}
                value={keyStr}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                {semesterLabel(sk, isMaster)}
                {hasData && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {semesters.map((sk) => (
          <TabsContent key={semesterKeyToString(sk)} value={semesterKeyToString(sk)} className="mt-4">
            <SemesterTab
              semesterKey={sk}
              data={data}
              dept={dept}
              onSetCourses={onSetCourses}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

/** 科目の最小配当年を取得 */
const getMinAllocationYear = (s: SubjectDefinition): number => {
  if (s.year === "全") return 1;
  const years = s.year.split(",").map((y) => Number(y.trim().replace("年", "")));
  return Math.min(...years);
};

/** 配当科目がこの学期に該当するか（当該年配当） */
const isSubjectCurrentYear = (s: SubjectDefinition, sk: SemesterKey): boolean => {
  // 先取り(year=0)は全科目を表示
  if (sk.year === 0) return true;
  const yearStr = String(sk.year);
  const yearMatch =
    s.year === "全" ||
    s.year === yearStr ||
    s.year === `${yearStr}年` ||
    s.year.split(",").some((y) => y.trim().replace("年", "") === yearStr);
  const semMatch =
    s.semester === "前期／後期" || s.semester === "通年" || s.semester === sk.semester;
  return yearMatch && semMatch;
};

/** 過去の配当科目がこの学期でも履修可能か（配当年より上の学年） */
const isSubjectFromPastYear = (s: SubjectDefinition, sk: SemesterKey): boolean => {
  const minYear = getMinAllocationYear(s);
  // 配当年より現在の学年が上で、かつ当該年の配当ではない
  if (minYear >= sk.year) return false;
  if (isSubjectCurrentYear(s, sk)) return false;
  const semMatch =
    s.semester === "前期／後期" || s.semester === "通年" || s.semester === sk.semester;
  return semMatch;
};

/** 配当科目をカテゴリごとにグループ化 */
const groupByCategory = (subjects: SubjectDefinition[]) => {
  const groups = new Map<string, SubjectDefinition[]>();
  for (const s of subjects) {
    const key = s.subcategory1 || s.category;
    const list = groups.get(key) ?? [];
    list.push(s);
    groups.set(key, list);
  }
  return groups;
};

const SemesterTab = ({
  semesterKey,
  data,
  dept,
  onSetCourses,
}: {
  semesterKey: SemesterKey;
  data: UserData;
  dept: DepartmentDefinition;
  onSetCourses: (key: SemesterKey, courses: CourseRecord[]) => void;
}) => {
  const keyStr = semesterKeyToString(semesterKey);
  const semesterData = data.semesters.find((s) => semesterKeyToString(s.key) === keyStr);
  const courses = semesterData?.courses ?? [];
  const allCourses = data.semesters.flatMap((s) => s.courses);
  const totalCredits = sumCreditsForSemester(allCourses, semesterKey);

  const currentYearSubjects = useMemo(
    () => dept.subjects.filter((s) => isSubjectCurrentYear(s, semesterKey)),
    [dept.subjects, semesterKey]
  );

  const pastYearSubjects = useMemo(
    () => dept.subjects.filter((s) => isSubjectFromPastYear(s, semesterKey)),
    [dept.subjects, semesterKey]
  );

  const registeredIds = new Set(courses.map((c) => c.subjectId));
  const currentGrouped = useMemo(() => groupByCategory(currentYearSubjects), [currentYearSubjects]);
  const pastGrouped = useMemo(() => groupByCategory(pastYearSubjects), [pastYearSubjects]);

  const creditLimit = dept.creditLimits[0]?.maxCredits ?? 24;
  const overLimit = totalCredits > creditLimit;

  const [showPicker, setShowPicker] = useState(false);
  const [showPastYears, setShowPastYears] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customCredits, setCustomCredits] = useState("2");

  const toggleSubject = (subject: SubjectDefinition) => {
    if (registeredIds.has(subject.id)) {
      // 削除
      onSetCourses(semesterKey, courses.filter((c) => c.subjectId !== subject.id));
    } else {
      // 追加
      const newCourse: CourseRecord = {
        subjectId: subject.id,
        subjectName: subject.name,
        credits: subject.credits,
        category: subject.category,
        classification: subject.classification,
        subcategory1: subject.subcategory1,
        subcategory2: subject.subcategory2,
        grade: "",
        year: semesterKey.year,
        semester: semesterKey.semester,
      };
      onSetCourses(semesterKey, [...courses, newCourse]);
    }
  };

  const updateGrade = (index: number, grade: Grade) => {
    const newCourses = courses.map((c, i) => (i === index ? { ...c, grade } : c));
    onSetCourses(semesterKey, newCourses);
  };

  const removeCourse = (index: number) => {
    onSetCourses(semesterKey, courses.filter((_, i) => i !== index));
  };

  const addCustomCourse = () => {
    if (!customName.trim()) return;
    const newCourse: CourseRecord = {
      subjectId: `custom-${Date.now()}`,
      subjectName: customName.trim(),
      credits: Number(customCredits),
      category: "共通教育科目",
      classification: "選択",
      grade: "",
      year: semesterKey.year,
      semester: semesterKey.semester,
    };
    onSetCourses(semesterKey, [...courses, newCourse]);
    setCustomName("");
    setShowCustom(false);
  };

  return (
    <div className="space-y-4">
      {/* 登録済み科目テーブル */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              {semesterKey.year}年 {semesterKey.semester}
            </CardTitle>
            <div className="flex items-center gap-2">
              {overLimit && (
                <span className="flex items-center gap-1 text-sm text-red-600">
                  <AlertTriangle size={14} />
                  上限超過
                </span>
              )}
              <Badge
                variant={overLimit ? "destructive" : "secondary"}
                className="text-sm font-mono"
              >
                {totalCredits} / {creditLimit} 単位
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {courses.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>科目名</TableHead>
                    <TableHead className="w-16 text-center">単位</TableHead>
                    <TableHead className="w-20">分類</TableHead>
                    <TableHead className="w-24">評定</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course, idx) => (
                    <TableRow key={`${course.subjectId}-${idx}`} className="group">
                      <TableCell className="font-medium">{course.subjectName}</TableCell>
                      <TableCell className="text-center font-mono">{course.credits}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`text-xs font-normal ${classificationStyle(course.classification)}`}>
                          {course.classification}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={course.grade || "none"}
                          onValueChange={(v: string | null) => updateGrade(idx, (!v || v === "none" ? "" : v) as Grade)}
                        >
                          <SelectTrigger className={`h-8 text-xs font-semibold ${course.grade ? gradeStyle(course.grade) : ""}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">未入力</SelectItem>
                            {GRADES.filter((g) => g !== "").map((g) => (
                              <SelectItem key={g} value={g}>
                                <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${gradeStyle(g)}`}>{g}</span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-red-600 transition-opacity"
                          onClick={() => removeCourse(idx)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              <p>まだ科目が登録されていません</p>
              <p className="text-sm mt-1">「科目を追加」から配当科目を選択してください</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 科目追加パネル */}
      <Card>
        <CardHeader
          className="cursor-pointer select-none"
          onClick={() => setShowPicker(!showPicker)}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Plus size={16} />
              科目を追加
            </CardTitle>
            {showPicker ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </CardHeader>
        {showPicker && (
          <CardContent className="space-y-4 pt-0">
            {/* 当該年配当科目 */}
            <SubjectPickerList
              grouped={currentGrouped}
              registeredIds={registeredIds}
              onToggle={toggleSubject}
            />

            {/* 過去の配当科目 */}
            {pastYearSubjects.length > 0 && (
              <div className="border-t pt-3">
                <button
                  onClick={() => setShowPastYears(!showPastYears)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPastYears ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  <span>過去の配当科目</span>
                  <Badge variant="secondary" className="font-normal text-xs">
                    {pastYearSubjects.length} 科目
                  </Badge>
                </button>
                {showPastYears && (
                  <div className="mt-3 space-y-4">
                    <SubjectPickerList
                      grouped={pastGrouped}
                      registeredIds={registeredIds}
                      onToggle={toggleSubject}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="border-t pt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCustom(!showCustom)}
                className="text-muted-foreground"
              >
                <Plus size={14} className="mr-1" />
                カスタム科目を追加
              </Button>
            </div>

            {showCustom && (
              <div className="flex gap-2 items-end bg-muted/30 p-3 rounded-lg">
                <div className="flex-1">
                  <label className="text-xs font-medium text-muted-foreground">科目名</label>
                  <Input
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="科目名を入力"
                    className="mt-1"
                  />
                </div>
                <div className="w-20">
                  <label className="text-xs font-medium text-muted-foreground">単位</label>
                  <Input
                    type="number"
                    value={customCredits}
                    onChange={(e) => setCustomCredits(e.target.value)}
                    min="1"
                    max="10"
                    className="mt-1"
                  />
                </div>
                <Button onClick={addCustomCourse}>追加</Button>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

/** カテゴリ別科目チェックリスト */
const SubjectPickerList = ({
  grouped,
  registeredIds,
  onToggle,
}: {
  grouped: Map<string, SubjectDefinition[]>;
  registeredIds: Set<string>;
  onToggle: (subject: SubjectDefinition) => void;
}) => (
  <>
    {Array.from(grouped.entries()).map(([category, subjects]) => (
      <div key={category}>
        <h4 className="text-sm font-semibold text-muted-foreground mb-2">{category}</h4>
        <div className="grid gap-1">
          {subjects.map((s) => {
            const isAdded = registeredIds.has(s.id);
            return (
              <button
                key={s.id}
                onClick={() => onToggle(s)}
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  isAdded
                    ? "bg-primary/10 border border-primary/20"
                    : "hover:bg-muted/50 border border-transparent"
                }`}
              >
                <div className={`flex items-center justify-center w-5 h-5 rounded border-2 flex-shrink-0 ${
                  isAdded ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground/30"
                }`}>
                  {isAdded && <Check size={12} />}
                </div>
                <span className={`flex-1 ${isAdded ? "font-medium" : ""}`}>{s.name}</span>
                <span className="text-xs text-muted-foreground font-mono w-10 text-right">{s.credits}</span>
                <Badge variant="outline" className={`text-xs font-normal ${classificationStyle(s.classification)}`}>
                  {s.classification}
                </Badge>
              </button>
            );
          })}
        </div>
      </div>
    ))}
  </>
);
