import { FiZap, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "Embracing new technologies and creative thinking",
      icon: <FiZap className="text-white" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Excellence",
      description: "Delivering quality work in every project we touch",
      icon: <FiAward className="text-white" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Integrity",
      description: "Building trust through honesty and transparency",
      icon: <FiUsers className="text-white" />,
      color: "from-sky-500 to-pink-500",
    },
    {
      title: "Growth",
      description: "Continuous improvement for us and our clients",
      icon: <FiTrendingUp className="text-white" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="py-16">
      <ServiceSectionHeader
        badgeText="OUR VALUES"
        headline="Principles That Guide the Work"
        intro="We keep the work practical, transparent, and focused on software that can keep serving the business after launch."
      />
      <div className="grid gap-4 md:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-2xl transition group-hover:bg-sky-600">
              {value.icon}
            </div>
            <h3 className="mb-2 font-bold text-slate-950">{value.title}</h3>
            <p className="text-sm leading-6 text-slate-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
