"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, ChevronDown } from "lucide-react";
import MaskedHeading from "./MaskedHeading";
import SkillsBento from "./SkillsBento";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    // Added min-h-[100dvh] and padding to ensure it frames perfectly on all devices
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center text-center gap-10 px-4 pt-24 pb-16">
      <MaskedHeading
        eyebrow="Enterprise Full-Stack Engineer"
        lines={["Architecting B2B SaaS", "& scalable platforms."]}
        subtext="I engineer production-ready web applications with Next.js, React, and Node.js. Specializing in complex data modeling (PostgreSQL, MongoDB) and high-performance, accessible user interfaces."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-wrap items-center justify-center gap-4 z-10"
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="group flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-medium text-void transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          View architecture
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <a
          href="/Saanidhya_Chauhan_Resume.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink bg-void/50 backdrop-blur-sm transition-colors hover:border-signal/50 hover:text-signal"
        >
          Download resume
          <ArrowDownToLine className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col items-center gap-3 mt-4 z-10"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          Current Stack
        </span>
        <SkillsBento />
      </motion.div>

      <motion.button
        onClick={() => scrollToSection("projects")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.4 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint hover:text-signal transition-colors z-10"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
