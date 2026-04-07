import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Most organizations are up and running within 48 hours. You select your institution type, configure your modules, and start adding content immediately.",
  },
  {
    q: "Can we migrate from another LMS?",
    a: "Yes. Our team helps you migrate courses, users, and content from your existing platform. We support bulk imports and provide migration assistance for Professional and Enterprise plans.",
  },
  {
    q: "Is our data secure and isolated?",
    a: "Absolutely. Each organization operates in a fully isolated environment. Your data, users, and settings are completely separate from other organizations on the platform.",
  },
  {
    q: "Can we use our own branding?",
    a: "Yes. Professional and Enterprise plans include full custom branding with your logo, colors, and domain name so the platform feels like your own product.",
  },
  {
    q: "What payment methods do you support?",
    a: "We support mobile money, card payments, and bank transfers. Course creators can collect payments directly from learners through the built-in payment system.",
  },
  {
    q: "Do you offer training and onboarding support?",
    a: "All plans include documentation and email support. Professional plans include guided onboarding sessions, and Enterprise clients receive dedicated account management.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="faq">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gold-warm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common questions, clear answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
