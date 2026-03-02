"use client";

import type { LucideIcon } from "lucide-react";
import FadeInView from "@/components/common/FadeInView";

interface SolutionCardProps {
  icon: LucideIcon;
  catchPhrase: string;
  description: string;
  features: string[];
  index: number;
}

export default function SolutionCard({
  icon: Icon,
  catchPhrase,
  description,
  features,
  index,
}: SolutionCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${isReversed ? "lg:[direction:rtl]" : ""}`}
    >
      <FadeInView
        direction={isReversed ? "right" : "left"}
        className={isReversed ? "lg:[direction:ltr]" : ""}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
          <Icon size={24} />
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {catchPhrase}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </FadeInView>

      <FadeInView
        direction={isReversed ? "left" : "right"}
        className={isReversed ? "lg:[direction:ltr]" : ""}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-center text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </div>
      </FadeInView>
    </div>
  );
}
