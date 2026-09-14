"use client";

import { motion } from "framer-motion";
import { cn, scrollToSection } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
}

export default function PillNav({
  items = [],
  activeId,
  className,
}: {
  items?: NavItem[];
  activeId: string;
  className?: string;
}) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "hidden md:flex items-center gap-1 rounded-full border border-line bg-panel/70 p-1.5 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
              isActive ? "text-void" : "text-muted hover:text-ink",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="pill-nav-active"
                className="absolute inset-0 rounded-full bg-signal"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10 font-mono tracking-tight">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
