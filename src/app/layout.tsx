import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "NexTech Solutions | テクノロジーで未来を創る",
  description:
    "NexTech Solutionsは、最先端のテクノロジーでビジネスの成長を加速させるITソリューション企業です。Web開発、クラウドインフラ、AI導入支援を提供します。",
  keywords: [
    "IT企業",
    "Web開発",
    "クラウド",
    "AI",
    "DX",
    "システム開発",
    "テクノロジー",
  ],
  openGraph: {
    title: "NexTech Solutions | テクノロジーで未来を創る",
    description:
      "最先端のテクノロジーでビジネスの成長を加速させるITソリューション企業",
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
        {children}
      </body>
    </html>
  );
}
