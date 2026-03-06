"use client";

import {
  Database,
  CalendarCheck,
  BarChart3,
  Plug,
  Bell,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}[] = [
  {
    icon: Database,
    title: "在庫管理",
    description: "AIが車両・機材・備品の状況をリアルタイムで把握・最適化",
    details: [
      "拠点横断の在庫一覧表示",
      "ステータス自動更新（貸出中・整備中・空き）",
      "在庫不足・過剰をAIがアラート",
    ],
  },
  {
    icon: CalendarCheck,
    title: "予約管理",
    description: "予約の受付・変更・キャンセルを一元管理",
    details: [
      "カレンダー形式で予約状況を可視化",
      "ダブルブッキングを自動防止",
      "顧客への自動リマインド通知",
    ],
  },
  {
    icon: BarChart3,
    title: "稼働率の可視化",
    description: "AIによる需要予測で稼働率を最大化、ダッシュボードで可視化",
    details: [
      "日次・月次の稼働率レポート自動生成",
      "季節・曜日ごとの需要トレンド分析",
      "遊休資産の特定と改善提案",
    ],
  },
  {
    icon: Plug,
    title: "API連携",
    description: "外部サービスと在庫を接続し予約チャネルを拡大",
    details: [
      "主要OTA・予約サイトとリアルタイム同期",
      "会計・決済システムとの連携",
      "Webhook対応で他サービスへ通知",
    ],
  },
  {
    icon: Bell,
    title: "通知・アラート",
    description: "重要な変更やタスクを見逃さないリアルタイム通知",
    details: [
      "予約変更・キャンセルを即時通知",
      "メンテナンス期限のリマインド",
      "Slack・メール・LINEに対応",
    ],
  },
  {
    icon: FileText,
    title: "レポート・分析",
    description: "経営判断に必要なデータを自動で集計・レポート化",
    details: [
      "売上・稼働率・顧客データの月次レポート",
      "CSV・PDFでのエクスポート対応",
      "カスタムダッシュボード作成",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-alt py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Features"
          title="Linkviaの主な機能"
          highlightedText="主な機能"
          description="レンタル事業に必要な機能を、ひとつのプラットフォームに。"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeInView key={feature.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="space-y-1.5">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground/80"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/30" />
                      {detail}
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
