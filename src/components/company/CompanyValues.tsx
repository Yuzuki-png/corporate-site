"use client";

import { Plug, Layers, Rocket } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const values = [
  {
    icon: Plug,
    title: "APIファースト",
    description:
      "すべての機能をAPIとして設計。レンタカー在庫データを、誰でも簡単に活用できる形で提供します。",
  },
  {
    icon: Layers,
    title: "段階的アプローチ",
    description:
      "レンタカーの在庫管理DXから始め、API接続、OTA・MaaS連携へと段階的にサービスを拡大していきます。",
  },
  {
    icon: Rocket,
    title: "業界を変える",
    description:
      "レンタカー業界のデジタル化にとどまらず、あらゆるレンタル在庫をつなぐプラットフォームへと進化します。",
  },
];

export default function CompanyValues() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Values"
          title="私たちの価値観"
          highlightedText="価値観"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <FadeInView key={value.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <value.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
