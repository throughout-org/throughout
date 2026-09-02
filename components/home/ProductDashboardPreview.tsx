"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

type ProductName = "Checkout" | "Rankout" | "Comflo";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(value, "change", (latest) => {
    setDisplay(Math.round(latest * 10) / 10);
  });

  useEffect(() => {
    if (reduceMotion) {
      value.set(to);
      return;
    }

    const controls = animate(value, to, {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [reduceMotion, to, value]);

  return <>{display}{suffix}</>;
}

export default function ProductDashboardPreview({ product }: { product: ProductName }) {
  const reduceMotion = useReducedMotion();
  const element = useRef<HTMLDivElement>(null);
  const inView = useInView(element, { once: true, amount: 0.35 });
  const active = reduceMotion || inView;
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.55,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  if (product === "Checkout") {
    return (
      <div ref={element} className="mt-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Sales", "LKR 84k"],
            ["Orders", "128"],
            ["Stock", "936"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={transition(index * 0.1)}
              className="rounded-xl bg-white/10 p-2.5"
            >
              <span className="block text-[0.58rem] text-white/55">{label}</span>
              <strong className="block mt-1 text-sm">{value}</strong>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={transition(0.32)}
          className="p-3 mt-3 bg-white rounded-xl text-slate-900"
        >
          <div className="flex items-center justify-between text-[0.62rem] font-bold">
            <span>Current sale</span><span>3 items</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#dff7f7]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={active ? { scaleX: 0.75 } : {}}
              transition={{ ...transition(0.55), duration: reduceMotion ? 0 : 0.9 }}
              className="h-full origin-left rounded-full bg-[#1eb4b4]"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (product === "Rankout") {
    return (
      <div ref={element} className="mt-5">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={transition()}
          >





            <span className="text-[0.6rem] text-slate-500">Search visibility</span>
            <strong className="block mt-1 text-2xl">
              {active ? <CountUp to={82.4} suffix="%" /> : "0%"}
            </strong>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...transition(0.65), type: "spring", stiffness: 300 }}
            className="rounded-full bg-[#ea2804] px-2 py-1 text-[0.6rem] font-bold text-white"
          >
            +18.6%
          </motion.span>
        </div>
        <div className="mt-6 flex h-20 items-end gap-1.5">
          {[32, 46, 41, 58, 54, 70, 78, 92].map((height, index) => (
            <motion.span
              key={index}
              initial={{ scaleY: 0 }}
              animate={active ? { scaleY: 1 } : {}}
              transition={{ ...transition(0.15 + index * 0.07), duration: reduceMotion ? 0 : 0.65 }}
              className="flex-1 origin-bottom rounded-t-sm bg-[#ea2804]"
              style={{ height: `${height}%`, opacity: 0.35 + index * 0.08 }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={element} className="mt-5 space-y-2.5">
      {[
        ["NM", "Nadeesha M.", "Order confirmed", "bg-emerald-100 text-emerald-700"],
        ["KS", "Kamal S.", "Awaiting reply", "bg-amber-100 text-amber-700"],
        ["SR", "Sachini R.", "New message", "bg-sky-100 text-sky-700"],
      ].map(([initials, name, status, colour], index) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: 18, scale: 0.98 }}
          animate={active ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={transition(index * 0.16)}
          className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-2.5"
        >
          <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.6rem] font-bold ${colour}`}>{initials}</span>
          <span className="flex-1 min-w-0">
            <strong className="block truncate text-[0.68rem]">{name}</strong>
            <span className="block text-[0.58rem] text-slate-500">{status}</span>
          </span>
          <motion.span
            animate={active && !reduceMotion ? { scale: [1, 1.45, 1], opacity: [1, 0.55, 1] } : {}}
            transition={{ duration: 1.8, delay: 0.5 + index * 0.2, repeat: Infinity, repeatDelay: 0.4 }}
            className="h-2 w-2 rounded-full bg-[#19c37d]"
          />
        </motion.div>
      ))}
    </div>
  );
}
