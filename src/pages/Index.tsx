import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PlatformSection from "@/components/landing/PlatformSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import LearningModesSection from "@/components/landing/LearningModesSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <UseCasesSection />
      <BenefitsSection />
      <LearningModesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
