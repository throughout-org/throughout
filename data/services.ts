export interface ServiceHero {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  visualStrategy: string;
}

export interface ServiceCard {
  title: string;
  concept: string;
  content: string;
  idealFor?: string[];
}

export interface EngineeringFeature {
  title: string;
  copy: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  hero: ServiceHero;
  solutionsGridHeadline: string;
  solutionsGridIntro: string;
  solutionCards: ServiceCard[];
  engineeringDNAHeadline: string;
  engineeringDNAIntro: string;
  engineeringFeatures: EngineeringFeature[];
  technologies: {
    headline: string;
    stack: string[];
  };
  scalableBanner: {
    headline: string;
    description: string;
  };
  engagementModels: {
    headline: string;
    models: {
      title: string;
      description: string;
    }[];
  };
  finalCTA: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Software Development',
    slug: 'software-development',
    hero: {
      headline: 'Engineering Scalable Software for the Future',
      subheadline: 'We build high-performance web applications, dynamic admin panels, and real-time APIs using industry-leading technologies like Laravel, Next.js, and Python.',
      primaryCTA: 'Start Your Project',
      secondaryCTA: 'View Our Tech Stack',
      visualStrategy: 'Abstract geometric lines connecting server icons, representing connectivity and structure',
    },
    solutionsGridHeadline: 'Comprehensive Development Solutions',
    solutionsGridIntro: 'Whether you need a lightning-fast frontend or a complex automation backend, our stack covers the full lifecycle.',
    solutionCards: [
      {
        title: 'High-Speed Web Applications (Next.js / React)',
        concept: 'Focus on speed and SEO',
        content: 'We engineer blazing-fast, SEO-optimized user interfaces. By leveraging Server-Side Rendering (SSR) with Next.js, we ensure your application ranks higher on Google and provides an app-like experience for users.',
        idealFor: ['E-commerce stores', 'Corporate dashboards', 'Interactive platforms'],
      },
      {
        title: 'Enterprise Backend Systems (Laravel)',
        concept: 'Focus on stability and management',
        content: 'Robust and secure backends built on Laravel. We specialize in developing complex admin panels, multi-vendor marketplaces, and RESTful APIs that serve as the backbone of your digital business.',
        idealFor: ['SaaS platforms', 'CRM systems', 'Inventory management'],
      },
      {
        title: 'Real-Time & High Concurrency (Node.js / Nest.js)',
        concept: 'Focus on data traffic and live updates',
        content: 'Event-driven architecture designed for scale. Using Nest.js, we build lightweight, efficient microservices capable of handling thousands of simultaneous connections for real-time features.',
        idealFor: ['Chat apps', 'Live streaming feeds', 'Notification systems'],
      },
      {
        title: 'Automation & Data Intelligence (Python)',
        concept: 'Focus on efficiency',
        content: 'Automate the repetitive and analyze the complex. From data scraping pipelines to custom API automation scripts, our Python solutions reduce manual workload and unlock data insights.',
        idealFor: ['Business process automation', 'AI integration', 'Data analysis'],
      },
    ],
    engineeringDNAHeadline: 'Why Startups & Enterprises Trust Our Code',
    engineeringDNAIntro: "We don't just write code; we follow strict engineering protocols to ensure stability, security, and scalability.",
    engineeringFeatures: [
      {
        title: 'Clean Architecture & Code Quality',
        copy: 'We strictly adhere to industry standards (PSR for PHP, ESLint for JS). Every line of code undergoes review to ensure maintainability, reducing future technical debt.',
      },
      {
        title: 'CI/CD & DevOps Ready',
        copy: "Deployment shouldn't be a risk. We set up automated CI/CD pipelines (GitHub Actions/GitLab) to ensure smooth, zero-downtime updates for your live application.",
      },
      {
        title: 'Security First (OWASP Standards)',
        copy: 'Security is baked in, not added on. We develop with OWASP Top 10 security considerations, ensuring your data is safe from SQL injection, XSS, and other common vulnerabilities.',
      },
      {
        title: 'Scalable Infrastructure',
        copy: 'Future-proof by design. Whether on AWS or a VPS, we architect your server environment (using Docker) to handle growth spikes without crashing.',
      },
    ],
    technologies: {
      headline: 'Powered by Modern Tech',
      stack: ['React', 'Next.js', 'Tailwind CSS', 'Laravel', 'Node.js', 'Nest.js', 'Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Git'],
    },
    scalableBanner: {
      headline: 'Build high-performance software that scales with your business',
      description: 'Set your business goals and let us handle the rest. With our proven development expertise, agile approach, and keen insight into modern technologies, we build high-ROI applications that users will love. Rely on us to transform your vision into highly scalable, production-ready software.',
    },
    engagementModels: {
      headline: 'Flexible Engagement Models',
      models: [
        {
          title: 'Dedicated Team',
          description: 'Hire a full squad of Laravel/React experts to work exclusively on your product.',
        },
        {
          title: 'Project-Based',
          description: 'Fixed scope and timeline for MVPs and specific feature developments.',
        },
        {
          title: 'Staff Augmentation',
          description: 'Need an extra pair of hands? Add our senior developers to your existing team.',
        },
      ],
    },
    finalCTA: {
      headline: 'Ready to Build Your Platform?',
      subtext: "Let's discuss your architecture and roadmap.",
      buttonText: 'Get a Free Consultation',
    },
  },
  {
    id: '2',
    title: 'Custom E-Commerce Development',
    slug: 'custom-ecommerce-development',
    hero: {
      headline: 'Enterprise-Grade E-Commerce Engineering',
      subheadline: 'We move beyond templates to build bespoke, headless e-commerce platforms using Laravel and Next.js—optimized for speed, scalability, and specific payment needs.',
      primaryCTA: 'Build Your Store',
      secondaryCTA: 'View Payment Integrations',
      visualStrategy: 'A split diagram showing a backend "Database/API" layer connecting to multiple "Heads" like Mobile, Web, and POS',
    },
    solutionsGridHeadline: 'Bespoke Commerce Solutions',
    solutionsGridIntro: "From multi-vendor marketplaces to single-brand flagship stores, we build logic that standard platforms can't handle.",
    solutionCards: [
      {
        title: 'Headless Commerce (Next.js Frontend)',
        concept: 'Speed & UX',
        content: 'Detach your frontend from the backend for sub-second page loads. We build PWA-ready frontends using Next.js that feel like mobile apps and convert better.',
      },
      {
        title: 'Complex Backend Operations (Laravel)',
        concept: 'Logic & Management',
        content: 'Custom inventory management, dynamic pricing algorithms, and multi-vendor logic. We build the engine that powers your unique business model.',
      },
      {
        title: 'Global & Local Payment Aggregation',
        concept: 'Financial Integration',
        content: 'Securely integrated with PayHere, WEBXPAY, Koko, Mint Pay, and global leaders like Stripe. We handle the complex API handshakes so you get paid instantly.',
      },
    ],
    engineeringDNAHeadline: 'Why Brands Trust Our Platforms',
    engineeringDNAIntro: '',
    engineeringFeatures: [
      {
        title: 'Security & Compliance',
        copy: 'We implement strict PCI-DSS compliant coding standards and secure tokenization for payments to ensure customer data is never compromised.',
      },
      {
        title: 'High Traffic Scalability',
        copy: 'Ready for Black Friday? We optimize database queries and implement Redis caching to handle massive traffic spikes without slowing down.',
      },
      {
        title: 'SEO-First Architecture',
        copy: 'With Server-Side Rendering (SSR), every product page is fully indexed by Google, solving the SEO issues common in traditional JavaScript apps.',
      },
    ],
    technologies: {
      headline: 'Technologies',
      stack: ['Laravel', 'Next.js', 'Redis', 'MySQL', 'Stripe API', 'PayHere API', 'Docker'],
    },
    scalableBanner: {
      headline: 'Launch a custom e-commerce platform that converts visitors into customers',
      description: 'From payment integrations to inventory management, we build complete commerce solutions tailored to your business model. Our headless architecture ensures lightning-fast performance and seamless user experiences across all devices. Let us help you create an online store that drives sales and grows with demand.',
    },
    engagementModels: {
      headline: 'Engagement Model',
      models: [
        {
          title: 'Dedicated Team',
          description: 'A full-stack team to build and maintain your enterprise platform.',
        },
        {
          title: 'Project-Based',
          description: 'Fixed-cost development for launching a new custom store.',
        },
        {
          title: 'Staff Augmentation',
          description: 'Hire a senior Laravel developer to extend your existing commerce team.',
        },
      ],
    },
    finalCTA: {
      headline: 'Ready to Scale Your Sales?',
      subtext: "Let's build a store that fits your business, not a template.",
      buttonText: 'Discuss Your Custom Store',
    },
  },
  {
    id: '3',
    title: 'Shopify E-Commerce',
    slug: 'shopify-ecommerce',
    hero: {
      headline: 'Expert Shopify Development & Optimization',
      subheadline: 'Maximize your revenue with custom Shopify themes, app integrations, and Headless Shopify solutions tailored for high-growth brands.',
      primaryCTA: 'Start Shopify Store',
      secondaryCTA: 'Explore Headless Shopify',
      visualStrategy: 'Clean icons of Shopify connecting to inventory, shipping, and marketing tools',
    },
    solutionsGridHeadline: 'Shopify Ecosystem Services',
    solutionsGridIntro: "We help you unlock the full potential of the world's leading commerce platform.",
    solutionCards: [
      {
        title: 'Custom Theme Development',
        concept: 'Branding & UX',
        content: 'Stand out from the crowd. We write clean Liquid code to create pixel-perfect, branded themes that load fast and look unique.',
      },
      {
        title: 'Headless Shopify (Hydrogen/Next.js)',
        concept: 'Enterprise Performance',
        content: "Combine Shopify's backend stability with a custom React frontend. This offers total design freedom and blistering speed for high-volume stores.",
      },
      {
        title: 'App & API Integration',
        concept: 'Functionality',
        content: 'Connect your store to ERPs, CRMs, or custom inventory tools. We build custom private apps to bridge the gap between Shopify and your operations.',
      },
    ],
    engineeringDNAHeadline: 'Beyond Basic Setup',
    engineeringDNAIntro: '',
    engineeringFeatures: [
      {
        title: 'Performance Optimization',
        copy: "We audit and refactor code to minimize 'app bloat,' ensuring your Core Web Vitals remain green for better SEO.",
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        copy: 'Our development is data-driven. We structure layouts and checkout flows based on UX best practices to maximize sales.',
      },
      {
        title: 'Seamless Migration',
        copy: 'Moving from WooCommerce or Magento? We safely migrate your products, customers, and SEO meta-data with zero data loss.',
      },
    ],
    technologies: {
      headline: 'Technologies',
      stack: ['Shopify Plus', 'Liquid', 'React.js (Hydrogen)', 'GraphQL', 'Node.js'],
    },
    scalableBanner: {
      headline: 'Maximize your Shopify store potential with custom development',
      description: "Whether you're migrating to Shopify or optimizing an existing store, we deliver custom themes, seamless integrations, and performance enhancements that boost conversions. Our headless Shopify solutions combine the best of both worlds—Shopify's reliability with complete design freedom. Transform your store into a high-performing sales machine.",
    },
    engagementModels: {
      headline: 'Engagement Model',
      models: [
        {
          title: 'Project-Based',
          description: 'Full store setup or migration packages.',
        },
        {
          title: 'Retainer',
          description: 'Monthly support for theme updates, bug fixes, and optimization.',
        },
        {
          title: 'Consulting',
          description: 'Technical audit and strategy for existing stores.',
        },
      ],
    },
    finalCTA: {
      headline: 'Launch Your Brand Today',
      subtext: 'Expert setup, custom design, and ongoing support.',
      buttonText: 'Get a Quote',
    },
  },
  {
    id: '4',
    title: 'Cloud & Server Solutions',
    slug: 'cloud-server-solutions',
    hero: {
      headline: 'Resilient Cloud Infrastructure & DevOps',
      subheadline: 'We architect, deploy, and manage secure server environments on AWS, Azure, and Google Cloud to ensure your applications never go offline.',
      primaryCTA: 'Optimize My Server',
      secondaryCTA: 'View DevOps Tools',
      visualStrategy: 'Isometric view of server clusters, load balancers, and a CI/CD infinity loop',
    },
    solutionsGridHeadline: 'Infrastructure Services',
    solutionsGridIntro: 'Bridging the gap between code and deployment with modern DevOps practices.',
    solutionCards: [
      {
        title: 'CI/CD Pipeline Automation',
        concept: 'Automated Deployment',
        content: 'Eliminate manual errors. We build pipelines (GitHub Actions/Jenkins) that automatically test and deploy your code the moment you push it.',
      },
      {
        title: 'Containerization (Docker & K8s)',
        concept: 'Scalability',
        content: 'We containerize applications using Docker and manage orchestration with Kubernetes, allowing your app to scale horizontally during traffic spikes.',
      },
      {
        title: 'Cloud Migration & Management',
        concept: 'Architecture',
        content: 'Moving to the cloud? We handle the migration of legacy systems to AWS or DigitalOcean, optimizing for both performance and cost reduction.',
      },
    ],
    engineeringDNAHeadline: 'Zero Downtime Philosophy',
    engineeringDNAIntro: '',
    engineeringFeatures: [
      {
        title: 'Infrastructure as Code (IaC)',
        copy: 'We use Terraform and Ansible to script your infrastructure. This prevents configuration drift and allows for rapid disaster recovery.',
      },
      {
        title: 'Proactive Monitoring',
        copy: "We don't wait for crashes. We implement tools like Prometheus and Grafana to track CPU, memory, and error rates in real-time.",
      },
      {
        title: 'Security Hardening',
        copy: 'We configure strict firewalls, VPCs, and SSL encryption to ensure your server environment is an impenetrable fortress.',
      },
    ],
    technologies: {
      headline: 'Technologies',
      stack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux'],
    },
    scalableBanner: {
      headline: 'Deploy with confidence on robust cloud infrastructure',
      description: 'Stop worrying about server crashes and downtime. Our DevOps experts architect resilient cloud solutions that scale automatically during traffic spikes. From CI/CD pipelines to container orchestration, we handle the infrastructure so you can focus on building great products. Experience 99.9% uptime and peace of mind.',
    },
    engagementModels: {
      headline: 'Engagement Model',
      models: [
        {
          title: 'Managed Services',
          description: 'Monthly flat fee for 24/7 server monitoring and maintenance.',
        },
        {
          title: 'Project-Based',
          description: 'One-time setup for pipelines, migrations, or architecture design.',
        },
        {
          title: 'Consulting',
          description: 'Cloud cost audit to reduce your monthly AWS bill.',
        },
      ],
    },
    finalCTA: {
      headline: 'Stop Worrying About Server Crashes',
      subtext: 'Let us handle the infrastructure while you focus on the code.',
      buttonText: 'Secure Your Infrastructure',
    },
  },
  {
    id: '5',
    title: 'WordPress Development',
    slug: 'wordpress-development',
    hero: {
      headline: 'High-Performance Custom WordPress',
      subheadline: 'We push WordPress beyond its limits with custom plugin development, headless setups, and API integrations—secure, fast, and scalable.',
      primaryCTA: 'Discuss My Site',
      secondaryCTA: 'Technical Audit',
      visualStrategy: 'Abstract representation of the WordPress block editor connecting to raw PHP code',
    },
    solutionsGridHeadline: 'Advanced WP Engineering',
    solutionsGridIntro: 'Ideal for publishers and businesses who need the ease of WordPress but the power of a custom app.',
    solutionCards: [
      {
        title: 'Custom Theme Development',
        concept: 'Unique Design',
        content: 'No bloated page builders. We code lightweight, custom themes from scratch that load instantly and pass Core Web Vitals assessments.',
      },
      {
        title: 'Advanced WooCommerce',
        concept: 'E-Commerce',
        content: 'We extend WooCommerce with custom shipping logic, subscription models, and dynamic pricing rules tailored to your business operations.',
      },
      {
        title: 'API Integration & Plugins',
        concept: 'Connectivity',
        content: 'Need WordPress to talk to your CRM or Mobile App? We build secure REST API endpoints and custom plugins to sync your data.',
      },
    ],
    engineeringDNAHeadline: 'Secure & Scalable WP',
    engineeringDNAIntro: '',
    engineeringFeatures: [
      {
        title: 'Vulnerability Protection',
        copy: 'WordPress targets are common. We harden your installation by disabling unused XML-RPC, securing login paths, and implementing WAFs.',
      },
      {
        title: 'Database Optimization',
        copy: 'We clean and index your MySQL database to ensure that even sites with 10,000+ posts load quickly for users.',
      },
      {
        title: 'Code Quality Standards',
        copy: 'We follow strict WordPress Coding Standards (WPCS). This ensures your site is compatible with future updates and easy for other developers to maintain.',
      },
    ],
    technologies: {
      headline: 'Technologies',
      stack: ['PHP', 'MySQL', 'JavaScript', 'React (for Gutenberg blocks)', 'WP-CLI', 'WooCommerce'],
    },
    scalableBanner: {
      headline: 'WordPress that performs like a custom-built application',
      description: 'Move beyond slow, bloated WordPress sites. We build lightning-fast, secure WordPress solutions with custom themes, advanced WooCommerce features, and seamless API integrations. Whether you need a content-rich publishing platform or a headless WordPress setup, we optimize every aspect for speed, SEO, and scalability.',
    },
    engagementModels: {
      headline: 'Engagement Model',
      models: [
        {
          title: 'Project-Based',
          description: 'Custom theme or plugin development projects.',
        },
        {
          title: 'Maintenance Retainer',
          description: 'Updates, backups, and security scans.',
        },
        {
          title: 'Staff Augmentation',
          description: 'Hire a WordPress expert for your agency.',
        },
      ],
    },
    finalCTA: {
      headline: 'A WordPress Site That Actually Performs',
      subtext: 'Fast, secure, and built for growth.',
      buttonText: 'Start Development',
    },
  },
  {
    id: '6',
    title: 'AI Integrations & Automation',
    slug: 'ai-integrations-automation',
    hero: {
      headline: 'Intelligent Automation & AI Solutions',
      subheadline: 'Leverage the power of LLMs and Python to automate workflows, analyze data, and build intelligent assistants for your business.',
      primaryCTA: 'Automate Your Workflow',
      secondaryCTA: 'Explore AI Use Cases',
      visualStrategy: 'A glowing network of nodes representing AI processing data points',
    },
    solutionsGridHeadline: 'AI & Data Services',
    solutionsGridIntro: 'Transform raw data into actionable intelligence and manual work into automated flows.',
    solutionCards: [
      {
        title: 'Custom Chatbots (RAG)',
        concept: 'Customer Support',
        content: 'We build AI assistants trained on your company data. Using Retrieval-Augmented Generation (RAG), your bot gives accurate, context-aware answers.',
      },
      {
        title: 'Business Process Automation',
        concept: 'Efficiency',
        content: 'Stop doing repetitive tasks. We use Python scripts and AI agents to automate data entry, report generation, and email processing.',
      },
      {
        title: 'Document Intelligence',
        concept: 'Data Extraction',
        content: 'Automatically extract and structure data from PDFs, invoices, and forms using advanced OCR and NLP models, saving hours of manual review.',
      },
    ],
    engineeringDNAHeadline: 'Responsible AI Implementation',
    engineeringDNAIntro: '',
    engineeringFeatures: [
      {
        title: 'Data Privacy & Security',
        copy: 'We ensure your proprietary data is sanitized before interacting with public models, or we deploy local LLMs to keep data entirely within your infrastructure.',
      },
      {
        title: 'Model Fine-Tuning',
        copy: "Generic models aren't enough. We fine-tune models on your specific industry terminology to ensure high accuracy in responses.",
      },
      {
        title: 'Cost Optimization',
        copy: 'Token usage can get expensive. We architect efficient prompt engineering strategies and caching layers to keep your AI running costs low.',
      },
    ],
    technologies: {
      headline: 'Technologies',
      stack: ['OpenAI API', 'Python', 'LangChain', 'Pinecone (Vector DB)', 'PyTorch', 'Hugging Face'],
    },
    scalableBanner: {
      headline: 'Automate your workflows and unlock AI-powered intelligence',
      description: 'Stop wasting time on repetitive tasks. Our AI solutions automate business processes, extract insights from documents, and provide intelligent customer support through custom chatbots. From data automation to machine learning integration, we help you leverage AI to reduce costs, improve efficiency, and stay ahead of the competition.',
    },
    engagementModels: {
      headline: 'Engagement Model',
      models: [
        {
          title: 'Consulting & Prototype',
          description: 'Feasibility study and MVP build for your AI idea.',
        },
        {
          title: 'Project-Based',
          description: 'End-to-end development of automation tools.',
        },
        {
          title: 'Dedicated Team',
          description: 'AI Engineers to integrate intelligence into your existing product.',
        },
      ],
    },
    finalCTA: {
      headline: 'Future-Proof Your Business',
      subtext: 'Discover how AI can reduce costs and increase efficiency.',
      buttonText: 'Book an AI Consultation',
    },
  },
  {
    id: '7',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    hero: {
      headline: 'Design That Drives User Action',
      subheadline: "We don't just make things look good. We design intuitive, accessible, and conversion-focused interfaces that developers love to build.",
      primaryCTA: 'Start Design Project',
      secondaryCTA: 'View Design Process',
      visualStrategy: 'A floating "glassmorphism" style UI card with cursor interactions and wireframe lines',
    },
    solutionsGridHeadline: 'User Experience Services',
    solutionsGridIntro: 'From initial research to pixel-perfect prototypes, we cover the full design lifecycle.',
    solutionCards: [
      {
        title: 'Wireframing & Prototyping',
        concept: 'Blueprinting',
        content: 'We visualize the user journey early. Interactive prototypes allow you to test flows and validate ideas before writing a single line of code.',
      },
      {
        title: 'High-Fidelity UI Design',
        concept: 'Visual Identity',
        content: 'Modern, aesthetic interfaces tailored to your brand. We design responsive systems that look stunning on mobile, tablet, and desktop.',
      },
      {
        title: 'Design Systems',
        concept: 'Consistency',
        content: 'We build comprehensive component libraries and style guides. This ensures UI consistency across your product and speeds up future development.',
      },
    ],
    engineeringDNAHeadline: 'Designed for Development',
    engineeringDNAIntro: '',
    engineeringFeatures: [
      {
        title: 'Developer Handoff',
        copy: 'We speak code. Our designs are delivered in Figma with auto-layout, clear layer naming, and CSS properties ready for your developers.',
      },
      {
        title: 'Accessibility (WCAG)',
        copy: 'Inclusive design is a priority. We ensure color contrast, font sizing, and navigation structures meet WCAG standards for accessibility.',
      },
      {
        title: 'Data-Backed Decisions',
        copy: "We don't guess. We use user persona research and competitive analysis to make design decisions that solve actual user problems.",
      },
    ],
    technologies: {
      headline: 'Technologies',
      stack: ['Figma', 'Adobe XD', 'Sketch', 'Storybook', 'Zeplin'],
    },
    scalableBanner: {
      headline: 'Design experiences that users love and developers can build',
      description: 'Great design is more than aesthetics—it drives user action and business results. Our UI/UX experts craft intuitive, accessible interfaces backed by user research and data. From wireframes to pixel-perfect prototypes, we deliver design systems that ensure consistency and speed up development. Turn your vision into beautiful, conversion-focused interfaces.',
    },
    engagementModels: {
      headline: 'Engagement Model',
      models: [
        {
          title: 'Project-Based',
          description: 'Full app or website redesign.',
        },
        {
          title: 'Dedicated Designer',
          description: 'Hire a UI/UX specialist to join your product team.',
        },
        {
          title: 'Design Audit',
          description: 'Expert review of your current UX with actionable improvements.',
        },
      ],
    },
    finalCTA: {
      headline: 'Turn Visitors into Users',
      subtext: "Let's design an interface that works as good as it looks.",
      buttonText: 'Start Your Design',
    },
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
