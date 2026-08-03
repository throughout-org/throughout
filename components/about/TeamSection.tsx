import Image from "next/image";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Bavaram Karunaaharan",
    role: "CEO and Co-Founder",
    photo: "/images/team/bavaram.png",
  },
  {
    name: "Insaf Inhaam",
    role: "CTO and Co-Founder",
    photo: "/images/team/Insaf .jpg",
  },
  {
    name: "Janith Viranga",
    role: "Software Engineer",
    photo: "/images/team/janith.png",
  },
  { name: "Aysha Shahani", role: "Software Engineer" },
  { name: "Amrith Shylendra", role: "Sales Executive" },
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
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-200"
          >
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                <span className="text-3xl font-bold text-white/70">
                  {getInitials(member.name)}
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-sky-950/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-sm font-bold leading-tight text-white sm:text-base">
                {member.name}
              </p>
              <p className="text-xs leading-tight text-white/80 sm:text-sm">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
