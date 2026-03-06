import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "レンタカー在庫のDX化やAPI接続に関するご相談、お見積もり、技術的な質問など、お気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        englishTitle="Contact"
        japaneseTitle="お問い合わせ"
        description="レンタカー在庫のDX化やAPI接続について、お気軽にご相談ください。"
      />
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
