import Link from "next/link";

const footerLinks = {
  サービス: [
    { label: "AI導入支援", href: "/service" },
    { label: "DXコンサルティング", href: "/service" },
    { label: "業務システム開発", href: "/service" },
    { label: "SaaS開発", href: "/service" },
  ],
  ソリューション: [
    { label: "レンタカーDX", href: "/solutions" },
    { label: "レンタルDX", href: "/solutions" },
    { label: "観光DX", href: "/solutions" },
    { label: "設備管理DX", href: "/solutions" },
  ],
  企業情報: [
    { label: "会社概要", href: "/company" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "プライバシーポリシー", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="text-sm font-bold text-white">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Link<span className="gradient-text">via</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AIとDXで、業界の在庫をつなぐ。レンタル・観光・車両管理業界のデジタル変革を支援します。
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground">
                {category}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Linkvia Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
