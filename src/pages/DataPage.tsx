import { useRef, useState } from "react";
import type { CourseRecord, UserData } from "@/types";
import { importCoursesFromCSV, exportCoursesToCSV, exportCoursesToJSON, downloadFile } from "@/utils/csv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Upload, Trash2, FileJson, FileSpreadsheet } from "lucide-react";

interface Props {
  data: UserData | null;
  onImportCourses: (courses: CourseRecord[]) => void;
  onResetData: () => void;
  onLoadFullData: (data: UserData) => void;
}

export const DataPage = ({ data, onImportCourses, onResetData, onLoadFullData }: Props) => {
  const csvInputRef = useRef<HTMLInputElement>(null);
  const fullJsonInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const allCourses = data?.semesters.flatMap((s) => s.courses) ?? [];

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleCSVImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const courses = importCoursesFromCSV(text);
      onImportCourses(courses);
      showMessage("success", `${courses.length}件の科目をインポートしました`);
    } catch (err) {
      showMessage("error", `インポート失敗: ${err instanceof Error ? err.message : "不明なエラー"}`);
    }
    e.target.value = "";
  };

  const handleFullJSONImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as UserData;
      if (!parsed.departmentId || !parsed.semesters) {
        throw new Error("無効なデータ形式です");
      }
      onLoadFullData(parsed);
      showMessage("success", "データを復元しました");
    } catch (err) {
      showMessage("error", `インポート失敗: ${err instanceof Error ? err.message : "不明なエラー"}`);
    }
    e.target.value = "";
  };

  const handleExportCSV = () => {
    const csv = exportCoursesToCSV(allCourses);
    downloadFile(csv, "sotsutan-courses.csv", "text/csv");
  };

  const handleExportJSON = () => {
    const json = exportCoursesToJSON(allCourses);
    downloadFile(json, "sotsutan-courses.json", "application/json");
  };

  const handleExportFullJSON = () => {
    if (!data) return;
    const json = JSON.stringify(data, null, 2);
    downloadFile(json, "sotsutan-full-backup.json", "application/json");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">データ管理</h2>

      {message && (
        <div
          className={`p-3 rounded-md text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* インポート */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Upload size={20} />
            インポート
          </CardTitle>
          <CardDescription>CSVファイルまたはJSONバックアップからデータを読み込みます</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">成績CSVインポート</h4>
            <p className="text-xs text-gray-500">
              形式: 科目名,単位数,区分,分類,評定,学年,学期
            </p>
            <input ref={csvInputRef} type="file" accept=".csv" onChange={handleCSVImport} className="hidden" />
            <Button variant="outline" onClick={() => csvInputRef.current?.click()}>
              <FileSpreadsheet size={16} className="mr-2" />
              CSVファイルを選択
            </Button>
          </div>
          <Separator />
          <div className="space-y-2">
            <h4 className="text-sm font-medium">フルバックアップ復元</h4>
            <p className="text-xs text-gray-500">
              以前エクスポートしたJSONバックアップを復元します（現在のデータは上書きされます）
            </p>
            <input ref={fullJsonInputRef} type="file" accept=".json" onChange={handleFullJSONImport} className="hidden" />
            <Button variant="outline" onClick={() => fullJsonInputRef.current?.click()}>
              <FileJson size={16} className="mr-2" />
              JSONバックアップを選択
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* エクスポート */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Download size={20} />
            エクスポート
          </CardTitle>
          <CardDescription>
            現在のデータをダウンロードします
            {allCourses.length > 0 && (
              <Badge variant="secondary" className="ml-2">{allCourses.length}科目</Badge>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={handleExportCSV} disabled={allCourses.length === 0}>
              <FileSpreadsheet size={16} className="mr-2" />
              CSV（科目データ）
            </Button>
            <Button variant="outline" onClick={handleExportJSON} disabled={allCourses.length === 0}>
              <FileJson size={16} className="mr-2" />
              JSON（科目データ）
            </Button>
            <Button variant="outline" onClick={handleExportFullJSON} disabled={!data}>
              <FileJson size={16} className="mr-2" />
              JSONフルバックアップ
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* データリセット */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-red-600">
            <Trash2 size={20} />
            データリセット
          </CardTitle>
          <CardDescription>すべての履修記録を削除します。この操作は取り消せません。</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="destructive"
            onClick={() => {
              if (window.confirm("すべてのデータを削除しますか？")) {
                onResetData();
                showMessage("success", "データをリセットしました");
              }
            }}
            disabled={!data}
          >
            すべてのデータを削除
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
