"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="hero-gradient grid-pattern relative overflow-hidden pt-20">
      <Container className="flex flex-col items-center justify-center py-28 sm:py-36 md:py-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
        >
          <Sparkles size={14} />
          AI × DX で業界を変革する
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          AIとDXで、
          <br />
          業界の<span className="gradient-text">在庫をつなぐ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          業務効率化から、次世代プラットフォームへ。
          <br className="hidden sm:block" />
          レンタル・観光・車両管理など、在庫を持つ業界のDXを支援します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-80"
          >
            無料相談を予約
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/service"
            className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold transition-colors hover:bg-muted"
          >
            サービスを見る
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: "50+", label: "導入企業数" },
            { value: "30%", label: "平均業務効率化" },
            { value: "5", label: "業界対応" },
            { value: "24/7", label: "サポート体制" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
