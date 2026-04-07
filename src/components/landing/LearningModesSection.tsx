import { MonitorPlay, BookOpenCheck, Users2, Radio } from "lucide-react";

const modes = [
  {
    icon: MonitorPlay,
    title: "Self-Paced Learning",
    description: "Learners progress through courses at their own speed with structured modules, video lessons, and knowledge checks.",
  },
  {
    icon: BookOpenCheck,
    title: "Instructor-Led Training",
    description: "Instructors guide cohorts through scheduled curricula with assignments, discussions, and graded assessments.",
  },
  {
    icon: Users2,
    title: "Blended Learning",
    description: "Combine online and offline learning with flexible scheduling, attendance tracking, and hybrid content delivery.",
  },
  {
    icon: Radio,
    title: "Live Classes",
    description: "Conduct real-time virtual classes with integrated scheduling, attendance, and recording capabilities.",
  },
];

const LearningModesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Learning Modes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Multiple ways to learn, one place to manage
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            Support diverse learning styles and delivery methods within a single platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modes.map((m) => (
            <div
              key={m.title}
              className="p-7 rounded-xl bg-secondary/50 border border-sidebar-border hover:bg-secondary/70 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <m.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModesSection;
