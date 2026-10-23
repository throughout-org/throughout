# Month 1 (Oct 2026): foundations and first authority content

Source: *Throughout.io 3-Month Marketing & Search Visibility Plan*, section 4, Month 1.

## Shipped in code (this branch)

| Plan item | Where |
| --- | --- |
| Services sub-pages as indexable URLs | `/services/engineering`, `/services/design`, `/services/marketing` (`data/services.ts`, `app/services/[slug]/page.tsx`); old `/engineering`, `/design`, `/digital-marketing` now 308 to them |
| Structured data | Organization + ProfessionalService (Colombo), WebSite, Service nodes pointing at the new URLs; per-service Service, WebPage, BreadcrumbList, FAQPage; CollectionPage + BreadcrumbList on category pages; existing BlogPosting/BreadcrumbList and homepage FAQPage kept |
| Homepage title, meta, eyebrow, "hire dedicated developers" H2 | `app/page.tsx`, `app/layout.tsx`, `HomepageRedesign.tsx` |
| Blog category structure | `/insights/category/{engineering,design,seo-geo,business,case-study}`, validated in `lib/insights.ts` |
| 5 Month 1 posts + BestWeb.LK press post | `content/insights/*` (list below) |
| `llms.txt` refreshed | `public/llms.txt` |
| Sitemap | services, category pages and posts, `app/sitemap.ts` |
| IndexNow | key file `public/<key>.txt`; submit with `node scripts/indexnow.mjs` after deploy |
| Internal linking | homepage service cards, footer Services column, service pages link to posts and posts link to services |

Posts: offshore-software-development-sri-lanka-guide, dedicated-team-vs-project-team-offshore, saas-mvp-cost-offshore-2026, sri-lanka-vs-india-vs-vietnam-offshore-development, mvp-idea-to-launch-how-throughout-builds, throughout-wins-bestweb-lk-2026.

## Needs a human (cannot be done from the repo)

1. **After deploy:** run `node scripts/indexnow.mjs`; submit `https://www.throughout.io/sitemap.xml` in Google Search Console and Bing Webmaster Tools and verify both properties.
2. **Google Business Profile** for "Throughout (PVT) LTD, Colombo" (verification needs the owner).
3. **Baseline AEO run** using `aeo-prompt-test-set.md` (needs ChatGPT, Gemini and Perplexity).
4. **Directory submissions** (`directory-submissions.md`) and **outreach** (`backlink-targets.md`, `press-pitch.md`).
5. **Review numbers and process claims** in `saas-mvp-cost-offshore-2026` (worked-example assumptions) and `mvp-idea-to-launch-how-throughout-builds` (phase timings) so they match how Throughout really quotes and delivers.
6. Run PageSpeed Insights / CrUX on `/`, `/services/*` and one post for the Core Web Vitals baseline.

## Deferred by the plan to later months

Standalone case-study pages and FAQ schema on every post (Month 2); Review/AggregateRating schema once testimonials exist (Month 3).
