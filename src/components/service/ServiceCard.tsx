"use client";

import type { LucideIcon } from "lucide-react";
import FadeInView from "@/components/common/FadeInView";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeInView delay={delay}>
      <div className="group h-full rounded-2xl border border-border p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon size={24} />
        </div>
        <h3 className="mt-5 text-lg font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeInView>
  );
}
