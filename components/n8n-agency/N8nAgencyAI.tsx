// Section 5: AI Agents
export default function N8nAgencyAI() {
  return (
    <section className="py-24 bg-white relative" id="ai">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-bold text-purple-600 mb-6">
            <span className="material-symbols-outlined text-sm">psychology</span>
            NEXT GENERATION INTELLIGENCE
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl max-w-3xl">
            Supercharge Your Automation with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"> AI Agents</span>.
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Don't just move data. Understand it. We integrate LLMs like OpenAI, Claude, and Gemini directly into your n8n pipelines.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-purple-200/50 group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwceiZtHcVfySzfF9bvmZ4YcKW1Ujub5Qu6ChOHxDhrPiIepLKEbtviC9t2ILUMQL0l8NaEq44o_otj86aX2hUZgmLmZN2Vkdmn3J_aMSvH-NfEOxXHyAK-5CYM5KZiqlbVeXfPN77Htday0mwN6KdQhkIlG8tx6E4yi9V4Sniowo7WhZReDqV7vD3znOxVIGEhlMSmgd5VeyZaZF30ibE8XNwfAQPU8VAyx-1MUM2DFQ-AZ8plHFuttxnDFvQ1kiAS27Ufazoznpc')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2 mb-4">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded text-xs text-white font-medium">GPT-4 Turbo</span>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded text-xs text-white font-medium">Claude 3 Opus</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Autonomous Decision Making</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-purple-500 text-3xl mb-3">auto_awesome</span>
              <h3 className="font-bold text-slate-900 text-lg">Autonomous AI Workflows</h3>
              <p className="text-slate-500 text-sm mt-2">Summarize emails, categorize support tickets, and generate content automatically using state-of-the-art LLMs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-pink-500 shadow-sm hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-pink-500 text-3xl mb-3">supervisor_account</span>
              <h3 className="font-bold text-slate-900 text-lg">Human-in-the-Loop</h3>
              <p className="text-slate-500 text-sm mt-2">AI does the heavy lifting, you provide the final sign-off. Seamless approval flows via Slack or Email.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
