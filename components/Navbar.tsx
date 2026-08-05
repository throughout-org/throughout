"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendlyButton } from "@/components/CalendlyPopup";

const navigation = [
  { name: "Engineering", href: "/engineering" },
  { name: "Design", href: "/design" },
  { name: "Marketing", href: "/digital-marketing" },
  { name: "Dedicated Teams", href: "/dedicated-teams" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="fixed inset-x-0 top-0 z-40" aria-label="Main navigation">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-8">
        <div className="relative mx-2 my-1.5 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow-[0_6px_30px_rgba(7,10,49,0.12),0_0_0_1px_rgba(8,13,41,0.05)] backdrop-blur-xl md:mx-3 md:my-2 md:rounded-full md:px-6 lg:mx-0 lg:px-4 xl:px-8">
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
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors xl:text-sm ${
                  isActive(link.href)
                    ? "bg-sky-600 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <CalendlyButton className="hidden min-h-11 rounded-full bg-sky-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-sky-700 lg:inline-flex lg:items-center xl:px-7 xl:text-sm">
            Book a Free Consultation
          </CalendlyButton>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 transition hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative h-5 w-6">
              <span className={`absolute left-0 top-0.5 h-0.5 w-full rounded-full bg-slate-800 transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2.5 h-0.5 w-full rounded-full bg-slate-800 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0.5 left-0 h-0.5 w-full rounded-full bg-slate-800 transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-4 top-full rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl transition-[opacity,transform,visibility] duration-200 lg:hidden ${
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
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`block min-h-11 rounded-xl px-4 py-3 text-sm font-bold ${
                isActive(link.href) ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <CalendlyButton className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-700">
          Book a Free Consultation
        </CalendlyButton>
      </div>
    </nav>
  );
}
