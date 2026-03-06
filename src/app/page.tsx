import Hero from "@/components/top/Hero";
import MissionSection from "@/components/top/MissionSection";
import FeaturesSection from "@/components/top/FeaturesSection";
import UseCasesSection from "@/components/top/UseCasesSection";
import WhySection from "@/components/top/WhySection";
import FlowSection from "@/components/top/FlowSection";
import FAQSection from "@/components/top/FAQSection";
import ContactSection from "@/components/top/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <FeaturesSection />
      <UseCasesSection />
      <WhySection />
      <FlowSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
