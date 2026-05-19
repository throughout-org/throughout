import {
  FiTarget,
  FiRefreshCw,
  FiCheckCircle,
  FiLifeBuoy,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export default function OurApproachSection() {
  const approaches = [
    {
      step: "01",
      title: "Client-Centric Focus",
      description:
        "We take time to understand your unique needs and goals before writing a single line of code.",
      icon: <FiTarget className="text-white" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Agile Methodology",
      description:
        "Flexible and iterative development that adapts smoothly to evolving requirements.",
      icon: <FiRefreshCw className="text-white" />,
      color: "from-sky-500 to-pink-500",
    },
    {
      step: "03",
      title: "Quality Assurance",
      description:
        "Rigorous testing and code reviews ensure bug-free, reliable software delivery.",
      icon: <FiCheckCircle className="text-white" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Continuous Support",
      description:
        "24/7 maintenance and support to keep your applications running at peak performance.",
      icon: <FiLifeBuoy className="text-white" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="py-16">
      <ServiceSectionHeader
        badgeText="OUR APPROACH"
        headline="A Clear Path From Idea to Reliable Product"
        intro="We keep delivery focused with discovery, iterative development, quality checks, and practical support after launch."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-2xl transition group-hover:bg-sky-600">
                {approach.icon}
              </div>
              <div className="flex-1">
                <div className="mb-2 text-sm font-bold text-sky-700">
                  STEP {approach.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-950">
                  {approach.title}
                </h3>
                <p className="leading-7 text-slate-600">
                  {approach.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
