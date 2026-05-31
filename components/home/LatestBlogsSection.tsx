import { client } from "@/src/sanity/client";
import LatestBlogsSectionClient from "./LatestBlogsSectionClient";

async function fetchLatestPosts() {
  try {
    const posts = await client.fetch(
      `*[_type == "post"] | order(date desc) [0...4] {
        _id,
        title,
        "slug": slug.current,
        category,
        date,
        "imageUrl": coalesce(image.asset->url, ""),
        excerpt
      }`,
    );
    return Array.isArray(posts) ? posts : [];
  } catch {
    return [];
  }
}

export default async function LatestBlogsSection() {
  const posts = await fetchLatestPosts();

  if (posts.length === 0) return null;

  return <LatestBlogsSectionClient posts={posts} />;
}
