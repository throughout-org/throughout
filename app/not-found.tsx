import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-xl leading-7 text-slate-600">The page may have moved or the address may be incorrect.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-800">Return home</Link>
    </main>
  );
}
