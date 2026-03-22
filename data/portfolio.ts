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
    title: "ScaleLabz – Video Editing & Content Growth Agency",
    shortDescription:
      "ScaleLabz is a creative digital agency specializing in video editing, content creation, and social media management. They help brands and creators turn raw content into high-quality, engaging visuals that drive growth. With a focus on visual storytelling and performance, ScaleLabz delivers end-to-end solutions, making them a reliable partner for building a strong digital presence.",
    description:
      "Complete redesign and development of an e-commerce platform using Next.js and Node.js",
    category: ["Web Development", "E-Commerce"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    image: "/images/portfolio/screencapture-scalelabz.png",
    clientName: "ScaleLabz",
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
    link: "https://scalelabz.com/",
    featured: true,
  },
  {
    id: "2",
    title: "Ado Coffee – Premium Sri Lankan Coffee Brand",
    shortDescription:
      "Ado Coffee is a premium coffee brand bringing single-origin Sri Lankan coffee to Switzerland. Sourced from the island’s highlands and crafted through small-batch roasting, the brand focuses on delivering a pure, authentic coffee experience from farm to cup. With an emphasis on quality, sustainability, and origin transparency, Ado Coffee offers both artisanal whole beans and convenient drip coffee formats, designed for modern coffee lovers who value flavor, simplicity, and craftsmanship.",
    description:
      "Custom AI chatbot powered by GPT-4 for enterprise customer support",
    category: ["AI/ML", "Automation"],
    technologies: ["Python", "GPT-4", "Langchain", "React", "Firebase"],
    image: "/images/portfolio/screencapture-adocoffee-ch.png",
    clientName: "Ado Coffee",
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
    link: "https://adocoffee.ch/",
    featured: true,
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
