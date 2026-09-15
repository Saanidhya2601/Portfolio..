import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/PillNav";
import ShapeGridBackground from "@/components/ShapeGridBackground";
import "./globals.css";

// 1. Configure optimized local fonts with CSS variables
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
    // 2. Inject the font variables into the root HTML node
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} scroll-smooth`}
    >
      {/* 3. Keep the body clean and map to the Tailwind theme */}
      <body className="relative min-h-screen bg-void font-body text-ink antialiased selection:bg-signal/30">
        <MotionConfig reducedMotion="user">
          {/* Ensure this background has fixed positioning and a low z-index in its own file */}
          <ShapeGridBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </MotionConfig>
      </body>
    </html>
  );
}
