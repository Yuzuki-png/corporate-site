"use client";

import { Users, Layers, Handshake } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const values = [
  {
    icon: Users,
    title: "現場ファースト",
    description:
      "技術ありきではなく、現場の課題から始める。使う人の視点で設計し、本当に役立つシステムを作ります。",
  },
  {
    icon: Layers,
    title: "段階的アプローチ",
    description:
      "一度に全てをデジタル化するのではなく、効果の高い部分から段階的に。確実に成果を出しながら進めます。",
  },
  {
    icon: Handshake,
    title: "継続的な伴走",
    description:
      "導入して終わりではありません。運用・改善を継続的にサポートし、DXの定着と進化を支援します。",
  },
];

export default function CompanyValues() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Values"
          title="私たちの価値観"
          highlightedText="価値観"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <FadeInView key={value.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <value.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
