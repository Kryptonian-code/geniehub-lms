import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  "Use Cases": ["Universities", "Training Institutes", "Corporate Training", "Ministry Schools", "Course Creators"],
  Resources: ["Documentation", "API Reference", "Blog", "Community", "Webinars"],
  Company: ["About", "Careers", "Contact", "Partners", "Press"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-base font-bold text-background">
                GenieHub
              </span>
            </Link>
            <p className="text-sm text-background/50 leading-relaxed">
              The unified learning platform for institutions that demand excellence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} GenieHub LMS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/40 hover:text-background/70">Privacy Policy</a>
            <a href="#" className="text-sm text-background/40 hover:text-background/70">Terms of Service</a>
            <a href="#" className="text-sm text-background/40 hover:text-background/70">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
