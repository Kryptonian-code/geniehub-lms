import { GraduationCap, Briefcase, Building2, Church, ShoppingBag } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    description: "Manage semesters, departments, grading systems, transcripts, and student attendance with ease.",
    features: ["Semester Management", "Department Structure", "Transcript Generation", "Attendance Tracking"],
  },
  {
    icon: Briefcase,
    title: "Training Institutes",
    description: "Organize cohorts, build skills pathways, assign trainers, and track learner progress through programs.",
    features: ["Cohort Management", "Skills Pathways", "Trainer Assignments", "Competency Tracking"],
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Deploy compliance training, onboard new staff, and monitor department training progress across teams.",
    features: ["Compliance Training", "Staff Onboarding", "Department Reporting", "Progress Dashboards"],
  },
  {
    icon: Church,
    title: "Ministry Schools",
    description: "Structure ministry tracks, facilitate group learning, and organize devotional content for your community.",
    features: ["Ministry Tracks", "Group Learning", "Devotional Content", "Community Tools"],
  },
  {
    icon: ShoppingBag,
    title: "Course Creators",
    description: "Build your storefront, sell courses with coupons and bundles, and grow with learner reviews.",
    features: ["Course Storefront", "Coupons & Bundles", "Learner Reviews", "Revenue Dashboard"],
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-warm" id="use-cases">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold-warm uppercase tracking-widest mb-3">
            Built for Every Organization
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            One platform. Five powerful modes.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Select your organization type during onboarding and GenieHub automatically
            activates the modules, navigation, and features you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className={`rounded-xl border border-border bg-card p-7 hover:shadow-md transition-all duration-300 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                <uc.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{uc.description}</p>
              <div className="flex flex-wrap gap-2">
                {uc.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/5 text-primary"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
