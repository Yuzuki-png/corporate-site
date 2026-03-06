"use client";

import { Database, CalendarCheck, BarChart3, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Database,
    title: "在庫管理",
    description: "AIが車両・機材・備品の状況をリアルタイムで把握・最適化",
  },
  {
    icon: CalendarCheck,
    title: "予約管理",
    description: "予約の受付・変更・キャンセルを一元管理",
  },
  {
    icon: BarChart3,
    title: "稼働率の可視化",
    description: "AIによる需要予測で稼働率を最大化、ダッシュボードで可視化",
  },
  {
    icon: Plug,
    title: "API連携",
    description: "外部サービスと在庫を接続し予約チャネルを拡大",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Features"
          title="Linkviaの主な機能"
          highlightedText="主な機能"
          description="レンタル事業に必要な機能を、ひとつのプラットフォームに。"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeInView key={feature.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
