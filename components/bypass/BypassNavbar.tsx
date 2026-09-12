"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BypassLogo from "@/components/bypass/BypassLogo";

const navigation = [
  { name: "Features", href: "/bypass#features" },
  { name: "Pricing", href: "/bypass/pricing" },
  { name: "Privacy", href: "/bypass/privacy" },
];

export default function BypassNavbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href.split("#")[0];

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-sm" aria-label="Bypass navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/bypass" className="flex shrink-0 items-center gap-2.5" aria-label="Bypass home">
          <BypassLogo size={32} />
          <span className="text-lg font-extrabold tracking-tight text-slate-950">Bypass</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-[#4c4bcd]/8 text-[#4140ae]"
                  : "text-slate-600 hover:bg-gray-50 hover:text-slate-950"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/bypass/pricing"
          className="inline-flex items-center rounded-lg bg-[#4c4bcd] px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#4140ae]"
        >
          Get Bypass
        </Link>
      </div>
    </nav>
  );
}
