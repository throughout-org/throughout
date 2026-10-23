export interface CaseStudy {
  slug: "mullwood" | "coreconnect-group";
  client: string;
  clientUrl: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  period: string;
  datePublished: string;
  dateModified: string;
  services: string[];
  image: string;
  imageAlt: string;
  metrics: { label: string; before: string; after: string }[];
  challenge: string[];
  work: { title: string; copy: string }[];
  results: string[];
  limits: string;
  faqs: { question: string; answer: string }[];
  relatedInsights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mullwood",
    client: "Müllwood",
    clientUrl: "https://mullwood.lk/",
    seoTitle: "Müllwood SEO and AI Search Case Study | Throughout",
    metaDescription:
      "How Throughout rebuilt the search foundations of Müllwood, a Sri Lankan curly-hair ecommerce store: structured data 0% to 100%, 671 images fixed, blog 1 to 13 articles.",
    h1: "Müllwood: an ecommerce store Google could not read, rebuilt for search and AI assistants",
    summary:
      "Throughout rebuilt the search foundations of Müllwood, Sri Lanka's first curly-hair brand, over three months from July to September 2026. Structured data coverage went from 0% to 100%, 20 pages and products received SEO titles and keywords, 671 images received alt text and the blog grew from 1 to 13 articles.",
    period: "July to September 2026",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    services: ["Technical SEO", "Structured data", "AEO and GEO", "Content strategy"],
    image: "/images/work/mullwood.jpg",
    imageAlt: "Müllwood curly hair care website, optimised for search by Throughout",
    metrics: [
      { label: "Structured data coverage", before: "0%", after: "100%" },
      { label: "Pages and products with SEO titles and keywords", before: "0", after: "20" },
      { label: "Images missing alt text", before: "671", after: "Fixed" },
      { label: "Blog articles", before: "1", after: "13" },
    ],
    challenge: [
      "Müllwood had a specialist audience and real products, but search systems could not reliably interpret the store. The audit found no structured data, no search titles or keyword targeting on priority pages, 671 images without useful alternative text, a single blog article, an indexed demonstration page and a malicious script in the blog area.",
      "These were different classes of problem, so we treated them separately instead of reporting one generic SEO score.",
    ],
    work: [
      { title: "Security and index clean-up", copy: "Removed the malicious script and the indexed demo page first, so nothing unsafe or irrelevant stayed in search." },
      { title: "Titles, metadata and keyword direction", copy: "Gave 20 priority pages and products distinct SEO titles and keyword targets so each had its own search intent." },
      { title: "Structured data", copy: "Added schema.org markup across the intended templates, matched to what is visible on each page." },
      { title: "Image alt text", copy: "Described 671 images in context, for accessibility and for image and AI understanding." },
      { title: "Content built around customer questions", copy: "Grew the blog from 1 to 13 articles and added three category pages, so questions about curly-hair needs and buying decisions each have a clear home." },
      { title: "Measurement and AI access", copy: "Set up Google Analytics and Search Console, Bing and IndexNow, an llms.txt file and a Google Business Profile." },
    ],
    results: [
      "Structured data coverage across the intended templates moved from 0% to 100%.",
      "20 pages and products now have SEO titles and keyword direction.",
      "All 671 documented images now have descriptive alt text.",
      "The blog grew from 1 to 13 articles, with three category pages added.",
    ],
    limits:
      "These figures describe delivery, not traffic or revenue. Search impressions, qualified visits and sales need time and a baseline, and algorithm changes and seasonality also affect them. We have not claimed rankings or AI citations that were not recorded.",
    faqs: [
      { question: "What did Throughout do for Müllwood?", answer: "Throughout rebuilt Müllwood's search foundations: security and index clean-up, SEO titles and keywords for 20 pages and products, structured data across the intended templates, alt text for 671 images, and growth of the blog from 1 to 13 articles." },
      { question: "Did Müllwood get more traffic or sales?", answer: "This case study reports delivery metrics only. Traffic and revenue effects need time and a baseline to measure, and we do not claim outcomes that were not recorded." },
      { question: "How long did the Müllwood project take?", answer: "Three months, from July to September 2026." },
    ],
    relatedInsights: ["mullwood-seo-rebuild-case-study", "mullwood-invisible-to-ai-ready-case-study", "how-to-measure-seo-changes-after-implementation"],
  },
  {
    slug: "coreconnect-group",
    client: "CoreConnect Distributions",
    clientUrl: "https://coreconnect.lk/",
    seoTitle: "CoreConnect Group SEO, AEO and GEO Case Study | Throughout",
    metaDescription:
      "Month 1 of SEO, AEO and GEO across three brands: Aerix, Airmate and CoreConnect. Aerix SEO titles 0% to 90%, Airmate 0 to 61 titles, CoreConnect schema 0% to 100%.",
    h1: "CoreConnect group: three brands, one search strategy",
    summary:
      "In September 2026 Throughout rebuilt the search and AI-assistant foundations of three sites owned by CoreConnect Distributions: Aerix, Airmate and CoreConnect. Aerix URLs with SEO titles went from 0% to 90%, Airmate pages and products with SEO titles from 0 to 61, CoreConnect structured data from 0% to 100%, and eight answer-ready guides were published.",
    period: "Month 1, September 2026",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    services: ["Technical SEO", "Structured data", "AEO and GEO", "Content strategy"],
    image: "/images/work/airmate.jpg",
    imageAlt: "Airmate scent diffuser store, optimised for search and AI assistants by Throughout",
    metrics: [
      { label: "Aerix URLs with SEO titles and metas", before: "0%", after: "90%" },
      { label: "Airmate pages and products with SEO titles", before: "0", after: "61" },
      { label: "CoreConnect pages with structured data", before: "0%", after: "100%" },
      { label: "Answer-ready guides across the three sites", before: "0", after: "8" },
    ],
    challenge: [
      "CoreConnect Distributions runs three sites: Aerix for business scenting, Airmate for home diffusers, and the CoreConnect parent brand. Search engines and AI assistants had little to read: no SEO titles, no structured data, leftover template pages and duplicate URLs. Airmate had no AI Overview citations at the start.",
      "The sites also did not state how the brands relate, so an assistant could not tell who owns what.",
    ],
    work: [
      { title: "SEO titles and metas", copy: "Wrote titles and descriptions for Aerix URLs and Airmate pages and products, so each page states what it is." },
      { title: "Structured data across the group", copy: "Added product and business schema, including all 59 Aerix products, and FAQ schema across the group." },
      { title: "Brand relationships in schema", copy: "Stated in markup that Aerix, Airmate and CoreConnect are related, so assistants can resolve ownership." },
      { title: "Clean-up", copy: "Redirected duplicate pages, removed leftover template pages and submitted sitemaps to Google." },
      { title: "Alt text", copy: "Gave 246 images descriptive alt text." },
      { title: "Answer-ready guides", copy: "Published eight guides across the three sites, each opening with a direct answer." },
    ],
    results: [
      "Aerix URLs with SEO titles and metas rose from 0% to 90%.",
      "Airmate pages and products with SEO titles rose from 0 to 61.",
      "CoreConnect pages with structured data rose from 0% to 100%.",
      "Eight answer-ready guides were published across the group.",
    ],
    limits:
      "This is the first month of work and the figures describe delivery. Rankings and AI citations follow as search engines recrawl, and months two and three build content and authority. We will report outcomes against a baseline when they are measurable.",
    faqs: [
      { question: "What did Throughout do for the CoreConnect group?", answer: "Throughout rebuilt the foundations of Aerix, Airmate and CoreConnect in one month: SEO titles and metas, structured data including 59 Aerix products, FAQ schema, brand-relationship markup, redirects for duplicates, alt text for 246 images and eight answer-ready guides." },
      { question: "Why state brand relationships in schema?", answer: "Search engines and AI assistants infer entities from markup and links. Stating that Aerix, Airmate and CoreConnect are related lets them resolve which brand belongs to which owner." },
      { question: "Did the work improve rankings?", answer: "Month one reports delivery metrics. Rankings follow as Google recrawls, so we measure them against a baseline in later months." },
    ],
    relatedInsights: ["geo-explained-get-recommended-by-chatgpt-gemini", "how-to-prioritize-seo-issues-after-an-audit", "how-to-measure-seo-changes-after-implementation"],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((study) => study.slug === slug);
