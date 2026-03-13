"use client";
import React, { useState } from "react";
import { FiTrendingUp, FiZap, FiMail, FiSmartphone, FiType, FiAlertTriangle, FiHash } from "react-icons/fi";
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
    const domainPattern =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!domainPattern.test(domain.trim())) {
      setDomainError(
        "Please enter a valid website URL (e.g. site.com, https://site.com, or https://site.com/path)",
      );
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
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Trendy Glassmorphism Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-300/30 via-blue-200/20 to-blue-100/20 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 via-blue-100/20 to-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-gradient-to-tl from-blue-100/20 via-blue-200/20 to-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto ">
        {/* Badge */}
        {/* <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-0 border border-blue-100 rounded-full shadow-xl bg-white/80 backdrop-blur-md animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-blue-400"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></span>
            </span>
            <span className="ml-2 text-lg"><FiTrendingUp className="inline-block w-5 h-5 text-blue-500" /></span> 
            <span className="text-base font-bold tracking-wide text-transparent bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text">
              Free SEO Auditor
            </span>
          </div>
        </div> */}

        {/* Badge */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
              Free SEO Auditor
            </span>
          </div>
        </div>
        {/* Heading */}
        <h1 className="pt-2 pb-6 mt-4 mb-6 text-5xl font-bold text-center sm:text-6xl lg:text-7xl animate-slide-up">
          <span className="block mb-2 text-gray-900"> Why isn’t your site</span>
          <span className="block pb-4 text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-blue-00 bg-clip-text animate-gradient-x">
            ranking #1?
          </span>
        </h1>
        <p className="max-w-4xl mx-auto mb-10 text-xl leading-relaxed text-center text-gray-600 sm:text-2xl animate-fade-in-delay">
          Discover technical errors in seconds. Instant analysis, no credit card
          required.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 mt-4 sm:flex-row animate-fade-in"
        >
          <div className="flex flex-row w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-full shadow-xl">
            <input
              type="text"
              required
              placeholder="Enter your site URL"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
                setDomainError("");
              }}
              className="flex-1 px-8 py-5 text-xl font-semibold bg-white border-none rounded-l-full outline-none placeholder:text-gray-400 focus:ring-0"
              disabled={loading}
              autoComplete="off"
              style={{ boxShadow: "none" }}
            />
            <button
              type="submit"
              className="px-10 py-5 text-xl font-extrabold text-white transition-all duration-300 rounded rounded-r-full bg-gradient-to-r from-blue-400 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-60"
              disabled={loading}
              style={{ border: "none", boxShadow: "none" }}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6 border-2 border-t-2 rounded-full animate-spin border-t-white border-white/40"></span>
                  Analyzing...
                </span>
              ) : (
                <span className="flex items-center gap-2">Analyze Now</span>
              )}
            </button>
          </div>
        </form>
        {domainError && (
          <div className="relative flex justify-center w-full mt-0 mb-6">
            <div className="absolute z-20 mt-2 -translate-x-1/2 top-full left-1/2">
              <div className="flex items-center bg-white border border-blue-200 shadow-lg rounded px-4 py-3 text-base font-semibold text-blue-800 min-w-[240px] animate-shake">
                <span className="mr-2 text-lg text-orange-500">&#9888;</span>
                <span>
                  {domainError.replace(
                    "Please enter a valid website URL (e.g. site.com or https://site.com)",
                    "Please enter a URL.",
                  )}
                </span>
              </div>
              <div className="absolute w-0 h-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 left-1/2 -top-2 border-l-transparent border-r-transparent border-b-blue-100"></div>
            </div>
          </div>
        )}
      </div>
      <div className="relative max-w-5xl mx-auto z-60 ">
        {loading && (
          <div className="relative bg-white/80 rounded-3xl shadow-2xl p-8 mt-4 backdrop-blur-md border border-blue-200 overflow-hidden flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
            <div
              className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-blue-200 bg-white/80 shadow-xl flex items-center justify-center backdrop-blur-lg mb-8 relative"
              style={{ overflow: "auto" }}
            >
              <iframe
                src={
                  domain
                    ? domain.startsWith("http")
                      ? domain
                      : `https://${domain}`
                    : "about:blank"
                }
                title="Site Preview"
                className="w-full h-full"
                style={{ filter: "blur(2px) grayscale(0.2)" }}
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <span className="inline-block w-16 h-16 border-4 border-t-4 border-blue-300 rounded-full animate-spin border-t-blue-500 bg-white/60"></span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2 text-2xl font-extrabold text-blue-500 animate-pulse">
              <span className="animate-bounce"><FiZap className="inline-block w-6 h-6 text-yellow-400" /></span> Analyzing site...
            </div>
          </div>
        )}
        {showResult && (
          <div className="relative p-8 mt-4 overflow-hidden border border-blue-200 shadow-2xl bg-white/80 rounded-3xl backdrop-blur animate-fade-in">
            {/* Blurred dashboard */}
            <div className="flex justify-center w-full mb-6">
              <button
                type="button"
                className="px-6 py-3 font-bold text-white transition-all rounded-full shadow bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-105 disabled:opacity-60 animate-bounce"
                disabled={loading}
                onClick={() => setShowUnlock(true)}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="text-xl"><FiMail className="inline-block w-5 h-5" /></span>Send Me The Full Report
                  </span>
                )}
              </button>
            </div>
            <div className="pointer-events-none select-none opacity-30 blur-sm">
              {/* Dashboard-style result (blurred) */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-semibold text-gray-700">
                    Overall SEO Health Score
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    95/100
                  </span>
                  <span className="px-3 py-1 ml-2 text-xs font-bold text-green-700 bg-green-100 rounded-full">
                    GOOD
                  </span>
                </div>
                <div className="w-full h-2 mb-2 overflow-hidden bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-400 rounded-full animate-progressbar"
                    style={{ width: `95%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Based on technical checks performed.
                </div>
              </div>
              <div className="mb-6">
                <div className="mb-2 text-lg font-bold">
                  Top 5 Critical Issues Found
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-4 border border-blue-100 shadow-md bg-blue-50 rounded-xl">
                    <span className="text-2xl font-bold text-blue-500 animate-pulse">
                      <FiType className="w-8 h-8" />
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        Missing Meta Titles
                      </div>
                      <div className="text-sm text-gray-600">
                        Your pages are invisible in search results. Google is
                        displaying random text snippets instead of your brand
                        message.
                      </div>
                      <div className="mt-1 text-xs font-bold text-blue-500">
                        POTENTIAL IMPACT: ~30% TRAFFIC LOSS
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 border border-blue-100 shadow-md bg-blue-50 rounded-xl">
                    <span className="text-xl font-bold text-yellow-500 animate-pulse">
                      <FiZap className="w-8 h-8" />
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        Critical Page Load Delay
                      </div>
                      <div className="text-sm text-gray-600">
                        Your site takes 3s to load. 53% of mobile users abandon
                        sites that take longer than 3 seconds.
                      </div>
                      <div className="mt-1 text-xs font-bold text-blue-500">
                        POTENTIAL IMPACT: ~16% CONVERSION DROP
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-blue-100 border border-blue-200 shadow-md rounded-xl">
                    <span className="text-xl font-bold text-blue-500 animate-pulse tracking-widest">
                      <FiSmartphone className="w-8 h-8" />
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        Viewport Configuration Errors
                      </div>
                      <div className="text-sm text-gray-600">
                        Your site is not fully optimized for mobile-first
                        indexing. Google may de-rank your pages on mobile
                        devices.
                      </div>
                      <div className="mt-1 text-xs font-bold text-blue-400">
                        POTENTIAL IMPACT: REDUCED MOBILE RANK
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 border border-blue-100 shadow-md bg-blue-50 rounded-xl">
                    <span className="text-xl font-bold text-red-500 animate-pulse">
                      <FiAlertTriangle className="w-8 h-8" />
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        Insecure Content (Mixed Content)
                      </div>
                      <div className="text-sm text-gray-600">
                        Browsers are warning users your site is "Not Secure".
                        This destroys user trust immediately upon visit.
                      </div>
                      <div className="mt-1 text-xs font-bold text-blue-500">
                        POTENTIAL IMPACT: ~48% TRUST LOSS
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-blue-100 border border-blue-200 shadow-md rounded-xl">
                    <span className="text-xl font-bold text-blue-500 animate-pulse">
                      <FiHash className="w-8 h-8" />
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        Multiple or Missing H1 Tags
                      </div>
                      <div className="text-sm text-gray-600">
                        Search engines are confused about the main topic of your
                        page. You are competing against yourself.
                      </div>
                      <div className="mt-1 text-xs font-bold text-blue-400">
                        POTENTIAL IMPACT: KEYWORD DILUTION
                      </div>
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
              const apiUrl =
                process.env.NEXT_PUBLIC_SEO_AUDIT_API_URL ||
                "http://127.0.0.1:8000/free-seo-audit";
              const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  url: domain.startsWith("http") ? domain : `https://${domain}`,
                  email,
                }),
              });
              if (!response.ok) {
                throw new Error(
                  "Failed to send report. Please try again later.",
                );
              }
              // Simulate up to 2 minutes delay for email delivery
              await new Promise((res) => setTimeout(res, 2000));
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
            <div className="relative flex flex-col items-center w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
              <button
                className="absolute text-2xl font-bold text-gray-400 top-3 right-3 hover:text-gray-700"
                onClick={() => setShowSentPopup(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="mb-2 text-2xl font-bold text-center text-blue-600">
                Mail Sent!
              </h2>
              <p className="mb-4 text-base text-center text-gray-700">
                Please check your email. Delivery may take up to{" "}
                <span className="font-bold">2 minutes</span>.
              </p>
              <div className="mt-2 text-xs text-center text-gray-400">
                If you don't see it, check your spam folder.
              </div>
            </div>
          </div>
        )}
        {/* Global styles for animations (fixes nested styled-jsx error) */}
        <style jsx>{`
          @keyframes iframe-scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-40px);
            }
          }
          .animate-iframe-scroll {
            animation: iframe-scroll 3s ease-in-out infinite alternate;
          }
          @keyframes progressbar {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
          .animate-progressbar {
            animation: progressbar 4s linear;
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          @keyframes gradient-x {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease-in-out infinite alternate;
          }
          @keyframes shake {
            0%,
            100% {
              transform: translateX(0);
            }
            20%,
            60% {
              transform: translateX(-6px);
            }
            40%,
            80% {
              transform: translateX(6px);
            }
          }
          .animate-shake {
            animation: shake 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>
      </div>
    </section>
  );
}
