'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
    // { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 z-50 relative">
            <div className="relative overflow-hidden">
              {/* Continuous Shining Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-logo-shine pointer-events-none"></div>
              
              <Image 
                src="/images/logo.png" 
                alt="Throoout Logo" 
                width={300}
                height={100}
                className="h-18 w-auto relative z-10"
                priority
              />
              
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-colors duration-300 group ${
                  isActive(link.href) 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-transform duration-300 ${
                  isActive(link.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/contact"
              className="relative px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-[60]"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'bg-gray-800 rotate-45 translate-y-2' : 'bg-gray-800'
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 bg-gray-800' : 'bg-gray-800'
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'bg-gray-800 -rotate-45 -translate-y-2' : 'bg-gray-800'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Vibrant Gradient Background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div> */}
        
        {/* Animated Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-fuchsia-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-amber-400/10"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Menu Content */}
        <div className="relative bg-white/95 min-h-screen flex flex-col items-center justify-center  space-y-10">
          {/* Logo */}
     
   
          

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`relative text-3xl font-extrabold transition-all duration-500 transform hover:scale-110 group ${
                isActive(link.href)
                  ? 'text-blue-300 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text'
                  : 'text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text'
              }`}
              style={{
                animation: isMenuOpen ? `slideIn 0.5s ease-out forwards ${index * 0.1}s` : 'none',
                opacity: isMenuOpen ? 1 : 0
              }}
            >
              {/* Glow effect on hover */}
              <span className="relative inline-block">
                {link.name}
                {/* <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform transition-transform duration-300 rounded-full ${
                  isActive(link.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span> */}
              </span>
            </a>
          ))}
          
          {/* Mobile CTA Button */}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-12 relative px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden group"
            style={{
              animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards 0.5s' : 'none',
              opacity: isMenuOpen ? 1 : 0
            }}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>

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
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-logo-shine {
          animation: logo-shine 3s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </nav>
  );
}
