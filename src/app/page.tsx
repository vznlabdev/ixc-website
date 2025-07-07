import Hero from "@/components/Hero";
import GetStartedSection from "@/components/GetStartedSection";
import CTASection from "@/components/CTASection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <GetStartedSection />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
