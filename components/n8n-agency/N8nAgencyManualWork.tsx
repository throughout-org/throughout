// Section 3: Replace Manual Work
export default function N8nAgencyManualWork() {
  return (
    <section className="py-24 bg-white relative border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Replace Manual Work with <span className="text-primary">Intelligent Flows</span>.
          </h2>
          <p className="text-lg text-slate-600">
            Stop wasting talent on data entry. Deploy intelligent pipelines that work 24/7.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary">precision_manufacturing</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Automate 80% of Repetitive Tasks</h3>
              <p className="text-slate-500 mb-6">From syncing CRM data to generating complex financial reports, our bots handle the grunt work.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  Zero data entry errors
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  Instant processing speed
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  24/7 availability
                </li>
              </ul>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary">rocket_launch</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise-Grade Scalability</h3>
              <p className="text-slate-500 mb-6">Built on Docker and Kubernetes. Whether you run 10 workflows or 10 million, your infrastructure scales automatically.</p>
              <div className="mt-8 bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Workflow Volume</span>
                  <span className="text-xs text-primary font-bold">+450% YOY</span>
                </div>
                <div className="flex items-end gap-1 h-24">
                  <div className="w-full bg-blue-100 rounded-t-sm h-[20%]"></div>
                  <div className="w-full bg-blue-200 rounded-t-sm h-[35%]"></div>
                  <div className="w-full bg-blue-300 rounded-t-sm h-[45%]"></div>
                  <div className="w-full bg-blue-400 rounded-t-sm h-[60%]"></div>
                  <div className="w-full bg-blue-500 rounded-t-sm h-[85%]"></div>
                  <div className="w-full bg-primary rounded-t-sm h-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative">
          <div className="p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Calculate Your Automation ROI</h3>
                <p className="text-slate-500 text-sm mt-1">Estimate your monthly savings by switching to self-hosted n8n.</p>
              </div>
              <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary">
                <span className="material-symbols-outlined">calculate</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 border-t border-slate-100 pt-8">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-bold text-slate-700">Manual tasks per month</label>
                    <div className="relative">
                      <input className="block w-24 rounded-md border-0 py-1.5 pl-3 pr-8 text-right text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 font-bold bg-slate-50" type="number" value="5000" readOnly />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <span className="text-xs text-slate-400">qty</span>
                      </div>
                    </div>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" max="10000" min="0" type="range" value="5000" readOnly />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-bold text-slate-700">Avg. time per task</label>
                    <div className="relative">
                      <input className="block w-24 rounded-md border-0 py-1.5 pl-3 pr-8 text-right text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 font-bold bg-slate-50" type="number" value="10" readOnly />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <span className="text-xs text-slate-400">min</span>
                      </div>
                    </div>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" max="60" min="1" type="range" value="10" readOnly />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-bold text-slate-700">Staff hourly rate</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                        <span className="text-slate-500 sm:text-sm">$</span>
                      </div>
                      <input className="block w-24 rounded-md border-0 py-1.5 pl-6 pr-3 text-right text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 font-bold bg-slate-50" type="number" value="45" readOnly />
                    </div>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" max="200" min="15" type="range" value="45" readOnly />
                </div>
                <button className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-blue-500/20 hover:bg-sky-600 transition-colors flex items-center justify-center gap-2 mt-2">
                  Calculate Savings
                </button>
              </div>
              <div className="lg:col-span-5 bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between shadow-inner border border-slate-700">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Monthly Hours Saved</div>
                    <div className="text-4xl font-bold text-white">833 <span className="text-lg font-normal text-slate-500">hrs</span></div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Money Saved on Labor</div>
                    <div className="text-4xl font-bold text-green-400">$37,500</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                    n8n Advantage
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30">FLAT FEE</span>
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">SaaS (Zapier/Make)</span>
                        <span className="text-slate-300 font-mono">~$1,200</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full">
                        <div className="h-full bg-slate-500 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white font-bold">Your n8n Server</span>
                        <span className="text-primary font-bold font-mono">$60</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full">
                        <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.6)]" style={{width: '5%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
