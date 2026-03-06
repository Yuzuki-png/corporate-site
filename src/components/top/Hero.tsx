"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          Linkvia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          レンタル業界の
          <br />
          <span className="gradient-text">インフラ</span>をつくる
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          AIとデータ活用で、Excelや紙に頼っていた
          <br className="hidden sm:block" />
          在庫・予約・稼働率の管理をまるごとDXします
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-80"
          >
            お問い合わせ
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold transition-colors hover:bg-muted"
          >
            機能を見る
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
