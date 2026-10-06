export interface WorkItem {
  name: string;
  tagline: string;
  category: string;
  image: string;
  href: string;
  kind: "Our product" | "Client project";
  /** Backdrop behind the browser frame, taken from the project's own brand. */
  color: string;
}

export const work: WorkItem[] = [
  {
    name: "Rankout",
    tagline: "AI that does your SEO. You just approve.",
    category: "SEO platform",
    image: "/images/work/rankout.jpg",
    href: "https://rankout.app/",
    kind: "Our product",
    color: "#ea2804",
  },
  {
    name: "Checkout",
    tagline: "Offline-first POS for retail businesses.",
    category: "Point of sale",
    image: "/images/work/checkout.jpg",
    href: "https://checkout.throughout.io/",
    kind: "Our product",
    color: "#1eb4b4",
  },
  {
    name: "Tryout",
    tagline: "Design your own T-shirt, priced live and printed for you.",
    category: "E-commerce",
    image: "/images/work/tryout.jpg",
    href: "https://tryout.lk/",
    kind: "Our product",
    color: "#e0482c",
  },
  {
    name: "Comflo",
    tagline: "Every customer conversation and order in one platform.",
    category: "Commerce ops",
    image: "/images/work/comflo.jpg",
    href: "https://comflo.app/",
    kind: "Our product",
    color: "#0e7a4f",
  },
  {
    name: "Throughout CRM",
    tagline: "Clients, projects, invoices and payroll in one place.",
    category: "Business CRM",
    image: "/images/work/crm.jpg",
    href: "https://crm.throughout.io/",
    kind: "Client project",
    color: "#6ab4fe",
  },
  {
    name: "Naaraa Biznet",
    tagline: "Find verified tradespeople and services near you.",
    category: "Marketplace",
    image: "/images/work/naaraa.jpg",
    href: "https://naaraabiznet.throughout.io/en",
    kind: "Client project",
    color: "#c2185b",
  },
  {
    name: "Findout",
    tagline: "Sales platform to manage pipeline and close deals faster.",
    category: "Sales CRM",
    image: "/images/work/sales.jpg",
    href: "https://sales.throughout.io/",
    kind: "Client project",
    color: "#a8cef4",
  },
  {
    name: "Montado Coffee",
    tagline: "Café-style coffee brand with its own online store.",
    category: "E-commerce",
    image: "/images/work/montado.jpg",
    href: "https://montadocoffee.com/",
    kind: "Client project",
    color: "#2f4a35",
  },
  {
    name: "Rataa Backdrops",
    tagline: "Photography backdrops for creators and brands.",
    category: "E-commerce",
    image: "/images/work/rataa.jpg",
    href: "https://rataabackdrops.com/",
    kind: "Client project",
    color: "#262626",
  },
  {
    name: "NRS Optical",
    tagline: "Eye care clinic and eyewear, online.",
    category: "Healthcare",
    image: "/images/work/nrs.jpg",
    href: "https://nrsoptical.com/",
    kind: "Client project",
    color: "#6ab4fe",
  },
  {
    name: "Ado Coffee",
    tagline: "Online store for Sri Lankan coffee in Switzerland.",
    category: "E-commerce",
    image: "/images/work/adocoffee.jpg",
    href: "https://adocoffee.ch/",
    kind: "Client project",
    color: "#7a5230",
  },
  {
    name: "Hostraspace",
    tagline: "Gamified staff training for hotels and retail teams.",
    category: "SaaS",
    image: "/images/work/hostraspace.jpg",
    href: "https://hostraspace.com/",
    kind: "Client project",
    color: "#a8cef4",
  },
  {
    name: "Artisans Touch",
    tagline: "Shopify store for handcrafted jewellery.",
    category: "Shopify",
    image: "/images/work/artisans-touch.jpg",
    href: "https://artisans-touch.com/",
    kind: "Client project",
    color: "#a8646f",
  },
];
