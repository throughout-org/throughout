"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookCallLink } from "@/components/BookCallLink";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact-form" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-40" aria-label="Main navigation">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-8">
        <div className="relative mx-2 my-1.5 flex items-center justify-between rounded-2xl border border-hairline bg-canvas-elevated/90 px-4 py-3 shadow-whisper backdrop-blur-xl md:mx-3 md:my-2 md:rounded-full md:px-6 lg:mx-0 lg:px-4 xl:px-8">
          <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label="Throughout home">
            <Image
              src="/images/logo.png"
              alt="Throughout"
              width={190}
              height={90}
              className="h-11 w-auto md:h-14 lg:h-12 xl:h-16"
              priority
              sizes="190px"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex xl:gap-3">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-ink-2 transition-colors hover:bg-canvas-soft hover:text-ink xl:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <BookCallLink className="hidden min-h-11 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-on-primary transition hover:bg-primary-hover lg:inline-flex lg:items-center xl:px-7 xl:text-sm">
            Book a Free Consultation
          </BookCallLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-canvas-soft transition hover:bg-hairline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative h-5 w-6">
              <span className={`absolute left-0 top-0.5 h-0.5 w-full rounded-full bg-ink transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2.5 h-0.5 w-full rounded-full bg-ink transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0.5 left-0 h-0.5 w-full rounded-full bg-ink transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-4 top-full rounded-2xl border border-hairline bg-canvas-elevated p-5 shadow-floating transition-[opacity,transform,visibility] duration-200 lg:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="space-y-2">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block min-h-11 rounded-xl bg-canvas-soft px-4 py-3 text-sm font-semibold text-ink"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <BookCallLink className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-hover">
          Book a Free Consultation
        </BookCallLink>
      </div>
    </nav>
  );
}
