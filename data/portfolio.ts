export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string[];
  technologies: string[];
  image: string;
  images?: string[];
  clientName: string;
  challenge: string;
  solution: string;
  results: string[];
  link?: string;
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "E-Commerce Platform Transformation",
    shortDescription:
      "Built a scalable e-commerce platform for a fast-growing retail brand.",
    description:
      "Complete redesign and development of an e-commerce platform using Next.js and Node.js",
    category: ["Web Development", "E-Commerce"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    image: "/images/insights/insight-1.png",
    clientName: "RetailX",
    challenge:
      "The client needed to handle 10x traffic growth with their legacy PHP system unable to scale.",
    solution:
      "We architected a modern microservices-based platform with Next.js frontend, Node.js backend, and PostgreSQL database, deployed on AWS with auto-scaling capabilities.",
    results: [
      "3x faster page load times",
      "99.9% uptime achieved",
      "40% increase in conversion rate",
      "Handled 500K+ daily users",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "AI-Powered Customer Service Bot",
    shortDescription:
      "Developed an intelligent chatbot that reduced support tickets by 60%.",
    description:
      "Custom AI chatbot powered by GPT-4 for enterprise customer support",
    category: ["AI/ML", "Automation"],
    technologies: ["Python", "GPT-4", "Langchain", "React", "Firebase"],
    image: "/images/insights/insight-2.png",
    clientName: "TechCorp Inc.",
    challenge:
      "Support team was overwhelmed with 5000+ daily tickets causing customer satisfaction to drop.",
    solution:
      "Implemented an AI chatbot using GPT-4 with custom fine-tuning for domain-specific knowledge, integrated with their existing ticketing system.",
    results: [
      "60% reduction in support tickets",
      "85% customer satisfaction score",
      "$200K annual savings",
      "24/7 support availability",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Mobile App for Field Service Management",
    shortDescription:
      "Native mobile app for real-time field service operations and tracking.",
    description:
      "Cross-platform mobile application for field service teams with real-time tracking",
    category: ["Mobile Development", "Logistics"],
    technologies: ["React Native", "Firebase", "Google Maps API", "TypeScript"],
    image: "/images/insights/insight-3.png",
    clientName: "ServicePro",
    challenge:
      "Field teams lacked visibility into job assignments, routing, and completion status.",
    solution:
      "Built a React Native app with real-time GPS tracking, job management, and offline capabilities for field workers.",
    results: [
      "30% improvement in route efficiency",
      "Real-time job tracking",
      "25% faster job completion",
      "95% app adoption rate",
    ],
  },
  {
    id: "4",
    title: "Data Analytics Dashboard",
    shortDescription:
      "Enterprise analytics platform processing millions of data points daily.",
    description:
      "Real-time analytics and visualization platform for business intelligence",
    category: ["Data Analytics", "Web Development"],
    technologies: ["React", "D3.js", "Apache Kafka", "PostgreSQL", "Docker"],
    image: "/images/insights/insight-4.png",
    clientName: "DataViz Corp",
    challenge:
      "Manual reporting process took 40 hours/week and was always outdated.",
    solution:
      "Built real-time analytics dashboard with live data pipeline processing 1M+ events/hour.",
    results: [
      "99% reporting time reduction",
      "Real-time insights",
      "1M+ events processed hourly",
      "30+ custom reports available",
    ],
  },
  {
    id: "5",
    title: "WhatsApp Business Automation",
    shortDescription:
      "N8n-based automation platform for WhatsApp business messaging.",
    description:
      "End-to-end WhatsApp automation platform for customer engagement",
    category: ["Automation", "Integration"],
    technologies: ["N8n", "WhatsApp API", "Node.js", "MongoDB", "Zapier"],
    image: "/images/whatsApp/store-chat.png",
    clientName: "MarketingPro",
    challenge:
      "Manual WhatsApp messaging was time-consuming and error-prone at scale.",
    solution:
      "Developed N8n workflows integrating WhatsApp API with CRM for automated customer engagement.",
    results: [
      "80% manual work reduction",
      "10K+ automated messages/day",
      "45% response rate improvement",
      "No coding required for team",
    ],
  },
  {
    id: "6",
    title: "SaaS Platform MVP",
    shortDescription:
      "MVP for a project management SaaS product launched in 3 months.",
    description:
      "Full-stack SaaS platform with subscription management and collaboration features",
    category: ["Web Development", "SaaS"],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/images/insights/insight-5.png",
    clientName: "StartupX",
    challenge:
      "Needed to launch MVP quickly to validate market before full development.",
    solution:
      "Rapid development of full-stack SaaS with user authentication, subscription billing, and team collaboration.",
    results: [
      "Launched in 12 weeks",
      "500 paying customers in month 1",
      "$50K MRR achieved",
      "98% uptime in production",
    ],
  },
];

export const portfolioCategories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Automation",
  "Data Analytics",
  "E-Commerce",
  "SaaS",
];
