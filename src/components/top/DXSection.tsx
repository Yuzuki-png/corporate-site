"use client";

import { Search, Map, Settings, RefreshCw } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "業務分析",
    description: "現場ヒアリングと業務フロー可視化で、真の課題を特定します。",
  },
  {
    icon: Map,
    step: "02",
    title: "戦略策定",
    description:
      "費用対効果の高いDXロードマップを策定。優先順位を明確にします。",
  },
  {
    icon: Settings,
    step: "03",
    title: "システム導入",
    description:
      "段階的にデジタルツールを導入。現場に無理のない移行を実現します。",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "運用・改善",
    description: "導入後も継続的に効果測定と改善を繰り返し、定着を支援します。",
  },
];

export default function DXSection() {
  return (
    <section className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="DX Consulting"
          title="紙とExcelから卒業する"
          highlightedText="卒業"
          description="現場のリアルな課題を深く理解し、最適なデジタル化の道筋を描きます。段階的な導入で、確実にDXを実現。"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-border bg-white p-8">
                <span className="text-4xl font-extrabold text-primary/10">
                  {item.step}
                </span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
