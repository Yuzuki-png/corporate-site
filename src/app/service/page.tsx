import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServiceList from "@/components/service/ServiceList";
import CTASection from "@/components/common/CTASection";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "レンタカー在庫管理DX、在庫API、OTA接続、MaaS連携、AI価格最適化など、レンタカー業界向けサービス。",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        englishTitle="Service"
        japaneseTitle="サービス一覧"
        description="レンタカー会社向けDXと、接続先向けAPIの両面からサービスを提供しています。"
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
