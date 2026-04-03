import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { CoursesPage } from "@/pages/CoursesPage";
import { GPAPage } from "@/pages/GPAPage";
import { DataPage } from "@/pages/DataPage";
import { useUserData } from "@/hooks/useUserData";
import type { UserData } from "@/types";
import { saveUserData } from "@/utils/storage";

function App() {
  const {
    data,
    selectDepartment,
    setCourses,
    importCourses,
    resetData,
  } = useUserData();

  const handleLoadFullData = (fullData: UserData) => {
    saveUserData(fullData);
    window.location.reload();
  };

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <HomePage data={data} onSelectDepartment={selectDepartment} />
            }
          />
          <Route
            path="courses"
            element={
              data ? (
                <CoursesPage data={data} onSetCourses={setCourses} />
              ) : (
                <NeedSetup />
              )
            }
          />
          <Route
            path="gpa"
            element={
              data ? <GPAPage data={data} /> : <NeedSetup />
            }
          />
          <Route
            path="data"
            element={
              <DataPage
                data={data}
                onImportCourses={importCourses}
                onResetData={resetData}
                onLoadFullData={handleLoadFullData}
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const NeedSetup = () => (
  <div className="text-center py-12 text-gray-500">
    <p>まずホーム画面で学科を選択してください</p>
  </div>
);

export default App;
