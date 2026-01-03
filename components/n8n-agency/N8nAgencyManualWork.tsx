// Section 3: Replace Manual Work
import { MdCheckCircle, MdPrecisionManufacturing, MdRocketLaunch, MdCalculate } from "react-icons/md";
export default function N8nAgencyManualWork() {
  return (
    <section className="relative py-24 px-4 sm:px-10  overflow-hidden border-y border-slate-100">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 z-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-fuchsia-400/10 to-cyan-400/10 blur-[120px] opacity-80"></div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 drop-shadow-lg mb-4" style={{fontFamily: 'Space Grotesk, Montserrat, sans-serif'}}>
            Replace Manual Work with <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-2 font-bold">Intelligent Flows</span>.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-2" style={{fontFamily: 'Noto Sans, Montserrat, sans-serif'}}>
            Stop wasting talent on data entry. Deploy intelligent pipelines that work 24/7.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Trendy Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/60 border border-blue-200/40 p-10 hover:border-blue-400/40 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/30 to-fuchsia-400/20 text-blue-600 text-7xl shadow-xl"><MdPrecisionManufacturing /></span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Automate 80% of Repetitive Tasks</h3>
              <p className="text-slate-500 mb-6">From syncing CRM data to generating complex financial reports, our bots handle the grunt work.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-xl shadow"><MdCheckCircle /></span>
                  Zero data entry errors
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-xl shadow"><MdCheckCircle /></span>
                  Instant processing speed
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-xl shadow"><MdCheckCircle /></span>
                  24/7 availability
                </li>
              </ul>
            </div>
          </div>
          {/* Trendy Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/60 border border-blue-200/40 p-10 hover:border-blue-400/40 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/30 to-fuchsia-400/20 text-blue-600 text-7xl shadow-xl"><MdRocketLaunch /></span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise-Grade Scalability</h3>
              <p className="text-slate-500 mb-6">Built on Docker and Kubernetes. Whether you run 10 workflows or 10 million, your infrastructure scales automatically.</p>
              <div className="mt-8 bg-white/80 rounded-lg p-4 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Workflow Volume</span>
                  <span className="text-xs text-blue-900 font-bold">+450% YOY</span>
                </div>
                <div className="flex items-end gap-1 h-24">
                  <div className="w-full bg-blue-100 rounded-t-sm h-[20%]"></div>
                  <div className="w-full bg-blue-200 rounded-t-sm h-[35%]"></div>
                  <div className="w-full bg-blue-300 rounded-t-sm h-[45%]"></div>
                  <div className="w-full bg-blue-400 rounded-t-sm h-[60%]"></div>
                  <div className="w-full bg-blue-500 rounded-t-sm h-[85%]"></div>
                  <div className="w-full bg-blue-700 rounded-t-sm h-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trendy ROI Calculator Card */}
        <div className="mt-16 group relative overflow-hidden rounded-3xl bg-white/60 border border-blue-200/40 p-0 md:p-0 hover:border-blue-400/40 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl shadow-lg">
          {/* Floating Icon */}
          <div className="absolute top-8 right-10 z-10">
            <span className="flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-br from-blue-400/30 to-fuchsia-400/20 text-blue-600 text-3xl shadow-xl backdrop-blur-xl border-4 border-white/60">
              <MdCalculate />
            </span>
          </div>
          <div className="relative z-10 p-8 lg:p-12 pt-20">
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-blue-900 tracking-tight">Calculate Your Automation ROI</h3>
              <p className="text-slate-500 text-base mt-2">Estimate your monthly savings by switching to self-hosted n8n.</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
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
              <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-8 text-white flex flex-col justify-between shadow-inner border border-slate-800">
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
                <div className="mt-8 pt-6 border-t border-slate-700">
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
