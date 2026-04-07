import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to transform how your organization learns?
        </h2>
        <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10">
          Join hundreds of institutions already using GenieHub to deliver powerful,
          organized, and measurable learning experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="hero-outline" size="xl" className="text-accent border-accent/30">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
