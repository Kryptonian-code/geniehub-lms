import { BookOpen, Users, BarChart3, Shield, Layers, Zap } from "lucide-react";

const capabilities = [
  {
    icon: BookOpen,
    title: "Course Management",
    description: "Build structured courses with modules, lessons, quizzes, and assignments. Support for self-paced and instructor-led formats.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    description: "Each organization operates independently with its own users, branding, courses, and reporting. Complete data isolation.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track learner progress, completion rates, assessment performance, and engagement metrics across your entire organization.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Granular permissions for admins, instructors, learners, and guardians. Each role sees only what they need.",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Activate only the modules your organization needs. Academic grading, corporate compliance, ministry tracks, and more.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Automate enrollment, notifications, certificate generation, and progress reminders to save your team time.",
  },
];

const PlatformSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="features">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold-warm uppercase tracking-widest mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to deliver great learning
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            GenieHub combines powerful tools into a single platform so you can focus on
            teaching, not managing software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group p-7 rounded-xl border border-border bg-card hover:border-gold/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <cap.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cap.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
