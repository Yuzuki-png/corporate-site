"use client";

import { Link as LinkIcon, Globe, Database } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const integrations = [
  {
    icon: LinkIcon,
    title: "基幹システム連携",
    description:
      "既存の業務システムや会計ソフトとシームレスにデータ連携。二重入力をなくします。",
  },
  {
    icon: Globe,
    title: "予約サイト統合",
    description:
      "楽天トラベル、じゃらん等のOTAや自社予約サイトの在庫を一元管理します。",
  },
  {
    icon: Database,
    title: "カスタムAPI開発",
    description:
      "御社の業務に合わせたカスタムAPIを設計・開発。柔軟な拡張性を実現します。",
  },
];

export default function APISection() {
  return (
    <section className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="API Integration"
          title="既存システムを、つなげて活かす"
          highlightedText="つなげて活かす"
          description="既存の基幹システム、会計ソフト、予約サイトとAPIで連携。データのサイロ化を解消し、業務全体を最適化します。"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {integrations.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
