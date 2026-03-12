"use client";
import React, { useState } from "react";
import SeoUnlockPopup from "./SeoUnlockPopup";

export default function FreeSeoAuditor() {
  const [domain, setDomain] = useState("");
  const [domainError, setDomainError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);
  const [unlockLoading, setUnlockLoading] = useState(false);
  const [unlockError, setUnlockError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showSentPopup, setShowSentPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDomainError("");
    // Accepts: https://site.com, http://site.com, www.site.com, site.com
    // Rejects: random strings, numbers, etc.
    // Improved regex: accepts site.com, www.site.com, https://site.com, http://site.com, and URLs with paths
    const domainPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!domainPattern.test(domain.trim())) {
      setDomainError("Please enter a valid website URL (e.g. site.com, https://site.com, or https://site.com/path)");
      return;
    }
    setLoading(true);
    setShowResult(false);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      setShowUnlock(true); // Show popup automatically after loading
    const [showDownloadButton, setShowDownloadButton] = useState(false);
    }, 4000); // Simulate loading (increased)
  };

  // Listen for scroll event from iframe via postMessage
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the iframe that indicate a scroll
      if (event.data === "iframe-scrolled" && !hasScrolled) {
        setHasScrolled(true);
        setShowUnlock(true);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [hasScrolled]);

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      {/* Animated Background (reuse HeroSection style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-300/30 via-blue-200/20 to-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 via-blue-100/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-tl from-blue-100/20 via-blue-200/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto z-10 ">
        {/* Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-xl mb-4 animate-fade-in border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-500 to-blue-400"></span>
            </span>
            <span className="ml-2 text-lg">🚀</span>
            <span className="text-base font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent tracking-wide">Free SEO Auditor</span>
          </div>
        </div>
        {/* Heading */}
        <h1 className="text-5xl pt-8 pb-8 sm:text-6xl font-extrabold text-center mb-4 mt-8 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-xl animate-gradient-x">
          Why isn’t your site ranking #1?
        </h1>
        <p className="text-lg sm:text-xl text-gray-700/80 text-center mb-8 pb-20 max-w-4xl mx-auto font-medium animate-fade-in">
          <span className="px-3 py-1 rounded-full bg-blue-50/80 text-blue-700 font-semibold shadow-sm">Discover technical errors in seconds. Instant analysis, no credit card required.</span>
        </p>
        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-4 justify-center mb-12 animate-fade-in">
          <div className="flex flex-col flex-1">
            <input
              type="text"
              required
              placeholder="Enter your site URL"
              value={domain}
              onChange={e => {
                setDomain(e.target.value);
                setDomainError("");
              }}
              className="px-6 py-4 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg shadow-xl outline-none transition-all bg-white/70 backdrop-blur-md font-semibold placeholder:text-blue-400 w-full"
              disabled={loading}
              autoComplete="off"
            />
            {domainError && (
              <div className="relative w-full flex justify-center mt-2">
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20">
                  <div className="flex items-center bg-white border border-blue-200 shadow-lg rounded px-3 py-2 text-sm font-semibold text-blue-800 min-w-[220px] animate-shake">
                    <span className="text-orange-500 text-lg mr-2">&#9888;</span>
                    <span>{domainError.replace('Please enter a valid website URL (e.g. site.com or https://site.com)', 'Please enter a URL.')}</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-100"></div>
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-lg font-extrabold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-md disabled:opacity-60 animate-pulse"
            disabled={loading}
          >
            {loading ? <span className="flex items-center gap-2"><span className="animate-spin inline-block w-5 h-5 border-2 border-t-2 border-t-white border-white/40 rounded-full"></span>Analyzing...</span> : <span className="flex items-center gap-2"><span className="text-xl">🔍</span>Analyze Now</span>}
          </button>
        </form>
      </div>
         <div className="relative max-w-5xl mx-auto z-60 ">
        {loading && (
          <div className="relative bg-white/80 rounded-3xl shadow-2xl p-8 mt-4 backdrop-blur-md border border-blue-200 overflow-hidden flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
            <div
              className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-blue-200 bg-white/80 shadow-xl flex items-center justify-center backdrop-blur-lg mb-8 relative"
              style={{ overflow: 'auto' }}
            >
              <iframe
                src={domain ? (domain.startsWith('http') ? domain : `https://${domain}`) : 'about:blank'}
                title="Site Preview"
                className="w-full h-full"
                style={{ filter: 'blur(2px) grayscale(0.2)' }}
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="animate-spin inline-block w-16 h-16 border-4 border-t-4 border-t-blue-500 border-blue-300 rounded-full bg-white/60"></span>
              </div>
            </div>
            <div className="text-blue-500 font-extrabold text-2xl animate-pulse flex items-center gap-4 mb-2">
              <span className="animate-bounce">⚡</span> Analyzing site...
            </div>
          </div>
        )}
        {showResult && (
          <div className="relative bg-white/80 rounded-3xl shadow-2xl p-8 mt-4 backdrop-blur border border-blue-200 overflow-hidden animate-fade-in">
            {/* Blurred dashboard */}
            <div className="w-full flex justify-center mb-6">
              <button
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-full shadow hover:scale-105 transition-all disabled:opacity-60 animate-bounce"
                disabled={loading}
                onClick={() => setShowUnlock(true)}
              >
                {loading ? "Sending..." : <span className="flex items-center gap-2"><span className="text-xl">📧</span>Send Me The Full Report</span>}
              </button>
            </div>
            <div className="opacity-30 blur-sm select-none pointer-events-none">
              {/* Dashboard-style result (blurred) */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-semibold text-gray-700">Overall SEO Health Score</span>
                  <span className="text-2xl font-bold text-blue-600">95/100</span>
                  <span className="ml-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">GOOD</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full rounded-full bg-blue-400 animate-progressbar" style={{ width: `95%` }}></div>
                </div>
                <div className="text-xs text-gray-500">Based on technical checks performed.</div>
              </div>
              <div className="mb-6">
                <div className="font-bold text-lg mb-2">Top 5 Critical Issues Found</div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100 shadow-md">
                    <span className="text-blue-500 text-2xl font-bold animate-pulse">T</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Missing Meta Titles</div>
                      <div className="text-gray-600 text-sm">Your pages are invisible in search results. Google is displaying random text snippets instead of your brand message.</div>
                      <div className="text-xs text-blue-500 font-bold mt-1">POTENTIAL IMPACT: ~30% TRAFFIC LOSS</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100 shadow-md">
                    <span className="text-blue-500 text-2xl font-bold animate-pulse">⚡</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Critical Page Load Delay</div>
                      <div className="text-gray-600 text-sm">Your site takes 3s to load. 53% of mobile users abandon sites that take longer than 3 seconds.</div>
                      <div className="text-xs text-blue-500 font-bold mt-1">POTENTIAL IMPACT: ~16% CONVERSION DROP</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-100 rounded-xl p-4 border border-blue-200 shadow-md">
                    <span className="text-blue-400 text-2xl font-bold animate-pulse">📱</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Viewport Configuration Errors</div>
                      <div className="text-gray-600 text-sm">Your site is not fully optimized for mobile-first indexing. Google may de-rank your pages on mobile devices.</div>
                      <div className="text-xs text-blue-400 font-bold mt-1">POTENTIAL IMPACT: REDUCED MOBILE RANK</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100 shadow-md">
                    <span className="text-blue-500 text-2xl font-bold animate-pulse">!</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Insecure Content (Mixed Content)</div>
                      <div className="text-gray-600 text-sm">Browsers are warning users your site is "Not Secure". This destroys user trust immediately upon visit.</div>
                      <div className="text-xs text-blue-500 font-bold mt-1">POTENTIAL IMPACT: ~48% TRUST LOSS</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-blue-100 rounded-xl p-4 border border-blue-200 shadow-md">
                    <span className="text-blue-400 text-2xl font-bold animate-pulse">H1</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Multiple or Missing H1 Tags</div>
                      <div className="text-gray-600 text-sm">Search engines are confused about the main topic of your page. You are competing against yourself.</div>
                      <div className="text-xs text-blue-400 font-bold mt-1">POTENTIAL IMPACT: KEYWORD DILUTION</div>
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
              // Show loader and send mail check
              const apiUrl = process.env.NEXT_PUBLIC_SEO_AUDIT_API_URL || "http://127.0.0.1:8000/free-seo-audit";
              const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  url: domain.startsWith("http") ? domain : `https://${domain}`,
                  email
                })
              });
              if (!response.ok) {
                throw new Error("Failed to send report. Please try again later.");
              }
              // Simulate up to 2 minutes delay for email delivery
              await new Promise(res => setTimeout(res, 2000));
              setUnlocked(true);
              setShowUnlock(false);
              // Show custom UI popup after closing unlock popup
              setTimeout(() => {
                setShowSentPopup(true);
              }, 500);
            } catch (err: any) {
              setUnlockError(err.message || "Failed to send report");
            } finally {
              setUnlockLoading(false);
            }
          }}
        />
        {/* Sent popup */}
        {showSentPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                onClick={() => setShowSentPopup(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-2 text-center text-blue-600">Mail Sent!</h2>
              <p className="text-gray-700 mb-4 text-center text-base">Please check your email. Delivery may take up to <span className="font-bold">2 minutes</span>.</p>
              <div className="text-xs text-gray-400 mt-2 text-center">If you don't see it, check your spam folder.</div>
            </div>
          </div>
        )}
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
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease-in-out infinite alternate;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
          }
          .animate-shake {
            animation: shake 0.4s cubic-bezier(0.4,0,0.2,1);
          }
        `}</style>
      </div>
    </section>
  );
}
