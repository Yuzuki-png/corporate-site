import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import SolutionList from "@/components/solutions/SolutionList";
import CTASection from "@/components/common/CTASection";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "ソリューション",
  description:
    "レンタカー会社向けDX、OTA接続、レンタカー在庫API、MaaS連携、AI価格最適化。レンタカー在庫のデジタル化と流通を実現。",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        englishTitle="Solutions"
        japaneseTitle="ソリューション"
        description="レンタカー在庫のデジタル化から、API接続・MaaS連携まで。"
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
