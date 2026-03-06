"use client";

import { Plug, Database, Brain } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const techFeatures = [
  {
    icon: Plug,
    title: "API",
    description:
      "RESTful APIでレンタカー在庫データを提供。検索・予約・キャンセルなど、必要な機能をすべてAPI経由で利用可能です。",
  },
  {
    icon: Database,
    title: "リアルタイム在庫",
    description:
      "レンタカー会社の在庫情報をリアルタイムで集約・配信。常に最新の空車状況を提供し、ダブルブッキングを防止します。",
  },
  {
    icon: Brain,
    title: "AI価格最適化",
    description:
      "需要予測AIが季節・曜日・イベント等を分析し、最適な料金をリアルタイムで算出。稼働率と収益を最大化します。",
  },
];

export default function SaaSSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Technology"
          title="テクノロジー"
          highlightedText="テクノロジー"
          description="レンタカー在庫のデジタル化と流通を支える、3つの技術基盤。"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {techFeatures.map((feature, i) => (
            <FadeInView key={feature.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
