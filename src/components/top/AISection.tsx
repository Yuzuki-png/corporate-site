"use client";

import { Brain, Eye, TrendingUp } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const features = [
  {
    icon: Brain,
    title: "生成AI活用",
    description:
      "ChatGPT / Claude等の生成AIを業務フローに統合。問い合わせ対応の自動化、ドキュメント生成、データ分析を効率化します。",
  },
  {
    icon: Eye,
    title: "画像認識・車両検査AI",
    description:
      "車両の傷検出、在庫状態の自動判定など、画像認識AIで点検・検品業務を自動化します。",
  },
  {
    icon: TrendingUp,
    title: "需要予測・最適化",
    description:
      "過去データとAIで需要を予測。在庫配置の最適化、価格の動的設定で収益を最大化します。",
  },
];

export default function AISection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="AI Integration"
          title="AIを、現場の武器に"
          highlightedText="AI"
          description="最新のAI技術を業務に実装。生成AI、画像認識、需要予測など、御社の課題に最適なAIソリューションを提案から導入まで一貫して支援します。"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
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
