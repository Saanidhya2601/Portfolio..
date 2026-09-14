"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

// Array-driven so a future role is just another entry — the timeline
// spine and card layout scale automatically.
const EXPERIENCE = [
  {
    role: "Software / Full-Stack Intern",
    company: "The Boring Education",
    period: "Feb 2026 — Jul 2026",
    location: "Remote",
    stack:
      "React.js · Next.js · TypeScript · Tailwind CSS · Node.js · REST APIs · AI APIs",
    bullets: [
      "Assisted in developing and updating web pages using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Built and improved reusable UI components across existing frontend features and layouts.",
      "Integrated REST APIs to fetch, process, and display application data within the frontend.",
      "Worked with Next.js routing and basic server-side functionality across existing app modules.",
      "Contributed to selected AI/API-based features, supporting broader application workflows.",
      "Used Git and GitHub for version control and collaborative development on assigned tasks.",
    ],
  },
];

export default function WorkHistory() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="mb-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Career so far
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Where I&apos;ve worked
        </h2>
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Timeline spine — meaningful here since roles are chronological */}
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-signal via-line to-transparent" />

        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-signal bg-void" />

              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -6,
                  rotateZ: 0.6,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    mass: 0.8,
                  },
                }}
                className="cursor-default rounded-2xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8"
              >
                <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink md:text-xl">
                      {job.role}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-faint">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-signal" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-signal" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="self-start rounded-full border border-signal/25 bg-signal/10 px-3 py-1.5 text-xs font-semibold text-signal">
                    {job.company}
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t border-line pt-4 font-mono text-[11px] text-faint">
                  {job.stack}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
