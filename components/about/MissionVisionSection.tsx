export default function MissionVisionSection() {
  return (
    <div className="mb-16 grid gap-5 md:grid-cols-2">
      <div className="group">
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 shadow-sm">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Our Mission
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600">
            To{" "}
            <span className="font-semibold text-slate-950">
              empower businesses
            </span>{" "}
            with technology solutions that drive growth, innovation, and digital
            transformation. We believe in long-term partnerships built through
            reliable software delivery.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-sky-700">
            <span>Building Your Future</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="group">
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 shadow-sm">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Our Vision
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600">
            To become the{" "}
            <span className="font-semibold text-slate-950">
              most trusted technology partner
            </span>{" "}
            for businesses worldwide, recognized for transforming ideas into
            useful digital products and sustainable business outcomes.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-sky-700">
            <span>Shaping Tomorrow</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
