const SKILLS = [
  "TypeScript",
  "React 18",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Prisma",
  "Docker",
  "Python",
];

export default function SkillsMarquee() {
  // Duplicate the list once so the -50% translate loops seamlessly.
  const loop = [...SKILLS, ...SKILLS];

  return (
    <div
      className="relative w-full max-w-3xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-3 py-1 hover:[animation-play-state:paused]">
        {loop.map((skill, i) => (
          <span
            key={i}
            className="shrink-0 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-xs text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
