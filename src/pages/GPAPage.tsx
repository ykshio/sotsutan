import type { UserData } from "@/types";
import { getDepartment } from "@/data/departments";
import { calculateGPA, calculateSemesterGPAs, checkPromotion } from "@/utils/gpa";
import type { PromotionCheckResult } from "@/utils/gpa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, CheckCircle2, XCircle } from "lucide-react";

interface Props {
  data: UserData;
}

const UNDERGRAD_SEMESTER_ORDER = [
  "1-前期", "1-後期", "2-前期", "2-後期",
  "3-前期", "3-後期", "4-前期", "4-後期",
];

const MASTER_SEMESTER_ORDER = [
  "0-前期", "1-前期", "1-後期", "2-前期", "2-後期",
];

const MASTER_SEMESTER_LABELS: Record<string, string> = {
  "0-前期": "先取り",
  "1-前期": "1年前期", "1-後期": "1年後期",
  "2-前期": "2年前期", "2-後期": "2年後期",
};

const isMasterProgram = (faculty: string) => faculty.includes("研究科");

export const GPAPage = ({ data }: Props) => {
  const dept = getDepartment(data.departmentId);
  if (!dept) return <p>学科データが見つかりません</p>;

  const isMaster = isMasterProgram(dept.faculty);
  const semesterOrder = isMaster ? MASTER_SEMESTER_ORDER : UNDERGRAD_SEMESTER_ORDER;

  const allCourses = data.semesters.flatMap((s) => s.courses);
  const cumulativeGPA = calculateGPA(allCourses);
  const semesterGPAs = calculateSemesterGPAs(allCourses);

  const promotionResults = dept.promotionRequirements.map((req) =>
    checkPromotion(req, allCourses)
  );

  const gpaColor = (gpa: number) => {
    if (gpa >= 3.5) return "text-blue-600";
    if (gpa >= 3.0) return "text-emerald-600";
    if (gpa >= 2.0) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">GPA・進級/卒業判定</h2>

      {/* 累計サマリー */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card className="sm:col-span-1 border-2">
          <CardContent className="pt-6 text-center">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">累計GPA</p>
            <p className={`text-4xl font-bold mt-2 ${gpaColor(cumulativeGPA.gpa)}`}>
              {cumulativeGPA.gpa.toFixed(2)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">修得単位</p>
            <p className="text-3xl font-bold mt-2">{cumulativeGPA.earnedCredits}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">履修単位</p>
            <p className="text-3xl font-bold mt-2">{cumulativeGPA.totalCredits}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">評定分布</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {(["S", "A", "B", "C"] as const).map((g) => (
                <div key={g}>
                  <span className="text-xs text-muted-foreground">{g}</span>
                  <p className="text-lg font-semibold">{cumulativeGPA.gradeDistribution[g]}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 学期別GPA */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp size={18} className="text-primary" />
            学期別GPA
          </CardTitle>
        </CardHeader>
        <CardContent>
          {semesterGPAs.size > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>学期</TableHead>
                    <TableHead className="text-right">GPA</TableHead>
                    <TableHead className="text-right">修得</TableHead>
                    <TableHead className="text-right">履修</TableHead>
                    <TableHead className="text-center">S</TableHead>
                    <TableHead className="text-center">A</TableHead>
                    <TableHead className="text-center">B</TableHead>
                    <TableHead className="text-center">C</TableHead>
                    <TableHead className="text-center">D/-</TableHead>
                    {Object.keys(data.rankings).length > 0 && (
                      <TableHead className="text-right">順位</TableHead>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {semesterOrder.map((key) => {
                    const gpa = semesterGPAs.get(key);
                    if (!gpa) return null;
                    const label = isMaster
                      ? (MASTER_SEMESTER_LABELS[key] ?? key)
                      : key.replace("-", "年");
                    return (
                      <TableRow key={key}>
                        <TableCell className="font-medium">{label}</TableCell>
                        <TableCell className={`text-right font-mono font-semibold ${gpaColor(gpa.gpa)}`}>
                          {gpa.gpa.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">{gpa.earnedCredits}</TableCell>
                        <TableCell className="text-right">{gpa.totalCredits}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{gpa.gradeDistribution.S || "-"}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{gpa.gradeDistribution.A || "-"}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{gpa.gradeDistribution.B || "-"}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{gpa.gradeDistribution.C || "-"}</TableCell>
                        <TableCell className="text-center text-muted-foreground">
                          {(gpa.gradeDistribution.D + gpa.gradeDistribution["-"]) || "-"}
                        </TableCell>
                        {Object.keys(data.rankings).length > 0 && (
                          <TableCell className="text-right">
                            {data.rankings[key] ? `${data.rankings[key]}位` : "-"}
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">
              履修記録ページで科目と評定を入力してください
            </p>
          )}
        </CardContent>
      </Card>

      <Separator />

      {/* 進級・卒業判定 */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">進級・卒業判定</h3>
        <div className="grid gap-4">
          {promotionResults.map((result) => (
            <PromotionCard key={result.label} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PromotionCard = ({ result }: { result: PromotionCheckResult }) => (
  <Card className={result.allMet ? "border-emerald-200 bg-emerald-50/30" : ""}>
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          {result.allMet ? (
            <CheckCircle2 size={20} className="text-emerald-600" />
          ) : (
            <XCircle size={20} className="text-muted-foreground" />
          )}
          {result.label}
        </CardTitle>
        <Badge
          variant={result.allMet ? "default" : "destructive"}
          className={result.allMet ? "bg-emerald-600" : ""}
        >
          {result.allMet ? "達成" : "未達成"}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>要件</TableHead>
            <TableHead className="text-right">必要</TableHead>
            <TableHead className="text-right">修得済</TableHead>
            <TableHead className="text-right">不足</TableHead>
            <TableHead className="text-center w-16">判定</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.items.map((item) => (
            <TableRow key={item.label}>
              <TableCell className="font-medium">{item.label}</TableCell>
              <TableCell className="text-right">{item.required}{item.unit}</TableCell>
              <TableCell className="text-right font-semibold">{item.earned}{item.unit}</TableCell>
              <TableCell className="text-right">
                {item.shortage > 0 ? (
                  <span className="text-red-600 font-semibold">{item.shortage}{item.unit}</span>
                ) : (
                  <span className="text-muted-foreground">0</span>
                )}
              </TableCell>
              <TableCell className="text-center">
                {item.met ? (
                  <CheckCircle2 size={18} className="inline text-emerald-600" />
                ) : (
                  <XCircle size={18} className="inline text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);
