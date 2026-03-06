"use client";

import {
  Database,
  Globe,
  CalendarCheck,
  TrendingUp,
  Plug,
  Zap,
  Navigation,
  Brain,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Database,
    title: "在庫管理DX",
    description:
      "レンタカーの在庫状況をリアルタイムでデジタル管理。紙やExcelベースの管理から脱却し、全拠点の車両在庫を一元化します。",
    tags: ["リアルタイム", "マルチ拠点", "車両管理"],
  },
  {
    icon: Globe,
    title: "OTA接続",
    description:
      "楽天トラベル、じゃらん等のOTAと在庫を自動連携。販路拡大と在庫の一元管理を同時に実現し、ダブルブッキングを防止します。",
    tags: ["楽天トラベル", "じゃらん", "在庫同期"],
  },
  {
    icon: CalendarCheck,
    title: "予約管理",
    description:
      "オンライン予約から貸出・返却まで一気通貫で管理。24時間Web予約で機会損失を防ぎ、業務効率を向上させます。",
    tags: ["オンライン予約", "貸出管理", "返却管理"],
  },
  {
    icon: TrendingUp,
    title: "稼働率最適化",
    description:
      "データに基づく需要予測と在庫配置の最適化で、車両の稼働率と収益を最大化します。",
    tags: ["需要予測", "稼働率分析", "収益最大化"],
  },
  {
    icon: Plug,
    title: "レンタカー在庫API",
    description:
      "リアルタイムの車両在庫・料金データをAPIで提供。旅行アプリやMaaSプラットフォームに検索・予約機能を組み込めます。",
    tags: ["REST API", "リアルタイム", "在庫データ"],
  },
  {
    icon: Zap,
    title: "即時予約API",
    description:
      "API経由で空車確認から予約確定までリアルタイムで完結。接続先のユーザーに即座に予約完了を提供できます。",
    tags: ["即時確認", "予約確定", "リアルタイム"],
  },
  {
    icon: Navigation,
    title: "MaaS連携",
    description:
      "MaaSアプリやモビリティサービスにレンタカーを統合。移動手段のひとつとしてシームレスに提供できます。",
    tags: ["MaaS", "モビリティ", "統合"],
  },
  {
    icon: Brain,
    title: "AI価格最適化",
    description:
      "需要予測AIが季節・曜日・イベント等を分析し、最適な料金をリアルタイムで算出。稼働率と収益を最大化します。",
    tags: ["AI", "ダイナミックプライシング", "需要予測"],
  },
];

export default function ServiceList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((service, i) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          tags={service.tags}
          delay={i * 0.05}
        />
      ))}
    </div>
  );
}
