"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const faqs = [
  {
    question: "導入にどれくらいの期間がかかりますか？",
    answer:
      "最短1週間で運用開始が可能です。既存データの移行量や連携システムの数によって前後しますが、専任チームがスムーズな導入をサポートします。",
  },
  {
    question: "初期費用はかかりますか？",
    answer:
      "初期費用は0円です。月額利用料のみでご利用いただけます。料金の詳細はお問い合わせください。",
  },
{
    question: "小規模な事業者でも利用できますか？",
    answer:
      "はい、車両数台の小規模事業者様から数百台規模の大手企業様まで、事業規模に合わせた柔軟なプランをご用意しています。",
  },
  {
    question: "データのセキュリティは大丈夫ですか？",
    answer:
      "SSL暗号化通信、データの定期バックアップ、アクセス権限管理など、万全のセキュリティ対策を実施しています。",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-semibold text-foreground">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="FAQ"
          title="よくある質問"
          highlightedText="よくある質問"
        />
        <FadeInView>
          <div className="mx-auto mt-16 max-w-3xl">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
