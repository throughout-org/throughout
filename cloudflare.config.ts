import { bindings, defineConfig, defineWorker } from "cf/config";

// ponytail: one Worker with a KV data cache (free, no card). The R2-backed
// response store needs billing on the account; switch if render cost ever matters.
export default defineConfig({
  worker: defineWorker({
    name: "throughout",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-07",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    env: {
      ASSETS: bindings.assets(),
      VINEXT_KV_CACHE: bindings.kv(),
      IMAGES: bindings.images(),
    },
  }),
});
