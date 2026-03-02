"use client";

import FadeInView from "./FadeInView";

interface SectionHeaderProps {
  englishLabel: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  englishLabel,
  title,
  highlightedText,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <FadeInView className={alignClass}>
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        {englishLabel}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {highlightedText ? (
          <>
            {title.split(highlightedText)[0]}
            <span className="gradient-text">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </FadeInView>
  );
}
