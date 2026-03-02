import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Linkvia | AIとDXで、業界の在庫をつなぐ",
    template: "%s | Linkvia",
  },
  description:
    "AI導入支援、DXコンサルティング、在庫管理/予約管理SaaS開発。レンタカー・レンタル・観光業界のDXを支援するテクノロジー企業。",
  keywords: [
    "AI導入",
    "DX",
    "レンタカーDX",
    "在庫管理",
    "予約管理",
    "SaaS",
    "業務効率化",
    "レンタル管理",
  ],
  openGraph: {
    title: "Linkvia | AIとDXで、業界の在庫をつなぐ",
    description:
      "AI導入支援、DXコンサルティング、在庫管理/予約管理SaaS開発。レンタカー・レンタル・観光業界のDXを支援。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
