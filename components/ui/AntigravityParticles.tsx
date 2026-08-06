export default function AntigravityParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-white">
      <div className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-sky-200/45 blur-3xl" />
      <div className="absolute right-[10%] top-[28%] h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="absolute bottom-[5%] left-[42%] h-56 w-56 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,rgba(14,165,233,0.25)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
    </div>
  );
}
