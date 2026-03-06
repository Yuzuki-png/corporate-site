"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import FadeInView from "@/components/common/FadeInView";

export default function ContactInfo() {
  return (
    <FadeInView direction="left">
      <h3 className="text-xl font-bold">お気軽にご連絡ください</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        レンタカー在庫のDX化やAPI接続について、お気軽にご相談ください。通常1営業日以内にご返信いたします。
      </p>

      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
            <Mail size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold">メール</div>
            <div className="mt-0.5 text-sm text-muted-foreground">
              contact@linkvia.jp
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
            <Phone size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold">電話</div>
            <div className="mt-0.5 text-sm text-muted-foreground">
              098-XXX-XXXX
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
            <MapPin size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold">所在地</div>
            <div className="mt-0.5 text-sm text-muted-foreground">
              沖縄県那覇市
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}
