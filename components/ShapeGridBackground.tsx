"use client";

import { useEffect, useMemo, useRef } from "react";

export default function ShapeGridBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      const el = spotlightRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  const nodes = useMemo(() => {
    const cell = 56;
    const seedPositions = [
      [4, 3],
      [11, 2],
      [7, 6],
      [18, 4],
      [23, 8],
      [3, 10],
      [15, 9],
      [27, 3],
      [9, 12],
      [21, 11],
      [30, 6],
      [13, 13],
    ];
    return seedPositions.map(([cx, cy], i) => ({
      left: cx * cell,
      top: cy * cell,
      delay: (i * 0.37) % 3.6,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void"
    >
      {/* Reduced opacity from 0.35 to 0.20 to improve text contrast on top */}
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {nodes.map((n, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-signal animate-grid-pulse shadow-[0_0_8px_var(--color-signal)]"
          style={{
            left: n.left,
            top: n.top,
            animationDelay: `${n.delay}s`,
          }}
        />
      ))}

      <div
        ref={spotlightRef}
        className="absolute inset-0 hidden md:block transition-opacity duration-500"
        style={
          {
            "--x": "50%",
            "--y": "20%",
            background:
              "radial-gradient(600px circle at var(--x) var(--y), color-mix(in srgb, var(--color-indigo) 8%, transparent), transparent 70%)",
          } as React.CSSProperties
        }
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,transparent_0%,var(--color-void)_85%)]" />
    </div>
  );
}
