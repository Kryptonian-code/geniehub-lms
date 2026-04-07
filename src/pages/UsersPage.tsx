import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal } from "lucide-react";

const users = [
  { name: "Ama Darko", email: "ama.darko@example.com", role: "Learner", status: "Active", joined: "Jan 15, 2025" },
  { name: "Kofi Asante", email: "kofi.asante@example.com", role: "Instructor", status: "Active", joined: "Dec 8, 2024" },
  { name: "Abena Mensah", email: "abena.m@example.com", role: "Admin", status: "Active", joined: "Nov 20, 2024" },
  { name: "Yaw Boateng", email: "yaw.b@example.com", role: "Learner", status: "Inactive", joined: "Oct 5, 2024" },
  { name: "Efua Owusu", email: "efua.o@example.com", role: "Learner", status: "Active", joined: "Mar 2, 2025" },
  { name: "Kwabena Adjei", email: "k.adjei@example.com", role: "Instructor", status: "Active", joined: "Feb 14, 2025" },
];

const roleColors: Record<string, string> = {
  Admin: "bg-purple-50 text-purple-700",
  Instructor: "bg-blue-50 text-blue-700",
  Learner: "bg-primary/5 text-primary",
};

const UsersPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Users</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage organization members</p>
          </div>
          <Button size="lg">
            <Plus className="w-4 h-4 mr-1" /> Add User
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-9" />
          </div>
          <Button variant="outline">All Roles</Button>
          <Button variant="outline">All Statuses</Button>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">User</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Role</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Joined</th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                          {user.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${roleColors[user.role] || ""}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === "Active" ? "bg-green-50 text-green-700" : "bg-muted text-muted-foreground"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{user.joined}</td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
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

export default UsersPage;
