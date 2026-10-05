export interface WorkItem {
  name: string;
  tagline: string;
  image: string;
  href: string;
  kind: "Our product" | "Client project";
}

export const work: WorkItem[] = [
  {
    name: "Checkout",
    tagline: "Offline-first POS for retail businesses.",
    image: "/images/work/checkout.jpg",
    href: "https://checkout.throughout.io/",
    kind: "Our product",
  },
  {
    name: "Rankout",
    tagline: "AI that does your SEO. You just approve.",
    image: "/images/work/rankout.jpg",
    href: "https://rankout.app/",
    kind: "Our product",
  },
  {
    name: "Comflo",
    tagline: "Every customer conversation and order in one platform.",
    image: "/images/work/comflo.jpg",
    href: "https://comflo.app/",
    kind: "Our product",
  },
  {
    name: "Ado Coffee",
    tagline: "Online store for Sri Lankan coffee in Switzerland.",
    image: "/images/work/adocoffee.jpg",
    href: "https://adocoffee.ch/",
    kind: "Client project",
  },
  {
    name: "Hostraspace",
    tagline: "Gamified staff training for hotels and retail teams.",
    image: "/images/work/hostraspace.jpg",
    href: "https://hostraspace.com/",
    kind: "Client project",
  },
  {
    name: "Artisans Touch",
    tagline: "Shopify store for handcrafted jewellery.",
    image: "/images/work/artisans-touch.jpg",
    href: "https://artisans-touch.com/",
    kind: "Client project",
  },
];
