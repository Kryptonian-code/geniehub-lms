import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, BookOpen } from "lucide-react";

const courses = [
  { title: "Introduction to Data Science", learners: 124, modules: 8, status: "Published", progress: 100 },
  { title: "Leadership Fundamentals", learners: 89, modules: 6, status: "Published", progress: 100 },
  { title: "Digital Marketing Essentials", learners: 67, modules: 10, status: "Published", progress: 100 },
  { title: "Project Management Professional", learners: 45, modules: 12, status: "Draft", progress: 75 },
  { title: "Financial Accounting Basics", learners: 156, modules: 9, status: "Published", progress: 100 },
  { title: "Web Development Bootcamp", learners: 0, modules: 4, status: "Draft", progress: 40 },
];

const Courses = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Courses</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage your course catalog</p>
          </div>
          <Button size="lg">
            <Plus className="w-4 h-4 mr-1" /> New Course
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-9" />
          </div>
          <Button variant="outline">All Statuses</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div key={course.title} className="rounded-xl border border-border bg-card hover:shadow-sm transition-shadow">
              <div className="h-36 bg-primary/5 rounded-t-xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-primary/30" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-sm leading-snug flex-1">{course.title}</h3>
                  <button className="text-muted-foreground hover:text-foreground ml-2">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{course.modules} modules</span>
                  <span>{course.learners} learners</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    course.status === "Published"
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    {course.status}
                  </span>
                  {course.status === "Draft" && (
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{course.progress}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Courses;
