import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M7 17L17 7M17 7H8M17 7v9"
      />
    </svg>
  );
}

export default function SplitCTABanner() {
  return (
    <section className="bg-dark px-4 pt-10 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        <Link
          href="/careers"
          className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-black p-8 sm:p-10"
        >
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
            Careers
          </span>
          <h3 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
            Interested in joining our team of experts?
          </h3>
          <span className="text-sm font-semibold text-slate-300 underline underline-offset-4 transition group-hover:text-white">
            Explore Opportunities
          </span>
          <div className="absolute bottom-6 right-6 flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
            <ArrowIcon />
          </div>
        </Link>

        <Link
          href="/contact"
          className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-accent p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-accent2/50 blur-3xl animate-blob" />
            <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-400/40 blur-3xl animate-blob animation-delay-4000" />
          </div>

          <span className="relative z-10 inline-flex w-fit items-center rounded-full border border-white/20 bg-black/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            Get in touch
          </span>

          <div className="relative z-10">
            <p className="mb-2 text-base font-medium text-white/80 sm:text-lg">
              Accelerate your growth goals
            </p>
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Speak to our experts
            </h3>
          </div>

          <div className="absolute bottom-6 right-6 z-10 flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-white text-accent opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
            <ArrowIcon />
          </div>
        </Link>
      </div>
    </section>
  );
}
