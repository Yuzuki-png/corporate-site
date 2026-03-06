"use client";

import { Plug, Zap, Navigation } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const features = [
  {
    icon: Plug,
    title: "レンタカー在庫API",
    description:
      "リアルタイムの車両在庫・料金データをAPIで取得。自社サービスにレンタカー検索・予約機能を簡単に組み込めます。",
  },
  {
    icon: Zap,
    title: "即時予約",
    description:
      "API経由で空車確認から予約確定までをリアルタイムで完結。ユーザーに即座に予約完了を提供できます。",
  },
  {
    icon: Navigation,
    title: "MaaS連携",
    description:
      "MaaSアプリやモビリティサービスにレンタカーを統合。移動手段のひとつとしてシームレスに提供できます。",
  },
];

export default function DXSection() {
  return (
    <section className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="For Partners"
          title="接続先向け"
          highlightedText="接続先"
          description="旅行アプリ、MaaSプラットフォーム、OTAなど、レンタカー在庫を活用したいパートナー向けのAPI接続を提供します。"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <FadeInView key={feature.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
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
