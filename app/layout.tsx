import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jua",
});

export const metadata: Metadata = {
  title: "Morning Quest - 아침 대장정",
  description: "아이들이 스스로 준비하는 즐거운 아침 식사!",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${jua.variable} font-sans antialiased bg-yellow-50 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
