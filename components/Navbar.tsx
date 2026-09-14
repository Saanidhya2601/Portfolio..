"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import PillNav, { type NavItem } from "./PillNav";
import BubbleMenu from "./BubbleMenu";
import { scrollToSection } from "@/lib/utils";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "home" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 inset-x-0 z-50 flex items-center justify-between md:justify-center px-4 md:px-0"
      >
        {/* Brand mark, docked left on mobile so the pill can stay centered on desktop */}
        <button
          onClick={() => scrollToSection("home")}
          className="md:absolute md:left-6 flex items-center gap-2 font-display text-sm font-bold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-panel font-mono text-xs text-signal">
            SC
          </span>
          <span className="hidden sm:inline">Saanidhya</span>
        </button>

        <PillNav items={NAV_ITEMS} activeId={activeId} />

        <a
          href="/Saanidhya_Chauhan_Resume.pdf"
          download
          className="hidden md:flex md:absolute md:right-6 items-center gap-2 rounded-full border border-line bg-panel px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-signal/50 hover:text-signal"
        >
          Resume
          <ArrowDownToLine className="h-3.5 w-3.5" />
        </a>
      </motion.header>

      <BubbleMenu items={NAV_ITEMS} activeId={activeId} />
    </>
  );
}
