import { type Internship } from "@/data/internships";

const DEFAULT_CRM_BASE_URL = "https://crm.throoout.com";

type JobsApiResponse = {
  success: boolean;
  data?: Internship | Internship[];
};

function getCrmBaseUrl() {
  const configuredBaseUrl =
    process.env.CRM_PUBLIC_API_BASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_CRM_API_BASE_URL?.trim();

  const resolvedBaseUrl =
    configuredBaseUrl ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : DEFAULT_CRM_BASE_URL);

  return resolvedBaseUrl.replace(/\/$/, "");
}

function normalizeInternship(data: Partial<Internship>): Internship {
  return {
    id: data.id || (data as { _id?: string })._id || data.slug || "unknown",
    slug: data.slug || "untitled-role",
    title: data.title || "Untitled Role",
    duration: data.duration || "TBD",
    stipend: data.stipend || "Not specified",
    location: data.location || "Remote",
    status: data.status === "closed" ? "closed" : "open",
    description: data.description || "",
    responsibilities: Array.isArray(data.responsibilities)
      ? data.responsibilities
          .map((section) => ({
            category:
              typeof section?.category === "string" && section.category.trim()
                ? section.category.trim()
                : "Responsibilities",
            items: Array.isArray(section?.items)
              ? section.items
                  .map((item) => (typeof item === "string" ? item.trim() : ""))
                  .filter(Boolean)
              : [],
          }))
          .filter((section) => section.category || section.items.length > 0)
      : [],
    requirements: {
      title:
        typeof data.requirements?.title === "string" &&
        data.requirements.title.trim()
          ? data.requirements.title.trim()
          : "Who We're Looking For",
      items: Array.isArray(data.requirements?.items)
        ? data.requirements.items
            .map((item) => (typeof item === "string" ? item.trim() : ""))
            .filter(Boolean)
        : [],
    },
    requiredSkills: Array.isArray(data.requiredSkills)
      ? data.requiredSkills
          .map((item) => (typeof item === "string" ? item.trim() : ""))
          .filter(Boolean)
      : [],
    niceToHave: Array.isArray(data.niceToHave)
      ? data.niceToHave
          .map((item) => (typeof item === "string" ? item.trim() : ""))
          .filter(Boolean)
      : [],
    benefits: Array.isArray(data.benefits)
      ? data.benefits
          .map((item) => (typeof item === "string" ? item.trim() : ""))
          .filter(Boolean)
      : [],
    note: data.note || "",
  };
}

export async function getInternshipsFromCrm(options?: {
  includeClosed?: boolean;
}): Promise<Internship[]> {
  const includeClosed = options?.includeClosed === true;

  try {
    const baseUrl = getCrmBaseUrl();
    const params = includeClosed ? "?includeAll=true" : "";
    const response = await fetch(`${baseUrl}/api/jobs${params}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as JobsApiResponse;
    if (!payload.success || !Array.isArray(payload.data)) {
      return [];
    }

    const normalized = payload.data.map((job) => normalizeInternship(job));

    return includeClosed
      ? normalized
      : normalized.filter((job) => job.status === "open");
  } catch (error) {
    console.error("Failed to fetch internships from CRM:", error);
    return [];
  }
}

export async function getInternshipBySlugFromCrm(
  slug: string,
): Promise<Internship | undefined> {
  try {
    const baseUrl = getCrmBaseUrl();
    const response = await fetch(
      `${baseUrl}/api/jobs?slug=${encodeURIComponent(slug)}`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      return undefined;
    }

    const payload = (await response.json()) as JobsApiResponse;

    if (!payload.success || !payload.data || Array.isArray(payload.data)) {
      return undefined;
    }

    return normalizeInternship(payload.data);
  } catch (error) {
    console.error("Failed to fetch internship by slug from CRM:", error);
    return undefined;
  }
}
