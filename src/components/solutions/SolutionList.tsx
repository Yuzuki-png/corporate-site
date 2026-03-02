"use client";

import { Car, Package, MapPin, Wrench, Truck } from "lucide-react";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    icon: Car,
    catchPhrase: "貸出・返却をデジタルで完結",
    description:
      "紙の点検記録をデジタル化し、貸出・返却時の車両点検を効率化。デジタル署名、損傷記録のマッピング、写真撮影機能で、現場の業務時間を大幅削減します。在庫管理、予約管理、顧客管理をワンストップで実現するレンタカー業界向けの総合DXソリューション。",
    features: [
      "デジタル車両点検",
      "損傷マッピング",
      "在庫リアルタイム管理",
      "オンライン予約",
      "顧客管理",
      "売上分析",
    ],
    label: "レンタカーDX",
  },
  {
    icon: Package,
    catchPhrase: "あらゆるレンタル在庫を一元管理",
    description:
      "衣装、機材、家具、イベント用品など、あらゆるレンタル在庫の管理をデジタル化。在庫の状態管理、メンテナンススケジュール、レンタル履歴を一元管理し、稼働率の最大化を支援します。",
    features: [
      "在庫状態管理",
      "メンテナンス管理",
      "レンタル履歴追跡",
      "料金自動計算",
      "延滞管理",
      "稼働率分析",
    ],
    label: "レンタルDX",
  },
  {
    icon: MapPin,
    catchPhrase: "観光体験をデジタルでつなぐ",
    description:
      "観光施設の予約管理、チケット販売、多言語対応、顧客データ分析。観光事業者のDXを総合的に支援し、訪日客の受け入れ体制も強化します。",
    features: [
      "予約・チケット管理",
      "多言語対応",
      "QRチケット",
      "顧客分析",
      "OTA連携",
      "キャッシュレス決済",
    ],
    label: "観光DX",
  },
  {
    icon: Wrench,
    catchPhrase: "設備の稼働を最大化する",
    description:
      "建設機械、産業設備、医療機器などの設備レンタル管理を効率化。GPSトラッキング、メンテナンスアラート、稼働率分析で、設備資産の最大活用を実現します。",
    features: [
      "GPS位置追跡",
      "メンテナンスアラート",
      "稼働率モニタリング",
      "契約管理",
      "配送スケジュール",
      "コスト分析",
    ],
    label: "設備管理DX",
  },
  {
    icon: Truck,
    catchPhrase: "車両フリートを一元管理",
    description:
      "社用車、配送車両、特殊車両などのフリート管理をデジタル化。車検・保険管理、燃費分析、ドライバー管理を統合し、車両コストの最適化を実現します。",
    features: [
      "車検・保険管理",
      "燃費分析",
      "ドライバー管理",
      "運行記録",
      "車両点検デジタル化",
      "コスト最適化",
    ],
    label: "車両管理DX",
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
