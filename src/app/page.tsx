import Hero from "@/components/top/Hero";
import AISection from "@/components/top/AISection";
import DXSection from "@/components/top/DXSection";
import SaaSSection from "@/components/top/SaaSSection";
import PlatformSection from "@/components/top/PlatformSection";
import CTASection from "@/components/common/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AISection />
      <DXSection />
      <SaaSSection />
      <PlatformSection />
      <CTASection />
    </>
  );
}
