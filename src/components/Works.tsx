"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    category: "ECプラットフォーム",
    title: "次世代ECサイト構築",
    description:
      "大手アパレル企業向けに、ヘッドレスCMS + Next.js で構築した高速ECプラットフォーム。月間100万PVを処理。",
    tags: ["Next.js", "Shopify", "AWS"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "AI / SaaS",
    title: "AI搭載カスタマーサポート",
    description:
      "生成AIを活用した自動応答システム。問い合わせ対応時間を70%削減し、顧客満足度を大幅に向上。",
    tags: ["OpenAI", "Python", "React"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "フィンテック",
    title: "リアルタイム決済基盤",
    description:
      "金融機関向けのリアルタイム決済処理システム。マイクロサービスアーキテクチャで99.99%の可用性を実現。",
    tags: ["Go", "Kubernetes", "GCP"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    category: "ヘルスケア",
    title: "医療データ分析プラットフォーム",
    description:
      "医療機関向けデータ分析ダッシュボード。患者データの可視化と予測分析により、医療品質の向上に貢献。",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">実績</span>紹介
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            さまざまな業界で、お客様のビジネス課題を解決してきました。
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {project.category}
                  </span>
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
