import { FiZap, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function CoreValuesSection() {
  const values = [
    { title: 'Innovation', description: 'Embracing new technologies and creative thinking', icon: <FiZap className="text-white" />, color: 'from-yellow-500 to-orange-500' },
    { title: 'Excellence', description: 'Delivering quality work in every project we touch', icon: <FiAward className="text-white" />, color: 'from-blue-500 to-cyan-500' },
    { title: 'Integrity', description: 'Building trust through honesty and transparency', icon: <FiUsers className="text-white" />, color: 'from-sky-500 to-pink-500' },
    { title: 'Growth', description: 'Continuous improvement for us and our clients', icon: <FiTrendingUp className="text-white" />, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Our <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Core Values</span>
        </h2>
        <p className="text-gray-600">Principles that guide everything we do</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl hover:scale-105"
          >
            <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {value.icon}
            </div>
            <h3 className="mb-2 font-bold text-gray-900">{value.title}</h3>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
