"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInView from "./FadeInView";
import Container from "./Container";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "お問い合わせ",
  description = "レンタカー在庫のDX化やAPI接続について、お気軽にご相談ください。",
  buttonText = "お問い合わせする",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <FadeInView className="text-center">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-muted/50 px-8 py-16 sm:px-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-80"
            >
              {buttonText}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
