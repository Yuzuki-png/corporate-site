"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            お気軽に<span className="gradient-text">ご相談</span>ください
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            プロジェクトのご相談、お見積もり、技術的な質問など、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold">連絡先情報</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              お問い合わせフォームまたは下記の連絡先から、お気軽にご連絡ください。通常1営業日以内にご返信いたします。
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">メール</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">
                    contact@nextech-solutions.jp
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">電話</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">
                    03-1234-5678
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">所在地</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">
                    〒100-0001
                    <br />
                    東京都千代田区丸の内1-1-1
                    <br />
                    NexTechビル 8F
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="山田 太郎"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  会社名
                </label>
                <input
                  type="text"
                  placeholder="株式会社○○"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@company.com"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <select className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="">選択してください</option>
                <option value="web">Web開発</option>
                <option value="cloud">クラウドインフラ</option>
                <option value="ai">AI / ML ソリューション</option>
                <option value="security">セキュリティ</option>
                <option value="mobile">モバイルアプリ</option>
                <option value="dx">DXコンサルティング</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="プロジェクトの概要や、ご質問内容をご記入ください。"
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              <Send size={16} />
              送信する
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
