"use client";

import Container from "@/components/common/Container";
import FadeInView from "@/components/common/FadeInView";

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
                私たちはその課題をテクノロジーで解決し、レンタル業界全体のDXを推進します。
              </p>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
