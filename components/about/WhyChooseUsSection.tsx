import { FiUsers, FiRefreshCw, FiCheckCircle, FiClock, FiLifeBuoy, FiDollarSign } from "react-icons/fi";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: "Expert Team",
      description: "Experienced developers with proven track records",
      icon: <FiUsers />,
      color: "from-blue-200 to-cyan-50",
    },
    {
      title: "Agile Process",
      description: "Flexible and iterative development",
      icon: <FiRefreshCw />,
      color: "from-blue-200 to-cyan-50",
    },
    {
      title: "Quality Code",
      description: "Clean, maintainable, tested code",
      icon: <FiCheckCircle />,
      color: "from-blue-200 to-cyan-50",
    },
    {
      title: "On-Time Delivery",
      description: "Meeting deadlines consistently",
      icon: <FiClock />,
      color: "from-blue-200 to-cyan-50",
    },
    {
      title: "24/7 Support",
      description: "Always here when you need us",
      icon: <FiLifeBuoy />,
      color: "from-blue-200 to-cyan-50",
    },
    {
      title: "Best Value",
      description: "Competitive pricing, premium quality",
      icon: <FiDollarSign />,
      color: "from-blue-200 to-cyan-50",
    },
  ];

  return (
    <div>
      <div className="px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Why Choose{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
            Throoout
          </span>
        </h2>
        <p className="text-gray-600">Your success is our priority</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl hover:scale-105"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}
            >
              {item.icon}
            </div>
            <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
