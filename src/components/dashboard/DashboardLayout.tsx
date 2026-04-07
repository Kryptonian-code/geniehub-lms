import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap, LayoutDashboard, BookOpen, Users, FileText, Award,
  BarChart3, Settings, Bell, MessageSquare, CreditCard, Library,
  ChevronLeft, ChevronRight, LogOut, Calendar, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "Courses", href: "/dashboard/courses" },
  { icon: Users, label: "Users", href: "/dashboard/users" },
  { icon: Calendar, label: "Enrollments", href: "/dashboard/enrollments" },
  { icon: ClipboardCheck, label: "Assessments", href: "/dashboard/assessments" },
  { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
  { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
  { icon: Library, label: "Content Library", href: "/dashboard/library" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-40 bg-sidebar flex flex-col transition-all duration-300 ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div className="flex items-center gap-2.5 h-16 px-4 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-4 h-4 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-sm font-bold text-sidebar-foreground tracking-tight">
              GenieHub
            </span>
          )}
        </div>

        <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                } ${collapsed ? "justify-center" : ""}`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="w-4.5 h-4.5 flex-shrink-0" />
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-2 border-t border-sidebar-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground/40 hover:text-sidebar-foreground/60 hover:bg-sidebar-accent/30 text-sm transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : (
              <>
                <ChevronLeft className="w-4 h-4" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={`flex-1 transition-all duration-300 ${collapsed ? "ml-16" : "ml-60"}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-background border-b border-border flex items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-semibold text-primary-foreground">KM</span>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
