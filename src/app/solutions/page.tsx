import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import SolutionList from "@/components/solutions/SolutionList";
import CTASection from "@/components/common/CTASection";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "業界別ソリューション",
  description:
    "レンタカーDX、レンタルDX、観光DX、設備管理DX、車両管理DX。各業界の現場課題を深く理解した最適なDXソリューション。",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        englishTitle="Solutions"
        japaneseTitle="業界別ソリューション"
        description="各業界の現場課題を深く理解し、最適なDXソリューションを提供します。"
      />
      <section className="py-24 sm:py-32">
        <Container>
          <SolutionList />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
