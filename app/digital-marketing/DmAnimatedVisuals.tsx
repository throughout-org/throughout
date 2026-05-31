"use client";

import React from "react";
import { motion } from "framer-motion";

// ── 01 Design Visual ─────────────────────────────────────────────────────────
export function DesignVisual() {
  const palette = ["#38bdf8", "#818cf8", "#f472b6", "#fb923c", "#34d399", "#facc15"];

  return (
    <div className="w-full h-full bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* Ambient gradient blobs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "5%", left: "10%" }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-sky-500/20 blur-3xl pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ bottom: "10%", right: "5%" }}
      />

      {/* Floating circle */}
      <motion.div
        className="absolute w-16 h-16 rounded-full border-2 border-sky-400/50 bg-sky-400/10"
        animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
        transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
        style={{ top: "14%", left: "12%" }}
      />

      {/* Floating square */}
      <motion.div
        className="absolute w-12 h-12 border-2 border-violet-400/50 bg-violet-400/10"
        animate={{ y: [8, -8, 8], rotate: [0, 90, 180, 90, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ top: "18%", right: "14%" }}
      />

      {/* Floating triangle */}
      <motion.div
        className="absolute w-11 h-11 bg-pink-400/30"
        style={{ clipPath: "polygon(50% 0%,0% 100%,100% 100%)", bottom: "28%", left: "18%" }}
        animate={{ y: [-6, 6, -6], rotate: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      {/* Center design card */}
      <motion.div
        className="relative w-52 h-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
        animate={{ scale: [0.97, 1.02, 0.97] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-3 left-3 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="p-4 pt-9 space-y-2">
          {[100, 70, 85].map((w, i) => (
            <motion.div
              key={i}
              className="h-1.5 rounded-full bg-white/20"
              style={{ width: `${w}%` }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            />
          ))}
          <div className="flex gap-2 mt-3">
            {palette.slice(0, 4).map((c, i) => (
              <motion.div
                key={c}
                className="w-5 h-5 rounded-md"
                style={{ backgroundColor: c }}
                animate={{ scale: [0.85, 1.1, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Typography specimen */}
      <div className="absolute top-7 right-8 text-right select-none">
        <motion.p
          className="text-6xl font-black leading-none"
          style={{ color: "rgba(255,255,255,0.75)" }}
          animate={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Aa
        </motion.p>
        <motion.p
          className="text-xl font-light leading-none mt-1"
          style={{ color: "rgba(255,255,255,0.3)" }}
          animate={{ opacity: [0.15, 0.55, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        >
          Bb Cc
        </motion.p>
      </div>

      {/* Color palette strip */}
      <div className="absolute bottom-5 left-5 right-5 flex gap-1.5">
        {palette.map((color, i) => (
          <motion.div
            key={color}
            className="h-7 flex-1 rounded-lg"
            style={{ backgroundColor: color }}
            animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

// ── 02 Marketing Visual ───────────────────────────────────────────────────────
export function MarketingVisual() {
  const bars = [55, 80, 42, 95, 68, 50, 85, 63];
  const metrics = [
    { label: "Reach", value: "24.5K", delta: "+18%", color: "#34d399" },
    { label: "CTR",   value: "3.8%",  delta: "+5%",  color: "#38bdf8" },
    { label: "Conv.", value: "12.1%", delta: "+23%", color: "#818cf8" },
  ];

  return (
    <div className="w-full h-full bg-slate-950 relative overflow-hidden flex flex-col p-6 gap-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,1) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Metric cards */}
      <div className="flex gap-3 relative z-10">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{m.label}</p>
            <motion.p
              className="text-sm font-bold text-white mt-0.5"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            >
              {m.value}
            </motion.p>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: m.color }}>{m.delta}</p>
          </motion.div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-28 relative z-10 px-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ background: `linear-gradient(to top, #0284c7, #38bdf8)` }}
            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Line graph */}
      <div className="relative z-10 flex-1 min-h-0">
        <svg viewBox="0 0 280 50" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Fill area */}
          <motion.path
            d="M0,42 L40,30 L80,36 L120,12 L160,24 L200,10 L240,18 L280,14 L280,50 L0,50 Z"
            fill="url(#lineGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
          />
          {/* Line */}
          <motion.polyline
            points="0,42 40,30 80,36 120,12 160,24 200,10 240,18 280,14"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }}
          />
          {/* Moving dot */}
          <motion.circle
            r="3.5"
            fill="#38bdf8"
            filter="drop-shadow(0 0 4px #38bdf8)"
            animate={{
              cx: [0, 40, 80, 120, 160, 200, 240, 280],
              cy: [42, 30, 36, 12, 24, 10, 18, 14],
              opacity: [0, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1] }}
          />
        </svg>
      </div>
    </div>
  );
}

// ── 03 Engineering Visual ─────────────────────────────────────────────────────
const CODE_LINES = [
  { text: "const server = express()",      color: "#38bdf8", delay: 0 },
  { text: "server.use(authMiddleware)",    color: "#cbd5e1", delay: 0.45 },
  { text: "await db.connect(config.url)", color: "#818cf8", delay: 0.9 },
  { text: "cache.init({ ttl: 3600 })",    color: "#cbd5e1", delay: 1.35 },
  { text: "server.listen(3000)",          color: "#34d399", delay: 1.8 },
  { text: "✓  Ready on port 3000",        color: "#34d399", delay: 2.25 },
];

const PIPELINE = ["Build", "Test", "Deploy", "Live"];

export function EngineeringVisual() {
  const total = CODE_LINES.length * 0.45 + 2.5; // total cycle length

  return (
    <div className="w-full h-full bg-slate-950 flex flex-col overflow-hidden">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-white/5 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <p className="text-[10px] text-slate-500 font-mono ml-2">~/throughout — node server.ts</p>
      </div>

      {/* Code area */}
      <div className="flex-1 px-5 pt-4 font-mono text-[11px] leading-6 overflow-hidden">
        <motion.p
          className="text-slate-600 mb-1"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ▶ node server.ts
        </motion.p>
        {CODE_LINES.map((line) => (
          <motion.p
            key={line.text}
            className="whitespace-nowrap"
            style={{ color: line.color }}
            initial={{ opacity: 0, x: -12 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-12, 0, 0, 0],
            }}
            transition={{
              duration: total,
              repeat: Infinity,
              delay: line.delay,
              times: [0, 0.08, 0.7, 1],
              ease: "easeOut",
            }}
          >
            {"  "}{line.text}
          </motion.p>
        ))}
        {/* Cursor */}
        <motion.span
          className="inline-block w-[7px] h-[13px] bg-sky-400 ml-4 align-middle rounded-sm"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.75, repeat: Infinity }}
        />
      </div>

      {/* CI/CD pipeline */}
      <div className="shrink-0 px-5 pb-5 pt-2">
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600 mb-2">Pipeline</p>
        <div className="flex items-center gap-1.5">
          {PIPELINE.map((step, i) => (
            <React.Fragment key={step}>
              <motion.div
                className="flex-1 rounded-lg border py-2 text-center"
                animate={{
                  borderColor: ["rgba(255,255,255,0.08)", "rgba(56,189,248,0.55)", "rgba(255,255,255,0.08)"],
                  backgroundColor: ["rgba(255,255,255,0.02)", "rgba(56,189,248,0.08)", "rgba(255,255,255,0.02)"],
                }}
                transition={{ duration: 1.2, delay: i * 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{step}</p>
              </motion.div>
              {i < PIPELINE.length - 1 && (
                <motion.div
                  className="w-3 h-px bg-sky-500/50 shrink-0"
                  animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.2, delay: (i + 1) * 0.5, repeat: Infinity, repeatDelay: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
