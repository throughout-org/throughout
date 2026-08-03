"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  place?: string;
};

const team: TeamMember[] = [
  {
    name: "Bavaram Karunaaharan",
    role: "CEO and Co-Founder",
    photo: "/images/team/bavaram.png",
    place:"Colombo, Sri Lanka"
  },
  {
    name: "Insaf Inhaam",
    role: "CTO and Co-Founder",
    photo: "/images/team/Insaf.png",
    place:"Colombo, Sri Lanka"
  },
  {
    name: "Janith Viranga",
    role: "Software Engineer",
    photo: "/images/team/janith.png",
    place:"Colombo, Sri Lanka"
  },
  {
    name: "Aysha Shahani",
    role: "Software Engineer",
    photo: "/images/team/sampleGirl1.jpg",
    place:"Kandy, Sri Lanka"
  },
  {
    name: "Amrith Shylendra",
    role: "Sales Executive",
    photo: "/images/team/sampleBoy2.jpg",   
    place:"Kandy, Sri Lanka"
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
              {member.place && (
                <p className="text-xs leading-snug text-white/60">
                  {member.place}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
