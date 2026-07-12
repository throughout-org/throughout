import { FiTarget, FiFeather, FiMic, FiTrendingUp } from "react-icons/fi";

const audiences = [
  {
    icon: <FiTarget />,
    title: "Digital marketing agencies",
    description:
      "You excel at strategy, campaigns, and client relationships. When a client needs a platform or web application built, you want to say yes — not scramble.",
  },
  {
    icon: <FiFeather />,
    title: "Creative and design agencies",
    description:
      "You design experiences that clients love. Now you need an engineering team that can actually build what you've designed — to the standard you've promised.",
  },
  {
    icon: <FiMic />,
    title: "Branding and communication agencies",
    description:
      "Your clients trust you with their brand. When that brand needs a digital presence — a website, an app, a system — you need technical delivery you can stand behind.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth and performance agencies",
    description:
      "You drive results through data and experimentation. A dedicated tech team means you can build the tools, dashboards, and platforms your growth strategies actually require.",
  },
];

export default function AgencyPartnersForWho() {
  return (
    <section className="px-4 py-20 bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-left">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-400">
            Who this is for
          </span>
          <h2 className="mt-3 mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for agencies with ambition and no technical team.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            This partnership works best for a specific kind of agency. If you
            recognise your business below, we should talk.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="p-7 transition border rounded-3xl border-white/10 bg-white/5 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-center w-11 h-11 mb-5 text-lg rounded-xl bg-sky-500/15 text-sky-400">
                {audience.icon}
              </div>
              <h3 className="text-base font-bold text-white">
                {audience.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-400">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
