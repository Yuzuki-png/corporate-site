"use client";

import { motion } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function FadeInView({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInViewProps) {
  const directionMap = {
    up: { x: 0, y: 30 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
