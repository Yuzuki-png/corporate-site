import { Github, Twitter } from "lucide-react";

const footerLinks = {
  サービス: [
    "Web開発",
    "クラウドインフラ",
    "AI / ML ソリューション",
    "セキュリティ",
    "モバイルアプリ",
    "DXコンサルティング",
  ],
  企業情報: ["会社概要", "ミッション", "チーム", "採用情報", "ニュース"],
  サポート: [
    "お問い合わせ",
    "よくある質問",
    "プライバシーポリシー",
    "利用規約",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="text-lg font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Nex<span className="gradient-text">Tech</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              テクノロジーで未来を創る。最先端の技術で、ビジネスの成長を加速させます。
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NexTech Solutions Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
