import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from '@/components/Header';
import AppErrorBoundary, { LoadingFallback } from '@/components/ErrorBoundary';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyMile - Solutions de Véhicules Autonomes",
  description: "Prenez une longueur d'avance avec la conduite autonome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text`}
      >
        <AppErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Header />
            <SmoothScroll />
            {children}
          </Suspense>
        </AppErrorBoundary>
      </body>
    </html>
  );
}
