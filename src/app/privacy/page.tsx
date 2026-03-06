import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Linkvia株式会社のプライバシーポリシー。個人情報の取り扱いについて。",
};

const sections = [
  {
    title: "1. 個人情報の収集",
    content:
      "当社は、サービスの提供にあたり、お客様の氏名、メールアドレス、電話番号、会社名等の個人情報を収集することがあります。個人情報の収集は、適法かつ公正な手段により行います。",
  },
  {
    title: "2. 個人情報の利用目的",
    content:
      "収集した個人情報は、以下の目的で利用いたします。\n・サービスの提供・運営\n・お問い合わせへの対応\n・サービスの改善・新サービスの開発\n・重要なお知らせの送付",
  },
  {
    title: "3. 個人情報の第三者提供",
    content:
      "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "4. 個人情報の管理",
    content:
      "当社は、個人情報の正確性及び安全性を確保するため、セキュリティ対策をはじめとする安全対策を講じ、個人情報の漏洩、滅失又はき損の防止に努めます。",
  },
  {
    title: "5. お問い合わせ",
    content:
      "個人情報の取り扱いに関するお問い合わせは、お問い合わせページよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        englishTitle="Privacy Policy"
        japaneseTitle="プライバシーポリシー"
        description="個人情報の取り扱いについて"
      />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-3 text-lg font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
