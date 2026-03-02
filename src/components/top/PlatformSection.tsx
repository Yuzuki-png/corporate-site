"use client";

import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const visionSteps = [
  { label: "業務DX", description: "紙・Excel業務のデジタル化" },
  { label: "SaaS化", description: "クラウドベースのサービス化" },
  { label: "在庫統合", description: "複数拠点の在庫を一元化" },
  { label: "API連携", description: "外部システムとの接続" },
  { label: "業界接続", description: "事業者間プラットフォーム" },
];

export default function PlatformSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Platform Vision"
          title="業界をつなぐプラットフォームへ"
          highlightedText="プラットフォーム"
          description="個社のDXにとどまらず、業界全体をつなぐプラットフォームの構築を目指しています。在庫の共有、事業者間連携で、業界全体の効率化を実現します。"
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
                  <p className="mt-1 max-w-[120px] text-xs text-muted-foreground">
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
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            まずは1社のDXから。そこから業界全体を変えるプラットフォームへと段階的に進化させます。
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
