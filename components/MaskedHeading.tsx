"use client";

import { motion } from "framer-motion";

interface MaskedHeadingProps {
  eyebrow?: string;
  lines: string[];
  subtext?: string;
}

/**
 * Reveals the headline one line at a time from behind a clip-path mask,
 * each line offset slightly so the reveal reads like it's being typeset
 * into place rather than fading in.
 */
export default function MaskedHeading({
  eyebrow,
  lines,
  subtext,
}: MaskedHeadingProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
      <h1 className="sr-only">{lines.join(" ")}</h1>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-hidden="true"
          className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-grid-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <div
        aria-hidden="true"
        className="flex flex-col items-center gap-1 md:gap-2"
      >
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)", y: "40%" }}
              animate={{ clipPath: "inset(0 0 0% 0)", y: "0%" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.12,
              }}
              className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.08] text-center"
            >
              {line}
            </motion.div>
          </div>
        ))}
      </div>

      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + lines.length * 0.12 + 0.2 }}
          className="mt-6 max-w-2xl mx-auto font-body text-base md:text-lg leading-relaxed text-muted text-center"
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
