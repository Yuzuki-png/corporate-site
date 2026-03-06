"use client";

import { Car, Globe, Navigation, Brain, Plug } from "lucide-react";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    icon: Car,
    catchPhrase: "在庫管理をリアルタイムに",
    description:
      "紙やExcelベースの車両管理をデジタル化。全拠点の在庫状況をリアルタイムで把握し、貸出・返却・メンテナンスの状態を一元管理します。オンライン予約との自動連携で、ダブルブッキングを防止し業務効率を大幅に改善します。",
    features: [
      "リアルタイム在庫管理",
      "マルチ拠点対応",
      "貸出・返却管理",
      "車両メンテナンス管理",
      "オンライン予約連携",
      "稼働率ダッシュボード",
    ],
    label: "レンタカー会社向けDX",
  },
  {
    icon: Globe,
    catchPhrase: "OTA・予約サイトと在庫を自動連携",
    description:
      "楽天トラベル、じゃらん等のOTA（オンライン旅行代理店）と在庫データを自動同期。複数の販売チャネルの在庫を一元管理し、手動更新の手間とダブルブッキングのリスクを解消します。",
    features: [
      "楽天トラベル連携",
      "じゃらん連携",
      "在庫自動同期",
      "料金一括管理",
      "予約自動取り込み",
      "チャネル別分析",
    ],
    label: "OTA接続",
  },
  {
    icon: Plug,
    catchPhrase: "レンタカー在庫をAPIで提供",
    description:
      "旅行アプリ、比較サイト、法人サービスなど、レンタカーの検索・予約機能を組み込みたい事業者向けにAPIを提供。リアルタイムの空車情報と料金を取得し、自社サービス内で予約まで完結できます。",
    features: [
      "在庫検索API",
      "料金取得API",
      "予約確定API",
      "リアルタイムデータ",
      "Webhookイベント通知",
      "APIドキュメント完備",
    ],
    label: "レンタカー在庫API",
  },
  {
    icon: Navigation,
    catchPhrase: "MaaS・モビリティサービスに統合",
    description:
      "MaaSアプリやモビリティプラットフォームにレンタカーを移動手段のひとつとして統合。電車・バス・タクシーと並んでレンタカーをシームレスに提案・予約できる環境を実現します。",
    features: [
      "MaaSプラットフォーム連携",
      "マルチモーダル対応",
      "位置情報連携",
      "シームレス予約",
      "料金比較データ",
      "乗り換え提案",
    ],
    label: "MaaS連携",
  },
  {
    icon: Brain,
    catchPhrase: "AIで最適な料金をリアルタイム算出",
    description:
      "季節・曜日・イベント・競合状況などを分析し、AIが最適な料金をリアルタイムで算出。手動の料金設定では実現できない、きめ細かな価格最適化で稼働率と収益を最大化します。",
    features: [
      "需要予測AI",
      "ダイナミックプライシング",
      "競合分析",
      "イベント考慮",
      "収益シミュレーション",
      "自動料金更新",
    ],
    label: "AI価格最適化",
  },
];

export default function SolutionList() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {solutions.map((solution, i) => (
        <div key={solution.label}>
          <span className="mb-2 inline-block rounded-full bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
            {solution.label}
          </span>
          <SolutionCard
            icon={solution.icon}
            catchPhrase={solution.catchPhrase}
            description={solution.description}
            features={solution.features}
            index={i}
          />
        </div>
      ))}
    </div>
  );
}
