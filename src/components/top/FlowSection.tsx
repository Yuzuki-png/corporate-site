"use client";

import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    description: "フォームまたはお電話でお気軽にご連絡ください。担当者が1営業日以内にご返信します。",
  },
  {
    number: "02",
    title: "ヒアリング・デモ",
    description: "現状の課題や運用フローをヒアリングし、実際の管理画面を使ったデモをご提示します。",
  },
  {
    number: "03",
    title: "初期設定・データ移行",
    description: "既存データの移行、API接続、アカウント設定まで専任チームがサポートします。",
  },
  {
    number: "04",
    title: "運用開始",
    description: "操作説明会を実施後、本格稼働スタート。導入後も定期的な活用レビューで伴走します。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Flow"
          title="導入の流れ"
          highlightedText="導入の流れ"
          description="お問い合わせから最短1週間で運用開始。専任チームがスムーズな導入をサポートします。"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeInView key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="absolute -right-3 top-5 hidden text-muted-foreground/40 lg:block"
                  />
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
