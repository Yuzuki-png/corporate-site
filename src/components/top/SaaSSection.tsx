"use client";

import {
  Check,
  Database,
  CalendarCheck,
  Users,
  ClipboardCheck,
  BarChart3,
  Building2,
} from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const features = [
  {
    icon: Database,
    title: "リアルタイム在庫管理",
    description: "全拠点の在庫をリアルタイムに一元管理",
  },
  {
    icon: CalendarCheck,
    title: "オンライン予約システム",
    description: "24時間Web予約で機会損失を防止",
  },
  {
    icon: Users,
    title: "顧客管理（CRM）",
    description: "顧客情報と取引履歴を一元管理",
  },
  {
    icon: ClipboardCheck,
    title: "車両・機材点検管理",
    description: "デジタル点検記録で品質管理を効率化",
  },
  {
    icon: BarChart3,
    title: "売上・稼働率分析",
    description: "ダッシュボードでKPIをリアルタイム可視化",
  },
  {
    icon: Building2,
    title: "マルチ拠点対応",
    description: "複数店舗の在庫と予約を統合管理",
  },
];

export default function SaaSSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeInView direction="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              SaaS Development
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              在庫と予約を、
              <br />
              <span className="gradient-text">ひとつのシステム</span>で
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              レンタル業界に特化した在庫管理・予約管理SaaSを開発。リアルタイムの在庫把握、オンライン予約、顧客管理をワンストップで実現します。
            </p>
          </FadeInView>

          <FadeInView direction="right">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-xl border border-border p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <feature.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
