"use client";

import { TrendingUp, Globe, Cpu } from "lucide-react";
import Container from "@/components/common/Container";
import FadeInView from "@/components/common/FadeInView";

const values = [
  {
    icon: Cpu,
    title: "AIで業務を自動化",
    description:
      "需要予測・在庫最適化・稼働分析をAIが自動で行い、属人的な判断に頼らない経営を実現します。",
  },
  {
    icon: Globe,
    title: "業界・業種をつなぐ",
    description:
      "レンタカー・建機・備品など異なる業種間のデータを接続し、業界横断のエコシステムを構築します。",
  },
  {
    icon: TrendingUp,
    title: "データドリブンな経営へ",
    description:
      "散在していたデータを一元化し、稼働率・売上・トレンドをリアルタイムで可視化。意思決定を加速します。",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl space-y-16 text-center">
          <FadeInView>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Mission
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              レンタル業界の
              <span className="gradient-text">インフラ</span>になる
            </h2>
          </FadeInView>

          <FadeInView>
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                私たちについて
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                日本のレンタル業界は、在庫管理・予約管理・稼働率最適化において多くの非効率が残っています。
                Excelや紙での管理、電話・FAXでのやり取り、属人化したオペレーション。
                私たちはこれらの課題をAIとテクノロジーで解決し、レンタル事業者が本業に集中できるインフラを提供します。
              </p>
            </div>
          </FadeInView>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          {values.map((value, i) => (
            <FadeInView key={value.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                  <value.icon size={28} />
                </div>
                <h4 className="mb-2 text-base font-bold text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
