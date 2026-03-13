import { FiPenTool, FiSettings, FiSmartphone, FiCloud } from 'react-icons/fi';

export default function TechnologyExpertiseSection() {
  const technologies = [
    {
      category: 'Frontend',
      description: 'Modern UI/UX with cutting-edge frameworks',
      icon: <FiPenTool />,
      color: 'from-blue-500 to-cyan-500',
      techs: ['React', 'Next.js', 'Vue', 'Tailwind']
    },
    {
      category: 'Backend',
      description: 'Robust server-side solutions',
      icon: <FiSettings />,
      color: 'from-sky-500 to-pink-500',
      techs: ['Node.js', 'Python', 'Java', 'PHP']
    },
    {
      category: 'Mobile',
      description: 'Native and cross-platform apps',
      icon: <FiSmartphone />,
      color: 'from-green-500 to-emerald-500',
      techs: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      category: 'Cloud & DevOps',
      description: 'Scalable infrastructure solutions',
      icon: <FiCloud />,
      color: 'from-orange-500 to-red-500',
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Technology <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-gray-600">Mastery across the full technology stack</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
              {tech.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{tech.category}</h3>
            <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.techs.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
