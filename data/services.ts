export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: "engineering" | "design" | "marketing";
  /** Stable schema.org @id fragment, referenced from the root layout. */
  schemaId: string;
  name: string;
  serviceType: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** Answer-first summary, written to be quoted as-is by AI assistants. */
  summary: string;
  offers: { title: string; copy: string }[];
  process: { step: string; copy: string }[];
  stack: string[];
  proof: { label: string; title: string; copy: string; href: string }[];
  faqs: ServiceFaq[];
  relatedInsights: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "engineering",
    schemaId: "software-development",
    name: "Software Development",
    serviceType: "Software Development",
    seoTitle: "Offshore Software Development in Sri Lanka | Throughout",
    metaDescription:
      "Offshore software development in Colombo, Sri Lanka. Hire dedicated developers or a project team for web apps, mobile apps, SaaS MVPs and AI automation.",
    eyebrow: "Services · Engineering",
    h1: "Offshore software development in Sri Lanka",
    intro:
      "Throughout is an offshore software development studio in Colombo. We build websites, web and mobile apps, SaaS products and AI automations for founders, agencies and growing businesses in Australia, Europe and beyond, as a project team or as developers who join your roadmap.",
    summary:
      "Throughout provides offshore software development from Colombo, Sri Lanka: custom web and mobile apps, SaaS and MVP builds, Shopify and e-commerce, and AI workflow automation. Clients can hire a project team for a defined scope or dedicated developers for ongoing work, on a GMT+5:30 schedule that overlaps with Australia, Europe and the Gulf.",
    offers: [
      {
        title: "SaaS and MVP development",
        copy: "A focused first release that tests one real assumption with real users, built on a stack that can grow into the full product.",
      },
      {
        title: "Website and web app development",
        copy: "Fast, accessible sites and web applications in Next.js, React, Node.js, NestJS and Laravel, with search and analytics built in from day one.",
      },
      {
        title: "Mobile app development",
        copy: "Cross-platform mobile apps with offline behaviour and API integrations designed in, not bolted on.",
      },
      {
        title: "Hire dedicated developers",
        copy: "Developers, QA and DevOps who work inside your tools, standups and roadmap, as a long-term extension of your team.",
      },
      {
        title: "AI and workflow automation",
        copy: "LLM-powered workflows, agents and integrations (OpenAI, LangChain, vector search) that remove repetitive work for small and mid-sized teams.",
      },
      {
        title: "Shopify, WooCommerce and e-commerce",
        copy: "Storefronts, custom apps and payment integrations, structured so products can be found in search and by AI assistants.",
      },
    ],
    process: [
      {
        step: "Discovery call",
        copy: "A free 30-minute call to understand the goal, constraints and the skills you need. You leave with an honest view of scope and risk.",
      },
      {
        step: "Proposal",
        copy: "The team, scope, price and payment terms in writing, plus the assumptions the estimate depends on.",
      },
      {
        step: "Build in short cycles",
        copy: "Regular working releases and progress updates in English, with direct contact with the people doing the work.",
      },
      {
        step: "Launch and support",
        copy: "Deployment, monitoring and handover, then ongoing support or a dedicated team if the product keeps growing.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "Laravel",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Google Cloud",
      "Docker",
      "LangChain",
      "OpenAI",
      "Shopify",
    ],
    proof: [
      {
        label: "Our product",
        title: "Rankout, an AI SEO platform",
        copy: "Built and run by Throughout. SEO research, implementation and measurement in one workflow.",
        href: "https://rankout.app/",
      },
      {
        label: "Our product",
        title: "Checkout, an offline-first POS",
        copy: "Point-of-sale software for retail businesses that keeps selling when the connection drops.",
        href: "https://checkout.throughout.io/",
      },
      {
        label: "Case study",
        title: "Comflo retention campaign",
        copy: "200 existing customers reached on WhatsApp, LKR 1,400 spent and LKR 40,000+ in revenue.",
        href: "/insights/comflo-retention-campaign-case-study",
      },
    ],
    faqs: [
      {
        question: "Why hire an offshore software development team in Sri Lanka?",
        answer:
          "Sri Lanka offers English-speaking engineers, a GMT+5:30 time zone that overlaps with the working day in Australia, Europe and the Gulf, and offshore rates that are lower than onshore agencies in those markets. Throughout adds one point of contact, regular English progress updates and a signed contract that settles ownership of the code before work starts.",
      },
      {
        question: "Can I hire dedicated developers from Throughout?",
        answer:
          "Yes. We build dedicated teams of developers, QA and DevOps engineers who work inside your tools, standups and roadmap. It suits products that need continuous delivery rather than a single fixed-scope project.",
      },
      {
        question: "What is the difference between a project team and a dedicated team?",
        answer:
          "A project team delivers a defined outcome such as a website, app or MVP with a clear scope and timeline. A dedicated team is built for ongoing work and becomes part of how your company ships software.",
      },
      {
        question: "Can you build a SaaS MVP offshore?",
        answer:
          "Yes. We scope the smallest release that can test your most important assumption, then build it on a stack that can scale. Timelines depend on scope, dependencies and how quickly decisions are made, so we agree them in the proposal rather than promise a fixed number of weeks.",
      },
      {
        question: "Which technologies do you work with?",
        answer:
          "Our main stack is Next.js, React, Node.js, NestJS, Laravel and Python, with PostgreSQL, MongoDB and MySQL for data, AWS or Google Cloud for hosting, and LangChain and OpenAI for AI automation. We also build on Shopify, WooCommerce and WordPress.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. Ownership of the code, designs and content we create for you is agreed in the contract before any work starts, and we can sign your NDA before you share details.",
      },
    ],
    relatedInsights: [
      "your-saas-mvp-built-in-3-weeks-why-founders-choose-throoout",
      "ai-workflow-automation-small-business-guide",
      "offshore-software-development-sri-lanka-guide",
      "hiring-offshore-developers-12-questions",
      "nextjs-node-nestjs-offshore-stack",
      "dedicated-developer-cost-2026",
    ],
  },
  {
    slug: "design",
    schemaId: "design",
    name: "UI/UX and Website Design",
    serviceType: "UI/UX Design",
    seoTitle: "UI/UX Design Agency in Sri Lanka | Throughout",
    metaDescription:
      "UI/UX and website design from Colombo, Sri Lanka. Product design, prototypes and design systems for startups and agencies, handed off ready to build.",
    eyebrow: "Services · Design",
    h1: "UI/UX design agency in Sri Lanka",
    intro:
      "Throughout designs products and websites that people understand at a glance. Our designers work next to our engineers, so what is designed in Figma is what ships, for startups, agencies and businesses in Australia, Europe and beyond.",
    summary:
      "Throughout is a UI/UX and website design studio in Colombo, Sri Lanka. We offer UX research, UI design for web and mobile, website and landing page design, interactive prototypes, design systems and brand identity, delivered with developer-ready handoff and available as a project or as a dedicated designer on your team.",
    offers: [
      {
        title: "Product strategy and UX research",
        copy: "Define who the product is for, which tasks matter most and what to cut, before any screens are drawn.",
      },
      {
        title: "UI/UX design for web and mobile",
        copy: "Interfaces designed around real user tasks, with clear states for empty, loading, error and success.",
      },
      {
        title: "Website and landing page design",
        copy: "Pages with one clear job and a visible route to action, designed with search and page speed in mind.",
      },
      {
        title: "Interactive prototypes",
        copy: "Clickable flows you can put in front of users and investors before engineering commits to a build.",
      },
      {
        title: "Design systems",
        copy: "Reusable components, tokens and documentation in Figma and Storybook so teams ship consistently as they grow.",
      },
      {
        title: "Brand identity",
        copy: "Logo, colour, type and tone that hold together across the product, the website and marketing.",
      },
    ],
    process: [
      {
        step: "Understand",
        copy: "Goals, audience, constraints and the evidence we already have, summarised and agreed.",
      },
      {
        step: "Explore",
        copy: "Flows and low-fidelity layouts to settle structure before visual polish.",
      },
      {
        step: "Design and prototype",
        copy: "High-fidelity screens and an interactive prototype, reviewed with you in short cycles.",
      },
      {
        step: "Hand off",
        copy: "Specs, assets and component documentation organised so developers can build without guessing.",
      },
    ],
    stack: ["Figma", "Sketch", "Zeplin", "Storybook", "Tailwind CSS", "Next.js", "React"],
    proof: [
      {
        label: "Award",
        title: "BestWeb.LK 2026, Best Mobile User Experience",
        copy: "Throughout won the Winner award for Best Mobile User Experience and a Bronze for Best Personal Website.",
        href: "/insights/throughout-wins-bestweb-lk-2026",
      },
      {
        label: "Guide",
        title: "A design handoff checklist developers can use",
        copy: "How we organise files, states and specs so design and development stay in step.",
        href: "/insights/design-handoff-checklist-for-development",
      },
      {
        label: "Guide",
        title: "How to redesign a website without losing clarity",
        copy: "What to keep, what to change and how to protect search performance through a redesign.",
        href: "/insights/how-to-redesign-a-website-without-losing-clarity",
      },
    ],
    faqs: [
      {
        question: "What does a UI/UX design agency in Sri Lanka do?",
        answer:
          "A UI/UX design agency researches users and tasks, designs interfaces and flows for web and mobile products, builds prototypes and design systems, and hands the result to developers. Throughout also designs marketing websites and landing pages built to rank in search.",
      },
      {
        question: "Do your designers work with your developers?",
        answer:
          "Yes. Design and engineering sit in the same studio, so components are designed with the build in mind and handoff is a conversation rather than a file transfer.",
      },
      {
        question: "Can I hire a dedicated designer?",
        answer:
          "Yes. A dedicated designer works inside your tools and roadmap on a continuing basis. A project engagement suits a defined redesign, MVP interface or design system.",
      },
      {
        question: "Do you design for mobile apps as well as websites?",
        answer:
          "Yes. We design interfaces for web and mobile apps, and our team won Best Mobile User Experience at BestWeb.LK 2026.",
      },
      {
        question: "What do we receive at the end of a design project?",
        answer:
          "Source files in Figma, an interactive prototype, a component library or design system where scoped, exported assets and handoff notes. Ownership of the designs is agreed in the contract before work starts.",
      },
    ],
    relatedInsights: [
      "design-handoff-checklist-for-development",
      "how-to-redesign-a-website-without-losing-clarity",
      "why-60-of-sri-lankan-small-businesses-are-invisible-online-and-losing-customer-trust-in-2026",
    ],
  },
  {
    slug: "marketing",
    schemaId: "marketing",
    name: "SEO and Digital Marketing",
    serviceType: "SEO and Digital Marketing",
    seoTitle: "SEO & Content Strategy Agency, Sri Lanka | Throughout",
    metaDescription:
      "SEO, GEO and content strategy from Colombo, Sri Lanka. Technical SEO, structured data, AI-search visibility and content that earns citations in ChatGPT and Gemini.",
    eyebrow: "Services · Marketing",
    h1: "SEO and content strategy for search and AI assistants",
    intro:
      "We get the right people to find you, in Google and in ChatGPT, Gemini and Perplexity. The same team that builds software audits, fixes and publishes, so recommendations become changes on the site instead of a slide deck.",
    summary:
      "Throughout offers SEO, generative engine optimisation (GEO) and content strategy from Colombo, Sri Lanka. Work covers technical SEO audits and fixes, schema.org structured data, answer-ready content, llms.txt and AI crawler access, plus Google and Meta ads and conversion optimisation. We do the implementation, not just the audit.",
    offers: [
      {
        title: "Technical SEO",
        copy: "Crawlability, indexation, Core Web Vitals, duplicate and thin pages, redirects and image alt text, fixed in code rather than listed in a report.",
      },
      {
        title: "Structured data",
        copy: "Organization, Service, FAQPage, BreadcrumbList and product schema that matches what is visible on the page.",
      },
      {
        title: "GEO and AEO",
        copy: "Answer-first content, clear entities and comparison tables, plus AI crawler access and an llms.txt file, so assistants can find and cite you.",
      },
      {
        title: "Content strategy",
        copy: "Topic clusters built around real search intent, with briefs, internal linking and a publishing calendar.",
      },
      {
        title: "Google and Meta ads",
        copy: "Paid campaigns tied to the same measurement as organic, so spend is judged against outcomes.",
      },
      {
        title: "Analytics and reporting",
        copy: "Search Console, Analytics and Bing set up and monitored, with reporting that separates delivery from outcomes.",
      },
    ],
    process: [
      {
        step: "Audit and baseline",
        copy: "Technical, content and AI-visibility baselines so progress can be measured honestly.",
      },
      {
        step: "Fix the foundation",
        copy: "Technical, schema and on-page fixes shipped before content volume ramps up.",
      },
      {
        step: "Publish and link",
        copy: "Answer-ready content mapped to search intent and connected with internal links.",
      },
      {
        step: "Measure and adjust",
        copy: "Monthly reporting on rankings, traffic, referring domains and AI citations, feeding the next month's plan.",
      },
    ],
    stack: ["Google Search Console", "Bing Webmaster Tools", "IndexNow", "Google Analytics", "schema.org", "Rankout"],
    proof: [
      {
        label: "Case study",
        title: "Müllwood: a store Google could not read",
        copy: "Structured data coverage from 0% to 100%, 671 images given alt text and a blog grown from 1 to 13 articles in three months.",
        href: "/case-studies/mullwood",
      },
      {
        label: "Case study",
        title: "CoreConnect group: three brands in one month",
        copy: "Aerix, Airmate and CoreConnect rebuilt for search and AI assistants, with brand relationships stated in schema.",
        href: "/case-studies/coreconnect-group",
      },
      {
        label: "Guide",
        title: "SEO, AEO and GEO: what actually changes",
        copy: "A source-grounded guide to what stays foundational in AI search and what is new.",
        href: "/insights/geo-vs-seo-what-actually-gets-you-cited-by-chatgpt-in-2026",
      },
    ],
    faqs: [
      {
        question: "What is generative engine optimisation (GEO)?",
        answer:
          "GEO is the practice of structuring content and technical signals so AI assistants such as ChatGPT, Gemini and Perplexity can find, understand and cite a business. It builds on SEO fundamentals and adds answer-first writing, clear entities, structured data and AI crawler access.",
      },
      {
        question: "Do you guarantee rankings or AI citations?",
        answer:
          "No. Nobody can guarantee a ranking or a citation. We report what we delivered, such as schema coverage, pages fixed and articles published, separately from outcomes such as impressions, rankings and citations, and we compare outcomes against a baseline.",
      },
      {
        question: "How long does SEO take to work?",
        answer:
          "Specific, long-tail terms can reach page one within a few months once the technical foundation is fixed. Competitive head terms usually take six to twelve months of sustained work.",
      },
      {
        question: "Do you implement the fixes or only audit?",
        answer:
          "We implement. Our engineers ship technical, schema and content changes directly, which is how we rebuilt the foundations of Müllwood and the CoreConnect group sites.",
      },
      {
        question: "Can you help my business appear in ChatGPT answers?",
        answer:
          "We can make your site eligible and easy to cite: allow the relevant AI crawlers, add structured data and an llms.txt file, publish clear answer-first content and build the third-party mentions that assistants rely on. Visibility is then tracked against a fixed set of buyer prompts.",
      },
    ],
    relatedInsights: [
      "geo-vs-seo-what-actually-gets-you-cited-by-chatgpt-in-2026",
      "geo-explained-get-recommended-by-chatgpt-gemini",
      "mullwood-invisible-to-ai-ready-case-study",
      "coreconnect-multi-brand-seo-case-study",
      "building-rankout-ai-seo-agent",
    ],
  },
];

export const servicePageBySlug = (slug: string) => servicePages.find((page) => page.slug === slug);
