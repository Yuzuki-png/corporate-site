import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import Mission from "@/components/company/Mission";
import CompanyProfile from "@/components/company/CompanyProfile";
import CompanyValues from "@/components/company/CompanyValues";
import CTASection from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "Linkvia株式会社の会社概要。AIとDXで業界の在庫をつなぎ、新しい価値を創造するテクノロジー企業。",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        englishTitle="Company"
        japaneseTitle="会社概要"
        description="AIとDXで、在庫を持つ業界の未来を変える。"
      />
      <Mission />
      <CompanyProfile />
      <CompanyValues />
      <CTASection />
    </>
  );
}
