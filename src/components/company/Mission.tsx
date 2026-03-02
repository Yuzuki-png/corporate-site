"use client";

import Container from "@/components/common/Container";
import FadeInView from "@/components/common/FadeInView";

export default function Mission() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl space-y-16 text-center">
          <FadeInView>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Mission
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              テクノロジーの力で、
              <br />
              業界の&quot;当たり前&quot;を変える
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              レンタル業界・観光業界をはじめ、在庫管理が必要な業界では、まだ多くの業務が紙やExcel、電話で行われています。私たちは、AIとDXの力で現場の業務を効率化し、さらに業界全体をつなぐプラットフォームの構築を目指しています。
            </p>
          </FadeInView>

          <FadeInView>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Vision
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              業界の在庫をつなぎ、
              <br />
              <span className="gradient-text">新しい価値を創造する</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              個社のDXから始まり、SaaS化、在庫統合、API連携を経て、業界全体が接続されるプラットフォームの実現を目指します。
            </p>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
