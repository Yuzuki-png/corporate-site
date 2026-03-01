"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "技術への情熱",
    description:
      "常に最新技術をキャッチアップし、最適なソリューションを追求し続けます。",
  },
  {
    icon: Users,
    title: "チームワーク",
    description:
      "多様なバックグラウンドを持つメンバーが協力し、シナジーを生み出します。",
  },
  {
    icon: Lightbulb,
    title: "イノベーション",
    description:
      "既存の枠にとらわれず、創造的なアプローチで課題を解決します。",
  },
  {
    icon: TrendingUp,
    title: "成長志向",
    description:
      "お客様の成功が私たちの成功。共に成長するパートナーシップを大切にしています。",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              テクノロジーの力で
              <br />
              <span className="gradient-text">社会を変える</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              NexTech
              Solutionsは2018年の創業以来、「テクノロジーで未来を創る」をミッションに掲げ、500以上のプロジェクトを成功に導いてきました。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              大手企業からスタートアップまで、お客様のビジネスフェーズに最適なテクノロジー戦略を提案。設計・開発・運用を一気通貫で支援し、真のデジタルトランスフォーメーションを実現します。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="text-3xl font-bold gradient-text">7年+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  業界経験
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  取引企業数
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  <value.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
