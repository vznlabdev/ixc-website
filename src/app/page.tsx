import Hero from "@/components/Hero";
import GetStartedSection from "@/components/GetStartedSection";
import CTASection from "@/components/CTASection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import { homeContent } from "@/content/home";

export default function Home() {
  return (
    <div>
      <Hero />
      <GetStartedSection />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection 
        title={homeContent.cta.title}
        description={homeContent.cta.description}
        buttonText={homeContent.cta.buttonText}
        buttonUrl={homeContent.cta.buttonUrl}
        smallText={homeContent.cta.smallText}
      />
    </div>
  );
}
