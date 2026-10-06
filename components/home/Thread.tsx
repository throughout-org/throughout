"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * "Throughout" = start to finish. One line runs down the page's left gutter
 * and fills as you scroll; each section marks its place on it with <ThreadNode />.
 */
export default function Thread({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 40%", "end 85%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 top-0 z-10 hidden w-px lg:block"
        style={{ left: "calc(max(0px, (100% - 80rem) / 2) + 2.5rem)" }}
      >
        <div className="absolute inset-0 bg-signal/20" />
        <motion.div
          className="absolute inset-0 origin-top bg-signal"
          style={{ scaleY: reduce ? 1 : progress }}
        />
      </div>
      {children}
    </div>
  );
}

/** A dot on the thread. Place inside a relative `max-w-7xl` container. */
export function ThreadNode({ onDark = false, className = "top-3" }: { onDark?: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-20 hidden h-[11px] w-[11px] rounded-full border-2 border-signal lg:block ${onDark ? "bg-sapphire" : "bg-canvas"} ${className}`}
      style={{ left: "calc(2.5rem - 5px)" }}
    />
  );
}
