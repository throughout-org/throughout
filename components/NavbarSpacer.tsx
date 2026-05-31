"use client";

import { useEffect, useState } from "react";

export default function NavbarSpacer() {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        const h = Math.ceil(nav.getBoundingClientRect().height);
        setHeight(h);
      } else {
        setHeight(null);
      }
    };

    const debounced = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("resize", debounced);
    window.addEventListener("scroll", debounced, { passive: true });

    const nav = document.querySelector("nav");
    const mo = nav
      ? new MutationObserver(debounced)
      : null;
    if (mo && nav) mo.observe(nav, { attributes: true, childList: true, subtree: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", debounced);
      window.removeEventListener("scroll", debounced);
      if (mo) mo.disconnect();
    };
  }, []);

  if (!height) return null;

  return <div aria-hidden="true" style={{ height: `${height}px` }} />;
}
