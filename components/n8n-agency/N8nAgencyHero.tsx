
import { FaUserCheck, FaPiggyBank, FaShieldAlt } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import { TbShieldLockFilled } from "react-icons/tb";


export default function N8nAgencyHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Trendy Background */}
    
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            {/* Trendy Gradient Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-semibold rounded-full shadow-lg mb-4 w-fit">
              <span className="text-base mr-1"><RiShieldCheckFill /></span>
              <span>Enterprise Grade Security</span>
            </div>
            {/* Trendy Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{fontFamily: 'Space Grotesk, Montserrat, sans-serif'}}>
              <span className="block text-gray-900 mb-2">Total Automation Control on</span>
              <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">Your Own Servers.</span>
            </h1>
         
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl" style={{fontFamily: 'Noto Sans, Montserrat, sans-serif'}}>
              Break free from SaaS limits. Experience true data sovereignty and unlimited workflow executions without the per-task fees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500 text-2xl"><FaPiggyBank /></span>
                  <span className="font-bold text-slate-900 text-base">No Per-Task Fees</span>
                </div>
                <p className="text-sm text-slate-500">Unlimited workflows, flat server cost. Scale without penalty.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-slate-400">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-slate-700 text-2xl"><TbShieldLockFilled  /></span>
                  <span className="font-bold text-slate-900 text-base">100% Data Sovereignty</span>
                </div>
                <p className="text-sm text-slate-500">Your data stays behind your firewall. Maximum security.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-8 text-base font-bold text-white shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all">
                Start Automating
              </button>
              <button className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDycLPprIvfrJ3JlegeIzNi6wfn7oKUJaBNXn9yhk6GGs4FU2uFln884v2QQ1qXIwNotvBoKDEB0qDiZjPo2LInO0dxKC-waezw0RcMFmuHLtTksqVmPx2GKpRhHsim5wu45Yfa-lYBOztZmf7eZRrYFUzNtv2l9dw3ZprgtbLhDkQm37F3JeSzPsIlGwFXrG3A7l8NKoNLr-nIdLMh3HL8NzwXPr2Khl_HgIzwPv4oNOWrXDtKcBBX96wsqowbLwC6CGIG7vHdVp_0')"}}></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-white/20 p-4 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-mono text-slate-800 font-bold">System Status: Operational</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">ID: N8N-PRO-01</span>
                </div>
                <div className="h-1 w-full rounded-full bg-slate-100 mb-2">
                  <div className="h-1 rounded-full bg-primary" style={{width: '75%'}}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>Throughput</span>
                  <span>14.5k ops/sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* No custom style needed, all handled by Tailwind utility classes */}
    </section>
  );
}
