import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

const resources = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/insights" },
  { label: "Internships", href: "/internships" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Engineering", href: "/engineering" },
  { label: "Design", href: "/design" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/throughout-io",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/throughout.io",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/throughout.io",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm transition group text-slate-400 hover:text-sky-300"
      >
        <span className="w-1 h-1 transition rounded-full bg-slate-600 group-hover:bg-sky-400" />
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="text-white bg-slate-950">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr_0.95fr_1.05fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="Throughout (PVT) LTD"
                width={170}
                height={76}
                className="w-auto h-11 brightness-0 invert"
              />
            </Link>

            <p className="max-w-sm mt-5 text-sm leading-6 text-slate-400">
              We combine Digital Marketing, Engineering, and AI to build and
              grow digital products and businesses.
            </p>

            <div className="flex gap-2 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 transition border rounded-full border-white/10 bg-white/5 text-slate-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer resources">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Resources
            </h3>
            <ul className="mt-5 space-y-3">
              {resources.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Get in touch
            </h3>

            <div className="mt-5">
              <a
                href="mailto:info@throughout.io"
                className="flex items-start gap-3 py-4 text-sm transition rounded-2xl text-slate-300"
              >
                <FiMail className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <span className="break-all">info@throughout.io</span>
              </a>

              <a
                href="https://wa.me/707007992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-4 text-sm transition 5 text-slate-300"
              >
                <FiMessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <span>+94 070 7007 992</span>
              </a>

              <div className="flex items-start gap-3 py-4 text-sm text-slate-300">
                <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <span>Available worldwide</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 mt-5 text-sm font-bold text-white transition rounded-full shadow-lg bg-sky-600 shadow-sky-950/20 hover:bg-sky-500"
            >
              Book a free call
              <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-sm border-t border-white/10 text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Throughout (PVT) LTD. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition hover:text-sky-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition hover:text-sky-300"
            >
              Terms of Service
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <FiGlobe className="w-4 h-4" />
              Remote-first team
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
