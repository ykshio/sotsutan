import { useMemo } from "react";
import { departments } from "@/data/departments";
import type { DepartmentDefinition, UserData } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart3, Upload, GraduationCap, ArrowRight, Database, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  data: UserData | null;
  onSelectDepartment: (id: string) => void;
}

/** 学部ごとにグループ化 */
const groupByFaculty = (depts: DepartmentDefinition[]) => {
  const groups = new Map<string, DepartmentDefinition[]>();
  for (const d of depts) {
    const list = groups.get(d.faculty) ?? [];
    list.push(d);
    groups.set(d.faculty, list);
  }
  return groups;
};

export const HomePage = ({ data, onSelectDepartment }: Props) => {
  const grouped = useMemo(() => groupByFaculty(departments), []);

  if (!data) {
    return (
      <div className="space-y-10">
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap size={32} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">卒単</h2>
          <p className="text-muted-foreground mt-2 text-lg">単位計算・進級/卒業判定システム</p>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">学科・入学年度を選択</h3>
          {Array.from(grouped.entries()).map(([faculty, depts]) => {
            // 同一学科名でまとめて入学年度を表示
            const byName = new Map<string, DepartmentDefinition[]>();
            for (const d of depts) {
              const key = `${d.departmentCode}-${d.name}`;
              const list = byName.get(key) ?? [];
              list.push(d);
              byName.set(key, list);
            }

            return (
              <div key={faculty}>
                <h4 className="text-sm font-medium text-foreground mb-3">{faculty}</h4>
                <div className="grid gap-3">
                  {Array.from(byName.entries()).map(([key, variants]) => {
                    const first = variants[0];
                    // 年度でソート（新しい順）
                    const sorted = [...variants].sort((a, b) => b.entranceYear - a.entranceYear);

                    return (
                      <Card key={key} className="overflow-hidden">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-base">{first.name}</CardTitle>
                              <CardDescription className="mt-0.5">
                                {first.departmentCode} / {first.subjects.length} 科目
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex flex-wrap gap-2">
                            {sorted.map((d) => (
                              <button
                                key={d.id}
                                onClick={() => onSelectDepartment(d.id)}
                                className="group flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent bg-muted/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                              >
                                <Calendar size={14} className="text-muted-foreground group-hover:text-primary" />
                                <span className="text-sm font-medium group-hover:text-primary">{d.entranceYear}年度入学</span>
                                <ArrowRight size={14} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Database size={18} />
            <span className="text-sm">以前のデータがある場合は</span>
            <Link to="/data">
              <Button variant="link" className="px-0 text-sm">データ管理からインポート</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const dept = departments.find((d) => d.id === data.departmentId);
  const totalCourses = data.semesters.reduce((sum, s) => sum + s.courses.length, 0);
  const activeSemesters = data.semesters.filter((s) => s.courses.length > 0).length;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-primary">{dept?.faculty}</p>
        <h2 className="text-2xl font-bold tracking-tight mt-1">
          {dept?.name ?? "不明な学科"}
        </h2>
        {dept && (
          <p className="text-sm text-muted-foreground mt-0.5">
            {dept.departmentCode} / {dept.entranceYear}年度入学
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link to="/courses" className="group">
          <Card className="h-full border-2 border-transparent group-hover:border-blue-200 group-hover:shadow-md transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <BookOpen size={22} />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-blue-700 transition-colors">履修記録</p>
                  <p className="text-sm text-muted-foreground">{totalCourses} 科目 / {activeSemesters} 学期</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/gpa" className="group">
          <Card className="h-full border-2 border-transparent group-hover:border-emerald-200 group-hover:shadow-md transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                  <BarChart3 size={22} />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-emerald-700 transition-colors">GPA・判定</p>
                  <p className="text-sm text-muted-foreground">進級・卒業判定を確認</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/data" className="group">
          <Card className="h-full border-2 border-transparent group-hover:border-orange-200 group-hover:shadow-md transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                  <Upload size={22} />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-orange-700 transition-colors">データ管理</p>
                  <p className="text-sm text-muted-foreground">インポート・エクスポート</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
