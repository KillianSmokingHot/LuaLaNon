import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Lụa Là Nón — Nón lá trong tay, Việt Nam bên mình",
  description:
    "Móc khóa nón lá lụa cá nhân hóa — giải pháp quà tặng linh hoạt cho cá nhân và tổ chức. Thẩm mỹ cao, báo giá rõ ràng, đáp ứng nhanh.",
  keywords:
    "móc khóa nón lá, quà tặng cá nhân hóa, quà doanh nghiệp, quà tặng CLB, lưu niệm Việt, nón lá lụa",
  openGraph: {
    title: "Lụa Là Nón — Nón lá trong tay, Việt Nam bên mình",
    description:
      "Móc khóa nón lá lụa cá nhân hóa — quà tặng có dấu ấn riêng cho cá nhân và tổ chức.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased overflow-x-hidden font-body">{children}</body>
    </html>
  );
}
