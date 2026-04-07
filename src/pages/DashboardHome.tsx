import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { BookOpen, Users, TrendingUp, Award, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Total Learners", value: "1,247", change: "+12%", up: true, icon: Users },
  { label: "Active Courses", value: "34", change: "+3", up: true, icon: BookOpen },
  { label: "Completion Rate", value: "78%", change: "+5%", up: true, icon: TrendingUp },
  { label: "Certificates Issued", value: "892", change: "+24", up: true, icon: Award },
];

const recentEnrollments = [
  { name: "Ama Darko", course: "Introduction to Data Science", date: "Today", status: "Active" },
  { name: "Kofi Asante", course: "Leadership Fundamentals", date: "Today", status: "Active" },
  { name: "Abena Mensah", course: "Digital Marketing Essentials", date: "Yesterday", status: "Active" },
  { name: "Yaw Boateng", course: "Project Management Professional", date: "Yesterday", status: "Pending" },
  { name: "Efua Owusu", course: "Financial Accounting Basics", date: "2 days ago", status: "Active" },
];

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Good morning, Kwame</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Here is what is happening across your organization today.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className={`flex items-center gap-0.5 text-xs font-medium ${
                  stat.up ? "text-green-600" : "text-destructive"
                }`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Enrollments */}
        <div className="rounded-xl border border-border bg-card">
          <div className="p-5 border-b border-border">
            <h3 className="font-semibold text-foreground">Recent Enrollments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Learner</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Course</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Date</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentEnrollments.map((e, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                          {e.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-sm font-medium text-foreground">{e.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{e.course}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{e.date}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        e.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-amber-50 text-amber-700"
                      }`}>
                        {e.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
