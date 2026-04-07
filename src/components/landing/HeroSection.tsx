import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-accent/20" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border border-accent/10" />
        <div className="absolute top-40 left-1/3 w-48 h-48 rounded-full border border-accent/10" />
      </div>

      <div className="container relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sidebar-accent text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Trusted by 200+ institutions across Africa
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            One platform for every
            <span className="block text-accent mt-1">learning organization</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            GenieHub LMS powers universities, training institutes, corporate teams,
            ministries, and course creators with a unified learning experience
            built for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/signup">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="hero-outline" size="xl" className="text-accent border-accent/30">
              <Play className="w-4 h-4 mr-1" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-2xl font-bold text-primary-foreground">50K+</p>
              <p className="text-sm text-primary-foreground/50">Active Learners</p>
            </div>
            <div className="w-px h-10 bg-sidebar-border" />
            <div>
              <p className="text-2xl font-bold text-primary-foreground">200+</p>
              <p className="text-sm text-primary-foreground/50">Institutions</p>
            </div>
            <div className="w-px h-10 bg-sidebar-border" />
            <div>
              <p className="text-2xl font-bold text-primary-foreground">99.9%</p>
              <p className="text-sm text-primary-foreground/50">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
