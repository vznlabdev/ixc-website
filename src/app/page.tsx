import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Services />
    </div>
  );
}
