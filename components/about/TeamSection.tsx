"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: "Bavaram Karunaaharan",
    role: "CEO and Co-Founder",
    photo: "/images/team/bavaram.png",
    linkedin: "https://www.linkedin.com/in/bavaram",
  },
  {
    name: "Insaf Inhaam",
    role: "CTO and Co-Founder",
    photo: "/images/team/Insaf .jpg",
    linkedin: "https://www.linkedin.com/in/insaf-inhaam/",
  },
  {
    name: "Janith Viranga",
    role: "Software Engineer",
    photo: "/images/team/janith.png",
    linkedin: "https://www.linkedin.com/in/janith-viranga",
  },
  {
    name: "Aysha Shahani",
    role: "Software Engineer",
    photo: "/images/team/sampleGirl1.jpg",
    linkedin: "https://www.linkedin.com/in/shahani-ashad-17447227a/",
  },
  {
    name: "Amrith Shylendra",
    role: "Sales Executive",
    photo: "/images/team/Amrith.png",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}


export default function TeamSection() {
  return (
    <div className="py-16">
      <ServiceSectionHeader
        badgeText="OUR TEAM"
        headline="Our leadership team"
        intro="The people behind the strategy, the code, and the client relationships."
      />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                <span className="text-3xl font-bold text-white/70">
                  {getInitials(member.name)}
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-sky-950/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 space-y-1 p-4 sm:p-5">
              <p className="truncate text-sm font-bold leading-snug text-white sm:text-base">
                {member.name}
              </p>
              <p className="text-xs leading-snug text-white/80 sm:text-sm">
                {member.role}
              </p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
