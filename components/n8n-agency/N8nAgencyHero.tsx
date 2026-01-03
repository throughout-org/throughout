
import { FaUserCheck, FaPiggyBank, FaShieldAlt } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import { TbShieldLockFilled } from "react-icons/tb";



export default function N8nAgencyHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-4xl lg:pl-2 text-center lg:text-left">
          <div className="relative inline-flex items-center px-4 py-2 rounded-full shadow-lg mb-6 w-fit bg-white/10" style={{zIndex:1}}>
            <span className="text-base mr-1 text-blue-600"><RiShieldCheckFill /></span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-semibold">Enterprise Grade Security</span>
            <span className="absolute inset-0 rounded-full pointer-events-none" style={{zIndex:-1, padding:2, background: 'linear-gradient(90deg, #2563eb, #38bdf8)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{fontFamily: 'Space Grotesk, Montserrat, sans-serif'}}>
            <span className="block text-gray-900 mb-2">Total Automation Control on  <span className=" bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-2 font-bold">Your Own Servers.</span></span>
           
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg" style={{fontFamily: 'Noto Sans, Montserrat, sans-serif'}}>
            Break free from SaaS limits. Experience true data sovereignty and unlimited workflow executions without the per-task fees.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 w-full justify-items-center">
            {/* Trendy Card 1 */}
            <div className="relative rounded-2xl p-6 bg-white/80 border-2 border-transparent shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" >
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{zIndex:-1, padding:2, background: 'linear-gradient(120deg, #38bdf8 0%, #6366f1 100%)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
              <div className="flex flex-col items-left gap-2 mb-2 text-left">
                <span className="flex items-left justify-left w-10 h-10 rounded-full text-blue-500 text-4xl mb-1"><FaPiggyBank /></span>
                <span className="font-bold text-slate-900 text-lg">No Per-Task Fees</span>
              </div>
              <p className="text-sm text-slate-500">Unlimited workflows, flat server cost. Scale without penalty.</p>
            </div>
            {/* Trendy Card 2 */}
            <div className="relative rounded-2xl p-6 bg-white/80 border-2 border-transparent shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" >
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{zIndex:-1, padding:2, background: 'linear-gradient(120deg, #a5b4fc 0%, #38bdf8 100%)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
              <div className="flex flex-col items-left gap-2 mb-2 text-left">
                <span className="flex items-left justify-left w-10 h-10 rounded-full text-slate-700 text-4xl mb-1"><TbShieldLockFilled /></span>
                <span className="font-bold text-slate-900 text-lg">100% Data Sovereignty</span>
              </div>
              <p className="text-sm text-slate-500">Your data stays behind your firewall. Maximum security.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            <button className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 text-base font-bold text-white shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all">
              Start Automating
            </button>
            <button className="flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              View Case Studies
            </button>
          </div>
        </div>
        {/* Right: Large Image */}
        <div className="flex-1 flex justify-center items-center w-full lg:w-auto mt-8 lg:mt-0">
          <div className="relative w-[400px] h-[400px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDycLPprIvfrJ3JlegeIzNi6wfn7oKUJaBNXn9yhk6GGs4FU2uFln884v2QQ1qXIwNotvBoKDEB0qDiZjPo2LInO0dxKC-waezw0RcMFmuHLtTksqVmPx2GKpRhHsim5wu45Yfa-lYBOztZmf7eZRrYFUzNtv2l9dw3ZprgtbLhDkQm37F3JeSzPsIlGwFXrG3A7l8NKoNLr-nIdLMh3HL8NzwXPr2Khl_HgIzwPv4oNOWrXDtKcBBX96wsqowbLwC6CGIG7vHdVp_0')"}}></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-white/20 p-4 rounded-xl shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-mono text-slate-800 font-bold">System Status: Operational</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ID: N8N-PRO-01</span>
              </div>
              <div className="w-full h-1 bg-slate-200 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>Throughput</span>
                <span>14.5k ops/sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
