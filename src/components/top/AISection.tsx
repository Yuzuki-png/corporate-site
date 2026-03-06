"use client";

import { Database, Globe, CalendarCheck, TrendingUp } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const features = [
  {
    icon: Database,
    title: "在庫管理DX",
    description:
      "車両の在庫状況をリアルタイムでデジタル管理。紙やExcelからの脱却で、業務効率を大幅に向上させます。",
  },
  {
    icon: Globe,
    title: "OTA接続",
    description:
      "楽天トラベル、じゃらん等の予約サイトと在庫を自動連携。販路拡大と在庫の一元管理を同時に実現します。",
  },
  {
    icon: CalendarCheck,
    title: "予約管理",
    description:
      "オンライン予約から貸出・返却まで一気通貫。24時間Web予約で機会損失を防ぎます。",
  },
  {
    icon: TrendingUp,
    title: "稼働率最適化",
    description:
      "データに基づく需要予測と価格最適化で、車両の稼働率と収益を最大化します。",
  },
];

export default function AISection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="For Rental Car Companies"
          title="レンタカー会社向け"
          highlightedText="レンタカー会社"
          description="在庫管理から予約・OTA連携まで、レンタカー業務のDXをワンストップで支援します。"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
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
