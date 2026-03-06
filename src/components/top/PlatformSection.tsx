"use client";

import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const visionSteps = [
  { label: "レンタカーDX", description: "在庫管理のデジタル化" },
  { label: "在庫API", description: "リアルタイム在庫を外部配信" },
  { label: "OTA・MaaS接続", description: "旅行・モビリティと連携" },
  { label: "レンタル在庫OS", description: "あらゆるレンタル在庫を統合" },
];

export default function PlatformSection() {
  return (
    <section className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Vision"
          title="レンタル在庫プラットフォームへ"
          highlightedText="プラットフォーム"
          description="レンタカーから始まり、すべてのレンタル在庫をデジタル化することを目指しています。"
        />

        <FadeInView className="mt-16">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
            {visionSteps.map((step, i) => (
              <div
                key={step.label}
                className="flex items-center gap-4 sm:gap-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-sm font-bold text-white ${
                      i === visionSteps.length - 1
                        ? "bg-gradient-to-br from-primary to-accent"
                        : "bg-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mt-3 text-sm font-bold">{step.label}</h4>
                  <p className="mt-1 max-w-[140px] text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {i < visionSteps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="hidden shrink-0 text-border sm:mx-4 sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView className="mt-12 text-center">
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">表</p>
                <p className="mt-1 text-lg font-bold">レンタカー</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-xs text-muted-foreground">裏</p>
                <p className="mt-1 text-lg font-bold gradient-text">レンタルOS</p>
              </div>
            </div>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
