'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const [navLinksRect, setNavLinksRect] = useState<{left: number, width: number} | null>(null);

  const pathname = usePathname();
  useLayoutEffect(() => {
    if (!isScrolled && navLinksRef.current) {
      const el = navLinksRef.current;
      setNavLinksRect({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [isScrolled, isMenuOpen, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Insights', href: '/insights' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-center items-center transition-all duration-500`}
      style={{ minHeight: '90px' }}
    >
      <div className="max-w-[1600px] w-full mx-auto px-8">
        <div className="flex justify-between items-center h-14 relative transition-all duration-500">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 z-50 relative   transition-all duration-300">
            <div className="relative overflow-hidden ">
              {/* Continuous Shining Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-logo-shine pointer-events-none"></div>
              <Image 
                src="/images/logo.png" 
                alt="Throoout Logo" 
                width={190}
                height={90}
                className="h-16 mt-2 w-auto relative z-13 "
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation with animated background */}
          <div ref={navLinksRef} className="hidden lg:flex items-center space-x-5 mt-4 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  // Delay recalculation to after navigation
                  setTimeout(() => {
                    if (navLinksRef.current) {
                      const el = navLinksRef.current;
                      setNavLinksRect({ left: el.offsetLeft, width: el.offsetWidth });
                    }
                  }, 100);
                }}
                className={`relative px-6 py-2 font-extrabold rounded-full transition-all duration-300 group text-base focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg backdrop-blur-md ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border border-white/30'
                    : 'bg-white/40 text-blue-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-200/80 hover:text-blue-900 hover:scale-105 border border-white/20'
                }`}
                style={{
                  boxShadow: isActive(link.href)
                    ? '0 4px 24px 0 rgba(56,189,248,0.18), 0 1.5px 8px 0 rgba(99,102,241,0.10)'
                    : '0 1.5px 8px 0 rgba(99,102,241,0.08)',
                  transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Animated expanding background on scroll */}
          <div
            className={`hidden lg:block absolute transition-all duration-700 ease-[cubic-bezier(.4,2,.6,1)] bg-white/60 shadow-2xl backdrop-blur-2xl border border-white/30 ${
              isScrolled
                ? 'top-0 left-0 right-0 h-[calc(100%+16px)] rounded-4xl opacity-100 scale-105'
                : 'rounded-4xl shadow-lg opacity-90 scale-100'
            }`}
            style={{
              ...(isScrolled
                ? { zIndex: 1, width: '98%', backdropFilter: 'blur(24px) saturate(1.5)' }
                : navLinksRect
                  ? {
                      zIndex: 1,
                      top: 'calc(50% + 8px)',
                      left: navLinksRect.left - 12,
                      width: navLinksRect.width + 24,
                      height: 56,
                      transform: 'translateY(-50%)',
                      backdropFilter: 'blur(24px) saturate(1.5)',
                    }
                  : { zIndex: 1, backdropFilter: 'blur(24px) saturate(1.5)' }
              ),
              boxShadow: '0 -4px 16px 0 rgba(30,64,175,0.10), 0 4px 16px 0 rgba(30,64,175,0.07), 0 1px 8px 0 rgba(56,189,248,0.10)'
            }}
          ></div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4 mt-4" style={{ zIndex: 2 }}>
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white text-lg font-extrabold rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-md"
              style={{
                boxShadow: '0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)',
                transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center focus:outline-none z-[60] rounded-full bg-blue-100/70 border border-blue-200 shadow-md hover:bg-blue-200 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span 
                className={`w-full h-1 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'bg-blue-700 rotate-45 translate-y-3' : 'bg-blue-700'
                }`}
              ></span>
              <span 
                className={`w-full h-1 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 bg-blue-700' : 'bg-blue-700'
                }`}
              ></span>
              <span 
                className={`w-full h-1 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'bg-blue-700 -rotate-45 -translate-y-2' : 'bg-blue-700'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu (fixed, rounded, blue) */}
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 flex justify-center items-start pt-16 mt-5 ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Soft blue background with floating blobs */}
        <div className="absolute inset-0 bg-blue-100/90"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-blue-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-blue-100/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        {/* Menu Content */}
  <div className="relative bg-gradient-to-br from-white/70 via-blue-100/60 to-blue-200/40 rounded-3xl shadow-2xl min-w-[320px] max-w-xs mx-auto my-8 flex flex-col items-center justify-center py-10 px-6 space-y-8 border border-white/40 backdrop-blur-2xl" style={{boxShadow: '0 8px 32px 0 rgba(30,64,175,0.10), 0 1.5px 8px 0 rgba(99,102,241,0.08), 0 2px 24px 0 rgba(56,189,248,0.10)'}}>
          {/* Logo */}
        
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full text-center relative text-xl font-extrabold transition-all duration-500 transform rounded-full px-6 py-3 group focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg backdrop-blur-md border ${
                isActive(link.href)
                  ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border-white/30'
                  : 'bg-white/40 text-blue-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-200/80 hover:text-blue-900 hover:scale-105 border-white/20'
              }`}
              style={{
                animation: isMenuOpen ? `slideIn 0.5s ease-out forwards ${index * 0.1}s` : 'none',
                opacity: isMenuOpen ? 1 : 0,
                boxShadow: isActive(link.href)
                  ? '0 4px 24px 0 rgba(56,189,248,0.18), 0 1.5px 8px 0 rgba(99,102,241,0.10)'
                  : '0 1.5px 8px 0 rgba(99,102,241,0.08)',
                transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
              }}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile CTA Button */}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
             className={`w-full text-center relative text-xl font-extrabold transition-all duration-500 transform rounded-full px-6 py-3 group focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg backdrop-blur-md border ${
                isActive("/contact")
                  ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border-white/30'
                  : 'bg-white/40 text-blue-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-200/80 hover:text-blue-900 hover:scale-105 border-white/20'
              }`}
              style={{
              animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards 0.5s' : 'none',
              opacity: isMenuOpen ? 1 : 0,
              boxShadow: '0 4px 24px 0 rgba(56,189,248,0.18), 0 1.5px 8px 0 rgba(99,102,241,0.10)',
              transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
      {/* Move styles outside the menu content */}
      <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes logo-shine {
            0% {
              transform: translateX(-100%) skewX(-15deg);
            }
            100% {
              transform: translateX(200%) skewX(-15deg);
            }
          }
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-logo-shine { animation: logo-shine 3s ease-in-out infinite; }
          .animate-blob { animation: blob 7s ease-in-out infinite; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </nav>
  );
}
