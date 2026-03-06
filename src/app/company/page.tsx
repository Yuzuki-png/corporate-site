import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import Mission from "@/components/company/Mission";
import CompanyProfile from "@/components/company/CompanyProfile";
import CompanyValues from "@/components/company/CompanyValues";
import CTASection from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "Linkvia株式会社の会社概要。レンタカー在庫をAPIでつなぎ、レンタル在庫プラットフォームを目指すテクノロジー企業。",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        englishTitle="Company"
        japaneseTitle="会社概要"
        description="レンタカーから始まり、すべてのレンタル在庫をデジタル化する。"
      />
      <Mission />
      <CompanyProfile />
      <CompanyValues />
      <CTASection />
    </>
  );
}
