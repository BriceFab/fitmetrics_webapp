import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import React from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitMetrics",
  description: "FitMetrics",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
    params: Promise<{ lang: 'en' | 'fr' }>,
}>) {
    const { lang } = await params

  return (
      <html lang={lang}>
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
          <header>
              <Link
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="/"
              >
                  Retour home
              </Link>
          </header>
              {children}
          </body>
      </html>
  );
}
