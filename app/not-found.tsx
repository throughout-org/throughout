import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-mono text-xs text-ink-2">404</p>
      <h1 className="font-display mt-4 text-4xl font-[750] sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-xl leading-7 text-ink-2">The page may have moved or the address may be incorrect.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-sapphire px-6 py-3 text-sm font-semibold text-on-sapphire transition-colors hover:bg-sapphire/90">Return home</Link>
    </main>
  );
}
