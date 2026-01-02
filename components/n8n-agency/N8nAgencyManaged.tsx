// Section 4: Managed Infrastructure
export default function N8nAgencyManaged() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50" id="managed">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-xl bg-white border border-slate-200 p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-[#0f172a] rounded-lg p-6 overflow-hidden relative">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-green-400 font-bold">SECURE & MONITORED</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Uptime (30d)</p>
                    <p className="text-2xl font-bold text-white">99.99%</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Active Workers</p>
                    <p className="text-2xl font-bold text-primary">12 / 12</p>
                  </div>
                </div>
                <div className="h-32 w-full bg-gradient-to-t from-primary/10 to-transparent rounded-lg border border-slate-700/50 relative flex items-end p-2 gap-1">
                  <div className="w-1/12 h-[60%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[45%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[75%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[50%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[90%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[65%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[80%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[55%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[70%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[85%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[60%] bg-primary/40 rounded-sm"></div>
                  <div className="w-1/12 h-[95%] bg-primary rounded-sm shadow-[0_0_10px_rgba(15,138,198,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We Deploy, <span className="text-primary">You Automate</span>.
            </h2>
            <p className="text-lg text-slate-600">
              Focus on building workflows. We handle the dirty work of server management, security, and uptime.
            </p>
            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-lg">dns</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Zero-Downtime Infrastructure</h3>
                <p className="text-slate-500 mt-1">Managed server setup including SSL configuration, load balancing, and automated daily backups.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-lg">security_update_good</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Ongoing Maintenance & Updates</h3>
                <p className="text-slate-500 mt-1">We handle n8n version updates, security patches, and provide 24/7 monitoring to ensure your flows never stop.</p>
              </div>
            </div>
            <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-primary/90 transition-all">
              View Management Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
