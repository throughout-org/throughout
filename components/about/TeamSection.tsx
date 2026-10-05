import Image from "next/image";

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
    photo: "/images/team/Insaf.png",
  },
  {
    name: "Janith Viranga",
    role: "Software Engineer",
    photo: "/images/team/janith.png",
  },
  {
    name: "Aysha Shahani",
    role: "Software Engineer",
    photo: "/images/team/aysha-bg.png",
  },
  {
    name: "Amrith Shylendra",
    role: "Sales Executive",
    photo: "/images/team/amrith.png",
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
    <div>
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Our team
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
          The people you&apos;ll work with.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {team.map((member) => (
          <div
            key={member.name}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
