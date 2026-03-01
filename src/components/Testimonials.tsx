"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "田中 太郎",
    role: "CTO",
    company: "株式会社テックフォワード",
    content:
      "NexTechのチームは、私たちのビジョンを完璧に理解し、期待を超えるシステムを構築してくれました。技術力だけでなく、コミュニケーション力も非常に高く、安心してプロジェクトを任せられます。",
  },
  {
    name: "佐藤 花子",
    role: "代表取締役",
    company: "グリーンヘルスケア株式会社",
    content:
      "AI導入に不安がありましたが、丁寧なヒアリングと段階的な導入提案で、スムーズにDXを推進できました。導入後のサポートも手厚く、長期的なパートナーとして信頼しています。",
  },
  {
    name: "山田 健一",
    role: "プロダクトマネージャー",
    company: "株式会社ネクストコマース",
    content:
      "ECサイトのリニューアルを依頼しましたが、ページ表示速度が3倍になり、コンバージョン率が40%向上しました。データに基づく改善提案は、まさにプロフェッショナルです。",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            お客様の<span className="gradient-text">声</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            実際にサービスをご利用いただいたお客様からの評価です。
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <Quote size={24} className="text-primary/30" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {testimonial.content}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} / {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
