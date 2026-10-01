# Throughout Website Discovery Report

**Repository:** `throughout-website` (branch `main`, last commit `54d022d`, 2 Sep 2026)
**Discovery date:** 1 October 2026
**Scope:** read-only audit of the repository, plus read-only checks of the live site (`https://www.throughout.io`), the public Sanity dataset and the careers CRM endpoint. No code, content, configuration or deployment was changed.

> **Two snapshots exist and they differ.** The working tree has a large set of uncommitted changes (52 files, including deleted portfolio pages and assets, a new gallery, a colour change from `#2563eb` to `#0084D1`, and removal of the homepage "Featured work" section during this session). The live site matches the last commit more closely. Where they differ, this report says which one it describes. Live checks are marked **(live)**.
>
> This report supersedes `TRUEAUTO-WEBSITE-DISCOVERY.md` (30 Sep), which was written under the wrong brand name and predates several changes.

---

## 0. Urgent issues found during discovery (not fixed)

These are outside the "website improvement" scope but should not wait for it.

| # | Issue | Evidence | Risk |
|---|---|---|---|
| 1 | **A Google Cloud service-account private key is committed to git** | `throughout-website-7fa6425106a7.json` (tracked since commit `8fe524a`), account `resume-uploader@throughout-website.iam.gserviceaccount.com`. No code references it any more. | Anyone with repo access (or any past clone/fork) holds a working key. It needs to be revoked in Google Cloud. Deleting the file alone doesn't remove it from git history. |
| 2 | **Applicant CVs are made public** | `app/api/job-applications/route.ts` uploads each PDF to Google Drive, then grants `role: "reader", type: "anyone"`. | Every applicant's CV is readable by anyone with the link. That's a privacy exposure. |
| 3 | **Contact form email is open to HTML injection** | `app/api/contact/route.ts` puts `name`, `email`, `phone` and `message` straight into the email HTML without escaping. No spam protection or rate limiting. | Spam, phishing content in the team inbox. |
| 4 | **Footer WhatsApp link is broken on every page** | `components/Footer.tsx` and `components/services/ServicesCTASection.tsx` use `https://wa.me/707007992` (no `94` country code). The contact page uses the correct `wa.me/94707007992`. | Lost WhatsApp leads from the most-seen link. |
| 5 | **Careers page shows no roles (live)** | Roles load from `https://crm.throoout.com/api/jobs` unless `CRM_PUBLIC_API_BASE_URL` is set. That host returns Vercel `DEPLOYMENT_NOT_FOUND`. **(live)** `/careers` shows "No roles open right now". | If roles are meant to be open, recruiting is silently broken. |
| 6 | **`/portfolio` redirect will break when the working tree ships** | `next.config.ts` redirects `/portfolio` → `/#featured-work`, but that section was removed. | Users and Google land on the homepage top with a dead anchor. |
| 7 | **Gallery would ship with a broken image and may not ship at all** | `GallerySlider.tsx` references `/images/gallery/980C3820-…_1_105_c.jpeg`, which does not exist. The whole `public/images/gallery/` folder is untracked in git. | Broken tile, or a missing gallery after deploy. |

---

## 1. Executive Snapshot

- **What the site is:** a Next.js 16 marketing site for **Throughout (PVT) LTD**, Colombo, Sri Lanka. The current positioning is **"dedicated teams"**: dedicated project/service teams and dedicated offshore teams covering engineering, design, data, AI, DevOps, QA and marketing.
- **Positioning is mid-transition.** The homepage, About and Dedicated Teams pages speak "dedicated offshore teams for startups, agencies and product companies". The root metadata, Organization schema, keywords, `llms.txt` and web manifest still say "full-stack digital growth studio", "digital marketing agency", "SEO agency Sri Lanka", "Smart software solutions". The `menu` file at the repo root describes a third, unbuilt direction (Throughout AI / MVP Studio / Engineering with products).
- **Strongest proof currently visible:** three owned products (Checkout, Rankout, Comflo) on the homepage, linked to live product sites. On the working tree only: BestWeb.LK 2026 award photos.
- **Weakest areas:**
  - No testimonials and no client logos (apart from CodeMorphs and Comflo on Dedicated Teams).
  - All 5 case studies are anonymous, with unverified metrics and mocked visuals.
  - Portfolio data contains contradictory claims.
  - Team has names and photos only.
  - Nothing about timezone, contracts, NDAs, security or pricing models.
- **Technical SEO:**
  - The foundation is solid: metadata API, sitemap, robots, Organization/WebSite/Service/FAQ/JobPosting schema.
  - **(live)** Pages without their own canonical (all case studies and `/portfolio`) declare the **homepage** as canonical.
  - **(live)** Several pages point their OG image at files that 404.
  - **(live)** Engineering, Dedicated Teams and Careers have no OG image at all.
  - The blog has no Article schema and no authors.
- **Tracking:**
  - GTM, GA4 (hard-coded too) and Meta Pixel load on every page with **no cookie consent**.
  - The Calendly, contact form and newsletter conversions are wired up.
  - The CTA-click and service-view helpers exist but are never called.

---

## 2. Technical Architecture

