"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  Brain,
  Shield,
  Smartphone,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web開発",
    description:
      "Next.js、React を活用したハイパフォーマンスなWebアプリケーションを構築。SEO対策からUX設計まで一貫して対応します。",
    features: ["SPA / SSR / SSG", "レスポンシブデザイン", "パフォーマンス最適化"],
  },
  {
    icon: Cloud,
    title: "クラウドインフラ",
    description:
      "AWS、GCP、Azure を駆使した堅牢なインフラ構築。スケーラブルで信頼性の高いシステムを実現します。",
    features: [
      "マルチクラウド対応",
      "自動スケーリング",
      "24/7 モニタリング",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML ソリューション",
    description:
      "機械学習・生成AIを活用した業務効率化。データ分析から予測モデル構築、チャットボット開発まで。",
    features: ["生成AI導入支援", "予測分析", "自然言語処理"],
  },
  {
    icon: Shield,
    title: "セキュリティ",
    description:
      "脆弱性診断から対策実装まで包括的なセキュリティサービス。ゼロトラストアーキテクチャの導入を支援します。",
    features: ["脆弱性診断", "ゼロトラスト設計", "インシデント対応"],
  },
  {
    icon: Smartphone,
    title: "モバイルアプリ",
    description:
      "React Native / Flutter によるクロスプラットフォーム開発。iOS・Android を同時に高品質で提供します。",
    features: [
      "クロスプラットフォーム",
      "ネイティブUI",
      "プッシュ通知統合",
    ],
  },
  {
    icon: BarChart3,
    title: "DX コンサルティング",
    description:
      "業務プロセスの可視化と改善提案。最適なテクノロジー選定からチーム構築まで、DX推進を伴走支援します。",
    features: ["業務プロセス改善", "技術選定支援", "チームビルディング"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            ビジネスを加速させる
            <span className="gradient-text">サービス</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            戦略策定から実装、運用まで。お客様のニーズに合わせた最適なソリューションを提供します。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white">
                <service.icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
