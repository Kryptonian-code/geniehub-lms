import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-sidebar-border">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-lg font-bold text-primary-foreground tracking-tight">
            GenieHub <span className="font-light opacity-80">LMS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-sidebar-accent">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero" size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-sidebar-border">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-sidebar-border">
              <Link to="/login">
                <Button variant="ghost" className="w-full text-primary-foreground/80">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
