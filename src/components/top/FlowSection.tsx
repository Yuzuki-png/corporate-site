"use client";

import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const steps = [
  { number: "01", title: "お問い合わせ", description: "フォームよりご連絡" },
  {
    number: "02",
    title: "ヒアリング・デモ",
    description: "課題をヒアリングし、デモをご提示",
  },
  { number: "03", title: "初期設定", description: "環境構築・データ移行" },
  { number: "04", title: "運用開始", description: "本格稼働スタート" },
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Flow"
          title="導入の流れ"
          highlightedText="導入の流れ"
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
                <p className="text-sm text-muted-foreground">
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
