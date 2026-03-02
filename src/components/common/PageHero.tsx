"use client";

import { motion } from "framer-motion";
import Container from "./Container";

interface PageHeroProps {
  englishTitle: string;
  japaneseTitle: string;
  description: string;
}

export default function PageHero({
  englishTitle,
  japaneseTitle,
  description,
}: PageHeroProps) {
  return (
    <section className="grid-pattern border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {englishTitle}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {japaneseTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      </Container>
    </section>
  );
}
