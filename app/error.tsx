"use client";

import { useEffect } from "react";

export default function GlobalError({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Something went wrong</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950">We couldn&apos;t load this page.</h1>
      <p className="mt-5 max-w-xl leading-7 text-slate-600">Please try again. If the problem continues, contact our team.</p>
      <button type="button" onClick={reset} className="mt-8 min-h-12 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-800">Try again</button>
    </main>
  );
}
