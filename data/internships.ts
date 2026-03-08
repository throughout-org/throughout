export interface Internship {
  id: string;
  slug: string;
  title: string;
  duration: string;
  stipend: string;
  location: string;
  status: "open" | "closed";
  description: string;
  responsibilities: {
    category: string;
    items: string[];
  }[];
  requirements: {
    title: string;
    items: string[];
  };
  requiredSkills: string[];
  niceToHave: string[];
  benefits: string[];
  note: string;
}

export const internships: Internship[] = [
  {
    id: "1",
    slug: "social-media-content-creation-intern",
    title: "Social Media & Content Creation Intern",
    duration: "3–6 Months",
    stipend: "Paid Internship",
    location: "Remote / Hybrid",
    status: "open",
    description:
      "We're hiring a self-driven, creative intern to take ownership of social media content creation and management. This role is for someone who can come up with new ideas, work with minimal supervision, and execute independently. You'll be directly involved in filming, editing, posting, and managing content while documenting the real journey of building a startup.\n\nIf you need constant instructions, reminders, or hand-holding, this role is not for you.",
    responsibilities: [
      {
        category: "Content Creation & Execution",
        items: [
          "Come up with original content ideas, formats, and series for social media",
          "Create posters, short animation videos, reels, and startup journey content",
          "Film behind-the-scenes videos and real startup moments",
          "Edit and optimize content for Instagram, TikTok, Facebook, and YouTube Shorts",
        ],
      },
      {
        category: "Acting & On-Camera Work",
        items: [
          "Appear in videos when required (talking videos, explainers, trend-based content)",
          "Assist with directing and filming content when needed",
        ],
      },
      {
        category: "Social Media Management",
        items: [
          "Manage posting schedules and ensure consistency",
          "Write captions, hashtags, and basic copy",
          "Monitor engagement and improve content based on performance",
        ],
      },
      {
        category: "Independent Work & Learning",
        items: [
          "Work with very less supervision and manage tasks independently",
          "Be proactive in identifying content gaps and opportunities",
          "Quickly learn and adopt AI tools related to content creation, editing, scripting, design, and automation",
          "Experiment with new tools, trends, and formats to improve output quality",
        ],
      },
    ],
    requirements: {
      title: "Who We're Looking For",
      items: [
        "Someone who thinks creatively and executes independently",
        "Comfortable learning new tools and workflows without being spoon-fed",
        "Interested in startups, content creation, and social media growth",
        "Ready to take feedback, improve fast, and adapt to change",
      ],
    },
    requiredSkills: [
      "Basic video editing skills (CapCut, Premiere Pro, VN, Final Cut, etc.)",
      "Basic design skills (Canva, Figma, Photoshop, or similar)",
      "Willingness to be on camera",
      "Strong understanding of social media trends",
    ],
    niceToHave: [
      "Experience with animation or motion graphics",
      "Familiarity with AI tools for content creation (scripting, design, video, automation)",
      "Prior experience managing social media pages",
    ],
    benefits: [
      "Hands-on startup experience with real responsibility",
      "A strong content portfolio by the end of the internship",
      "Exposure to modern content workflows, including AI-assisted creation",
      "Opportunity for a full-time role based on performance",
    ],
    note: "This internship demands initiative, discipline, and consistency. If you're not ready to take ownership and learn independently, please do not apply.",
  },
  {
    id: "2",
    slug: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    duration: "3–6 Months",
    stipend: "Paid Internship",
    location: "Remote / Hybrid",
    status: "open",
    description:
      "We're hiring a performance-focused marketing intern to help plan, execute, and optimize digital marketing activities. This role is for someone who can work independently, test ideas fast, track results, and improve campaigns using data — not just post and pray.\n\nIf you think marketing is only about posting creatives, don't apply.",
    responsibilities: [
      {
        category: "Campaign Planning & Execution",
        items: [
          "Assist in planning and executing digital marketing campaigns",
          "Coordinate with content and sales interns to align messaging",
          "Launch and manage basic campaigns across social, email, and web",
        ],
      },
      {
        category: "Performance Marketing & Analytics",
        items: [
          "Track key metrics: reach, engagement, leads, CTR, conversions",
          "Analyze what's working and what's not",
          "Prepare simple weekly performance reports (no fancy dashboards, just clarity)",
        ],
      },
      {
        category: "Lead & Growth Support",
        items: [
          "Support lead generation activities (landing pages, forms, CTAs)",
          "Optimize funnels from content → lead → sales",
          "Assist with basic email marketing and nurturing flows",
        ],
      },
      {
        category: "Tools, AI & Automation",
        items: [
          "Learn and adopt AI tools for copywriting, ad ideas, keyword research, analytics, and automation",
          "Experiment with tools to improve speed and efficiency",
          "Document what works so it can be repeated",
        ],
      },
      {
        category: "Independent Ownership",
        items: [
          "Work with very less supervision and manage assigned tasks independently",
          "Propose new growth ideas and test them quickly",
          "Take responsibility for outcomes, not just tasks",
        ],
      },
    ],
    requirements: {
      title: "Who We're Looking For",
      items: [
        "Someone who understands that marketing = experiments + data",
        "Comfortable learning fast and adapting to feedback",
        "Interested in digital marketing, growth, and startups",
        "Able to manage multiple tasks without micromanagement",
      ],
    },
    requiredSkills: [
      "Basic understanding of digital marketing concepts",
      "Comfortable with Google Sheets, Docs, and analytics tools",
      "Good written English",
      "Strong internet research skills",
    ],
    niceToHave: [
      "Experience with Meta Ads, Google Ads, or SEO basics",
      "Email marketing tools experience",
      "Familiarity with AI marketing tools",
      "Prior internship or project experience",
    ],
    benefits: [
      "Hands-on experience with real campaigns and real metrics",
      "Understanding of full-funnel marketing (not just top-of-funnel content)",
      "Exposure to modern, AI-assisted marketing workflows",
      "Possibility of full-time role based on performance",
    ],
    note: "This internship is results-driven. Activity without learning or improvement is failure. You'll be expected to show measurable progress over time.",
  },
  {
    id: "3",
    slug: "business-development-intern",
    title: "Business Development Intern",
    duration: "3–6 Months",
    stipend: "Paid Internship",
    location: "Remote / Hybrid",
    status: "open",
    description:
      "We're looking for a result-oriented sales intern to help us find leads, run cold outreach, and bring in real clients. This is a performance-driven role, not theory or classroom sales. You'll work directly on lead research, cold emails, follow-ups, and basic sales coordination.\n\nIf you're uncomfortable with rejection, follow-ups, or targets, do not apply.",
    responsibilities: [
      {
        category: "Lead Generation",
        items: [
          "Find and build targeted lead lists (companies, founders, decision-makers)",
          "Research prospects using LinkedIn, websites, directories, and tools",
          "Qualify leads based on relevance, budget signals, and needs",
        ],
      },
      {
        category: "Cold Outreach",
        items: [
          "Send cold emails and LinkedIn messages daily",
          "Personalize outreach messages (no copy-paste spam)",
          "Handle follow-ups systematically",
          "Maintain a clean lead and outreach tracker (Google Sheets / CRM)",
        ],
      },
      {
        category: "Sales Support",
        items: [
          "Schedule calls or demos for the founder/sales lead",
          "Share client requirements and feedback accurately",
          "Assist in preparing proposals, pricing documents, and follow-ups",
        ],
      },
      {
        category: "Independent Work & Tool Adoption",
        items: [
          "Work with minimal supervision and hit daily/weekly outreach targets",
          "Learn and adopt AI tools for lead research, email writing, personalization, and automation",
          "Continuously improve outreach copy based on response rates",
        ],
      },
    ],
    requirements: {
      title: "Who We're Looking For",
      items: [
        "Someone who is confident, disciplined, and persistent",
        "Comfortable reaching out to strangers and handling rejection",
        "Able to work independently and manage time well",
        "Interested in sales, business development, and startups",
      ],
    },
    requiredSkills: [
      "Good written English (clear and professional emails)",
      "Basic computer skills (Google Sheets, Docs, email tools)",
      "Strong internet research ability",
      "Willingness to learn sales processes and tools",
    ],
    niceToHave: [
      "Experience with cold emailing or LinkedIn outreach",
      "Familiarity with CRMs (HubSpot, Zoho, Notion, etc.)",
      "Basic understanding of B2B services or SaaS",
    ],
    benefits: [
      "Real-world sales experience (not fake “training”)",
      "Clear understanding of lead generation and outbound sales",
      "Exposure to startup sales processes",
      "Opportunity for full-time or commission-based role based on performance",
    ],
    note: "This internship is output-driven. Activity without results won't be rewarded. Consistency and execution matter more than talking skills.",
  },
  {
    id: "4",
    slug: "ai-automation-engineer-intern",
    title: "AI Automation Engineer Intern",
    duration: "3–6 Months",
    stipend: "Paid Internship",
    location: "Remote",
    status: "open",
    description:
      "Support research and development of AI-driven automation to improve internal workflows across sales, marketing, finance, and operations. This role does not replace departments with AI. The focus is to identify repetitive tasks, design automation, test solutions, and measure impact.",
    responsibilities: [
      {
        category: "Process Analysis",
        items: [
          "Study current workflows such as sales pipeline, invoicing, reporting, and lead handling.",
          "Identify repetitive, manual, rule-based tasks.",
          "Document inefficiencies and improvement areas.",
        ],
      },
      {
        category: "AI and Automation Development",
        items: [
          "Build automation scripts or AI tools such as: lead scoring model, sales prediction model, automated invoice generation, customer support chatbot, automated report generation, data cleaning automation.",
          "Integrate APIs between systems.",
        ],
      },
      {
        category: "Research and Experimentation",
        items: [
          "Test LLM tools such as OpenAI or open source models for workflow automation.",
          "Explore AI agents for task execution.",
          "Compare frameworks such as LangChain versus custom pipelines.",
          "Prototype internal AI dashboards.",
        ],
      },
      {
        category: "Implementation Support",
        items: [
          "Connect automation systems to CRM, accounting tools, or internal databases.",
          "Monitor performance and optimize models.",
        ],
      },
    ],
    requirements: {
      title: "Required Tech Stack",
      items: [
        "Python required, basic JavaScript optional",
        "Pandas, NumPy, Scikit-learn, Matplotlib or Seaborn",
        "OpenAI API or similar, LangChain or similar frameworks",
        "Basic understanding of vector databases",
        "FastAPI or Flask, REST APIs, Webhooks",
        "MySQL or PostgreSQL, basic SQL, Firebase optional",
        "Basic Git and Docker knowledge",
      ],
    },
    requiredSkills: [
      "Python programming",
      "Pandas, NumPy, Scikit-learn",
      "REST API usage",
      "OpenAI API or similar",
      "Basic SQL",
      "Git",
    ],
    niceToHave: [
      "LangChain or similar frameworks",
      "FastAPI or Flask",
      "Vector database basics",
      "Basic JavaScript",
      "Docker",
      "Zapier or Make",
      "Firebase",
    ],
    benefits: [
      "Hands-on experience with real AI/ML automation projects",
      "Exposure to modern AI tools and frameworks",
      "Opportunity to build a portfolio of automation solutions",
      "Possibility of full-time offer based on performance",
    ],
    note: "This role focuses on innovation and measurable impact. It does not replace departments with AI, but augments them by automating repetitive tasks.",
  },
  {
    id: "5",
    slug: "software-engineer-intern-product-development",
    title: "Software Engineer Intern - Product Development",
    duration: "3–6 Months",
    stipend: "Paid Internship",
    location: "Remote",
    status: "open",
    description:
      "We are looking for a Software Engineer Intern to join our Product Development team. The intern will work on building prototypes, experimenting with new technologies, and developing internal tools that improve product efficiency and scalability. This role focuses on innovation, experimentation, and rapid prototyping rather than routine maintenance work.",
    responsibilities: [
      {
        category: "Key Responsibilities",
        items: [
          "Build proof of concept applications using JavaScript.",
          "Develop internal tools and automation scripts.",
          "Experiment with new frameworks, APIs, and architectures.",
          "Integrate third party APIs and services.",
          "Assist in improving system performance and scalability.",
          "Write clean, maintainable, and well documented code.",
          "Collaborate with backend and frontend developers.",
          "Research emerging technologies and present findings to the team.",
        ],
      },
      {
        category: "What the Intern Will Work On",
        items: [
          "Internal automation tools",
          "API integrations",
          "Experimental AI powered features",
          "Performance optimization experiments",
          "New product feature prototypes",
        ],
      },
      {
        category: "Learning Outcomes",
        items: [
          "Real world product development experience",
          "Exposure to scalable architecture",
          "API design and integration",
          "Rapid prototyping methodology",
          "Agile collaboration",
        ],
      },
    ],
    requirements: {
      title: "Technical Requirements",
      items: [
        "Strong knowledge of JavaScript",
        "Understanding of ES6 concepts",
        "Basic knowledge of asynchronous programming",
        "Familiarity with REST APIs",
        "Basic Git usage",
        "Node.js, Express.js, React or Next.js (preferred)",
        "MongoDB or PostgreSQL (preferred)",
        "Basic understanding of Docker (preferred)",
        "API integration experience (preferred)",
      ],
    },
    requiredSkills: ["JavaScript (ES6)", "REST API usage", "Basic Git"],
    niceToHave: [
      "Node.js",
      "Express.js",
      "React or Next.js",
      "MongoDB or PostgreSQL",
      "Docker",
      "API integration experience",
    ],
    benefits: [
      "Hands-on experience with real product development",
      "Exposure to scalable architecture and rapid prototyping",
      "Opportunity to work on innovative projects",
      "Possibility of full-time offer based on performance",
    ],
    note: "This internship is focused on innovation, experimentation, and building new solutions. Routine maintenance is not the focus.",
  },
  {
    id: "6",
    slug: "web-engineer-intern",
    title: "Web Engineer Intern - WordPress & Headless CMS",
    duration: "3–6 Months",
    stipend: "Paid Internship",
    location: "Remote / Hybrid",
    status: "open",
    description:
      "We are looking for a Web Engineer Intern to work on real client and internal projects across WordPress, custom theme and plugin development, and headless CMS setups powered by modern frontend frameworks like Next.js. You will work on building, modifying, and optimizing production-grade sites, integrating CRMs and custom APIs, and ensuring stable, performant, and maintainable implementations.",
    responsibilities: [
      {
        category: "WordPress Development",
        items: [
          "Develop and customize WordPress themes from scratch or existing starters",
          "Build and modify custom WordPress plugins based on functional requirements",
          "Configure custom post types, taxonomies, and advanced fields",
          "Implement reusable components and templates that non-technical users can manage",
        ],
      },
      {
        category: "Headless CMS & Frontend",
        items: [
          "Work with headless CMS setups (e.g., WordPress as a headless backend) with Next.js or similar frameworks",
          "Consume REST or GraphQL APIs from the CMS in frontend applications",
          "Implement SEO-friendly, responsive pages and components",
          "Handle routing, data fetching, and basic state management on the frontend",
        ],
      },
      {
        category: "Databases, CRM & Integrations",
        items: [
          "Work with MySQL databases backing WordPress installations",
          "Support CRM integrations (HubSpot, Zoho, custom CRMs, etc.) via forms and APIs",
          "Integrate third-party and custom APIs for features like leads, webhooks, and automation",
          "Debug integration issues and ensure data flows are reliable and secure",
        ],
      },
      {
        category: "Quality, Performance & Collaboration",
        items: [
          "Follow basic coding standards and version control (Git)",
          "Test key user flows across desktop and mobile before handoff",
          "Optimize pages for performance (caching, images, queries)",
          "Collaborate with designers, content creators, and founders to ship improvements fast",
        ],
      },
    ],
    requirements: {
      title: "Technical Requirements",
      items: [
        "Good understanding of WordPress as a CMS",
        "Basic experience with custom theme or plugin development (not just page builders)",
        "Comfortable working with PHP and JavaScript",
        "Basic understanding of MySQL and how WordPress stores data",
        "Familiarity with REST APIs and JSON data",
      ],
    },
    requiredSkills: [
      "WordPress theme development",
      "WordPress plugin development or modification",
      "PHP and JavaScript fundamentals",
      "Basic MySQL knowledge",
      "REST API usage and integration",
    ],
    niceToHave: [
      "Next.js or React experience",
      "Hands-on exposure to headless CMS setups",
      "Experience with CRM tools and web-to-lead forms",
      "Basic understanding of performance optimization and caching",
      "Familiarity with Git-based workflows",
    ],
    benefits: [
      "Real-world experience building and integrating production WordPress and headless sites",
      "Exposure to modern frontend frameworks alongside traditional CMS work",
      "Opportunity to work on CRM and API integrations that impact real leads and customers",
      "Possibility of a full-time offer based on performance and ownership",
    ],
    note: "This internship is for builders, not button-clickers. If you enjoy solving technical problems, understanding how systems connect, and taking ownership of complete features from CMS to frontend, this role is a strong fit.",
  },
];

export const getInternshipBySlug = (slug: string): Internship | undefined => {
  return internships.find((internship) => internship.slug === slug);
};

export const getOpenInternships = (): Internship[] => {
  return internships.filter((internship) => internship.status === "open");
};
