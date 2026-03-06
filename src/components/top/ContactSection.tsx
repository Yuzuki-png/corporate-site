"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import FadeInView from "@/components/common/FadeInView";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const category = formData.get("category") as string;
    const company = formData.get("company") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!category || !company || !name || !email || !message) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          englishLabel="Contact"
          title="お問い合わせ"
          description="導入検討・パートナー連携・取材など お気軽にご連絡ください"
        />
        <p className="mt-2 text-center text-sm text-muted-foreground">
          3営業日以内にご返信します
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          {submitted ? (
            <FadeInView>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted/50 px-6 py-16 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Check size={28} className="text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  送信が完了しました
                </h3>
                <p className="text-sm text-muted-foreground">
                  お問い合わせいただきありがとうございます。
                  <br />
                  3営業日以内にご返信いたします。
                </p>
              </div>
            </FadeInView>
          ) : (
            <FadeInView>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    お問い合わせ種別{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">選択してください</option>
                    <option value="introduction">導入検討</option>
                    <option value="partner">パートナー・API連携</option>
                    <option value="media">取材・メディア</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="株式会社○○"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="山田 太郎"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    メールアドレス{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@company.com"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    お問い合わせ内容{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="お問い合わせ内容をご記入ください。"
                    className="w-full resize-none rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-50 sm:w-auto"
                >
                  <Send size={16} />
                  {submitting ? "送信中..." : "送信する"}
                </button>
              </form>
            </FadeInView>
          )}
        </div>
      </Container>
    </section>
  );
}