| Area | Finding |
|---|---|
| Framework | **Next.js 16.0.10** (App Router), **React 19.2.3**, TypeScript 5. `babel-plugin-react-compiler` is installed, but `reactCompiler` is **not** enabled in `next.config.ts`. |
| Frontend | Server components by default. Client components: `Navbar`, `CalendlyPopup`, `ContactInfoSection`, `NewsletterSignup`, `InsightsClient`, `ApplicationForm`, `GallerySlider`, `HeroCursorField`, `HeroTeamGrowth`, `ProductDashboardPreview`, `ServicesCTASection`, `error.tsx`. |
| Backend / API | Next.js route handlers: `/api/contact` (Nodemailer → Zoho SMTP), `/api/newsletter` (Mailchimp upsert), `/api/job-applications` (MongoDB + Google Drive, Cloudinary fallback, confirmation email), `/api/seo-audit` (proxies to `http://127.0.0.1:8000/seo-audit`, so it only works where that service runs locally; **no UI calls it**), `/api/google/auth` + `/api/google/callback` (developer utility to mint a Drive refresh token, publicly reachable). |
| CMS | **Sanity**: project `vqsz4nvb`, dataset `production`, API `2025-12-25`, CDN on (`src/sanity/client.ts`). Studio lives in `studio-throoout/`. Schemas: `post` (title, slug, author ref, date, category[], excerpt, image, content), `author` (name, role, image+alt, bio), `blockContent` (h2/h3/quote/lists/links/images with alt). Allowed categories: AI, Design, Engineering, Marketing, Teams. |
| External CRM | Careers roles come from `${CRM_PUBLIC_API_BASE_URL}/api/jobs`, defaulting to `https://crm.throoout.com` (currently not deployed; see §0). `data/internships.ts` is used only as a TypeScript type. |
| Database | MongoDB via Mongoose (`lib/mongoose.ts`, `models/JobApplication.ts`: jobTitle, name, email, phone, coverLetter, resumeUrl, resumeFileName, referralSource, status). Used only for job applications. |
| Routing | File-based App Router (full inventory in §22). Redirects in `next.config.ts` and via `permanentRedirect()` in two page files. |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`, `@theme inline` tokens in `app/globals.css`), plus a legacy `tailwind.config.js` holding the same tokens and a v3-style safelist. Design tokens: `canvas`, `ink`, `hairline`, `primary` (`#0084d1` in the working tree, `#2563eb` live), `dark-*`, and an older `brand`/`accent` set. |
| Component library | None (no shadcn, MUI or similar). Custom components plus **react-icons** (Feather set). Animation: **motion** v13 (used only in `ProductDashboardPreview`) plus CSS keyframes. |
| Fonts | `next/font/google`: Inter (sans), JetBrains Mono (mono), `display: swap`. |
| Images | `next/image` everywhere except the email templates and the Meta Pixel noscript. Remote pattern allowed: `cdn.sanity.io`. Static images in `/public/images`. OG images generated with `next/og` (`app/opengraph-image.tsx`, `app/twitter-image.tsx`, `app/about/opengraph-image.tsx`, shared `lib/ogImage.tsx`). |
| SEO implementation | Metadata API (root `title.template` = `%s \| Throughout (PVT) LTD`), per-page `metadata` / `generateMetadata`, `app/sitemap.ts`, `app/insights/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, JSON-LD in the layout and pages. |
| Analytics | GTM `GTM-54NGRH8P`; GA4 `G-70B910BNDJ` loaded directly as well; Meta Pixel `1251107350497461`; Facebook domain verification meta tag. Helpers in `lib/analytics.ts`. |
| Forms | Contact (`ContactInfoSection`), newsletter (`NewsletterSignup`), job application (`ApplicationForm`). |
| Email / newsletter | Zoho SMTP via Nodemailer (`SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`); Mailchimp (`MAILCHIMP_API_KEY`, `MAILCHIMP_LIST_ID`). |
| Booking | Calendly popup `https://calendly.com/throughoutwithyou/30min`, loaded on demand. |
| Deployment | No `vercel.json`. README and the `.gitignore` `.vercel` entry suggest Vercel. Cache headers: 1-year immutable on `/_next/static`, `/_next/image` and **`/images/*`** (non-hashed paths, so replacing a file keeps the old one cached). Hosting provider and production env vars: **NOT FOUND / NEEDS INPUT**. |
| Sitemap | `app/sitemap.ts` (static pages + Sanity slugs) and a second `app/insights/sitemap.ts` (posts only, at `/insights/sitemap.xml`, not referenced in robots, duplicates entries). |
| robots.txt | `app/robots.ts`: allow `/`; disallow `/api/`, `/_next/`, `/admin/`. Explicit allow for GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, YouBot, `Googlebot-Extended` (the real token is `Google-Extended`), cohere-ai. |
| Structured data | See §10. |
| i18n / localisation | None. `<html lang="en">`, OG locale `en_US`. No hreflang, no translated routes. |
| Unused code | `contexts/CalendlyContext.tsx`, `components/ui/Button.tsx` (referenced only inside a commented-out block), `data/portfolio.ts` (no importer in the working tree), `trackCTAClick`, `trackServiceView`, `trackGA4PageView`. |
| Root clutter | `menu` (founder's navigation brainstorm, tracked in git), `Design System Analysis: Linear.md`, `TRUEAUTO-WEBSITE-DISCOVERY.md`, `tsconfig.tsbuildinfo`, the service-account JSON. |

**Key dependencies by concern**

| Concern | Packages |
|---|---|
| SEO / metadata / schema | `next` (Metadata API, `next/og`), hand-written JSON-LD |
| Analytics | none (inline GTM/GA4/Pixel scripts) |
| Forms / email | `nodemailer`, Mailchimp REST via `fetch` |
| Uploads / storage | `googleapis`, `cloudinary`, `mongoose` |
| Content / blog | `@sanity/client`, `@sanity/image-url` (installed, not used in app code), `@portabletext/react` |
| Images / performance | `next/image`, `next/font` |
| Animation | `motion`, CSS keyframes |

---

## 3. Complete Sitemap

| URL / Route | Page Name | Page Type | Purpose | Indexed? | SEO Metadata? | Status |
|---|---|---|---|---|---|---|
| `/` | Home | Landing | Dedicated-teams positioning, products, FAQ | Yes | Full (title, desc, canonical, OG, Twitter, FAQ schema) | Live |
| `/about` | About | Company | Company, principles, team | Yes | Full + generated OG image | Live; thin |
| `/contact` | Contact | Conversion | Calendly + form + email/WhatsApp | Yes | Full (via `contact/layout.tsx`); OG image 404 **(live)** | Live |
| `/engineering` | Engineering | Service | Engineering capabilities | Yes | Title/desc/canonical/OG text; **no OG image (live)** | Live; template page |
| `/design` | Design | Service | Design capabilities | Yes | Same as Engineering | Live; template page |
| `/digital-marketing` | Digital Marketing | Service | Marketing capabilities | Yes | Same as Engineering | Live; template page |
| `/dedicated-teams` | Dedicated Teams | Service / offer | Offshore team offer | Yes | Title/desc/canonical/OG text; **no OG image (live)** | Live |
| `/case-studies` | Case Studies index | Hub | Lists 5 case studies | **No** (`noindex, follow`) | Title/desc; canonical inherited = homepage | Live; **orphan** (only linked from footer "Work" in the working tree) |
| `/case-studies/website-performance-optimization` | Case study | Case study | Anonymous performance project | Yes (in sitemap) | Title/desc only; **canonical = homepage (live)** | Live; unverified claims |
| `/case-studies/ai-seo-growth` | Case study | Case study | Anonymous AI SEO project | Yes | Same | Same |
| `/case-studies/shopify-store-conversion` | Case study | Case study | Anonymous Shopify CRO | Yes | Same | Same |
| `/case-studies/workflow-automation-system` | Case study | Case study | Anonymous automation | Yes | Same | Same |
| `/case-studies/mvp-product-launch` | Case study | Case study | Anonymous MVP build | Yes | Same | Same |
| `/insights` | Insights | Blog index | Search, category filter, client-side pagination (7/page) | Yes | Canonical (relative), OG image 404 **(live)** | Live |
| `/insights/[slug]` | Article | Dynamic (Sanity) | 8 published posts (§9) | Yes | generateMetadata, canonical, OG article | Live; **unknown slugs return 200** "Insight not found" (soft 404, **live**) |
| `/careers` | Careers | Recruiting | Open roles from CRM | Yes | Full; no OG image (live) | Live; **shows "No roles open right now" (live)** |
| `/careers/[slug]` | Role detail | Dynamic (CRM) | Role + application form + JobPosting schema | Yes when roles exist | generateMetadata, canonical | Currently unreachable (no roles) |
| `/privacy-policy` | Terms & Privacy Policy | Legal | Combined privacy + terms | Yes | Title/desc/canonical | Live; last updated 25 Nov 2025 |
| `/terms-of-service` | — | Redirect | 308 → `/privacy-policy#terms-of-service` | — | — | Live (verified) |
| `/agency-partners` | — | Redirect | 308 → `/dedicated-teams` | — | — | Live (verified); `llms.txt` still describes an "Agency Partner Programme" here |
| `/portfolio` | Portfolio | Work | **Live:** page shows ScaleLabz/Ado Coffee carousel. **Working tree:** page deleted, redirect to `/#featured-work` (dead anchor) | Live: yes, in live sitemap; canonical = homepage | Live: title/desc/OG | **Conflict:** see §0 #6 |
| `/services`, `/services/*` | — | Redirect | → `/engineering` (permanent / temporary) | — | — | Legacy |
| `/internships`, `/internships/*` | — | Redirect | → `/careers`, `/careers/*` | — | — | Legacy |
| `/sitemap.xml` | — | Technical | Main sitemap | — | — | Live (still lists `/portfolio`) |
| `/insights/sitemap.xml` | — | Technical | Duplicate post sitemap | — | — | Not referenced anywhere |
| `/robots.txt`, `/llms.txt` | — | Technical | Crawler and AI-assistant guidance | — | — | `llms.txt` is outdated (§10) |
| `/opengraph-image`, `/twitter-image`, `/about/opengraph-image` | — | Generated images | Social previews | — | — | Working |
| `/api/*` | — | API | contact, newsletter, job-applications, seo-audit, google/auth, google/callback | Disallowed | — | `seo-audit` is non-functional in production unless a local service runs; `google/*` is a dev utility left public |
| 404 / error | Not found / Error | System | `app/not-found.tsx`, `app/error.tsx` | — | — | Exist |

**Flags**

- **Orphan pages:** `/case-studies` and the five detail pages are not in the main nav. In the working tree they're linked only from the footer "Work". The live footer links to `/#featured-work`. `/privacy-policy` is linked only from the footer.
- **Duplicate:** `/insights/sitemap.xml` duplicates the main sitemap's post entries. `/privacy-policy` doubles as Terms.
- **Outdated:** `llms.txt` (mentions the Agency Partner Programme, Portfolio, "digital growth studio"); `site.webmanifest` (lists 46 "icons", including blog thumbnails, tech logos and deleted files); root metadata keywords; `/about` OG image text ("Your Trusted Software Development Partner… Mission, vision" — the page has no mission/vision section).
- **Thin:** `/about`, and the three service pages (one shared template, ~6 capability cards, no proof, no technologies).
- **Unfinished / placeholder:** all case studies (anonymous clients, coded mock charts, `app.startup-mvp.com` mock URL); `/api/seo-audit` (no UI).
- **Should possibly not be indexed:** the case-study detail pages are indexable and in the sitemap while their index page is `noindex` (inconsistent intent); the "Insight not found" soft-404 page.

---

## 4. Homepage Breakdown

Order as rendered in the working tree (`app/page.tsx` → `components/home/HomepageRedesign.tsx`). The live homepage is identical except that the **"Life at Throughout"** gallery is not live yet. **(live:** headings verified.)

### 4.0 Header / navigation (`components/Navbar.tsx`)
- **Logo:** `/images/logo.png` → `/`
- **Links:** Engineering (`/engineering`), Design (`/design`), Marketing (`/digital-marketing`), Dedicated Teams (`/dedicated-teams`)
- **CTA:** "Book a Free Consultation" → Calendly popup
- **Mobile:** hamburger opens a panel with the same four links and the same CTA; Escape closes it.
- **Not in nav:** About, Case Studies/Work, Insights, Careers, Contact, Products.
- **Purpose:** route to service pages and to booking.

### 4.1 Hero
- **Eyebrow:** "Dedicated digital teams" (**present in code but hidden** with the `hidden` class)
- **Visual:** `HeroTeamGrowth`, round photos of Insaf Inhaam, Bavaram Karunaaharan, Aysha Shahani, Janith Viranga, Amrith Shylendra appearing one by one (2 → 5, every 1.6s; static with reduced motion). `HeroCursorField`: a soft glow following the pointer (desktop, fine pointer only).
- **Heading (H1):** "The right team to build, launch and scale your digital product."
- **Body:** "Throughout assembles dedicated engineering, design, data, AI, DevOps, QA, and marketing expertise for startups, agencies, and product companies without a drawn-out hiring cycle."
- **CTAs:** "Book a Free Consultation" (Calendly); "Explore engagement models" (`#engagement-models`)
- **Purpose:** state the offer and audience; push to booking.

### 4.2 Engagement models (`#engagement-models`)
- **Eyebrow:** "Choose the right model"
- **Heading:** "One partner. Two clear ways to work."
- **Body:** "Choose based on whether you need a defined outcome now or an embedded team for the long term."
- **Card 1 (dark):** label "For a project or service"; H3 "Dedicated services"; "A focused team owns a defined product, platform, campaign, or specialist workstream from planning through delivery."
  - "A clear scope, outcome, and delivery rhythm"
  - "The capabilities your project actually needs"
  - "Direct communication with the people doing the work"
  - Link: "Explore capabilities" → `#capabilities`
- **Card 2 (light blue):** label "For long-term capacity"; H3 "Dedicated offshore teams"; "Build a stable, managed team that integrates with your company, tools, rituals, and roadmap without building the hiring operation alone."
  - "Roles matched to your roadmap and ways of working"
  - "A team designed for continuity and knowledge retention"
  - "Ongoing support for team formation and delivery"
  - Link: "Build your team" → `/contact?model=offshore-team` (**the contact page ignores the `model` parameter**)
- **Purpose:** explain the two engagement models.

### 4.3 Capabilities (`#capabilities`)
- **Eyebrow:** "Capabilities"
- **Heading:** "Specialists who work as one delivery team."
- **Body:** "Bring in one capability or combine several around a product, platform, or growth objective."
- **Cards** (icon, title, copy, "Learn more"):
  1. Software engineering — "Web, mobile, platform, API, and product development built for maintainability." → `/engineering`
  2. Product & UI/UX design — "Research, product strategy, interfaces, design systems, and conversion-focused experiences." → `/design`
  3. AI development — "Useful AI features, workflow automation, agents, and integrations grounded in your operations." → `/engineering`
  4. Data engineering — "Reliable pipelines, data platforms, integrations, and reporting foundations." → `/engineering`
  5. Quality assurance — "Manual and automated testing embedded into delivery, not left until launch." → `/engineering`
  6. Cloud & DevOps — "Infrastructure, deployment automation, observability, and cloud optimisation." → `/engineering`
  7. Digital marketing — "SEO, paid acquisition, content, and campaigns connected to commercial outcomes." → `/digital-marketing`
- **Purpose:** the service menu. Five of seven cards land on the same generic `/engineering` page.

### 4.4 Products by Throughout
- **Eyebrow:** "Products by Throughout"
- **Heading:** "We don't just build for clients. We build our own."
- **Body:** "The same product thinking, engineering discipline, and attention to detail we bring to every partnership. Tested in software we own, operate, and keep improving."
- **Cards** (each opens the product site in a new tab, link text "Explore {name}"):
  - **Checkout** — badge "Point of sale" — "An offline-first POS that brings sales, inventory, customers, purchasing, and reporting into one beautifully simple system." → `https://checkout.throughout.io/`
  - **Rankout** — badge "Search visibility" — "One platform to research, automate, implement, and measure SEO, AEO, and GEO, with every AI-drafted change under your control." → `https://rankout.app/`
  - **Comflo** — badge "Commerce operations" — "A connected workspace for customer conversations, orders, channels, and retention, built for growing ecommerce businesses." → `https://comflo.app/`
- **Visuals:** coded, animated mock dashboards (`ProductDashboardPreview`), not screenshots. Sample data shown:
  - Checkout: "Sales LKR 84k", "Orders 128", "Stock 936", "Current sale · 3 items"
  - Rankout: "Search visibility" counting up to 82.4%
  - Comflo: customers "Nadeesha M. — Order confirmed", "Kamal S. — Awaiting reply", "Sachini R. — New message"
- **Purpose:** engineering credibility through owned products.

### 4.5 Why Throughout
- **Eyebrow:** "Why Throughout"
- **Heading:** "Built for teams that cannot compromise on delivery."
- **Body:** "The goal is not simply to fill seats. It is to form a capable team that can understand the problem, make sound decisions, and keep work moving."
- **Items:**
  - **Technical depth:** "Engineering is a core capability, with design, data, QA, DevOps, AI, and growth disciplines working alongside it."
  - **Talent matched to the work:** "Team shape starts with your roadmap, technical environment, and collaboration needs, not a generic bench."
  - **Faster formation:** "A focused selection and onboarding process helps reduce the operational work between identifying a need and starting delivery."
  - **Visible delivery:** "Clear ownership, direct communication, and regular review points keep decisions and progress easy to follow."
- **Purpose:** differentiation (claims only, no evidence).

### 4.6 Life at Throughout (working tree only; **not live**)
- **Eyebrow:** "Life at Throughout"
- **Heading:** "Where the work happens, and gets recognised."
- **Body:** "From late nights shipping client work to BestWeb.LK 2026 wins for projects like bavaram.lk, a look behind the delivery."
- **Visual:** horizontal photo slider (8 slides, left/right buttons). Alt texts:
  1. "Throughout engineers pairing on a build from the studio couch"
  2. "A multi-monitor workspace mid-project at Throughout"
  3. "Building Rankout from a coffee shop…" (**file missing**)
  4. "A Throughout team member holding two BestWeb.LK 2026 awards"
  5. "Two Throughout team members together with their BestWeb.LK 2026 awards"
  6. "BestWeb.LK 2026 Winner award for Best Mobile User Experience, awarded to Throughout"
  7. "BestWeb.LK 2026 Bronze Winner award for Best Personal Website, awarded to Throughout"
  8. "Close-up of the BestWeb.LK 2026 Winner award held by a Throughout team member"
- **Purpose:** culture and award proof.

### 4.7 How it works (dark)
- **Eyebrow:** "How it works"
- **Heading:** "From need to working team."
- **Steps:**
  - 01 **Align**: "We clarify the outcome, existing team, constraints, required roles, and the best engagement model."
  - 02 **Assemble**: "We shape the team, confirm responsibilities, and align the delivery approach with your workflow."
  - 03 **Deliver & improve**: "The team starts with clear priorities, visible progress, regular reviews, and room to adapt."

### 4.8 FAQ (`ServiceFAQ`; FAQPage schema emitted by `app/page.tsx`)
- **Eyebrow:** "Frequently asked questions"
- **Heading:** "Before we start."
- **Q:** "What is the difference between a dedicated project team and an offshore team?" **A:** "A dedicated project team delivers a defined service or outcome with a clear scope. A dedicated offshore team is built for an ongoing need and works as a long-term extension of your company."
- **Q:** "Can Throughout support an existing internal or agency team?" **A:** "Yes. Throughout can own a complete workstream or add engineering, design, data, QA, DevOps, AI, or marketing capability to an existing team."
- **Q:** "What types of companies does Throughout work with?" **A:** "Throughout works with startup founders, digital agencies, product companies, and businesses that need a dependable delivery partner or a long-term offshore team."
- **Q:** "How does an engagement begin?" **A:** "It begins with a free consultation to understand the goal, required capabilities, current constraints, and the most suitable engagement model. Throughout then recommends a practical team and next step."

### 4.9 Final CTA
- **Eyebrow:** "Start with the right conversation"
- **Heading:** "Tell us what you need to build or the team you need to build it."
- **Body:** "We will help you define a practical next step, whether that is a focused project team or a long-term offshore team."
- **CTA:** "Book a Free Consultation" (Calendly)
- **Visual:** floating avatars of Insaf, Bavaram, Janith and Amrith (Aysha is not included here); alt "{Name}, Throughout team member".

### 4.10 Footer (`components/Footer.tsx`)
- **Newsletter strip:** H3 "Sign up to our newsletter"; email field with placeholder "jason@gmail.com"; arrow submit → Mailchimp.
- **Brand column:** logo; "Dedicated engineering, design, data, AI, DevOps, QA, and marketing teams for ambitious digital products."; LinkedIn, Facebook, Instagram icons.
- **Resources:** Home, About Us, Work (`/case-studies` in the working tree), Blog (`/insights`), Careers, Contact Us.
- **Services:** Dedicated Teams, Digital Marketing, Engineering, Design.
- **Products:** Comflo, Rankout (**Checkout missing**).
- **Get in touch:**
  - `info@throughout.io`
  - WhatsApp "+94 070 7007 992" (**broken link**, and a different number format from the contact page's "+94 70 700 7992")
  - "Available worldwide"
  - Button "Book a free consultation" → `/contact` (not Calendly, unlike every other "Book a Free Consultation")
- **Bottom bar:** "© {year} Throughout (PVT) LTD. All rights reserved."; "TERMS & PRIVACY POLICY" → `/privacy-policy`.

---

## 5. Services

All three service pages render one shared template (`components/service/UnifiedServicePage.tsx`). Every one has the same structure:

- Hero: eyebrow, H1, intro, a Calendly CTA, and "Explore capabilities"
- A 3-up "advantages" strip
- Six capability cards
- "How we work: A clear path from brief to delivery." (3 steps)
- A "Need ongoing capacity?" band → `/dedicated-teams`
- FAQ (5 Qs, with FAQPage schema)
- Final CTA (Calendly)

None of them has technologies, case studies, testimonials, images, pricing, engagement terms, or links to related case studies or articles.

### /engineering
- **Meta title:** "Software Engineering Services" → rendered "Software Engineering Services | Throughout (PVT) LTD"
- **Meta description:** "Product engineering, web and mobile development, AI automation, data engineering, QA, cloud, and DevOps services from one dedicated team."
- **H1:** "Engineering that moves the product forward."
- **Hero copy:** "We design, build, modernise, and operate digital products across application, data, automation, and cloud layers without fragmented ownership." CTA: "Start an Engineering Project"
- **Advantages:**
  - Full-stack ownership: "One accountable team across interfaces, systems, infrastructure, and quality."
  - Built for change: "Architecture and delivery choices that support the product beyond its first release."
  - Visible progress: "Clear priorities, direct communication, and regular review points."
- **Capabilities** ("The engineering capability your roadmap needs."):
  - Web & mobile products
  - Platforms & APIs
  - AI & automation
  - Data engineering
  - Cloud & DevOps
  - Quality assurance
- **Process:** Understand → Shape → Build & improve
- **FAQ:**
  - What engineering services does Throughout offer?
  - Can you work with an existing codebase?
  - Can one team cover product and infrastructure?
  - Do you offer a dedicated engineering team?
  - How does an engineering engagement begin?
- **Final:** "Have a product or platform to build?"
- **Technologies:** none mentioned. **Schema:** Service (layout) + FAQPage. **Proof:** none. **OG image:** none **(live)**.

### /design
- **Meta title:** "Product & UI/UX Design Services"
- **Meta description:** "Product strategy, UX research, UI design, prototypes, design systems, web design, and brand identity for useful digital products."
- **H1:** "Design that makes the product easier to choose and use."
- **Hero copy:** "We turn product goals and user needs into clear interfaces, coherent systems, and build-ready experiences." CTA: "Start a Design Project"
- **Advantages:** Clearer decisions · Less friction · Ready to build
- **Capabilities** ("From product thinking to polished interface."):
  - Product strategy
  - UX research
  - UI/UX design
  - Prototypes
  - Design systems
  - Web & brand design
- **Process:** Discover → Explore → Refine & hand off
- **FAQ:**
  - What design services…
  - Do you design brand identities or only digital products?
  - Are the files ready for engineering?
  - Can Throughout design and build the product?
  - How does a design engagement begin?
- **Final:** "Ready to make the experience clearer?"
- **Tools / technologies, proof, images:** none.

### /digital-marketing
- **Meta title:** "Digital Marketing & SEO Services"
- **Meta description:** "SEO, content, paid media, lifecycle marketing, analytics, and conversion optimisation connected to design and engineering delivery."
- **H1:** "Marketing connected to the product and the numbers."
- **Hero copy:** "We combine strategy, creative, analytics, and technical execution to help the right audience discover, understand, and act on your offer." CTA: "Plan Your Growth Strategy"
- **Advantages:** Commercial focus · Connected execution · Useful measurement
- **Capabilities** ("A connected system for demand and conversion."):
  - SEO
  - Content strategy
  - Paid media (Google and Meta)
  - Conversion optimisation
  - Lifecycle marketing
  - Analytics & reporting
- **Process:** Diagnose → Prioritise → Launch & learn
- **FAQ:** 5 Qs (services, paid + organic, measurement, landing pages and tracking, how it begins)
- **Final:** "Ready for a clearer growth plan?"
- **Proof:** none. GEO/AEO is not mentioned here, although Rankout and four blog posts cover it.

### Services mentioned elsewhere without a dedicated page
| Service | Where mentioned | Dedicated page? |
|---|---|---|
| AI development / automation / agents | Homepage card, Engineering card, schema "AI Automation", 2 case studies, blog | No (homepage card links to generic `/engineering`) |
| Data engineering | Homepage, Engineering | No |
| Quality assurance | Homepage, Engineering | No |
| Cloud & DevOps | Homepage, Engineering, schema | No |
| Shopify development | Root keywords, schema offer "Shopify Development", Shopify case study, `llms.txt` | No |
| WordPress / CMS development | `llms.txt`, blog links to old `throoout.com/services/wordpress-development` | No |
| Brand identity / logo design | Schema offers, Design FAQ, keywords | No |
| Social media management / creatives, email marketing | Schema offers | No |
| Performance optimisation | Case study | No |
| GEO / AEO / AI search visibility | Rankout, 4 blog posts | No |
| MVP development ("MVP Studio") | `menu` file, MVP case study, blog post | No (deleted `mvp-studio` images suggest a removed page) |
| Agency partner / white-label programme | `llms.txt` | No (redirects to `/dedicated-teams`) |
| Free SEO audit tool | `menu` file, `/api/seo-audit` | No UI |

---

## 6. Dedicated Teams

### Current messaging (`/dedicated-teams`)
- **Meta title:** "Dedicated Offshore Development Teams | Throughout (PVT) LTD"
- **Description:** "Build a dedicated offshore engineering, design, data, QA, DevOps, AI, or marketing team with Throughout. A long-term team shaped around your roadmap."
- **Eyebrow:** "Dedicated offshore teams". **H1:** "Build a team that works like part of yours."
- **Hero:** "Throughout assembles long-term engineering, design, data, QA, DevOps, AI, and marketing teams around your roadmap, technical environment, and working rhythm." CTAs: "Build Your Team" (Calendly), "See how it works" (`#how-it-works`).
- **"Teams we support":** "Dedicated technical capability in action." / "Long-term product and delivery support shaped around each company's work."
  - **CodeMorphs** (logo; "Creative + tech studio"; "Dedicated technical delivery support."; → codemorphs.com)
  - **Comflo** (logo; "Commerce operations product"; "Dedicated product engineering support."; → comflo.app)
- **"Built around the need":** "The capability you need, without building the hiring operation alone." Tiles: Engineering · Product design · Data & DevOps · QA, AI & marketing.
- **How it works:** "From an open role to an integrated team."
  - 01 Define: "We clarify the roadmap, roles, skills, seniority, and collaboration needs."
  - 02 Assemble: "We shape the team and align responsibilities, tools, and delivery expectations."
  - 03 Integrate: "Your team joins the working rhythm with clear ownership, reviews, and ongoing support."
- **"Designed for continuity":** "More than additional capacity." plus 4 bullets: roles matched to roadmap; direct collaboration; stable team for long-term knowledge; clear ownership and visible rhythm.
- **Final:** "Ready to build your dedicated team?" → Calendly.
- **Elsewhere:**
  - Homepage engagement-model card and FAQ (§4)
  - Service pages' "Need ongoing capacity?" band
  - Service schema "Dedicated Offshore Teams", audience "Startups, product companies, digital agencies, and growing businesses"
  - Homepage FAQ: "Can Throughout support an existing internal or agency team? Yes…"
  - `llms.txt` "Agency Partner Programme: a dedicated, revenue-shared engineering team… full transparency on costs, timesheets, and profit split" (no matching page; the route redirects)

### Proof that currently exists
| Proof type | What exists |
|---|---|
| Clients | CodeMorphs (logo + link). Comflo is listed as a supported team, but the homepage presents Comflo as **Throughout's own product**. This contradiction is unresolved. |
| Examples / results | None. No description of what the CodeMorphs or Comflo teams do, how many people, or for how long. |
| Team | 5 named people on `/about` (2 co-founders, 2 engineers, 1 sales). No bench size, seniority or skills. |
| Engagement process | 3-step process (above). No onboarding timeline, trial period, replacement policy or reporting cadence. |
| Technologies | None on this page. |
| Testimonials / case studies | None linked. |
| Pricing / models | None (no hourly, monthly or per-role information). |

**Staff augmentation, "extended team" and agency-partnership wording** exists only in the homepage FAQ ("add … capability to an existing team") and `llms.txt`. The words "staff augmentation", "white-label", "timezone" and "SLA" do not appear on any page.

---

## 7. Products

| Product | Website | How Throughout Describes It | Features Mentioned | Technology Mentioned | Proof Shown | Links |
|---|---|---|---|---|---|---|
| **Checkout** | `https://checkout.throughout.io/` | Homepage: "An offline-first POS that brings sales, inventory, customers, purchasing, and reporting into one beautifully simple system." Badge "Point of sale". | Offline-first, sales, inventory, customers, purchasing, reporting | None | Animated mock dashboard (LKR 84k, 128 orders, 936 stock). No users, no screenshots. | Homepage card only. **Not in the footer or `llms.txt`.** |
| **Rankout** | `https://rankout.app/` | Homepage: "One platform to research, automate, implement, and measure SEO, AEO, and GEO, with every AI-drafted change under your control." Badge "Search visibility". `llms.txt`: "SEO/ranking product built by Throughout." | Research, automate, implement, measure; SEO/AEO/GEO; human approval of AI changes | None | Mock dashboard (82.4% visibility). Gallery alt "Building Rankout from a coffee shop" (missing image, not live). | Homepage, footer, `llms.txt` |
| **Comflo** | `https://comflo.app/` | Homepage: "A connected workspace for customer conversations, orders, channels, and retention, built for growing ecommerce businesses." Badge "Commerce operations". Dedicated Teams: "Commerce operations product… Dedicated product engineering support." `llms.txt`: "Communication/workflow product built by Throughout." | Conversations, orders, channels, retention | None | Mock inbox (3 sample customers). Logo on Dedicated Teams. | Homepage, footer, Dedicated Teams, `llms.txt` |
| Easy MCP AI | `github.com/throughout-org/easy-mcp-ai` | Two blog posts ("Building an MCP Server for WordPress…", "SEO and GEO Are Merging…with Easy MCP AI") | WordPress MCP server, SEO/GEO | WordPress, MCP | Blog only | Not on any site page |
| Invitation App, AI Expense Tracker, Throughout AI, Throughout MVP Studio | — | Only in the `menu` brainstorm file | — | — | — | **NOT FOUND** on the site. The MVP case study describes "an AI-powered expense tracking application" for an anonymous founder. Whether that is the AI Expense Tracker: **NEEDS INPUT**. |
| Free SEO auditor tool | — | `menu` file; `/api/seo-audit` proxies to a local service | — | — | — | No UI |

**Are products used as engineering proof?**
- Yes, explicitly. The homepage section is framed "We don't just build for clients. We build our own… Tested in software we own, operate, and keep improving."
- The proof is thin. There are no screenshots, no technology stacks, no usage or customer numbers, no launch dates, and no product case studies.
- There's no `SoftwareApplication`/`Product` schema.
- The service pages and Dedicated Teams page don't reference the products, except Comflo, which appears there as a client.

---

## 8. Portfolio & Case Studies

### Named work and clients
| Client / Product | URL | Industry | Work Done | Services | Technologies | Results / Metrics | Images | Testimonial | Case Study Exists? |
|---|---|---|---|---|---|---|---|---|---|
| ScaleLabz | scalelabz.com | Video editing / content agency (per `shortDescription`) | **Contradictory.** `shortDescription` describes the agency; `description` says "Complete redesign and development of an e-commerce platform"; challenge "10x traffic growth… legacy PHP system" | Web Development, E-Commerce (data) | Next.js, Node.js, PostgreSQL, Stripe, AWS (data) | "3x faster page load", "99.9% uptime", "40% increase in conversion", "500K+ daily users" (in data, **not rendered**) | `screencapture-scalelabz.png` (5.8 MB), `scalelabz.png` (unused) | No | No. **Live** `/portfolio` shows title, short description and screenshot. |
| Ado Coffee | adocoffee.ch | Swiss-market Sri Lankan coffee brand | **Contradictory.** Description "Custom AI chatbot powered by GPT-4 for enterprise customer support"; challenge "5000+ daily tickets" | AI/ML, Automation (data) | Python, GPT-4, LangChain, React, Firebase (data) | "60% reduction in support tickets", "85% CSAT", "$200K annual savings" (data, not rendered) | `screencapture-adocoffee-ch.png` (10.7 MB) | No | No. **Live** `/portfolio`. |
| Hostraspace | hostraspace.com | Hospitality/retail staff training SaaS | Gamified training platform: courses, timed quizzes, coins, badges, leaderboard, certificates | Web Development, SaaS | Next.js, React | Feature list only (no metrics) | `work-hostraspace.png`, `showcase/hostraspace.png`, `hostraspace-showcase-v1.png` (all untracked) | No | No. **Not shown anywhere** (added to data in the working tree; the Featured Work section that showed it was removed). |
| Artisans Touch | artisans-touch.com | Handcrafted jewellery e-commerce | Custom Shopify storefront | E-Commerce, Shopify | Shopify, Liquid | "150+ products" plus feature list | `work-artisans-touch.png` (untracked) | No | No. **Not shown anywhere.** |
| CodeMorphs | codemorphs.com | Creative + tech studio | "Dedicated technical delivery support" | Dedicated team | — | — | Logo | No | No |
| Comflo | comflo.app | Commerce operations | "Dedicated product engineering support" (also called an own product) | Dedicated team / product | — | — | Logo | No | No |
| bavaram.lk | bavaram.lk | Personal website (co-founder's name) | Mentioned as a BestWeb.LK 2026 award winner | — | — | Award (Bronze, Best Personal Website, per alt text) | Award photos (not live) | No | No |

### Anonymous case studies (`/case-studies/*`)
| Case study | Client label | Industry (index vs page) | Services | Technologies | Results claimed |
|---|---|---|---|---|---|
| Website Performance Optimization (featured) | "E-commerce fashion brand" | "E-Commerce / Content" vs "Retail / E-Commerce" | Performance Optimization, CDN Setup | Next.js, React, Cloudflare, PageSpeed Insights, Lighthouse, Vercel | PageSpeed 48 → 92; load 5.1s → 1.7s; CWV "Fully Passed"; +28% conversion |
| AI SEO Growth Experiment | "Niche Publishing Blog" | "Publishing / Blog" vs "Publishing / Content" | AI-Driven SEO, Content Strategy | OpenAI APIs, GSC, Ahrefs API, Python NLP, Next.js App Router, MDX | +72% organic traffic; 24 new top-10 keywords; 3.5x impressions (90 days) |
| Shopify Store Conversion Improvement | "Consumer Lifestyle Brand" | Retail / E-Commerce | Shopify Custom Theme, UX/UI Redesign | Shopify Liquid, Alpine.js, Tailwind, Shop Pay, Hotjar, GA4 | +38% conversion; −12% cart abandonment; 2x mobile speed |
| Workflow Automation System | "B2B Financial Services Firm" | B2B Services | Workflow Automation, API Integrations | n8n, Zapier, REST APIs, HubSpot, Slack API, Google Sheets API | −80% manual work (20+ hrs/week); lead response 24h → 5 min; "100% Error-Free" |
| SaaS MVP Development | "Early-stage Startup Founder" (AI expense tracker) | "Technology / Startup" vs "Technology / SaaS" | Software Development, UX/UI Design | Next.js 14, React, Tailwind, Supabase, Vercel, PostHog, Figma | Live in 4 weeks; 50+ beta users in week 1; roadmap "Fully Validated" |

- All visuals are coded mock-ups: score cards, bars, and a fake `app.startup-mvp.com` browser frame.
- No client names, logos, screenshots, quotes or dates.
- Every sidebar CTA goes to `/contact`. The index page's closing CTA ("Ready to Build Something Amazing?") adds "No Hidden Fees", "Flexible Engagement" and "24/7 Support", plus a broken WhatsApp link.

### Work found in the repository but not publicly showcased
- **Hostraspace** and **Artisans Touch** (data and images present, rendered nowhere in the working tree).
- **ScaleLabz** and **Ado Coffee** will disappear from the site when the working tree ships (the `/portfolio` page is deleted). `data/portfolio.ts` will then have no importer.
- **Unused images:** `portfolio/scalelabz.png`, `portfolio/hostraspace-showcase-v1.png`, `portfolio/showcase/hostraspace.png`, `team/khansa.png`.
- **Deleted in the working tree but in git history** (filenames only; contents not reviewed):
  - `images/industries/*.mp4` (audit, ecommerce, education, health, legal, property, travel)
  - `images/whatsApp/*` (store-chat, connectivity, ai-media, engineering)
  - `images/mvp-studio/step1–3`
  - `images/home/*` and `images/services/*` (services_ai, services_engineering, services_mvp, hero_dashboard, dedicated-team-hero)
  - `images/ai-generated/*`
  - `images/insights/insight-1…5`
  - These suggest earlier Industries, MVP Studio and WhatsApp/Comflo product sections.
- **`menu` file:** Invitation App, AI Expense Tracker, Throughout AI, MVP Studio.
- **Blog:** Easy MCP AI (GitHub).
- No MDX, JSON content directories or CMS project collections exist. Sanity only holds blog posts and authors.

---

## 9. Blog / Insights

Source: the public Sanity dataset, queried 1 Oct 2026. **8 published posts.**

| Article | URL | Date | Category | Primary Topic | Target Keyword (if obvious) | Internal Links | CTA | Status |
|---|---|---|---|---|---|---|---|---|
| Building an MCP Server for WordPress: What We Learned Shipping Easy MCP AI | `/insights/building-an-mcp-server-for-wordpress-what-we-learned-shipping-easy-mcp-ai` | 2026-08-14 | Engineering | MCP + WordPress, Easy MCP AI | "WordPress MCP server" | 0 (1 external: GitHub) | None in body | Published, no author |
| GEO vs SEO: What Actually Gets You Cited by ChatGPT in 2026 | `/insights/geo-vs-seo-what-actually-gets-you-cited-by-chatgpt-in-2026` | 2026-08-14 | AI | GEO vs SEO | "GEO vs SEO" | 0 | None | Published, no author |
| Why Your Business Doesn't Show Up in ChatGPT (Even Though You Rank #1 on Google) | `/insights/why-your-business-doesnt-show-up-in-chatgpt-even-though-you-rank-1-on-google` | 2026-08-14 | AI | AI visibility | "show up in ChatGPT" | 0 | None | Published, no author |
| SEO and GEO Are Merging — Here's How We're Doing It Differently with Easy MCP AI | `/insights/seo-and-geo-are-merging-here-s-how-we-re-doing-it-differently-with-easy-mcp-ai` | 2026-08-14 | AI | SEO + GEO, Easy MCP AI | "SEO and GEO" | 0 (GitHub external) | None | Published, no author |
| Your SaaS MVP, Built in 3 Weeks: Why Founders Choose Throoout | `/insights/your-saas-mvp-built-in-3-weeks-why-founders-choose-throoout` | 2026-03-11 | MVP, Product Launch (not in the schema's category list) | MVP development | "SaaS MVP" | 0 internal; links to **`www.throoout.com/contact`** (old domain) | Contact (old domain) | Published; brand misspelled "Throoout" in the title and slug; claims 3 weeks vs 4 weeks in the case study |
| AI Automation vs Hiring Staff: What Actually Costs Less for Small Businesses in 2026 | `/insights/ai-automation-vs-hiring-staff-…-2026` | 2026-01-18 | AI | Automation cost | "AI automation vs hiring" | 0 | None | Published, no author |
| Why 60% of Sri Lankan Small Businesses Are Invisible Online And Losing Customer Trust in 2026 | `/insights/why-60-of-sri-lankan-small-businesses-…-2026` | 2026-01-18 | Design | Sri Lankan SME web presence | "Sri Lanka small business website" | 0 internal; links to **`www.throoout.com/services/wordpress-development`** | Old-domain service page | Published, no author; local (not international) audience |
| GraphQL with Next.js + WordPress My Practical Guide | `/insights/graphql-with-next-js-wordpress-my-practical-guide` | 2025-12-25 | Engineering | Headless WordPress | "Next.js WordPress GraphQL" | 0 (7 external docs links) | None | Published, no author |

Body lengths range from about 2,800 to 7,300 characters of plain text, roughly 450–1,200 words.

**Architecture and features**

| Item | Finding |
|---|---|
| Architecture | Sanity → server fetch in `app/insights/page.tsx` and `app/insights/[slug]/page.tsx` (no `revalidate` set; uses Sanity CDN). Client-side search, category chips and pagination (7 per page) in `InsightsClient.tsx`. |
| Categories | Schema list: AI, Design, Engineering, Marketing, Teams. In use: AI (4), Engineering (2), Design (1), plus legacy "MVP" and "Product Launch". No category pages or URLs. |
| Authors | `author` schema exists (name, role, image, bio) and the UI renders it, but **no post has an author**. |
| Article schema | **None.** Only an `ImageObject` with a license pointing at `/privacy-policy#terms-of-service`. No `BlogPosting`/`Article`, no `BreadcrumbList`. |
| Open Graph | Article posts: `og:type=article`, `publishedTime`, Sanity image. Index: OG image `og-default.png` = **404 (live)**. |
| Canonical | Posts: absolute. Index: relative `/insights` (resolved via `metadataBase`). |
| Titles | Doubled branding, e.g. "GEO vs SEO… \| Throughout (PVT) LTD Insights \| Throughout (PVT) LTD" **(live)**. |
| Related articles | None. |
| Newsletter CTA | The `inline` newsletter variant exists but isn't used on the blog. Only the footer newsletter appears. |
| Article CTA | None, apart from a "Back to all insights" link. |
| Internal linking | No post links to any throughout.io page. Two link to the old `throoout.com` domain. |
| Sitemap inclusion | Yes: the main sitemap (with `lastModified = build time`, not the post date) and the duplicate `/insights/sitemap.xml`. |
| Missing post handling | Renders "Insight not found" with **HTTP 200** (soft 404, live). |
| Search | The WebSite schema's SearchAction targets `/insights?q=`, but the page **does not read `q`**, so the SearchAction is non-functional. |

---

## 10. SEO Implementation

### Metadata
| Item | Finding |
|---|---|
| Titles | Root default "Digital Marketing, Engineering & Design Agency \| Throughout (PVT) LTD" with template `%s \| Throughout (PVT) LTD`. The homepage overrides it to "Dedicated Development Teams & Digital Services \| Throughout". Doubled branding on: insights posts, careers roles ("… \| Careers \| Throughout (PVT) LTD \| Throughout (PVT) LTD"), About ("About Throughout \| … \| Throughout (PVT) LTD"), Contact. Brand is written as both "Throughout" and "Throughout (PVT) LTD". |
| Descriptions | Present on all main pages. The root description still says "full-stack digital growth studio". |
| Canonical | The root layout sets `alternates.canonical = https://www.throughout.io`, which **every page without its own canonical inherits**. Affected: all 5 case studies, `/case-studies`, live `/portfolio` (**verified live**: canonical = homepage). |
| Open Graph | Root OG image `/images/og-default.png` **does not exist (404 live)**. Generated `/opengraph-image` works for `/` and `/about`. `/contact` → `og-contact.png` 404. `/insights`, `/privacy-policy`, `/case-studies*` → `og-default.png` 404. `/engineering`, `/design`, `/digital-marketing`, `/dedicated-teams`, `/careers` → **no og:image** (their `openGraph` object replaces the parent's without images). |
| Twitter | `summary_large_image`. Root image `/images/twitter-default.png` missing. `creator: "@throughout_io"`, but no X/Twitter profile appears in `sameAs` or the footer (**NEEDS INPUT**: does the handle exist?). |
| Favicon / icons | `app/favicon.ico` exists. `apple-touch-icon.png` is referenced but **404 (live)**. `site.webmanifest` lists 46 "icons", including blog images, deleted files and tech logos. Its description is "Smart software solutions…". |
| Site name | "Throughout (PVT) LTD" |
| Robots directives | Global `index, follow`, `max-image-preview: large`. `/case-studies` index is `noindex, follow`. |
| Keywords | Root keywords target "digital marketing agency", "SEO agency Sri Lanka", "digital agency Colombo", "Shopify development" (agency/local framing; ignored by Google). |

### Technical SEO
| Item | Finding |
|---|---|
| Sitemap | `/sitemap.xml` contains 16 static URLs and 8 posts **(live)**. Includes `/portfolio` (live) and noindex-index-adjacent case studies. `lastModified` is always the build time. `/insights/sitemap.xml` is a duplicate. The working-tree sitemap removes `/portfolio`. |
| robots.txt | Correct basics. `Googlebot-Extended` should be `Google-Extended`. Only the main sitemap is declared. |
| HTTPS | `http://www` → 308 → `https://www` **(live)** |
| www / non-www | `https://throughout.io/` → **307 (temporary)** → `https://www.throughout.io/` **(live)**; one request timed out. Behind Cloudflare IPs. |
| Trailing slash | `/about/` → 308 → `/about` **(live)**. Consistent. |
| Redirects | Listed in §3. `/services/:path*` is non-permanent. `/portfolio` → `/#featured-work` in the working tree (broken target). |
| 404 | Custom `not-found.tsx` (no links beyond "Return home"). Soft 404 on unknown insight slugs. Unknown career slugs call `notFound()` (correct). |
| Duplicate URLs | Duplicate post sitemap; `/privacy-policy` covers Terms (with the `/terms-of-service` redirect). No query-param duplicates found. |
| Dynamic pages | `/insights/[slug]` (Sanity, no `generateStaticParams`, rendered on request); `/careers/[slug]` (CRM, ISR 60s). |
| Pagination | Client-side only on `/insights`. Older posts beyond page 1 aren't linked in HTML, but they are in the sitemap. |

### Content SEO
| Item | Finding |
|---|---|
| H1 usage | Exactly one H1 per page **(live check on 10 pages)**. |
| Heading hierarchy | Mostly sound. Service pages use H2 for the advantage-strip items (short labels). The footer uses H3s for column labels on every page. The case-study sidebar uses H2 for "The Results"/"Technology Used" before the main H3s. |
| Page intent | Home and Dedicated Teams target "dedicated development/offshore teams". Service pages target generic "software engineering services", "UI/UX design services", "digital marketing & SEO services", with no location, industry or proof modifiers. |
| Internal linking | Main nav covers 4 pages. Capability cards send 5 different capabilities to `/engineering`. No links from service pages to case studies, products or articles. The blog has zero internal links. |
| Anchor text | Generic: "Learn more", "Explore capabilities", "Visit website", "View role", "Read Full Case Study". |
| Thin content | `/about`, the three service pages (about 300–400 words each, shared template), case studies (short, anonymous). |
| Duplicated content | The three service pages share the template copy ("A clear path from brief to delivery.", "Need ongoing capacity?…", FAQ intro pattern). The homepage and Dedicated Teams repeat the same bullets and process. |
| Image alt text | All `next/image` uses have alt text. Gallery alts are descriptive. Team photos use the person's name. Sanity body images support alt (whether filled in: not checked). |
| Keyword targeting | Inconsistent between the dedicated-teams positioning (pages) and the agency/marketing positioning (root metadata, schema, `llms.txt`). |

### Structured data
| Schema type | Where |
|---|---|
| Organization | `app/layout.tsx` (every page): name, alternateName, logo, description ("full-stack digital growth studio"), foundingDate **2022**, areaServed Sri Lanka + Worldwide, contactPoint (Sales email; Support phone +94707007992), address Colombo LK, sameAs LinkedIn/Facebook/Instagram |
| WebSite (+ SearchAction) | `app/layout.tsx`. SearchAction `/insights?q=` is **non-functional**. |
| Service ×4 (+ OfferCatalog) | `app/layout.tsx` (every page): Digital Marketing, Engineering, Design, Dedicated Offshore Teams. Offers listed include Social Media Management, Email Marketing, Shopify Development, Brand Identity & Logo Design, Social Media Creatives (not all are on the pages). |
| FAQPage | Homepage (`app/page.tsx`); `/engineering`, `/design`, `/digital-marketing` (via `ServiceFAQ`) |
| JobPosting | `/careers` (list) and `/careers/[slug]`. Both set `datePosted` = today on every render. The detail page uses `employmentType: "Internship"` (non-standard value) and lacks `jobLocation`. |
| ImageObject | `/insights` and posts |
| LocalBusiness, Product / SoftwareApplication, Article / BlogPosting, BreadcrumbList, Person, Review | **NOT FOUND** |

**`public/llms.txt`** is outdated relative to the pages:
- "full-stack digital growth studio… founded in 2022… remote-first"
- Lists the Agency Partner Programme (redirected) and Portfolio (deleted in the working tree)
- Omits Checkout and Dedicated Teams

---

## 11. Conversion System

| CTA | Location | Destination | Tracking | Working? |
|---|---|---|---|---|
| Book a Free Consultation | Navbar (desktop + mobile), homepage hero + final CTA, service page heroes ("Start an Engineering Project", "Start a Design Project", "Plan Your Growth Strategy") + finals, Dedicated Teams ("Build Your Team" + final), Contact hero | Calendly popup `calendly.com/throughoutwithyou/30min` (falls back to opening the URL) | GA4 `calendly_open`; on booking GA4 `conversion` + `generate_lead`, Meta `Schedule` + `Lead`, Meta custom `CalendlyOpen` | Yes (code path). Booking completion was not tested. |
| Book Free Strategy Call | `/case-studies` closing section | Calendly | Same | Yes |
| Book a free consultation | Footer | `/contact` (not Calendly) | None | Yes, but inconsistent |
| Book a Free Consultation | About page final CTA | `/contact` | None | Yes, but inconsistent |
| Build your team | Homepage offshore card | `/contact?model=offshore-team` | None | Link works. **Parameter ignored.** |
| Start a Project | `/case-studies` hero | `/contact` | None | Yes |
| Plan Your SEO Strategy / Start Your MVP / Boost Your Sales / Book a Strategy Call / Build an Automation | Case-study sidebars | `/contact` | None | Yes |
| Contact form | `/contact#contact-form` | `POST /api/contact` → Zoho SMTP to `SMTP_USER` (reply-to = submitter) | GA4 `conversion` + `generate_lead`; Meta `Lead` + `Contact` | Yes if SMTP env is set (not verifiable). No CAPTCHA, honeypot or rate limit; unescaped HTML. |
| Email | Footer, Contact | `mailto:info@throughout.io` | None | Yes |
| WhatsApp | Contact page | `wa.me/94707007992` | None | Yes |
| WhatsApp | Footer (every page), `/case-studies` | `wa.me/707007992` | None | **Broken** (no country code) |
| Phone | — | No `tel:` link anywhere. The number appears only as WhatsApp. | — | — |
| Newsletter | Footer (every page) | `POST /api/newsletter` → Mailchimp upsert, tags `website` + source | GA4 `sign_up`; Meta **`Lead`** + custom `NewsletterSignup` | Yes if Mailchimp env is set. Firing Meta `Lead` for newsletter sign-ups mixes newsletter and sales leads. |
| Job application | `/careers/[slug]` | `POST /api/job-applications` (MongoDB, Drive/Cloudinary, confirmation email) | None | Unreachable while no roles load |
| Explore {Product} | Homepage product cards | External product sites | None | Yes |
| Request quote / pricing / calendar embed | — | **NOT FOUND** | — | — |

**Contact form fields:** Name* · Work email* · Phone (optional) · "What can we help with?"* (textarea). No company, budget, service, engagement model, timeline or country fields.

**Flow:** client `fetch` → API checks that name, email and message exist → `sendMail` → JSON `{success}`. The UI shows "Thanks. Your message has been sent." or an error message suggesting email. No auto-reply to the lead and no CRM write.

---

## 12. Social Proof

| Proof | Exact claim | Where |
|---|---|---|
| Client logos | CodeMorphs, Comflo | `/dedicated-teams` "Teams we support" |
| Testimonials | **None** | — |
| Awards | "BestWeb.LK 2026 wins for projects like bavaram.lk"; alts "Winner award for Best Mobile User Experience", "Bronze Winner award for Best Personal Website" | Homepage gallery. **Working tree only, not live.** |
| Certifications / partnerships | **None** (no Google Partner, Shopify Partner, AWS, ISO, Clutch, etc.) | — |
| Statistics | Case-study metrics (§8). Mock product numbers (LKR 84k, 82.4%). | Case studies, homepage mocks |
| Project numbers / years / team size / countries served | **None displayed.** `foundingDate: 2022` exists only in schema and `llms.txt`. | — |
| Service promises | "No Hidden Fees", "Flexible Engagement", "24/7 Support" | `/case-studies` closing section |
| Technologies | Case-study tech lists only. **40 tech logo SVGs** in `/public/images/tech` are unused. | — |
| Live portfolio | ScaleLabz, Ado Coffee titles and descriptions | Live `/portfolio` only |

---

## 13. Team & Founder Presence

| Person | Role (About page) | Photo | Bio | LinkedIn | Shown where |
|---|---|---|---|---|---|
| Bavaram Karunaaharan | CEO and Co-Founder | `team/bavaram.png` | None | None | About, homepage hero, final CTA |
| Insaf Inhaam | CTO and Co-Founder | `team/Insaf.png` | None | None | About, homepage hero, final CTA |
| Janith Viranga | Software Engineer | `team/janith.png` | None | None | About, homepage hero, final CTA |
| Aysha Shahani | Software Engineer | `team/aysha-bg.png` | None | None | About, homepage hero (not in the final CTA) |
| Amrith Shylendra | Sales Executive | `team/amrith.png` | None | None | About, homepage hero, final CTA |
| Khansa (surname unknown) | **Not displayed** | `team/khansa.png` (untracked, 1.7 MB) | — | — | Nowhere |

- **Company story:** two paragraphs on About ("Sri Lanka-based digital delivery company…"). No founding story, timeline, mission/vision (despite the About OG image text promising "Mission, vision"), office photos (apart from the not-yet-live gallery) or founder narrative.
- **Founder personal branding:** none linked. bavaram.lk appears only in the gallery copy.
- **Exists but not displayed:**
  - The Sanity `author` model (role, photo, bio) is unused by every post.
  - `khansa.png`.
  - Gallery team photos (not live).
  - Founding year 2022 (schema only).
  - The GitHub org `throughout-org` (blog only).

---

## 14. Visual Assets

| Category | Assets | Notes |
|---|---|---|
| Team photos | `team/*.png` (6) | 0.4–1.7 MB PNGs (Next optimises on delivery). `khansa.png` unused. Mixed backgrounds (`aysha-bg` name suggests a different treatment). |
| Project screenshots | `portfolio/screencapture-adocoffee-ch.png` (**10.7 MB**), `screencapture-scalelabz.png` (**5.8 MB**), `scalelabz.png` (1.2 MB, unused), `work-hostraspace.png`, `work-artisans-touch.png` (1.5 MB), `hostraspace-showcase-v1.png` (1.6 MB, unused), `showcase/hostraspace.png` (unused) | Full-page captures; very tall aspect ratios. |
| Product screenshots | **None.** Products use coded mock dashboards. | — |
| Gallery photos | `gallery/web/IMG_*.jpg` (7, 0.4–0.6 MB) | Untracked. One referenced file is missing. |
| Stock photos | `our-services/*` (4), including `colleagues-working-project-discussing-details.jpg` (**16.2 MB**) | All **unused**. Filenames with spaces. |
| Generated / illustrative graphics | Coded (OG image renderer, case-study mocks, `AntigravityParticles` blobs). `images/ai-generated/*` deleted in the working tree. | — |
| Icons | react-icons (Feather). `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` (create-next-app leftovers, unused) | — |
| Logos | `logo.png` (used), `logoWhite.png`, `singlelogo.png`, `singlelogo1.png` (unused on pages; `singlelogo.png` is in the manifest) | The footer inverts the colour logo with CSS instead of using `logoWhite.png`. |
| Client / partner logos | `logos/codemorphs-logo.png`, `logos/comflo-logo.png` (used); `comflo-logo-full.jpeg`, `comflo-logo-letter.jpeg`, `chatgpt.png`, `claude.png`, `cursor.png`, `lovable.jpeg` (unused) | — |
| Tech logos | `tech/*.svg` (40) | All unused on pages (listed as manifest "icons"). |
| Backgrounds | `ctabg.png` (**4.3 MB**, used as a CSS background in `ServicesCTASection`, unoptimised), `banner.png` (unused) | — |
| Blog images | Sanity CDN (one per post) | Fine |

- **Low quality:** not assessed visually. **NEEDS INPUT** if a visual review is wanted.
- **Oversized:** the 16.2 MB, 10.7 MB, 5.8 MB and 4.3 MB files above. `ctabg.png` bypasses `next/image`, so it ships at full size.
- **Unused:** about 60 files (full list in the audit command output; summarised above).
- **Missing but referenced:**
  - `/images/og-default.png`
  - `/images/twitter-default.png`
  - `/images/og-contact.png`
  - `/images/twitter-contact.png`
  - `/apple-touch-icon.png`
  - the gallery `980C3820…jpeg`
  - manifest `insights/insight-1…6.png`
- **Missing alt text:** none found in components.
- **Inconsistent aspect ratios:** portfolio full-page captures vs gallery 4:5 vs team 3:4.
- **Placeholders:** case-study visuals (explicit code comment "A stylized placeholder for an image representing performance"); newsletter placeholder "jason@gmail.com".

---

## 15. UI/UX Structure

| Area | Current state |
|---|---|
| Navigation | Fixed floating pill bar: logo, 4 links, Calendly CTA. No dropdowns, and no links to About, Work, Insights, Careers or Contact. Active state = filled primary pill. |
| Page hierarchy | Flat: Home → 4 service pages. Company pages reachable only from the footer. |
| Header | `max-w-[1600px]` with a `NavbarSpacer` of 80–104px. The homepage hero pulls itself up with matching negative margins. |
| Footer | Dark. Newsletter strip, 5 columns (brand, Resources, Services, Products, Get in touch), legal bar. |
| Typography | Inter + JetBrains Mono (mono eyebrows on the homepage). **Two visual systems coexist.** The homepage, footer and FAQ use the new tokens (`text-ink`, `font-semibold`, mono eyebrows, `primary`). About, Contact, Careers, service pages, Dedicated Teams, case studies and the blog use the older Tailwind palette (`slate-*`, `sky-600/700`, `font-extrabold`, sans uppercase eyebrows). Case-study sidebars use `blue-600`/`gray-*`. |
| Spacing | Sections typically `py-20 sm:py-28`, `px-4 sm:px-6 lg:px-8`. Consistent. |
| Containers | `max-w-7xl` (44 uses), `max-w-4xl` (FAQ and similar), navbar `1600px`. |
| Breakpoints | Tailwind defaults (sm/md/lg/xl). No custom breakpoints. |
| Cards | Rounded `2xl`/`3xl`/`[1.5rem]`, hairline borders, hover lift. Radii vary between sections. |
| Buttons | Mostly inline class strings. `components/ui/Button.tsx` exists but is unused. The primary colour varies: token `bg-primary` (home, nav) vs `bg-sky-600` (inner pages) vs `bg-slate-950` (some CTAs). |
| Forms | Contact (slate styling), newsletter (dark pill), application form. Labels are visible; required fields are marked with `*` (`aria-hidden`). |
| Mobile navigation | Dropdown panel. Not a focus trap; Escape closes it. The panel stays in the DOM (`invisible`) when closed. |
| Animations | Hero avatar growth, cursor glow, product count-ups (motion), floating CTA avatars, `animate-float` on case-study mocks, hover lifts. Most respect `prefers-reduced-motion`. |
| Interactions | Calendly popup, gallery scroll buttons, FAQ `<details>`, blog filters. |

**Consistency issues flagged:**
- Two design systems (above).
- "Book a Free Consultation" sometimes opens Calendly and sometimes goes to `/contact`.
- Two WhatsApp numbers and formats.
- The products list differs between the homepage (3) and the footer (2).
- Comflo is called both a product and a client.
- Case-study industry labels differ between the index and the detail pages.
- "Throughout" vs "Throughout (PVT) LTD" vs "Throoout" (blog).
- The footer column label "Resources" contains company pages.

---

## 16. Performance

| Area | Finding |
|---|---|
| LCP | The homepage H1 is text (good). Hero avatars are lazy `next/image` with no `priority`. The navbar logo has `priority`. On `/case-studies`, the hero is CSS blobs. |
| CLS | Fonts use `next/font` with swap (low risk). The navbar spacer has fixed heights. `HeroTeamGrowth` animates widths inside a fixed-height row. Calendly CSS is injected on click only. |
| INP | Light client JS. `HeroCursorField` uses rAF only on pointer move. `InsightsClient` filters in memory. |
| Images | `next/image` with `sizes` everywhere except `ctabg.png` (4.3 MB CSS background). The 1-year immutable cache on `/images/*` means a replaced image keeps its old cached copy. |
| Fonts | 2 Google families via `next/font` (self-hosted at build). |
| JS bundle | `motion` is loaded for one component. `react-icons` uses per-icon imports. No large UI libraries. |
| Third-party scripts | GTM (inline in `<head>`, blocking-order snippet but async load), GA4 gtag (`afterInteractive`, **loaded in addition to GTM**, which risks double counting if GTM also fires GA4: **NEEDS INPUT**, check the GTM container), Meta Pixel (`lazyOnload`), Calendly (on demand). |
| Animations | CSS keyframes + motion. Several infinite animations (`animate-float`, `cta-avatar-float`). |
| Lazy loading | Default `next/image` lazy loading. Calendly lazy. |
| Caching / rendering | Blog pages fetch Sanity on every request (no `revalidate`). Careers ISR 60s. Static pages are otherwise static. |
| Not measured | Real Core Web Vitals (no CrUX/Lighthouse run). **NEEDS INPUT** or a follow-up run. |

---

## 17. Analytics & Tracking

| Tool | Status | Detail |
|---|---|---|
| Google Tag Manager | Installed | `GTM-54NGRH8P`: head snippet + body noscript iframe. Container contents unknown (**NEEDS INPUT**). |
| Google Analytics 4 | Installed directly | `G-70B910BNDJ` via gtag, `send_page_view: true`, `cookie_flags: SameSite=None;Secure`. |
| Search Console verification | **NOT FOUND** in code (may be DNS-verified: **NEEDS INPUT**). |
| Meta Pixel | Installed | `1251107350497461`, `PageView` + noscript. Facebook domain verification meta present. |
| LinkedIn Insight Tag | **NOT FOUND** |
| Conversion events | `calendly_open`, Calendly booked (`conversion` with `send_to: G-…/calendly_booked`, `generate_lead`, Meta `Schedule` + `Lead`), contact form (`conversion` with `send_to: G-…/contact_form`, `generate_lead`, Meta `Lead` + `Contact`), newsletter (`sign_up`, Meta `Lead` + `NewsletterSignup`). The `send_to: "G-XXXX/label"` format is Google Ads-style and has no effect in GA4. |
| Custom events defined but never called | `trackCTAClick`, `trackServiceView`, `trackGA4PageView` |
| Form tracking | Contact and newsletter (on success only). Job applications are not tracked. |
| Consent | **No cookie banner or consent mode.** All tags fire before consent, which matters for EU/UK visitors. |
| Client-side route changes | GA4 relies on gtag defaults (history-change page views come from enhanced measurement, if enabled in GA4: **NEEDS INPUT**). |

---

## 18. International Client Readiness

| Topic | What the site says | Where |
|---|---|---|
| Countries served | "Available worldwide"; schema areaServed "Sri Lanka", "Worldwide"; OG image "A full-stack digital growth studio in Sri Lanka, working worldwide." | Footer, schema, OG |
| Worldwide availability | As above; `llms.txt` "remote-first" | — |
| Offshore teams | Yes, as a core offer (§6) | Home, Dedicated Teams |
| Timezone overlap | **NOT FOUND** | — |
| English communication | Schema `availableLanguage: English` only | Schema |
| International payments / currencies | **NOT FOUND** (the only currency is "LKR" in a product mock; privacy policy: "Payment processing is handled by third-party payment providers") | — |
| Contracts | Terms: "scope, deliverables, fees, and timelines… defined in the applicable proposal, contract, or statement of work" | `/privacy-policy#terms-of-service` |
| NDAs | Terms "Confidentiality" clause only; no NDA offer on sales pages | Terms |
| IP ownership | Terms: "Ownership and licence rights for custom client deliverables are governed by the applicable project agreement." | Terms |
| Security | Privacy: "reasonable technical and organisational safeguards". No security practices, compliance or certifications. | Privacy |
| Support | "24/7 Support" (unqualified) | `/case-studies` closing section |
| Engagement models | Dedicated services vs dedicated offshore teams; no pricing, minimums or terms | Home, Dedicated Teams |
| Legal jurisdiction | Sri Lanka law and courts | Terms |
| Privacy regimes (GDPR/UK GDPR/CCPA) | **NOT FOUND**; no cookie consent | — |
| Company registration number / address | "(PVT) LTD" and "Colombo" only; no registration number or street address | Schema |

---

## 19. Current Positioning

**Who does Throughout appear to serve?**
- Pages: "startups, agencies, and product companies" and "startup founders, digital agencies, product companies, and businesses that need a dependable delivery partner or a long-term offshore team".
- Metadata and blog: also Sri Lankan small businesses ("SEO agency Sri Lanka", "digital agency Colombo", the "60% of Sri Lankan small businesses" post).

**What does Throughout appear to sell?**
- Two engagement models: dedicated project/service teams and dedicated offshore teams.
- Covering software engineering, product/UI/UX design, AI development, data engineering, QA, cloud/DevOps and digital marketing.
- Plus three own SaaS products (Checkout, Rankout, Comflo) shown as credibility, not sold on this site.

**What makes Throughout different, according to the site?**
- "One partner. Two clear ways to work."
- Specialists "who work as one delivery team".
- "Technical depth", "Talent matched to the work… not a generic bench", "Faster formation", "Visible delivery", "direct communication with the people doing the work".
- "We don't just build for clients. We build our own."

**Strongest proof points currently visible**
1. Three live, owned products with their own domains.
2. A named, photographed team with founder titles.
3. (Not yet live) BestWeb.LK 2026 award photos.
4. CodeMorphs as a named dedicated-team client.
5. Eight blog posts with genuine technical topics (MCP server, GraphQL + WordPress, GEO).

**Claims made without supporting proof**
- All case-study metrics: +72% traffic, +38% conversion, 48 → 92 PageSpeed, 80% less manual work, "100% Error-Free", "Launched in 4 weeks", 50+ beta users. All anonymous.
- Portfolio data claims (500K+ daily users, $200K savings) that contradict the clients' own descriptions (in data; not currently rendered).
- "Faster formation", "without a drawn-out hiring cycle" (no timelines given).
- "24/7 Support", "No Hidden Fees".
- "Senior engineering, design, data, AI, DevOps, QA, and marketing expertise" (homepage OG description; the team shown is 2 founders, 2 engineers, 1 sales).
- Data engineering, QA and DevOps as disciplines (no examples, people or tools shown).
- "Available worldwide" (no international clients named).
- Comflo described as both an own product and a supported client.

---

## 20. Missing / Weak / Incomplete Areas

1. **Security and privacy:** committed GCP key; public CVs; unescaped email HTML; no form spam protection; public OAuth helper routes; no cookie consent.
2. **Broken items:** footer and case-studies WhatsApp link; missing OG/Twitter/apple-touch images; careers CRM host down; insight soft-404; SearchAction; `/contact?model=` ignored; `/portfolio` redirect target (working tree); missing gallery image; untracked gallery folder.
3. **Canonical bug:** pages without their own canonical point to the homepage (case studies, portfolio).
4. **Proof gap:** no testimonials, no named case studies, no product screenshots or stacks, no numbers about the company. Hostraspace and Artisans Touch are prepared but not shown.
5. **Positioning drift:** dedicated-teams pages vs agency/growth-studio metadata, schema, `llms.txt`, manifest, keywords, OG text; old `throoout.com` domain and "Throoout" spelling in the blog and CRM.
6. **Information architecture:** nav lacks Work, About, Insights and Contact; five capabilities share one page; no service sub-pages (AI, Shopify, CMS, MVP, GEO); case studies are orphaned and `noindex` at the index level.
7. **Blog:** no authors, no Article schema, no internal links, no CTAs, doubled titles, legacy categories, duplicate sitemap.
8. **Dedicated Teams offer:** no pricing or engagement terms, no timezone or communication details, no roles or seniority catalogue, no onboarding timeline, no client examples beyond two logos.
9. **Design consistency:** two visual systems; inconsistent primary CTA behaviour and colours.
10. **Assets:** about 60 unused files; 16 MB / 10.7 MB / 5.8 MB / 4.3 MB images; polluted manifest.
11. **Tracking:** GTM + direct GA4 overlap; newsletter counted as a Meta `Lead`; unused event helpers; no LinkedIn tag (relevant for B2B international).

---

## 21. NEEDS INPUT FROM INSaf

**Business and positioning**
1. Is "dedicated teams" the final primary positioning, or the three-pillar structure in the `menu` file (Throughout AI / MVP Studio / Engineering)?
2. Should local SME services (WordPress, Shopify, SEO for Sri Lankan businesses) stay visible, or move into the background for international buyers?
3. Is the Agency Partner Programme (revenue share, timesheets, profit split in `llms.txt`) still offered?
4. Is `throoout.com` an old brand or domain? Should blog links and the CRM point to throughout.io?

**Clients and proof**
5. Full list of completed projects and clients, and which can be named publicly (with written permission).
6. The real story behind ScaleLabz and Ado Coffee: what was actually built, with what stack, and with what results? (The current data contradicts itself.)
7. Hostraspace and Artisans Touch: confirm the work, stack, results, and permission to show them.
8. CodeMorphs: what the dedicated team does, team size, duration, and whether a quote or logo use is approved.
9. Comflo: own product, client, or both (e.g. a spin-off or a joint venture)?
10. Are the five anonymous case studies real projects? If so, can the client be named or verified, are the metrics measured, and what was the source and period?
11. Is the MVP case study (AI expense tracker) the "AI Expense Tracker" product listed in the `menu` file?
12. Testimonials (written or video), with name, title, company and photo permission.
13. Real project screenshots, and real product screenshots for Checkout, Rankout and Comflo.
14. Product facts: launch dates, users or customers, technology stacks, the team that built each.
15. Status of the Invitation App, AI Expense Tracker, Easy MCP AI and the free SEO audit tool. Should they appear on the site?

**Company and team**
16. Founding year (schema says 2022), registration number, registered address, team size (full-time and contractors).
17. Bios, LinkedIn URLs and photo approval for each team member; is Khansa a current team member, and in what role?
18. Founder story and the reason the company exists.
19. BestWeb.LK 2026 awards: exact award names, the project each was for (bavaram.lk and others?), and an official link.
20. Any certifications, partner statuses (Google, Meta, Shopify, AWS, Vercel), memberships or press.

**International sales**
21. Countries where you have had clients, and current international clients.
22. Working hours and timezone overlap offered (e.g. UK/EU/US/AU).
23. Engagement and pricing models (monthly per-role, fixed scope, retainers), minimum terms, trial periods.
24. Contracting: NDA on request? IP assignment default? Which jurisdiction do you contract under? Invoicing currencies and payment methods (USD, GBP, EUR, Wise, Payoneer…)?
25. Security and data practices you can state (access control, device policy, code ownership, GDPR handling).
26. Support model behind "24/7 Support". Is it real, and under what terms?

**Technical and access**
27. Hosting provider and production env vars (especially `CRM_PUBLIC_API_BASE_URL`). Should careers roles currently be open?
28. GTM container contents (does it also fire GA4 or the Pixel?), GA4 enhanced-measurement settings, Search Console access and verification method.
29. Does the `@throughout_io` X/Twitter account exist?
30. Should the working-tree changes (portfolio removal, gallery, colour change) ship together, and is the Featured Work removal final?

---

## 22. Complete Route Inventory

| # | Route | Source file | Rendering | In sitemap | Indexable | Notes |
|---|---|---|---|---|---|---|
| 1 | `/` | `app/page.tsx` | Static | Yes | Yes | FAQPage schema |
| 2 | `/about` | `app/about/page.tsx` | Static | Yes | Yes | Generated OG |
| 3 | `/contact` | `app/contact/page.tsx` + `layout.tsx` | Static | Yes | Yes | OG image 404 |
| 4 | `/engineering` | `app/engineering/page.tsx` | Static | Yes | Yes | No OG image |
| 5 | `/design` | `app/design/page.tsx` | Static | Yes | Yes | No OG image |
| 6 | `/digital-marketing` | `app/digital-marketing/page.tsx` | Static | Yes | Yes | No OG image |
| 7 | `/dedicated-teams` | `app/dedicated-teams/page.tsx` | Static | Yes | Yes | No OG image |
| 8 | `/case-studies` | `app/case-studies/page.tsx` | Static | No | **No** | Canonical = home |
| 9 | `/case-studies/website-performance-optimization` | page file | Static | Yes | Yes | Canonical = home |
| 10 | `/case-studies/ai-seo-growth` | page file | Static | Yes | Yes | Canonical = home |
| 11 | `/case-studies/shopify-store-conversion` | page file | Static | Yes | Yes | Canonical = home |
| 12 | `/case-studies/workflow-automation-system` | page file | Static | Yes | Yes | Canonical = home |
| 13 | `/case-studies/mvp-product-launch` | page file | Static | Yes | Yes | Canonical = home |
| 14 | `/insights` | `app/insights/page.tsx` | Dynamic (Sanity fetch) | Yes | Yes | OG 404 |
| 15 | `/insights/[slug]` ×8 | `app/insights/[slug]/page.tsx` | Dynamic | Yes | Yes | Soft 404 for unknown slugs |
| 16 | `/careers` | `app/careers/page.tsx` | ISR 60s | Yes | Yes | No roles (CRM down) |
| 17 | `/careers/[slug]` | `app/careers/[slug]/page.tsx` | ISR 60s | No | Yes | JobPosting |
| 18 | `/privacy-policy` | `app/privacy-policy/page.tsx` | Static | Yes | Yes | Also holds Terms |
| 19 | `/terms-of-service` | `app/terms-of-service/page.tsx` | 308 | No | — | → `/privacy-policy#terms-of-service` |
| 20 | `/agency-partners` | `app/agency-partners/page.tsx` | 308 | No | — | → `/dedicated-teams` |
| 21 | `/portfolio` | live: `app/portfolio/page.tsx` (deleted in working tree) | live 200 / WT redirect | Live yes / WT no | Live yes | WT redirect → `/#featured-work` (dead anchor) |
| 22 | `/services`, `/services/:path*` | `next.config.ts` | 308 / 307 | No | — | → `/engineering` |
| 23 | `/internships`, `/internships/:path*` | `next.config.ts` | 308 | No | — | → `/careers`, `/careers/:path*` |
| 24 | `/sitemap.xml` | `app/sitemap.ts` | Dynamic | — | — | — |
| 25 | `/insights/sitemap.xml` | `app/insights/sitemap.ts` | Dynamic | — | — | Duplicate, unreferenced |
| 26 | `/robots.txt` | `app/robots.ts` | Static | — | — | — |
| 27 | `/llms.txt` | `public/llms.txt` | Static file | — | — | Outdated |
| 28 | `/site.webmanifest` | `public/site.webmanifest` | Static file | — | — | Polluted icon list |
| 29 | `/opengraph-image`, `/twitter-image` | `app/*.tsx` | Edge | — | — | Working |
| 30 | `/about/opengraph-image` | `app/about/opengraph-image.tsx` | Edge | — | — | Text mentions "Mission, vision" |
| 31 | `/favicon.ico` | `app/favicon.ico` | Static | — | — | — |
| 32 | `/api/contact` | route.ts | POST | — | Disallowed | SMTP |
| 33 | `/api/newsletter` | route.ts | POST | — | Disallowed | Mailchimp |
| 34 | `/api/job-applications` | route.ts | POST/OPTIONS | — | Disallowed | MongoDB + Drive (public CVs) |
| 35 | `/api/seo-audit` | route.ts | POST | — | Disallowed | Proxies to localhost:8000; no UI |
| 36 | `/api/google/auth` | route.ts | GET | — | Disallowed | Dev OAuth helper, public |
| 37 | `/api/google/callback` | route.ts | GET | — | Disallowed | Returns refresh token to caller |
| 38 | 404 | `app/not-found.tsx` | — | — | — | — |
| 39 | Error boundary | `app/error.tsx` | — | — | — | — |

*End of discovery. No changes were made to code, content, configuration or deployment.*
