"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const team = [
  { name: "Insaf Inhaam", src: "/images/team/Insaf.png", objectPosition: "50% 20%" },
  { name: "Bavaram Karunaaharan", src: "/images/team/bavaram.png", objectPosition: "50% 22%" },
  { name: "Aysha Shahani", src: "/images/team/aysha-bg.png", objectPosition: "50% 30%" },
  { name: "Janith Viranga", src: "/images/team/janith.png", objectPosition: "50% 24%" },
  { name: "Amrith Shylendra", src: "/images/team/amrith.png", objectPosition: "50% 36%" },
];

export default function HeroTeamGrowth() {
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setVisibleCount((current) => (current >= team.length ? 2 : current + 1));
    }, 1600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-center h-24 mt-5"
      aria-label="Throughout team: Insaf, Bavaram, Aysha, Janith, and Amrith"
    >
      {team.map((member, index) => {
        const visible = index < visibleCount;

        return (
          <div
            key={member.name}
            className={`transition-[width,margin,opacity,transform] duration-700 ease-out ${
              visible
                ? `w-16 opacity-100 sm:w-20 ${index === 0 ? "ml-0" : "ml-3 sm:ml-4"} translate-y-0 scale-100`
                : "ml-0 w-0 translate-y-2 scale-75 opacity-0"
            }`}
            aria-hidden={!visible}
          >
            <div className="relative w-16 h-16 overflow-hidden rounded-full bg-slate-200 sm:h-20 sm:w-20">
              <Image
                src={member.src}
                alt={member.name}
                fill
                sizes="(min-width: 640px) 96px, 64px"
                className="object-cover"
                style={{ objectPosition: member.objectPosition }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
