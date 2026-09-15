"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "TimeChamp",
    role: "B2B SaaS Platform",
    tech: "Next.js · TypeScript · PostgreSQL",
    description:
      "Enterprise-grade productivity and HR management system featuring real-time time-tracking and advanced analytics.",
    link: "https://github.com/Saanidhya2601/Time-Champ",
  },
  {
    id: 2,
    title: "Modern LMS",
    role: "Full-Stack Architecture",
    tech: "Node.js · JWT · SQL",
    description:
      "Scalable course platform implementing secure role-based access control and isolated instructor environments.",
    link: "https://github.com/Saanidhya2601/LMS",
  },
  {
    id: 3,
    title: "Crime Reports",
    role: "Data Engineering",
    tech: "PostgreSQL · Relational DB",
    description:
      "Optimized normalized schema handling 320k+ records, drastically reducing query latency for analytical dashboards.",
    link: "https://github.com/Saanidhya2601/Case-files",
  },
  {
    id: 4,
    title: "AutoReporter",
    role: "Pipeline Automation",
    tech: "Python · Pandas",
    description:
      "Automated ETL pipeline that processes raw data into rendered, scheduled KPI reports for stakeholders.",
    link: "https://github.com/Saanidhya2601/AutoReporter",
  },
];

export default function InteractiveFolder() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const isOpen = isHovered || isLocked;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Selected work
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink">
          Featured projects
        </h2>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={isLocked ? "Close project folder" : "Open project folder"}
        className="relative w-[280px] sm:w-[420px] h-[260px] sm:h-[300px] cursor-pointer flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsLocked((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsLocked((v) => !v);
          }
        }}
      >
        {/* Folder tab + body, drawn with clip-path for a real folder silhouette */}
        <motion.div
          animate={{ y: isOpen ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="absolute bottom-4 w-[240px] sm:w-[360px] h-[170px] sm:h-[200px] z-0"
        >
          <div
            className="absolute -top-4 left-0 h-6 w-28 rounded-t-lg bg-panel-hi border border-b-0 border-line"
            style={{ clipPath: "polygon(0 100%, 0 20%, 85% 20%, 100% 100%)" }}
          />
          <div className="h-full w-full rounded-2xl rounded-tl-none bg-panel-hi border border-line shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]" />
        </motion.div>

        {/* Fanned-out project cards */}
        <div className="absolute bottom-10 sm:bottom-14 flex justify-center items-end z-20 pointer-events-none">
          {projects.map((p, i) => {
            const spread = isLocked ? 108 : 46;
            const xOffset = isOpen ? (i - 1.5) * spread : 0;
            const yOffset = isOpen ? (isLocked ? -150 : -110) : 0;
            const rotate = isOpen ? (i - 1.5) * (isLocked ? 2.5 : 4) : 0;

            return (
              <motion.div
                key={p.id}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  rotate,
                  scale: isOpen ? 1 : 0.85,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  delay: isOpen ? i * 0.04 : 0,
                }}
                className="absolute w-[128px] sm:w-[176px] p-3 sm:p-4 bg-panel border border-line rounded-xl pointer-events-auto shadow-2xl hover:border-signal/40 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-xs sm:text-sm font-bold text-ink leading-tight">
                    {p.title}
                  </h3>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} on GitHub`}
                    className="shrink-0 text-faint hover:text-signal transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="hidden sm:block text-[11px] text-muted leading-snug mb-2">
                  {p.description}
                </p>
                <p className="font-mono text-[10px] text-signal">{p.tech}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Front flap */}
        <motion.div
          animate={{ rotateX: isOpen ? -18 : 0 }}
          style={{ transformPerspective: 800, transformOrigin: "bottom" }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="absolute bottom-4 w-[240px] sm:w-[360px] h-[110px] sm:h-[140px] z-30 rounded-b-2xl bg-gradient-to-b from-signal/15 to-panel/60 border border-t-0 border-line backdrop-blur-md flex flex-col items-center justify-center pointer-events-none gap-1"
        >
          <FolderGit2 className="h-4 w-4 text-signal" />
          <span className="font-mono text-[10px] sm:text-[11px] font-medium text-muted uppercase tracking-[0.15em]">
            {isLocked ? "Click to close" : "Click to open"}
          </span>
        </motion.div>
      </div>

      <a
        href="https://github.com/Saanidhya2601"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex items-center gap-1.5 font-mono text-xs text-faint hover:text-signal transition-colors"
      >
        browse all repositories
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </div>
  );
}
