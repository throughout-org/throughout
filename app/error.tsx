"use client";

import { useEffect } from "react";

export default function GlobalError({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-mono text-xs text-ink-2">Something went wrong</p>
      <h1 className="font-display mt-4 text-4xl font-[750]">We couldn&apos;t load this page.</h1>
      <p className="mt-5 max-w-xl leading-7 text-ink-2">Please try again. If the problem continues, contact our team.</p>
      <button type="button" onClick={reset} className="mt-8 min-h-12 rounded-md bg-sapphire px-6 py-3 text-sm font-semibold text-on-sapphire transition-colors hover:bg-sapphire/90">Try again</button>
    </main>
  );
}
