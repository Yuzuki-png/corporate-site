import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServiceList from "@/components/service/ServiceList";
import CTASection from "@/components/common/CTASection";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "AIとDXの力で業務課題を解決する8つのサービス。AI導入支援、DXコンサルティング、在庫管理システム、SaaS開発など。",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        englishTitle="Service"
        japaneseTitle="サービス一覧"
        description="AIとDXの力で、業務課題を解決する8つのサービスを提供しています。"
      />
      <section className="py-24 sm:py-32">
        <Container>
          <ServiceList />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
