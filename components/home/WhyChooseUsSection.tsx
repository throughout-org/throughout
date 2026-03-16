import { FiZap, FiLayers, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export default function WhyChooseUsSection() {
  const badgeText = "WHY US";
  const headline = "Why Companies Work With Us";
  const intro =
    "Our engineering practices ensure every product we build is reliable, scalable, and built to last.";

  const features = [
    {
      icon: <FiZap className="text-white" />,
      title: "Fast Iterations",
      description:
        "We ship in short development cycles so you see real progress every week.",
    },
    {
      icon: <FiLayers className="text-white" />,
      title: "Scalable Architecture",
      description:
        "We design systems that remain stable as your product and users grow.",
    },
    {
      icon: <FiMessageSquare className="text-white" />,
      title: "Transparent Collaboration",
      description:
        "You get clear progress updates, sprint reviews, and direct access to the team.",
    },
    {
      icon: <FiTrendingUp className="text-white" />,
      title: "Modern Tech Stack",
      description:
        "We use proven frameworks and cloud infrastructure to build future-ready products.",
    },
  ];

  return (
    <section id="why-us" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={intro}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white border border-blue-100 shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className="flex items-center justify-center mb-3 text-3xl rounded-full w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-300">
                {item.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold text-blue-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
