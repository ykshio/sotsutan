import { useState } from "react";
import type { CourseRecord, DepartmentDefinition, Grade, SemesterKey, UserData } from "@/types";
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
import { Plus, Trash2, AlertTriangle } from "lucide-react";

const SEMESTERS: SemesterKey[] = [
  { year: 1, semester: "前期" }, { year: 1, semester: "後期" },
  { year: 2, semester: "前期" }, { year: 2, semester: "後期" },
  { year: 3, semester: "前期" }, { year: 3, semester: "後期" },
  { year: 4, semester: "前期" }, { year: 4, semester: "後期" },
];

const GRADES: Grade[] = ["S", "A", "B", "C", "D", "F", ""];

const gradeStyle = (grade: Grade) => {
  switch (grade) {
    case "S": return "bg-blue-100 text-blue-700 border-blue-200";
    case "A": return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "B": return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "C": return "bg-orange-100 text-orange-700 border-orange-200";
    case "D": return "bg-red-100 text-red-700 border-red-200";
    case "F": return "bg-red-200 text-red-800 border-red-300";
    default: return "bg-muted text-muted-foreground";
  }
};

interface Props {
  data: UserData;
  onSetCourses: (key: SemesterKey, courses: CourseRecord[]) => void;
}

export const CoursesPage = ({ data, onSetCourses }: Props) => {
  const dept = getDepartment(data.departmentId);
  if (!dept) return <p>学科���ータが見つかりません</p>;

  const defaultTab = semesterKeyToString(SEMESTERS[0]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">履修記録</h2>
      <Tabs defaultValue={defaultTab}>
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
          {SEMESTERS.map((sk) => {
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
                {sk.year}年{sk.semester}
                {hasData && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {SEMESTERS.map((sk) => (
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

  const availableSubjects = dept.subjects.filter((s) => {
    // 配当年チェック: "全" or 配当年にsemesterKey.yearが含まれるか
    const yearStr = String(semesterKey.year);
    const yearMatch =
      s.year === "全" ||
      s.year === yearStr ||
      s.year === `${yearStr}年` ||
      s.year.split(",").some((y) => y.trim().replace("年", "") === yearStr);
    // 配当期チェック: "前期／後期" なら両方OK
    const semMatch =
      s.semester === "前期／後期" || s.semester === semesterKey.semester;
    return yearMatch && semMatch;
  });

  const creditLimit = dept.creditLimits[0]?.maxCredits ?? 24;
  const overLimit = totalCredits > creditLimit;

  const updateGrade = (index: number, grade: Grade) => {
    const newCourses = courses.map((c, i) => (i === index ? { ...c, grade } : c));
    onSetCourses(semesterKey, newCourses);
  };

  const addFromSubject = (subjectId: string) => {
    const subject = dept.subjects.find((s) => s.id === subjectId);
    if (!subject) return;
    const newCourse: CourseRecord = {
      subjectId: subject.id,
      subjectName: subject.name,
      credits: subject.credits,
      category: subject.category,
      classification: subject.classification,
      grade: "",
      year: semesterKey.year,
      semester: semesterKey.semester,
    };
    onSetCourses(semesterKey, [...courses, newCourse]);
  };

  const removeCourse = (index: number) => {
    onSetCourses(semesterKey, courses.filter((_, i) => i !== index));
  };

  const [showCustom, setShowCustom] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customCredits, setCustomCredits] = useState("2");

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
              {totalCredits} / {creditLimit}
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
                  <TableHead className="w-28">区分</TableHead>
                  <TableHead className="w-16">分類</TableHead>
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
                      <Badge variant="outline" className="text-xs font-normal">{course.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-xs text-muted-foreground">{course.classification}</span>
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
          <div className="text-center py-8 text-muted-foreground">
            <p>まだ科目が登録されていません</p>
            <p className="text-sm mt-1">下のセレクトから配当科目を追加してください</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2 border-t">
          {availableSubjects.length > 0 && (
            <Select onValueChange={(v: string | null) => { if (v) addFromSubject(v); }}>
              <SelectTrigger className="w-72">
                <SelectValue placeholder="配当科目から追加..." />
              </SelectTrigger>
              <SelectContent>
                {availableSubjects
                  .filter((s) => !courses.some((c) => c.subjectId === s.id))
                  .map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name}（{s.credits}��位・{s.classification}）
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCustom(!showCustom)}
            className="text-muted-foreground"
          >
            <Plus size={14} className="mr-1" />
            カスタム��目
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
    </Card>
  );
};
