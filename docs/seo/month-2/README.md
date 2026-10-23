# Month 2 (Nov 2026): content velocity and link building

## Shipped in code (this branch)

| Plan item | Where |
| --- | --- |
| 5 more posts (6 to 10) | `ai-workflow-automation-small-business-guide`, `mullwood-invisible-to-ai-ready-case-study`, `geo-explained-get-recommended-by-chatgpt-gemini`, `shopify-vs-woocommerce-2026`, `hiring-offshore-developers-12-questions` |
| Full Müllwood and CoreConnect case studies as standalone, schema-rich pages | `/case-studies/mullwood`, `/case-studies/coreconnect-group` (Article, BreadcrumbList, FAQPage schema; `data/caseStudies.ts`); homepage case studies and service pages link to them; in the sitemap and `llms.txt` |
| FAQ schema on every Month 1 and 2 post | Automatic: a `## Frequently asked questions` section with `###` questions becomes FAQPage JSON-LD from the visible text (`extractFaqs` in `lib/insights.ts`) |
| Answer-first paragraph (40 to 60 words) under each H2 | Applied to all Month 1 and 2 posts |
| Internal linking pass | Every article links to its service page and category hub; service pages list the new posts; posts cross-link; `relatedArticles` updated |
| AI crawler access | `robots.ts` now covers OAI-SearchBot, Claude-SearchBot, Claude-User, Perplexity-User and Applebot-Extended, and keeps `/api/` disallowed for them |

## Needs a human

1. **Re-run the AEO prompt set** (`../month-1/aeo-prompt-test-set.md`) and log which prompts now surface Throughout.
2. **LinkedIn newsletter**: `linkedin-newsletter.md` has the plan and a first issue draft.
3. **Guest posts** (3 to 5): `guest-post-pitches.md`.
4. **Client testimonials and reciprocal links**: `testimonial-request.md` (Montado, Aerix, Airmate, Comflo, NRS Optical).
5. **List the 5 products** on Product Hunt, SaaSHub and AlternativeTo: `product-listings.md`.
6. **Track referring domains** (target 8 to 12 new by end of Month 2) in `referring-domains.md`.
7. Resubmit the sitemap and run `node scripts/indexnow.mjs` after deploy.
8. Post dates are all set to 2026-10-23 (published).

## Notes

- Case-study pages report delivery metrics only. Ahrefs AI-citation data was not available on this account, so no citation or traffic claims are made.
- The AI-search claims in the GEO post (crawler names, Google saying no special markup is needed, llms.txt support unconfirmed) should be re-checked against current vendor docs before publishing.
