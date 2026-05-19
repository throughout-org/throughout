import { FiZap, FiLayers, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export default function CoreStrengthsSection() {
  const strengths = [
    {
      icon: <FiZap className="text-white" />,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or attention to detail.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FiLayers className="text-white" />,
      title: "Clean Architecture",
      description:
        "Maintainable and scalable code structure following industry best practices.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiMessageSquare className="text-white" />,
      title: "Clear Communication",
      description:
        "Regular updates and a transparent process keeping you informed at every step.",
      color: "from-sky-500 to-pink-500",
    },
    {
      icon: <FiTrendingUp className="text-white" />,
      title: "Modern Tech Stack",
      description:
        "Latest tools, frameworks, and best practices for cutting-edge solutions.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="py-16">
      <ServiceSectionHeader
        badgeText="CORE STRENGTHS"
        headline="Fast Execution With Engineering Discipline"
        intro="We combine fast delivery with clean, maintainable code and transparent communication on a modern technology stack."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-2xl transition group-hover:bg-sky-600">
              {strength.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-950">
              {strength.title}
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
