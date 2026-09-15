"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn, scrollToSection } from "@/lib/utils";

// Define default items directly in the component so it works without props
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function PillNav({ className }: { className?: string }) {
  // Local state to track active section during scroll
  const [activeId, setActiveId] = useState("home");

  // Optional: Add IntersectionObserver logic here in the future to update activeId on scroll

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-auto md:top-6">
      <nav
        aria-label="Primary"
        className={cn(
          "flex items-center gap-1 rounded-full border border-line bg-panel/80 p-1.5 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]",
          className,
        )}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                scrollToSection(item.id);
              }}
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
    </div>
  );
}
