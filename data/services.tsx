import React from "react";
import {
  FiMonitor,
  FiShoppingBag,
  FiCloud,
  FiEdit3,
  FiCpu,
  FiPenTool,
  FiTrendingUp,
} from "react-icons/fi";

export interface ServiceHero {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  visualStrategy: string;
  badgeText?: string;
  trustIndicators?: string[];
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
  gradient: string;
  icon: React.ReactNode;
  hero: ServiceHero;
  solutionsGridBadgeText?: string;
  solutionsGridHeadline: string;
  solutionsGridIntro: string;
  solutionCards: ServiceCard[];
  engineeringDNABadgeText?: string;
  engineeringDNAHeadline: string;
  engineeringDNAIntro: string;
  engineeringFeatures: EngineeringFeature[];
  technologies: {
    badgeText?: string;
    headline: string;
    description?: string;
    stack: {
      name: string;
      icon: string;
    }[];
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
    id: "1",
    title: "Software Development",
    slug: "software-development",
    gradient: "from-blue-500 to-cyan-500",
    icon: <FiMonitor className="text-white" />,
    hero: {
      headline: "Engineering Scalable Software Systems",
      subheadline:
        "We design and build high-performance web applications, backend systems, and APIs that power modern digital businesses. Our team develops reliable software architectures using technologies like Laravel, Next.js, Node.js, and Python.",
      primaryCTA: "Start Your Project",
      secondaryCTA: "View Our Engineering Stack",
      visualStrategy:
        "Abstract geometric lines connecting server icons, representing connectivity and structure",
      badgeText: "Software Development",
      trustIndicators: [
        "Free Consultation",
        "Agile Development",
        "Expert Team",
      ],
    },
    solutionsGridHeadline: "Full-Stack Software Engineering",
    solutionsGridIntro:
      "From fast user interfaces to complex backend platforms, we build software systems designed for performance, reliability, and long-term scalability.",
    solutionCards: [
      {
        title: "High-Performance Web Applications (Next.js / React)",
        concept: "Next.js / React",
        content:
          "Modern web applications designed for speed, SEO performance, and seamless user experience. By leveraging server-side rendering and optimized frontend architecture, we deliver fast, scalable interfaces that feel like native apps.",
        idealFor: [
          "E-commerce platforms",
          "SaaS dashboards",
          "Interactive digital platforms",
        ],
      },
      {
        title: "Backend Platforms & APIs (Laravel)",
        concept: "Laravel",
        content:
          "Secure and scalable backend systems that power complex business platforms. Our Laravel architecture enables robust admin panels, REST APIs, and enterprise-level applications.",
        idealFor: [
          "SaaS platforms",
          "CRM systems",
          "Marketplace platforms",
          "Business management systems",
        ],
      },
      {
        title: "Real-Time Systems & Microservices (Node.js / Nest.js)",
        concept: "Node.js / Nest.js",
        content:
          "Event-driven architectures designed for high concurrency and real-time communication. These systems efficiently manage thousands of simultaneous connections and dynamic data flows.",
        idealFor: [
          "Chat and messaging platforms",
          "Live activity feeds",
          "Notification systems",
          "Streaming applications",
        ],
      },
      {
        title: "Automation & Data Processing (Python)",
        concept: "Python",
        content:
          "Automated workflows and data systems that eliminate manual tasks and unlock valuable insights. Our Python solutions integrate with APIs, process large datasets, and support intelligent automation.",
        idealFor: [
          "workflow automation",
          "data processing pipelines",
          "AI integrations",
          "reporting systems",
        ],
      },
    ],
    engineeringDNAHeadline: "Built with Engineering Discipline",
    engineeringDNAIntro:
      "Reliable software requires more than just writing code. Our development process follows strict engineering standards to ensure long-term stability and maintainability.",
    engineeringFeatures: [
      {
        title: "Clean Architecture & Maintainable Code",
        copy: "We follow established engineering standards such as PSR for PHP and modern JavaScript practices to keep the codebase structured, scalable, and easy to maintain.",
      },
      {
        title: "Continuous Integration & Deployment",
        copy: "Automated CI/CD pipelines ensure reliable deployments and safe updates. We configure pipelines using modern tools so releases happen smoothly with minimal risk.",
      },
      {
        title: "Security-First Development",
        copy: "Security considerations are integrated from the beginning. We follow OWASP security principles to protect applications from common vulnerabilities.",
      },
      {
        title: "Scalable Infrastructure",
        copy: "Applications are designed to scale with demand. We configure infrastructure environments using containerized systems and modern cloud architecture.",
      },
    ],
    technologies: {
      headline: "Modern Technologies We Work With",
      description:
        "Our engineering stack includes modern frameworks and reliable infrastructure tools used to build scalable digital platforms.",
      stack: [
        { name: "React", icon: "/images/tech/react.svg" },
        { name: "Next.js", icon: "/images/tech/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/images/tech/tailwind.svg" },
        { name: "Laravel", icon: "/images/tech/laravel.svg" },
        { name: "Node.js", icon: "/images/tech/nodejs.svg" },
        { name: "Nest.js", icon: "/images/tech/nestjs.svg" },
        { name: "Python", icon: "/images/tech/python.svg" },
        { name: "MySQL", icon: "/images/tech/mysql.svg" },
        { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
        { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
        { name: "Redis", icon: "/images/tech/redis.svg" },
        { name: "Docker", icon: "/images/tech/docker.svg" },
        { name: "AWS", icon: "/images/tech/aws.svg" },
        { name: "Git", icon: "/images/tech/git.svg" },
      ],
    },
    scalableBanner: {
      headline:
        "Build high-performance software that scales with your business",
      description:
        "Set your business goals and let us handle the rest. With our proven development expertise, agile approach, and keen insight into modern technologies, we build high-ROI applications that users will love. Rely on us to transform your vision into highly scalable, production-ready software.",
    },
    engagementModels: {
      headline: "Flexible Engagement Models",
      models: [
        {
          title: "Dedicated Team",
          description:
            "Hire a full squad of Laravel/React experts to work exclusively on your product.",
        },
        {
          title: "Project-Based",
          description:
            "Fixed scope and timeline for MVPs and specific feature developments.",
        },
        {
          title: "Staff Augmentation",
          description:
            "Need an extra pair of hands? Add our senior developers to your existing team.",
        },
      ],
    },
    finalCTA: {
      headline: "Ready to Build Your Platform?",
      subtext:
        "Tell us about your project and our engineering team will help you design the right architecture and development roadmap.",
      buttonText: "Schedule Software Consultation",
    },
  },
  // {
  //   id: "2",
  //   title: "Custom E-Commerce Development",
  //   slug: "custom-ecommerce-development",
  //   gradient: "from-amber-500 to-yellow-500",
  //   icon: "🛒",
  //   hero: {
  //     headline: "Enterprise-Grade E-Commerce Engineering",
  //     subheadline:
  //       "We move beyond templates to build bespoke, headless e-commerce platforms using Laravel and Next.js—optimized for speed, scalability, and specific payment needs.",
  //     primaryCTA: "Build Your Store",
  //     secondaryCTA: "View Payment Integrations",
  //     visualStrategy:
  //       'A split diagram showing a backend "Database/API" layer connecting to multiple "Heads" like Mobile, Web, and POS',
  //     badgeText: "E-Commerce Solutions",
  //     trustIndicators: [
  //       "Payment Integration",
  //       "Scalable Architecture",
  //       "99.9% Uptime",
  //     ],
  //   },
  //   solutionsGridHeadline: "Bespoke Commerce Solutions",
  //   solutionsGridIntro:
  //     "From multi-vendor marketplaces to single-brand flagship stores, we build logic that standard platforms can't handle.",
  //   solutionCards: [
  //     {
  //       title: "Headless Commerce (Next.js Frontend)",
  //       concept: "Speed & UX",
  //       content:
  //         "Detach your frontend from the backend for sub-second page loads. We build PWA-ready frontends using Next.js that feel like mobile apps and convert better.",
  //     },
  //     {
  //       title: "Complex Backend Operations (Laravel)",
  //       concept: "Logic & Management",
  //       content:
  //         "Custom inventory management, dynamic pricing algorithms, and multi-vendor logic. We build the engine that powers your unique business model.",
  //     },
  //     {
  //       title: "Global & Local Payment Aggregation",
  //       concept: "Financial Integration",
  //       content:
  //         "Securely integrated with PayHere, WEBXPAY, Koko, Mint Pay, and global leaders like Stripe. We handle the complex API handshakes so you get paid instantly.",
  //     },
  //   ],
  //   engineeringDNAHeadline: "Why Brands Trust Our Platforms",
  //   engineeringDNAIntro: "",
  //   engineeringFeatures: [
  //     {
  //       title: "Security & Compliance",
  //       copy: "We implement strict PCI-DSS compliant coding standards and secure tokenization for payments to ensure customer data is never compromised.",
  //     },
  //     {
  //       title: "High Traffic Scalability",
  //       copy: "Ready for Black Friday? We optimize database queries and implement Redis caching to handle massive traffic spikes without slowing down.",
  //     },
  //     {
  //       title: "SEO-First Architecture",
  //       copy: "With Server-Side Rendering (SSR), every product page is fully indexed by Google, solving the SEO issues common in traditional JavaScript apps.",
  //     },
  //   ],
  //   technologies: {
  //     headline: "Technologies",
  //     description:
  //       "Our e-commerce stack combines powerful backend frameworks like Laravel with blazing-fast frontends using Next.js, integrated with secure payment gateways and modern caching solutions.",
  //     stack: [
  //       { name: "Laravel", icon: "/images/tech/laravel.svg" },
  //       { name: "Next.js", icon: "/images/tech/nextjs.svg" },
  //       { name: "Redis", icon: "/images/tech/redis.svg" },
  //       { name: "MySQL", icon: "/images/tech/mysql.svg" },
  //       { name: "Stripe", icon: "/images/tech/stripe.svg" },
  //       { name: "PayHere", icon: "/images/tech/payhere.svg" },
  //       { name: "Docker", icon: "/images/tech/docker.svg" },
  //     ],
  //   },
  //   scalableBanner: {
  //     headline:
  //       "Launch a custom e-commerce platform that converts visitors into customers",
  //     description:
  //       "From payment integrations to inventory management, we build complete commerce solutions tailored to your business model. Our headless architecture ensures lightning-fast performance and seamless user experiences across all devices. Let us help you create an online store that drives sales and grows with demand.",
  //   },
  //   engagementModels: {
  //     headline: "Engagement Model",
  //     models: [
  //       {
  //         title: "Dedicated Team",
  //         description:
  //           "A full-stack team to build and maintain your enterprise platform.",
  //       },
  //       {
  //         title: "Project-Based",
  //         description:
  //           "Fixed-cost development for launching a new custom store.",
  //       },
  //       {
  //         title: "Staff Augmentation",
  //         description:
  //           "Hire a senior Laravel developer to extend your existing commerce team.",
  //       },
  //     ],
  //   },
  //   finalCTA: {
  //     headline: "Ready to Scale Your Sales?",
  //     subtext: "Let's build a store that fits your business, not a template.",
  //     buttonText: "Schedule E-Commerce Demo",
  //   },
  // },
  {
    id: "3",
    title: "Shopify Development",
    slug: "shopify-development",
    gradient: "from-teal-500 to-cyan-500",
    icon: <FiShoppingBag className="text-white" />,
    hero: {
      headline: "Build High-Performance Shopify Stores",
      subheadline:
        "We design and engineer scalable Shopify storefronts tailored for modern e-commerce brands. From custom themes to headless architectures, our solutions focus on performance, flexibility, and conversion growth.",
      primaryCTA: "Start Shopify Project",
      secondaryCTA: "Explore Headless Shopify",
      visualStrategy:
        "Clean icons of Shopify connecting to inventory, shipping, and marketing tools",
      badgeText: "Shopify Development",
      trustIndicators: [
        "Custom Themes",
        "App Integration",
        "Performance Optimized",
      ],
    },
    solutionsGridBadgeText: "Shopify Engineering",
    solutionsGridHeadline: "Shopify Development Services",
    solutionsGridIntro:
      "We help brands unlock the full potential of the Shopify ecosystem by building fast, flexible, and scalable commerce platforms.",
    solutionCards: [
      {
        title: "Custom Shopify Themes",
        concept: "Liquid Development",
        content:
          "Unique storefronts designed to match your brand identity and deliver a seamless shopping experience. Our themes are built with clean Liquid code to ensure fast performance and easy scalability.",
        idealFor: [
          "emerging e-commerce brands",
          "product-focused businesses",
          "high-conversion storefronts",
        ],
      },
      {
        title: "Headless Shopify",
        concept: "Hydrogen / Next.js",
        content:
          "Combine Shopify's powerful commerce backend with a custom frontend built using modern frameworks. Headless architecture gives your brand full control over design, speed, and advanced functionality.",
        idealFor: [
          "high-volume stores",
          "custom shopping experiences",
          "performance-driven brands",
        ],
      },
      {
        title: "Shopify App & API Integrations",
        concept: "Custom Apps & Automation",
        content:
          "Extend Shopify beyond the default capabilities. We develop custom integrations that connect your store with internal systems, third-party platforms, and automation workflows.",
        idealFor: [
          "ERP integrations",
          "CRM connectivity",
          "inventory automation",
        ],
      },
    ],
    engineeringDNABadgeText: "Performance & Conversion",
    engineeringDNAHeadline: "Beyond Store Setup",
    engineeringDNAIntro:
      "Building a store is only the beginning. We optimize Shopify platforms for performance, usability, and long-term growth.",
    engineeringFeatures: [
      {
        title: "Performance Optimization",
        copy: "We audit your store to eliminate unnecessary scripts and app conflicts, ensuring faster page loads and strong Core Web Vitals performance.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        copy: "Every design and layout decision is guided by user experience principles to improve product discovery, checkout flow, and overall conversion rates.",
      },
      {
        title: "Seamless Platform Migration",
        copy: "Moving from another platform? We safely migrate products, customers, and SEO data while maintaining store integrity and search rankings. Common migrations include platforms like WooCommerce and Magento into Shopify.",
      },
    ],
    technologies: {
      badgeText: "Technology",
      headline: "Shopify Development Stack",
      description:
        "We leverage the Shopify ecosystem alongside modern web technologies to deliver flexible and high-performance storefronts.",
      stack: [
        { name: "Shopify", icon: "/images/tech/shopify.svg" },
        { name: "Liquid", icon: "/images/tech/liquid.svg" },
        { name: "React", icon: "/images/tech/react.svg" },
        { name: "Next.js", icon: "/images/tech/nextjs.svg" },
        { name: "GraphQL", icon: "/images/tech/graphql.svg" },
        { name: "Node.js", icon: "/images/tech/nodejs.svg" },
      ],
    },
    scalableBanner: {
      headline: "Maximize your Shopify store potential with custom development",
      description:
        "Whether you're migrating to Shopify or optimizing an existing store, we deliver custom themes, seamless integrations, and performance enhancements that boost conversions. Our headless Shopify solutions combine the best of both worlds—Shopify's reliability with complete design freedom. Transform your store into a high-performing sales machine.",
    },
    engagementModels: {
      headline: "Engagement Model",
      models: [
        {
          title: "Project-Based",
          description: "Full store setup or migration packages.",
        },
        {
          title: "Retainer",
          description:
            "Monthly support for theme updates, bug fixes, and optimization.",
        },
        {
          title: "Consulting",
          description: "Technical audit and strategy for existing stores.",
        },
      ],
    },
    finalCTA: {
      headline: "Launch Your Shopify Store with Confidence",
      subtext:
        "Whether you need a custom storefront, a headless commerce architecture, or performance optimization, our team can design and build the right Shopify solution for your brand.",
      buttonText: "Schedule Shopify Consultation",
    },
  },
  {
    id: "4",
    title: "Cloud & Server Solutions",
    slug: "cloud-server-solutions",
    gradient: "from-green-500 to-emerald-500",
    icon: <FiCloud className="text-white" />,
    hero: {
      headline: "Resilient Cloud Infrastructure & DevOps",
      subheadline:
        "We architect, deploy, and manage secure server environments on AWS, Azure, and Google Cloud to ensure your applications never go offline.",
      primaryCTA: "Optimize My Server",
      secondaryCTA: "View DevOps Tools",
      visualStrategy:
        "Isometric view of server clusters, load balancers, and a CI/CD infinity loop",
      badgeText: "Cloud Infrastructure",
      trustIndicators: ["99.9% Uptime", "24/7 Monitoring", "Auto-Scaling"],
    },
    solutionsGridHeadline: "Infrastructure Services",
    solutionsGridIntro:
      "Bridging the gap between code and deployment with modern DevOps practices.",
    solutionCards: [
      {
        title: "CI/CD Pipeline Automation",
        concept: "Automated Deployment",
        content:
          "Eliminate manual errors. We build pipelines (GitHub Actions/Jenkins) that automatically test and deploy your code the moment you push it.",
      },
      {
        title: "Containerization (Docker & K8s)",
        concept: "Scalability",
        content:
          "We containerize applications using Docker and manage orchestration with Kubernetes, allowing your app to scale horizontally during traffic spikes.",
      },
      {
        title: "Cloud Migration & Management",
        concept: "Architecture",
        content:
          "Moving to the cloud? We handle the migration of legacy systems to AWS or DigitalOcean, optimizing for both performance and cost reduction.",
      },
    ],
    engineeringDNAHeadline: "Zero Downtime Philosophy",
    engineeringDNAIntro: "",
    engineeringFeatures: [
      {
        title: "Infrastructure as Code (IaC)",
        copy: "We use Terraform and Ansible to script your infrastructure. This prevents configuration drift and allows for rapid disaster recovery.",
      },
      {
        title: "Proactive Monitoring",
        copy: "We don't wait for crashes. We implement tools like Prometheus and Grafana to track CPU, memory, and error rates in real-time.",
      },
      {
        title: "Security Hardening",
        copy: "We configure strict firewalls, VPCs, and SSL encryption to ensure your server environment is an impenetrable fortress.",
      },
    ],
    technologies: {
      headline: "Technologies",
      description:
        "We architect cloud infrastructure using industry-leading platforms like AWS and Google Cloud, with containerization via Docker and Kubernetes, automated with CI/CD pipelines and Infrastructure as Code.",
      stack: [
        { name: "AWS", icon: "/images/tech/aws.svg" },
        { name: "Google Cloud", icon: "/images/tech/gcp.svg" },
        { name: "Docker", icon: "/images/tech/docker.svg" },
        { name: "Kubernetes", icon: "/images/tech/kubernetes.svg" },
        { name: "Jenkins", icon: "/images/tech/jenkins.svg" },
        { name: "Terraform", icon: "/images/tech/terraform.svg" },
        { name: "Linux", icon: "/images/tech/linux.svg" },
      ],
    },
    scalableBanner: {
      headline: "Deploy with confidence on robust cloud infrastructure",
      description:
        "Stop worrying about server crashes and downtime. Our DevOps experts architect resilient cloud solutions that scale automatically during traffic spikes. From CI/CD pipelines to container orchestration, we handle the infrastructure so you can focus on building great products. Experience 99.9% uptime and peace of mind.",
    },
    engagementModels: {
      headline: "Engagement Model",
      models: [
        {
          title: "Managed Services",
          description:
            "Monthly flat fee for 24/7 server monitoring and maintenance.",
        },
        {
          title: "Project-Based",
          description:
            "One-time setup for pipelines, migrations, or architecture design.",
        },
        {
          title: "Consulting",
          description: "Cloud cost audit to reduce your monthly AWS bill.",
        },
      ],
    },
    finalCTA: {
      headline: "Stop Worrying About Server Crashes",
      subtext: "Let us handle the infrastructure while you focus on the code.",
      buttonText: "Schedule Cloud Consultation",
    },
  },
  {
    id: "5",
    title: "CMS Development",
    slug: "cms-development",
    gradient: "from-orange-500 to-red-500",
    icon: <FiEdit3 className="text-white" />,
    hero: {
      headline: "Flexible Content Management Systems",
      subheadline:
        "We build powerful content management platforms that combine the simplicity of traditional CMS tools with the performance and flexibility of modern web architecture. From custom WordPress solutions to headless CMS setups, we help businesses manage content at scale.",
      primaryCTA: "Discuss Your Project",
      secondaryCTA: "Request Technical Audit",
      visualStrategy:
        "Abstract representation of the WordPress block editor connecting to raw PHP code",
      badgeText: "CMS Development",
      trustIndicators: [
        "Custom Development",
        "Security Hardened",
        "SEO Optimized",
      ],
    },
    solutionsGridBadgeText: "CMS Engineering",
    solutionsGridHeadline: "Advanced Content Platform Development",
    solutionsGridIntro:
      "We design and develop content management systems that go beyond simple website editing. Our CMS solutions support high-performance websites, publishing platforms, and complex digital ecosystems.",
    solutionCards: [
      {
        title: "Custom CMS Development",
        concept: "WordPress / Headless CMS",
        content:
          "Tailored CMS platforms built around your content workflows. We develop custom themes, plugins, and integrations to ensure flexibility, performance, and long-term maintainability.",
        idealFor: [
          "corporate websites",
          "publishing platforms",
          "marketing websites",
        ],
      },
      {
        title: "Advanced WooCommerce Platforms",
        concept: "Custom E-Commerce CMS",
        content:
          "Extend the CMS into a powerful commerce platform using advanced WooCommerce development and custom business logic. WooCommerce runs on top of WordPress and allows businesses to transform their CMS into a full commerce system.",
        idealFor: [
          "online stores",
          "subscription platforms",
          "product catalog systems",
        ],
      },
      {
        title: "API Integrations & CMS Automation",
        concept: "Custom Plugins & APIs",
        content:
          "Modern businesses rely on connected systems. We develop secure APIs and custom plugins to integrate your CMS with external platforms and internal tools.",
        idealFor: [
          "CRM integrations",
          "mobile applications",
          "marketing automation",
        ],
      },
    ],
    engineeringDNABadgeText: "Engineering Standards",
    engineeringDNAHeadline: "Built for Stability and Growth",
    engineeringDNAIntro:
      "Content platforms must remain fast, secure, and maintainable even as they grow. Our engineering process focuses on building CMS systems that scale without becoming difficult to manage.",
    engineeringFeatures: [
      {
        title: "Security Hardening",
        copy: "CMS platforms are frequent attack targets. We secure installations by restricting vulnerable endpoints, implementing authentication protection, and configuring firewall layers.",
      },
      {
        title: "Database Optimization",
        copy: "Large content libraries can slow down poorly structured systems. We optimize database queries and indexing to ensure fast page loads even with thousands of posts.",
      },
      {
        title: "Code Quality Standards",
        copy: "Our development follows official coding standards to ensure compatibility with future updates and maintainable codebases. We follow guidelines established by organizations like WordPress Foundation to ensure long-term compatibility.",
      },
    ],
    technologies: {
      badgeText: "Technology",
      headline: "CMS Development Stack",
      description:
        "Our CMS solutions combine reliable backend systems with modern frontend technologies to deliver high-performance digital platforms. WooCommerce extends the capabilities of WordPress and powers millions of online stores worldwide.",
      stack: [
        { name: "WordPress", icon: "/images/tech/wordpress.svg" },
        { name: "PHP", icon: "/images/tech/php.svg" },
        { name: "JavaScript", icon: "/images/tech/javascript.svg" },
        { name: "React", icon: "/images/tech/react.svg" },
        { name: "MySQL", icon: "/images/tech/mysql.svg" },
        { name: "WooCommerce", icon: "/images/tech/woocommerce.svg" },
      ],
    },
    scalableBanner: {
      headline: "WordPress that performs like a custom-built application",
      description:
        "Move beyond slow, bloated WordPress sites. We build lightning-fast, secure WordPress solutions with custom themes, advanced WooCommerce features, and seamless API integrations. Whether you need a content-rich publishing platform or a headless WordPress setup, we optimize every aspect for speed, SEO, and scalability.",
    },
    engagementModels: {
      headline: "Engagement Model",
      models: [
        {
          title: "Project-Based",
          description: "Custom theme or plugin development projects.",
        },
        {
          title: "Maintenance Retainer",
          description: "Updates, backups, and security scans.",
        },
        {
          title: "Staff Augmentation",
          description: "Hire a WordPress expert for your agency.",
        },
      ],
    },
    finalCTA: {
      headline: "Build a CMS That Scales with Your Business",
      subtext:
        "Whether you need a custom content platform, an optimized publishing system, or an integrated commerce CMS, we design solutions that are fast, secure, and easy to manage.",
      buttonText: "Schedule CMS Consultation",
    },
  },
  {
    id: "6",
    title: "Workflow Automation",
    slug: "workflow-automation",
    gradient: "from-indigo-500 to-blue-500",
    icon: <FiCpu className="text-white" />,
    hero: {
      headline: "Automate Your Business With AI",
      subheadline:
        "We build AI systems that automate workflows and add intelligent features to modern software.",
      primaryCTA: "Book AI Consultation",
      secondaryCTA: "Explore AI Use Cases",
      visualStrategy:
        "A glowing network of nodes representing AI processing data points",
      badgeText: "Throoout AI",
      trustIndicators: [
        "Custom AI Models",
        "Process Automation",
        "Data Security",
      ],
    },
    solutionsGridHeadline: "AI Solutions for Real Problems",
    solutionsGridIntro:
      "Eliminate repetitive tasks and manual processes using intelligent automation. We design AI-powered workflows that process data, trigger actions, and connect systems automatically.",
    solutionCards: [
      {
        title: "AI Workflow Automation",
        concept: "Customer Support",
        content:
          "We build AI assistants trained on your company data. Using Retrieval-Augmented Generation (RAG), your bot gives accurate, context-aware answers.",
        idealFor: [
          "Automated report generation",
          "Email classification and routing",
          "CRM data synchronization",
          "Internal operations automation",
          "Intelligent document processing",
        ],
      },
      {
        title: "AI for SaaS Products",
        concept: "Efficiency",
        content:
          "We integrate AI capabilities directly into software platforms, helping startups build smarter products. AI features can dramatically improve usability, insights, and automation inside your product.",
        idealFor: [
          "AI copilots and assistants",
          "Smart search and summarization",
          "Recommendation systems",
          "Knowledge assistants powered by RAG",
          "Automated content or data analysis",
        ],
      },
      {
        title: "AI Customer Assistants",
        concept: "Data Extraction",
        content:
          "Provide instant and accurate support using custom AI assistants trained on your company knowledge. Unlike generic chatbots, these assistants understand your business data and deliver relevant answers.",
        idealFor: [
          "Customer support assistants",
          "Internal knowledge bots",
          "onboarding assistants",
          "documentation search bots",
        ],
      },
    ],
    engineeringDNAHeadline: "Responsible AI Implementation",
    engineeringDNAIntro: "",
    engineeringFeatures: [
      {
        title: "Data Privacy & Security",
        copy: "We ensure your proprietary data is sanitized before interacting with public models, or we deploy local LLMs to keep data entirely within your infrastructure.",
      },
      {
        title: "Model Fine-Tuning",
        copy: "Generic models aren't enough. We fine-tune models on your specific industry terminology to ensure high accuracy in responses.",
      },
      {
        title: "Cost Optimization",
        copy: "Token usage can get expensive. We architect efficient prompt engineering strategies and caching layers to keep your AI running costs low.",
      },
    ],
    technologies: {
      headline: "Technologies",
      description:
        "We integrate cutting-edge AI technologies including OpenAI APIs and open-source models, leveraging Python with LangChain for orchestration, vector databases for semantic search, and PyTorch for custom model training.",
      stack: [
        { name: "OpenAI", icon: "/images/tech/openai.svg" },
        { name: "Python", icon: "/images/tech/python.svg" },
        { name: "LangChain", icon: "/images/tech/langchain.svg" },
        { name: "Pinecone", icon: "/images/tech/pinecone.svg" },
        { name: "PyTorch", icon: "/images/tech/pytorch.svg" },
        { name: "Hugging Face", icon: "/images/tech/huggingface.svg" },
      ],
    },
    scalableBanner: {
      headline: "Automate your workflows and unlock AI-powered intelligence",
      description:
        "Stop wasting time on repetitive tasks. Our AI solutions automate business processes, extract insights from documents, and provide intelligent customer support through custom chatbots. From data automation to machine learning integration, we help you leverage AI to reduce costs, improve efficiency, and stay ahead of the competition.",
    },
    engagementModels: {
      headline: "Engagement Model",
      models: [
        {
          title: "Consulting & Prototype",
          description: "Feasibility study and MVP build for your AI idea.",
        },
        {
          title: "Project-Based",
          description: "End-to-end development of automation tools.",
        },
        {
          title: "Dedicated Team",
          description:
            "AI Engineers to integrate intelligence into your existing product.",
        },
      ],
    },
    finalCTA: {
      headline: "Future-Proof Your Business",
      subtext: "Discover how AI can reduce costs and increase efficiency.",
      buttonText: "Schedule AI Consultation",
    },
  },
  {
    id: "7",
    title: "UI/UX Engineering",
    slug: "ui-ux-engineering",
    gradient: "from-violet-500 to-purple-500",
    icon: <FiPenTool className="text-white" />,
    hero: {
      headline: "Design Systems That Power Great Products",
      subheadline:
        "We design intuitive, scalable interfaces that help users accomplish tasks quickly and confidently. Our UI/UX engineering process focuses on usability, accessibility, and conversion-driven design.",
      primaryCTA: "Start Design Project",
      secondaryCTA: "View Design Process",
      visualStrategy:
        'A floating "glassmorphism" style UI card with cursor interactions and wireframe lines',
      badgeText: "UI/UX Engineering",
      trustIndicators: [
        "User Research",
        "Accessibility First",
        "Conversion Focused",
      ],
    },
    solutionsGridBadgeText: "Design Capabilities",
    solutionsGridHeadline: "User Experience & Interface Design",
    solutionsGridIntro:
      "We create digital experiences that balance visual design, usability, and technical feasibility. Our process covers the full lifecycle from research and wireframes to high-fidelity interface systems.",
    solutionCards: [
      {
        title: "Wireframes & Interactive Prototypes",
        concept: "Product Blueprinting",
        content:
          "Before development begins, we map the product structure and user flows. Interactive prototypes help validate ideas early and reduce costly redesign during development.",
        idealFor: [
          "SaaS products",
          "mobile-first applications",
          "complex digital platforms",
        ],
      },
      {
        title: "High-Fidelity Interface Design",
        concept: "UI Systems",
        content:
          "We design modern, responsive interfaces that align with your brand identity and deliver a consistent experience across devices.",
        idealFor: ["web platforms", "dashboards", "e-commerce interfaces"],
      },
      {
        title: "Scalable Design Systems",
        concept: "Component Libraries",
        content:
          "Design systems ensure that your product remains visually consistent as it grows. We build reusable components and UI standards that simplify future development.",
        idealFor: [
          "large applications",
          "growing product teams",
          "multi-platform products",
        ],
      },
    ],
    engineeringDNABadgeText: "Design Workflow",
    engineeringDNAHeadline: "Designed for Real Product Development",
    engineeringDNAIntro:
      "Design should integrate seamlessly with development workflows. Our UI/UX process ensures that every design decision is practical, testable, and developer-friendly.",
    engineeringFeatures: [
      {
        title: "Developer-Ready Handoff",
        copy: "Design files are structured with clear component organization, auto-layout systems, and documented properties to ensure smooth collaboration with developers.",
      },
      {
        title: "Accessibility-First Design",
        copy: "We follow accessibility guidelines to ensure interfaces remain usable for all users. This includes proper contrast ratios, readable typography, and logical navigation structures. Standards such as World Wide Web Consortium accessibility guidelines help ensure inclusive user experiences.",
      },
      {
        title: "Research-Driven Decisions",
        copy: "Every design decision is backed by research, user behavior analysis, and competitive benchmarking to ensure the final interface solves real user problems.",
      },
    ],
    technologies: {
      badgeText: "Tools & Platforms",
      headline: "Modern Design Tooling",
      description:
        "Our design workflow uses industry-standard tools that enable efficient collaboration between designers and developers. Design: Figma, Adobe XD, Sketch. Design Systems: Storybook. Developer Handoff: Zeplin. Tools like Figma enable collaborative design workflows and real-time prototyping.",
      stack: [
        { name: "Figma", icon: "/images/tech/figma.svg" },
        { name: "Adobe XD", icon: "/images/tech/adobexd.svg" },
        { name: "Sketch", icon: "/images/tech/sketch.svg" },
        { name: "Storybook", icon: "/images/tech/storybook.svg" },
        { name: "Zeplin", icon: "/images/tech/zeplin.svg" },
      ],
    },
    scalableBanner: {
      headline: "Design experiences that users love and developers can build",
      description:
        "Great design is more than aesthetics—it drives user action and business results. Our UI/UX experts craft intuitive, accessible interfaces backed by user research and data. From wireframes to pixel-perfect prototypes, we deliver design systems that ensure consistency and speed up development. Turn your vision into beautiful, conversion-focused interfaces.",
    },
    engagementModels: {
      headline: "Engagement Model",
      models: [
        {
          title: "Project-Based",
          description: "Full app or website redesign.",
        },
        {
          title: "Dedicated Designer",
          description: "Hire a UI/UX specialist to join your product team.",
        },
        {
          title: "Design Audit",
          description:
            "Expert review of your current UX with actionable improvements.",
        },
      ],
    },
    finalCTA: {
      headline: "Turn Ideas into Exceptional Interfaces",
      subtext:
        "Whether you're building a new digital product or improving an existing one, we design user experiences that are intuitive, scalable, and ready for development.",
      buttonText: "Schedule Design Consultation",
    },
  },
  {
    id: "8",
    title: "AI-Driven SEO",
    slug: "ai-driven-seo",
    gradient: "from-green-400 to-blue-600",
    icon: <FiTrendingUp className="text-white" />,
    hero: {
      headline: "Search Optimization Powered by Data & Automation",
      subheadline:
        "We combine technical SEO expertise with AI-powered research and automation to improve search visibility, grow organic traffic, and scale content strategies efficiently.",
      primaryCTA: "Start SEO Audit",
      secondaryCTA: "Explore SEO Strategy",
      visualStrategy: "A graph with upward-trending lines and search icons",
      badgeText: "AI-Driven SEO",
      trustIndicators: ["Technical SEO", "Content Strategy", "Proven Results"],
    },
    solutionsGridBadgeText: "SEO Capabilities",
    solutionsGridHeadline: "Technical SEO & Growth Systems",
    solutionsGridIntro:
      "Our SEO approach focuses on building a strong technical foundation while using data and automation to identify high-value opportunities for organic growth.",
    solutionCards: [
      {
        title: "Technical SEO Audits",
        concept: "Site Health & Indexation",
        content:
          "We analyze your website's technical structure to identify issues that prevent search engines from properly crawling and ranking your pages. Audit areas include crawlability and indexation, page speed and Core Web Vitals, mobile usability, and internal linking structure.",
        idealFor: [
          "crawlability and indexation",
          "page speed and Core Web Vitals",
          "mobile usability",
          "internal linking structure",
        ],
      },
      {
        title: "On-Page Optimization",
        concept: "Content & Structure",
        content:
          "We optimize the structure of your pages to improve search relevance and user experience. This includes metadata improvements, semantic structure, and internal linking strategies.",
        idealFor: [
          "page titles and meta descriptions",
          "heading hierarchy",
          "keyword targeting",
          "internal linking improvements",
        ],
      },
      {
        title: "AI-Assisted Content Strategy",
        concept: "Search Growth Planning",
        content:
          "Content growth requires strategic planning. We use AI research tools to identify search opportunities, analyze competitors, and develop scalable content strategies.",
        idealFor: [
          "keyword opportunity analysis",
          "topic clustering",
          "search intent optimization",
          "long-term content roadmaps",
        ],
      },
    ],
    engineeringDNABadgeText: "Search Engineering",
    engineeringDNAHeadline: "SEO Built Into Your Infrastructure",
    engineeringDNAIntro:
      "Modern SEO is closely tied to performance and technical architecture. Our engineering-driven approach ensures your site is optimized both for users and search engines.",
    engineeringFeatures: [
      {
        title: "Structured Data Implementation",
        copy: "We implement structured data using JSON-LD to improve search engine understanding and enhance search results with rich snippets. Standards developed by organizations like World Wide Web Consortium help define how structured data is interpreted.",
      },
      {
        title: "Performance Optimization",
        copy: "Website speed directly affects search performance. We optimize page loading time, reduce unnecessary scripts, and improve Core Web Vitals.",
      },
      {
        title: "SEO Automation & Monitoring",
        copy: "We build automated reporting and monitoring systems that track keyword performance, technical issues, and organic growth trends.",
      },
    ],
    technologies: {
      badgeText: "Technology",
      headline: "Analytics & SEO Platforms",
      description:
        "We use modern analytics and SEO tools to monitor performance and identify growth opportunities. Tools such as Google Search Console and Ahrefs help monitor search visibility and track ranking performance.",
      stack: [
        { name: "Google Search Console", icon: "/images/tech/gsc.svg" },
        { name: "Ahrefs", icon: "/images/tech/ahrefs.svg" },
        { name: "Semrush", icon: "/images/tech/semrush.svg" },
        { name: "Google Analytics", icon: "/images/tech/ga.svg" },
      ],
    },
    scalableBanner: {
      headline: "Grow your traffic and outrank your competition",
      description:
        "Our SEO experts use proven strategies and the latest tools to help your website climb the search rankings.",
    },
    engagementModels: {
      headline: "Engagement Model",
      models: [
        {
          title: "Monthly Retainer",
          description: "Ongoing SEO management and optimization.",
        },
        {
          title: "Project-Based",
          description: "One-time audits or content campaigns.",
        },
        {
          title: "Consulting",
          description: "Expert advice and strategy for your in-house team.",
        },
      ],
    },
    finalCTA: {
      headline: "Ready to Grow Your Organic Traffic?",
      subtext:
        "Whether you need a technical SEO audit or a long-term search growth strategy, we help businesses build sustainable organic traffic through data-driven optimization.",
      buttonText: "Schedule SEO Consultation",
    },
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
