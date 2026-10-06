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
