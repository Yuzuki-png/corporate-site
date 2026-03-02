"use client";

import { Send } from "lucide-react";
import FadeInView from "@/components/common/FadeInView";

export default function ContactForm() {
  return (
    <FadeInView direction="right">
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="山田 太郎"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">会社名</label>
            <input
              type="text"
              placeholder="株式会社○○"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@company.com"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">電話番号</label>
            <input
              type="tel"
              placeholder="090-1234-5678"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            ご相談内容 <span className="text-red-500">*</span>
          </label>
          <select className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
            <option value="">選択してください</option>
            <option value="ai">AI導入支援</option>
            <option value="dx">DXコンサルティング</option>
            <option value="inventory">在庫管理システム</option>
            <option value="reservation">予約管理システム</option>
            <option value="saas">SaaS開発</option>
            <option value="api">API開発・システム統合</option>
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
            className="w-full resize-none rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 sm:w-auto"
        >
          <Send size={16} />
          送信する
        </button>
      </form>
    </FadeInView>
  );
}
