"use client";

import Container from "@/components/common/Container";
import FadeInView from "@/components/common/FadeInView";

const profileData = [
  { label: "会社名", value: "Linkvia株式会社" },
  { label: "設立", value: "2024年" },
  { label: "所在地", value: "沖縄県那覇市" },
  { label: "代表", value: "代表取締役 ○○ ○○" },
  {
    label: "事業内容",
    value: "レンタカー在庫API、レンタカーDX支援、在庫管理システム開発",
  },
  {
    label: "対象業界",
    value: "レンタカー、旅行・OTA、MaaS・モビリティ",
  },
];

export default function CompanyProfile() {
  return (
    <section className="section-alt py-24 sm:py-32">
      <Container>
        <FadeInView>
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Company Profile
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              会社概要
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
              {profileData.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:gap-8 ${
                    i !== profileData.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <dt className="w-32 shrink-0 text-sm font-semibold text-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-muted-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
