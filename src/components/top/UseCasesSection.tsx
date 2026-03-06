"use client";

import { Car, HardHat, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const useCases: {
  icon: LucideIcon;
  industry: string;
  title: string;
  points: string[];
}[] = [
  {
    icon: Car,
    industry: "レンタカー",
    title: "車両稼働率を最大化",
    points: [
      "車両ごとの予約状況をリアルタイム管理",
      "AIが需要を予測し最適な在庫配置を提案",
      "OTA・自社サイトの予約を一元管理",
    ],
  },
  {
    icon: HardHat,
    industry: "建機・重機レンタル",
    title: "現場の稼働をDXで効率化",
    points: [
      "機材の貸出・返却をデジタル管理",
      "メンテナンス時期をAIが自動通知",
      "複数拠点の在庫を横断的に把握",
    ],
  },
  {
    icon: Package,
    industry: "備品・機材レンタル",
    title: "多品目の在庫を一括管理",
    points: [
      "イベント機材・オフィス備品など多品目対応",
      "予約の重複・在庫切れを自動で防止",
      "稼働率データから不要在庫を可視化",
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section id="usecases" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Use Cases"
          title="活用シーン"
          highlightedText="活用シーン"
          description="さまざまなレンタル業種でLinkviaが活躍しています。"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => (
            <FadeInView key={uc.industry} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                    <uc.icon size={20} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {uc.industry}
                  </span>
                </div>
                <h3 className="mb-4 text-lg font-bold text-foreground">
                  {uc.title}
                </h3>
                <ul className="space-y-2">
                  {uc.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
