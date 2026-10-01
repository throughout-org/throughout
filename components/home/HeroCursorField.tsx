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
    <div ref={fieldRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Always-on brand mesh — visible on every device, no JS required */}
      <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(51,153,255,0.32)_0%,rgba(51,153,255,0)_70%)] blur-[90px] sm:h-[38rem] sm:w-[38rem]" />
      <div className="absolute -top-40 right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22)_0%,rgba(34,211,238,0)_70%)] blur-[90px] sm:h-[32rem] sm:w-[32rem]" />
      <div className="absolute left-1/3 top-40 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(0,51,102,0.14)_0%,rgba(0,51,102,0)_72%)] blur-[100px]" />

      {/* Cursor-reactive glow — desktop-with-a-mouse enhancement only */}
      <div className="hidden lg:block">
        <div ref={secondaryGlowRef} className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,rgba(34,211,238,0)_70%)] opacity-0 blur-[110px] transition-opacity duration-700 will-change-transform" />
        <div ref={primaryGlowRef} className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(51,153,255,0.26)_0%,rgba(51,153,255,0.1)_42%,rgba(255,255,255,0)_72%)] opacity-0 blur-2xl transition-opacity duration-700 will-change-transform" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,23,23,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
    </div>
  );
}
