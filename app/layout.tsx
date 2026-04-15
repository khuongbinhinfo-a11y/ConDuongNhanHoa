import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const legacyMetadata: Metadata = {
  title: "Con Đường Nhân Hòa",
  description: "Homepage framework theo phong cách editorial wellness.",
};

export const metadata: Metadata = {
  title: "Thông Tin Lành Mạnh",
  description: "Nền tảng nội dung thiện lành cho đời sống tích cực, bắt đầu từ gốc rễ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
