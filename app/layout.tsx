import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    default: "DevPod - Modern Developer Blog",
    template: "%s | DevPod",
  },
  description:
    "A modern developer blog featuring articles about web development, JavaScript, React, Next.js, and frontend technologies.",
  keywords: [
    "web development",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "frontend",
    "blog",
  ],
  authors: [{ name: "DevPod Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devpod.vercel.app",
    title: "DevPod - Modern Developer Blog",
    description:
      "A modern developer blog featuring articles about web development, JavaScript, React, Next.js, and frontend technologies.",
    siteName: "DevPod",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPod - Modern Developer Blog",
    description:
      "A modern developer blog featuring articles about web development, JavaScript, React, Next.js, and frontend technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
