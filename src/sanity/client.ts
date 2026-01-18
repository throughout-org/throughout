import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "vqsz4nvb",
  dataset: "production",
  apiVersion: "2025-12-25",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});
