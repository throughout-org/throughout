"use client";

import { useEffect, useRef } from "react";

export default function HeroCursorField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const primaryGlowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    const primaryGlow = primaryGlowRef.current;
    const secondaryGlow = secondaryGlowRef.current;
    if (!field || !primaryGlow || !secondaryGlow) return;

    const hero = field.parentElement;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!hero || !finePointer.matches || reducedMotion.matches) return;

    let frameId = 0;
    let isRunning = false;
    let targetX = hero.clientWidth * 0.62;
    let targetY = hero.clientHeight * 0.4;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;
      primaryGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;
      secondaryGlow.style.transform = `translate3d(${currentX * 0.42}px, ${currentY * 0.3}px, 0) translate3d(-50%, -50%, 0)`;

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        frameId = window.requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const requestRender = () => {
      if (isRunning) return;
      isRunning = true;
      frameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      targetX = Math.min(Math.max(event.clientX - bounds.left, 0), bounds.width);
      targetY = Math.min(Math.max(event.clientY - bounds.top, 0), bounds.height);
      requestRender();
    };

    const handlePointerLeave = () => {
      targetX = hero.clientWidth * 0.62;
      targetY = hero.clientHeight * 0.4;
      requestRender();
    };

    primaryGlow.style.opacity = "1";
    secondaryGlow.style.opacity = "1";
    requestRender();
    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={fieldRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(226,232,240,0.5),transparent_36%)]" />
      <div ref={secondaryGlowRef} className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-sky-100/45 opacity-0 blur-[110px] transition-opacity duration-700 will-change-transform" />
      <div ref={primaryGlowRef} className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.24)_0%,rgba(191,219,254,0.14)_42%,rgba(255,255,255,0)_72%)] opacity-0 blur-2xl transition-opacity duration-700 will-change-transform" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
    </div>
  );
}
