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
    default: "Linkvia | レンタル事業者のための統合管理プラットフォーム",
    template: "%s | Linkvia",
  },
  description:
    "AI×DXでレンタル事業者の在庫・予約・稼働率を一元管理する統合プラットフォーム。",
  keywords: [
    "レンタル管理",
    "在庫管理",
    "予約管理",
    "稼働率",
    "レンタル事業",
    "AI",
    "DX",
    "API連携",
  ],
  openGraph: {
    title: "Linkvia | レンタル事業者のための統合管理プラットフォーム",
    description:
      "レンタル事業者の在庫・予約・稼働率を一元管理する統合プラットフォーム。",
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
