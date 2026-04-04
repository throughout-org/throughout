'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent body scroll while loading
    document.body.style.overflow = 'hidden';

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2300); // Start fading at 2.3s

    // Complete loading and allow scroll
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2800); // Complete at 2.8s (2.3s + 0.5s fade)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo Only */}
      <div className="relative z-10">
        <Image
          src="/images/singlelogo.png"
          alt="Throughout (PVT) LTD"
          width={192}
          height={192}
          className="animate-pulse"
          priority
        />
      </div>
    </div>
  );
}
