"use client";

import { Zap, HeadphonesIcon, Shield, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "最短1週間で導入可能",
    description:
      "既存のオペレーションを止めることなく、スムーズに移行。初期費用0円で始められます。",
  },
  {
    icon: HeadphonesIcon,
    title: "専任サポート体制",
    description:
      "導入から運用まで専任担当がサポート。レンタル業界を知るチームが伴走します。",
  },
  {
    icon: Shield,
    title: "レンタル業界に特化",
    description:
      "汎用ツールでは対応できないレンタル特有の業務フローに最適化された設計です。",
  },
  {
    icon: Settings,
    title: "柔軟なカスタマイズ",
    description:
      "API連携で既存システムと接続可能。事業規模や業種に合わせた柔軟な運用ができます。",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Why Linkvia"
          title="選ばれる理由"
          highlightedText="選ばれる理由"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <FadeInView key={reason.title} delay={i * 0.1}>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <reason.icon size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
