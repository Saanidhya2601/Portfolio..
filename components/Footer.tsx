"use client";

import { GitFork, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-0 w-full border-t border-line bg-void px-6 py-10 md:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-faint">
          © 2026 Saanidhya Chauhan. Built with Next.js, TypeScript &amp; Framer
          Motion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Saanidhya2601"
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-signal"
            aria-label="GitHub"
          >
            <GitFork className="h-4 w-4" />
          </a>
          <a
            href="mailto:saanidhyachauhan35@gmail.com"
            className="text-muted transition-colors hover:text-signal"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
const import