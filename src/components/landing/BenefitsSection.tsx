import { Clock, TrendingUp, Globe, Puzzle, Lock, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Launch in Days", text: "Set up your learning platform in days, not months. No development team required." },
  { icon: TrendingUp, title: "Scale With Confidence", text: "From 10 learners to 10,000. GenieHub grows with your organization seamlessly." },
  { icon: Globe, title: "Access Anywhere", text: "Learners access content from any device, anywhere. Fully responsive and mobile optimized." },
  { icon: Puzzle, title: "Modular Flexibility", text: "Turn modules on or off based on your needs. Pay only for what you use." },
  { icon: Lock, title: "Enterprise Security", text: "Role-based access, encrypted data, and full audit trails keep your platform safe." },
  { icon: HeartHandshake, title: "Dedicated Support", text: "Our team works alongside you to ensure your success from day one." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold-warm uppercase tracking-widest mb-3">
            Why GenieHub
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built to serve institutions that take learning seriously
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mt-0.5">
                <b.icon className="w-5 h-5 text-gold-warm" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
