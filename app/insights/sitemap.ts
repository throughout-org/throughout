import { MetadataRoute } from "next";
import { client } from "@/src/sanity/client";

interface Post {
  slug: string;
  _updatedAt: string;
  date: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://throoout.com";

  // Fetch only indexable blog posts
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt,
      date
    }
  `);

  return posts.map((post: Post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post._updatedAt || post.date,
  }));
}
