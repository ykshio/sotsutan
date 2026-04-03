import { departments } from "@/data/departments";
import type { UserData } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart3, Upload, GraduationCap, ArrowRight, Database } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  data: UserData | null;
  onSelectDepartment: (id: string) => void;
}

export const HomePage = ({ data, onSelectDepartment }: Props) => {
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

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">学科を選択</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {departments.map((dept) => (
              <Card
                key={dept.id}
                className="group cursor-pointer border-2 border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                onClick={() => onSelectDepartment(dept.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{dept.name}</CardTitle>
                      <CardDescription className="mt-1">{dept.faculty}</CardDescription>
                    </div>
                    <ArrowRight size={18} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{dept.subjects.length} 科目</span>
                    <span>{dept.promotionRequirements.length} 判定要件</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
        <h2 className="text-2xl font-bold tracking-tight mt-1">{dept?.name ?? "不明な学科"}</h2>
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
