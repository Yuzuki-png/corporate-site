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
    default: "Linkvia | レンタカー在庫をAPIでつなぐ",
    template: "%s | Linkvia",
  },
  description:
    "レンタカー在庫API。レンタカー会社の在庫管理DXと、旅行アプリ・MaaSへのリアルタイム在庫接続を提供。",
  keywords: [
    "レンタカーDX",
    "レンタカー在庫API",
    "在庫管理",
    "予約管理",
    "OTA連携",
    "MaaS",
    "リアルタイム在庫",
    "AI価格最適化",
  ],
  openGraph: {
    title: "Linkvia | レンタカー在庫をAPIでつなぐ",
    description:
      "レンタカー在庫API。レンタカー会社・旅行アプリ・MaaSをリアルタイム在庫で接続。",
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
