"use client";

import {
  Brain,
  BarChart3,
  Code,
  Package,
  Calendar,
  Cloud,
  Plug,
  Layers,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Brain,
    title: "AI導入支援",
    description:
      "生成AI、画像認識、需要予測など、最新のAI技術を御社の業務に実装。PoCから本番導入まで一貫して支援します。",
    tags: ["生成AI", "画像認識", "需要予測"],
  },
  {
    icon: BarChart3,
    title: "DXコンサルティング",
    description:
      "業務フローの可視化から改善提案、ツール選定、導入支援まで。現場に寄り添ったDX推進をサポートします。",
    tags: ["業務分析", "ロードマップ策定", "導入支援"],
  },
  {
    icon: Code,
    title: "業務システム開発",
    description:
      "御社の業務に最適化されたWebシステムをスクラッチ開発。既存ツールでは対応できない業務課題を解決します。",
    tags: ["Webアプリ", "管理画面", "ワークフロー"],
  },
  {
    icon: Package,
    title: "在庫管理システム",
    description:
      "リアルタイム在庫管理、マルチ拠点対応、バーコード/QR対応。レンタル業界の在庫管理に特化したシステムを提供します。",
    tags: ["リアルタイム", "マルチ拠点", "バーコード対応"],
  },
  {
    icon: Calendar,
    title: "予約管理システム",
    description:
      "オンライン予約、空き状況管理、自動メール通知。予約業務の完全デジタル化で、機会損失を防ぎます。",
    tags: ["オンライン予約", "空き管理", "自動通知"],
  },
  {
    icon: Cloud,
    title: "SaaS開発",
    description:
      "マルチテナント対応のSaaS製品を企画・開発。サブスクリプション課金、ユーザー管理、データ分析機能を標準装備。",
    tags: ["マルチテナント", "サブスクリプション", "スケーラブル"],
  },
  {
    icon: Plug,
    title: "API開発",
    description:
      "RESTful API、GraphQL、Webhookなど、御社のシステムに最適なAPIを設計・開発。外部連携の基盤を構築します。",
    tags: ["REST API", "GraphQL", "Webhook"],
  },
  {
    icon: Layers,
    title: "システム統合",
    description:
      "既存の基幹システム、会計ソフト、外部サービスをAPIで統合。データのサイロ化を解消し、業務全体を最適化します。",
    tags: ["データ統合", "レガシー連携", "自動化"],
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
