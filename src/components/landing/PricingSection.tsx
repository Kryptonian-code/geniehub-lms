import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For small teams and individuals getting started",
    features: [
      "Up to 50 learners",
      "3 courses",
      "Basic analytics",
      "Email support",
      "1 admin user",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For growing organizations that need more power",
    features: [
      "Up to 500 learners",
      "Unlimited courses",
      "Advanced analytics",
      "Priority support",
      "5 admin users",
      "Custom branding",
      "Certificates",
      "Payment collection",
    ],
    cta: "Start Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutions with advanced requirements",
    features: [
      "Unlimited learners",
      "Unlimited courses",
      "Custom analytics",
      "Dedicated support",
      "Unlimited admins",
      "Multi-campus",
      "API access",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-warm" id="pricing">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold-warm uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing for every stage
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-7 flex flex-col ${
                plan.featured
                  ? "border-primary bg-card shadow-lg ring-1 ring-primary/10 relative"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/signup">
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
