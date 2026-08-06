import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "vqsz4nvb",
  dataset: "production",
  apiVersion: "2025-12-25",
  useCdn: true,
});
