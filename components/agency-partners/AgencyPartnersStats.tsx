const stats = [
  { value: "100%", label: "Dedicated to your agency only" },
  { value: "Full SDLC", label: "From requirements to deployment" },
  { value: "Open book", label: "Every cost visible to you" },
];

export default function AgencyPartnersStats() {
  return (
    <div className="relative z-10 border-t border-white/10 bg-slate-950">
      <div className="grid grid-cols-1 gap-8 px-4 py-12 mx-auto max-w-7xl text-center sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center">
            <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1.5 text-xs font-medium text-slate-400 sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
