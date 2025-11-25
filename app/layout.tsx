import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font with optimized subsets
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Divack Vega - Growth Architect & RevOps Strategist",
  description: "I build revenue systems that scale. Strategic thinking + technical execution + real P&L responsibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}