---
title: "GraphQL with Next.js and WordPress: A Practical App Router Guide"
slug: "graphql-with-next-js-wordpress-my-practical-guide"
excerpt: "A production-minded introduction to using WPGraphQL with the Next.js App Router, including typed queries, caching, previews, errors and security boundaries."
author:
  name: "Throughout Engineering Team"
  role: "Software engineering"
  type: "Organization"
  url: "https://www.throughout.io"
publishedDate: "2025-12-25"
updatedDate: "2026-10-07"
seoTitle: "GraphQL with Next.js and WordPress: Practical Guide"
metaDescription: "Build a headless WordPress frontend with WPGraphQL and the Next.js App Router using typed data, cache revalidation, previews and safe queries."
primaryKeyword: "GraphQL Next.js WordPress"
secondaryKeywords:
  - "WPGraphQL Next.js App Router"
  - "headless WordPress GraphQL"
  - "Next.js WordPress tutorial"
searchIntent: "Technical informational"
category: "Engineering"
cluster: "Web engineering"
canonicalUrl: "https://www.throughout.io/insights/graphql-with-next-js-wordpress-my-practical-guide"
noIndex: false
coverImage: "/images/insights/nextjs-wordpress-graphql.png"
coverImageAlt: "Editorial architecture diagram connecting a Next.js application to WordPress through a GraphQL query layer"
relatedArticles:
  - "building-an-mcp-server-for-wordpress-what-we-learned-shipping-easy-mcp-ai"
  - "your-saas-mvp-built-in-3-weeks-why-founders-choose-throoout"
cta:
  label: "Discuss a headless web build"
  description: "Need to decide whether headless WordPress fits your project? We can help evaluate the content workflow, hosting, preview and maintenance trade-offs."
  url: "https://www.throughout.io/#contact"
---

WPGraphQL gives WordPress a typed GraphQL schema and endpoint. Next.js can query that endpoint from server components, generate pages at build time and revalidate content without turning every browser visit into a direct WordPress request.

That combination can work well when a team values WordPress editing but needs a separately engineered frontend. It also adds operational complexity. Use it because the separation solves a real problem, not because GraphQL is automatically faster than REST.

## When headless WordPress is a good fit

Consider it when:

- Editors already work effectively in WordPress.
- The frontend needs a design or interaction model beyond the selected theme.
- The same content feeds more than one channel.
- The engineering team can own deployments, previews and cache invalidation.
- Plugins used by editors expose the required data through WPGraphQL or a maintained extension.

A conventional WordPress site may be better when the team depends heavily on theme and page-builder previews, has no ongoing frontend engineering capacity, or does not benefit from separate deployments.

## Install and inspect WPGraphQL

Install the [WPGraphQL plugin](https://www.wpgraphql.com/) in WordPress. It exposes a `/graphql` endpoint and a schema based on registered WordPress types.

Before writing frontend code, use the IDE provided by your setup to inspect available fields. Do not assume every plugin field is exposed automatically. Advanced Custom Fields, authentication and other features may require maintained extensions or custom schema registration.

A basic posts query looks like this:

```graphql
query LatestPosts($first: Int!) {
  posts(first: $first) {
    nodes {
      databaseId
      title
      slug
      excerpt
      date
    }
  }
}
```

Ask only for fields the page needs, but avoid turning one coherent screen into many dependent network requests.

## Create a small server-side client

You do not need a large GraphQL library for a simple read-only site. A typed fetch wrapper is enough:

```ts
type GraphQLError = { message: string };

export async function queryWordPress<T>(
  query: string,
  variables: Record<string, unknown> = {},
  options: { revalidate?: number; tags?: string[] } = {},
): Promise<T> {
  const endpoint = process.env.WORDPRESS_GRAPHQL_URL;
  if (!endpoint) throw new Error("WORDPRESS_GRAPHQL_URL is not configured");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: options.revalidate ?? 300,
      tags: options.tags,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress request failed with ${response.status}`);
  }

  const payload = (await response.json()) as {
    data?: T;
    errors?: GraphQLError[];
  };

  if (payload.errors?.length || !payload.data) {
    throw new Error(payload.errors?.map(({ message }) => message).join("; ") || "WordPress returned no data");
  }

  return payload.data;
}
```

Keep the endpoint server-side unless there is a clear reason for browsers to call WordPress directly.

## Render data in an App Router page

```tsx
type PostsResponse = {
  posts: {
    nodes: Array<{
      databaseId: number;
      title: string;
      slug: string;
      excerpt: string;
      date: string;
    }>;
  };
};

export default async function BlogPage() {
  const data = await queryWordPress<PostsResponse>(LATEST_POSTS, { first: 12 }, { tags: ["wordpress-posts"] });

  return (
    <main>
      <h1>Latest posts</h1>
      <ul>
        {data.posts.nodes.map((post) => (
          <li key={post.databaseId}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
```

Use stable identifiers for React keys. Render WordPress HTML only after understanding which roles can author it and what sanitization occurs. `dangerouslySetInnerHTML` is not a content-security strategy.

## Generate article routes

For a manageable number of posts, fetch slugs in `generateStaticParams`. Always handle a missing or unpublished post with `notFound()` rather than rendering a successful page that says “not found.”

Generate metadata from the same article data used by the page. Set the canonical URL deliberately and provide a suitable social image. If WordPress stores SEO-plugin metadata, confirm that the selected plugin exposes those fields through GraphQL before depending on them.

## Plan caching and revalidation

A headless site needs an explicit freshness model.

Options include:

- Time-based revalidation for content that can be a few minutes old
- On-demand revalidation triggered by a WordPress webhook
- Dynamic rendering for content that must be current on every request

For on-demand revalidation, secure the webhook, validate the content identifier and invalidate only the relevant tags or paths. Log failures so editors know when a publish action did not reach the frontend.

## Build a preview workflow

Editors need to preview drafts without making them public. A complete preview flow usually requires:

- Authenticated access to draft content
- A signed preview route in Next.js
- Draft mode enabled only for the authorized session
- A clear indicator that the visitor is viewing unpublished content
- A way to exit preview mode

Do not expose a privileged WordPress token to the browser.

## Handle images deliberately

Configure the WordPress media hostname in `next.config`. Request useful media metadata, including alt text and source dimensions. Define fallbacks for missing images without silently replacing meaningful alternative text with the article title.

If WordPress is expected to serve large image traffic, review its CDN and transformation strategy rather than assuming the origin can support every frontend request.

## Use generated types for a larger schema

Handwritten TypeScript types are manageable for small queries. As the schema grows, [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) can generate operation-specific types and reveal schema changes during CI.

Generated types do not validate runtime data. Keep error handling around network and GraphQL responses.

## Secure the boundary

- Keep administrative mutations off the public frontend unless they are required.
- Restrict introspection if your security model calls for it, understanding the tooling trade-off.
- Apply rate limits and bot controls carefully.
- Update WordPress, WPGraphQL and extensions.
- Use least-privilege credentials for previews and authenticated queries.
- Monitor both frontend and WordPress failures.

Headless architecture changes where risk lives; it does not remove it.

## The practical trade-off

WPGraphQL and Next.js can provide a strong editor/developer split, typed content access and flexible rendering. In return, the team owns two applications, preview integration, cache behavior and deployment coordination.

Choose the architecture after evaluating that operating model. The best implementation is the one the organization can maintain after launch.

## Sources

- [WPGraphQL documentation](https://www.wpgraphql.com/docs)
- [Next.js data fetching](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Next.js Draft Mode](https://nextjs.org/docs/app/guides/draft-mode)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)

