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
          <div className="flex items-center gap-3 z-50">
            <Image 
              src="/images/logo.png" 
              alt="Throoout Logo" 
              width={280}
              height={80}
              className="h-14 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

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
            className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8 space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-bold transition-all duration-300 transform hover:scale-110 ${
                isActive(link.href)
                  ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'
                  : 'text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text'
              }`}
              style={{
                animation: isMenuOpen ? `slideIn 0.5s ease-out forwards ${index * 0.1}s` : 'none',
                opacity: isMenuOpen ? 1 : 0
              }}
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile CTA Button */}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            style={{
              animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards 0.5s' : 'none',
              opacity: isMenuOpen ? 1 : 0
            }}
          >
            Contact Us
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
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </nav>
  );
}
