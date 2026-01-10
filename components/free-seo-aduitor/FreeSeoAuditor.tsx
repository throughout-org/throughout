"use client";
import React, { useState } from "react";
import SeoUnlockPopup from "./SeoUnlockPopup";

export default function FreeSeoAuditor() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);
  const [unlockLoading, setUnlockLoading] = useState(false);
  const [unlockError, setUnlockError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowResult(false);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      setShowUnlock(true); // Show popup automatically after loading
    }, 4000); // Simulate loading (increased)
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      {/* Animated Background (reuse HeroSection style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-300/30 via-blue-200/20 to-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 via-blue-100/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-tl from-blue-100/20 via-blue-200/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-2xl mx-auto z-10 ">
        {/* Badge */}
        <div className="text-center mb-8 pt-8 pb-8">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-base font-bold rounded-full shadow-xl drop-shadow-lg ">
            <span className="mr-2">🚀</span> Free SEO Auditor
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-5xl pt-8 pb-8 sm:text-6xl font-extrabold text-center mb-4 mt-8 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-xl">
          Why isn’t your site ranking #1?
        </h1>
        <p className="text-lg sm:text-xl text-gray-700/80 text-center mb-8 max-w-xl mx-auto font-medium">
          <span className=" px-2 py-1  ">Discover technical errors in seconds. Instant analysis, no credit card required.</span>
        </p>
        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <input
            type="url"
            required
            placeholder="www.yourcompany.com"
            value={domain}
            onChange={e => setDomain(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg shadow-xl outline-none transition-all bg-white/70 backdrop-blur-md font-semibold placeholder:text-blue-400"
            disabled={loading}
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-lg font-extrabold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-md disabled:opacity-60 animate-pulse"
            disabled={loading}
          >
            {loading ? <span className="flex items-center gap-2"><span className="animate-spin inline-block w-5 h-5 border-2 border-t-2 border-t-white border-white/40 rounded-full"></span>Analyzing...</span> : "Analyze Now"}
          </button>
        </form>
        </div>
         <div className="relative max-w-5xl mx-auto z-10 ">
        {loading && (
          <div className="relative bg-white/80 rounded-3xl shadow-2xl p-8 mt-4 backdrop-blur-md border border-blue-200 overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-blue-300 bg-white/80 shadow-xl flex items-center justify-center backdrop-blur-lg mb-8 relative">
              <iframe
                src={domain ? (domain.startsWith('http') ? domain : `https://${domain}`) : 'about:blank'}
                title="Site Preview"
                className="w-full h-full"
                style={{ pointerEvents: 'none', filter: 'blur(2px) grayscale(0.2)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="animate-spin inline-block w-16 h-16 border-4 border-t-4 border-t-blue-500 border-blue-300 rounded-full bg-white/60"></span>
              </div>
            </div>
            <div className="text-blue-500 font-extrabold text-2xl animate-pulse flex items-center gap-4 mb-2">
              Analyzing site...
            </div>
          </div>
        )}
        {showResult && (
          <div className="relative bg-white/80 rounded-3xl shadow-2xl p-8 mt-4 backdrop-blur-md border border-blue-200 overflow-hidden">
            {/* Blurred dashboard */}
            <div className="opacity-30 blur-sm select-none pointer-events-none">
              {/* Dashboard-style result (blurred) */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-semibold text-gray-700">Overall SEO Health Score</span>
                  <span className="text-2xl font-bold text-blue-600">95/100</span>
                  <span className="ml-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">GOOD</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full rounded-full bg-green-400" style={{ width: `95%` }}></div>
                </div>
                <div className="text-xs text-gray-500">Based on technical checks performed.</div>
              </div>
              <div className="mb-6">
                <div className="font-bold text-lg mb-2">Top 5 Critical Issues Found</div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-red-50 rounded-xl p-4 border border-red-100 shadow-md">
                    <span className="text-red-500 text-2xl font-bold animate-pulse">T</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Missing Meta Titles</div>
                      <div className="text-gray-600 text-sm">Your pages are invisible in search results. Google is displaying random text snippets instead of your brand message.</div>
                      <div className="text-xs text-red-500 font-bold mt-1">POTENTIAL IMPACT: ~30% TRAFFIC LOSS</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-red-50 rounded-xl p-4 border border-red-100 shadow-md">
                    <span className="text-red-500 text-2xl font-bold animate-pulse">⚡</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Critical Page Load Delay</div>
                      <div className="text-gray-600 text-sm">Your site takes 3s to load. 53% of mobile users abandon sites that take longer than 3 seconds.</div>
                      <div className="text-xs text-red-500 font-bold mt-1">POTENTIAL IMPACT: ~16% CONVERSION DROP</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-yellow-50 rounded-xl p-4 border border-yellow-100 shadow-md">
                    <span className="text-yellow-500 text-2xl font-bold animate-pulse">📱</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Viewport Configuration Errors</div>
                      <div className="text-gray-600 text-sm">Your site is not fully optimized for mobile-first indexing. Google may de-rank your pages on mobile devices.</div>
                      <div className="text-xs text-yellow-500 font-bold mt-1">POTENTIAL IMPACT: REDUCED MOBILE RANK</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-red-50 rounded-xl p-4 border border-red-100 shadow-md">
                    <span className="text-red-500 text-2xl font-bold animate-pulse">!</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Insecure Content (Mixed Content)</div>
                      <div className="text-gray-600 text-sm">Browsers are warning users your site is "Not Secure". This destroys user trust immediately upon visit.</div>
                      <div className="text-xs text-red-500 font-bold mt-1">POTENTIAL IMPACT: ~48% TRUST LOSS</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-yellow-50 rounded-xl p-4 border border-yellow-100 shadow-md">
                    <span className="text-yellow-500 text-2xl font-bold animate-pulse">H1</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Multiple or Missing H1 Tags</div>
                      <div className="text-gray-600 text-sm">Search engines are confused about the main topic of your page. You are competing against yourself.</div>
                      <div className="text-xs text-yellow-500 font-bold mt-1">POTENTIAL IMPACT: KEYWORD DILUTION</div>
                    </div>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        )}
        {/* Unlock Popup */}
        <SeoUnlockPopup
          open={showUnlock}
          onClose={() => {
            setShowUnlock(false);
            setUnlockError("");
          }}
          loading={unlockLoading}
          error={unlockError}
          onSubmit={async (email: string) => {
            setUnlockLoading(true);
            setUnlockError("");
            try {
              // TODO: Replace with actual 2nd API call
              // Example: await fetch("http://127.0.0.1:8000/send-report", { method: "POST", ... })
              await new Promise(res => setTimeout(res, 1200));
              setUnlocked(true);
              setShowUnlock(false);
            } catch (err: any) {
              setUnlockError(err.message || "Failed to send report");
            } finally {
              setUnlockLoading(false);
            }
          }}
        />
        {/* Global styles for animations (fixes nested styled-jsx error) */}
        <style jsx>{`
          @keyframes iframe-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-40px); }
          }
          .animate-iframe-scroll {
            animation: iframe-scroll 3s ease-in-out infinite alternate;
          }
          @keyframes progressbar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progressbar {
            animation: progressbar 4s linear;
          }
        `}</style>
      </div>
    </section>
  );
}
