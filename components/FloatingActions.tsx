"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const WHATSAPP_URL = "https://wa.me/94707007992";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div
      className="fixed right-4 z-30 flex flex-col items-center gap-3 sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-canvas text-sapphire shadow-[0_8px_24px_-8px_rgba(0,51,102,0.35)] transition duration-300 hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <FiArrowUp className="text-lg" aria-hidden="true" />
      </button>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Throughout on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_28px_-8px_rgba(0,0,0,0.35)] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
      >
        <FaWhatsapp className="text-[1.75rem]" aria-hidden="true" />
      </a>
    </div>
  );
}
