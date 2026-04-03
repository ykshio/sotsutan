import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, BarChart3, Upload, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: GraduationCap, label: "ホーム" },
  { to: "/courses", icon: BookOpen, label: "履修記録" },
  { to: "/gpa", icon: BarChart3, label: "GPA・判定" },
  { to: "/data", icon: Upload, label: "データ管理" },
];

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 text-primary font-bold text-lg tracking-tight">
              <GraduationCap size={22} />
              <span className="hidden sm:inline">卒単</span>
            </Link>
            <nav className="flex gap-0.5">
              {navItems.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                    location.pathname === to
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};
