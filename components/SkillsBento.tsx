"use client";

// Added MySQL alongside PostgreSQL and MongoDB to highlight comprehensive database architecture skills
const SKILLS = [
  "TypeScript",
  "React 18",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "REST APIs",
  "Prisma",
  "Docker",
];

export default function SkillsBento() {
  return (
    <div
      className="relative w-full max-w-3xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      aria-hidden="true"
    >
      {/* 
        By grouping the lists in a flex container that is w-max, and applying the marquee 
        animation to the wrapper, we eliminate the end-of-loop stutter. 
      */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 gap-3 px-1.5 py-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="shrink-0 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-signal/40 hover:text-signal hover:shadow-[0_0_12px_rgba(94,234,212,0.1)]"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
