"use client";

import { useEffect, useRef, useState } from "react";

const segments: [string, string?][] = [
  ["// sync a sale, even offline", "text-ink-3"],
  ["\n"],
  ["const", "text-sky"],
  [" sale = "],
  ["await", "text-sky"],
  [" pos.sync({\n  offline: "],
  ["true", "text-pale"],
  [",\n  store: "],
  ['"colombo-01"', "text-pale"],
  [",\n});"],
];
const total = segments.reduce((n, [text]) => n + text.length, 0);

function render(count: number) {
  let left = count;
  return segments.map(([text, className], i) => {
    const shown = text.slice(0, Math.max(0, left));
    left -= text.length;
    return shown ? <span key={i} className={className}>{shown}</span> : null;
  });
}

// Types the snippet out on a loop while in view. Full text without JS or with reduced motion.
export default function TypingCode() {
  const ref = useRef<HTMLPreElement>(null);
  const [count, setCount] = useState(total);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    let n = 0;
    const tick = () => {
      n = n > total ? 0 : n + 1;
      setCount(Math.min(n, total));
      // Pause on the finished snippet, then start again.
      timer = setTimeout(tick, n === total ? 2600 : n === 0 ? 500 : 38);
    };
    const observer = new IntersectionObserver(([entry]) => {
      clearTimeout(timer);
      if (entry.isIntersecting) tick();
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <pre
      ref={ref}
      aria-label='const sale = await pos.sync({ offline: true, store: "colombo-01" });'
      className="grid overflow-x-auto rounded-md bg-ink p-5 font-mono text-[12.5px] leading-6 lg:text-[12px] xl:text-[12.5px] text-ice transition-colors group-hover:bg-sapphire"
    >
      {/* Invisible full copy holds the size so the card never jumps while typing. */}
      <code className="invisible col-start-1 row-start-1" aria-hidden="true">{render(total)}</code>
      <code className="col-start-1 row-start-1" aria-hidden="true">
        {render(count)}
        <span className="caret ml-px inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-sky" />
      </code>
    </pre>
  );
}
