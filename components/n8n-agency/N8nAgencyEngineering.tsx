// Section 2: Engineering
import { MdApi, MdCode, MdArrowForward } from "react-icons/md";
export default function N8nAgencyEngineering() {
  return (
    <section className="py-20 bg-background-alt relative overflow-hidden" id="engineering">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-white blur-[100px]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Connect Anything to  <span className=" bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-2 font-bold">Everything</span>.
            </h2>
            <p className="text-lg text-slate-600">
              We don't just use standard nodes. We build custom integrations for your specific tech stack.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl bg-white hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100 ">
                <div className="flex-none pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-primary">
                    <span><MdApi className="w-6 h-6 text-blue-500" /></span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Custom Nodes for Your Stack</h3>
                  <p className="text-slate-500 mt-2">Seamlessly integrate private APIs, legacy on-prem systems, and internal databases that standard tools can't touch.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">
                <div className="flex-none pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-primary">
                    <span><MdCode className="w-6 h-6 text-blue-500" /></span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Complex Logic Made Simple</h3>
                  <p className="text-slate-500 mt-2">Move beyond simple triggers. We engineer multi-step workflows with advanced error handling, retry logic, and custom JavaScript.</p>
                </div>
              </div>
            </div>
            <button className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 text-base font-bold text-white shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all">
              Explore Integration Library
              <span className="ml-2"><MdArrowForward className="text-lg" /></span>
            </button>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-2xl border border-slate-200" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArPaYhmLE6oQ7R06BSDVMnyccWHo4qsYBm3buscxY7txP29lcZZHancq7AIxou2Uqtlmg2jrPtwyUz4NZU2f1E3hh-I5-znPdihZARAB1I4NjipqiAIPCCh0eR7n2WEl_xG8WzCh6HBnnDgqvknHUiHa9JZo4MPa0XwIl27_natUW4s4P2o1p9VUAfU1EVrVHWIOVOSA3w_G12Qn-mFRyPaa_1lcu5IG6kg4NcoIQ9StoiObNDPx0ycdJ8VRxRzEWhGjfhYKbvQBDS')"}}></div>
              <div className="absolute -bottom-6 -right-6 bg-[#1e1e1e] p-5 rounded-lg shadow-2xl font-mono text-xs w-72 hidden sm:block border border-slate-800 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex gap-1.5 mb-3 border-b border-white/10 pb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <p className="text-blue-400">async function <span className="text-yellow-300">processData</span>() {'{'}</p>
                <p className="pl-4 text-purple-400">const <span className="text-white">payload</span> = await api.get();</p>
                <p className="pl-4 text-green-400">// Custom logic injection</p>
                <p className="pl-4 text-white">return transform(payload);</p>
                <p className="text-blue-400">{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
