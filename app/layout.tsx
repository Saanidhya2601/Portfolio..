import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/PillNav";
import ShapeGridBackground from "@/components/ShapeGridBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saanidhya Chauhan | Full-Stack Developer",
  description:
    "Portfolio of Saanidhya Chauhan, a full-stack developer building type-safe, production-ready web applications with React, Next.js, TypeScript and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Space Grotesk (display), Inter (body) and JetBrains Mono (labels/code)
            are referenced by literal name in app/globals.css's @theme block,
            so they're loaded here as real webfonts rather than via next/font,
            which would otherwise scope them under a generated family name. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen bg-void font-body text-ink antialiased selection:bg-signal/30">
        <MotionConfig reducedMotion="user">
          <ShapeGridBackground />
          <Navbar />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
