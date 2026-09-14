"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StackSection({
  id,
  index,
  children,
  className,
}: {
  id: string;
  index: number;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.35]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <section
      ref={ref}
      id={id}
      style={{ zIndex: index }}
      className={cn(
        "sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-8",
        className,
      )}
    >
      <motion.div
        style={{ scale, opacity, y, filter }}
        className="h-full w-full flex flex-col items-center justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
