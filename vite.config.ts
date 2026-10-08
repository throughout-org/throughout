import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { kvDataAdapter } from "@vinext/cloudflare/cache/kv-data-adapter";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";

export default defineConfig({
  plugins: [
    vinext({
      // ponytail: no workersCacheCdnAdapter; v1.0.1 follows redirects back into the
      // Worker (loops on redirect pages). Re-add once it passes redirect: "manual".
      // Each Cloudflare location keeps its own copy of a cached page for an hour instead of
      // re-reading KV's central store every 60s (that read cost up to ~1s TTFB).
      // Trade-off: CRM job changes can take up to an hour to show at a location.
      cache: { data: kvDataAdapter({ entryCacheTtlSeconds: 3600 }) },
      images: { optimizer: imagesOptimizer() },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
