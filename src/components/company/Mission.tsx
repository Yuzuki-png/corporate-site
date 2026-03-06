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
              レンタカー在庫を
              <br />
              <span className="gradient-text">APIでつなぐ</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              レンタカー業界では、在庫管理や予約管理がまだ電話・FAX・Excelで行われていることが少なくありません。私たちは、レンタカーの在庫をリアルタイムでデジタル化し、APIを通じて旅行アプリやMaaSプラットフォームと接続することで、業界全体の効率化を推進します。
            </p>
          </FadeInView>

          <FadeInView>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Vision
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              私たちはレンタカーから始まり
              <br />
              すべてのレンタル在庫を
              <br />
              <span className="gradient-text">デジタル化することを目指しています</span>
            </h2>
            <div className="mt-8 mx-auto max-w-sm rounded-2xl border border-border p-6">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">表</p>
                  <p className="mt-1 text-xl font-bold">レンタカー</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">裏</p>
                  <p className="mt-1 text-xl font-bold gradient-text">レンタルOS</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
