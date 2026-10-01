# TrueAuto / Throughout Website Discovery

**Repository reviewed:** `throughout-website`  
**Discovery date:** 30 September 2026  
**Scope:** repository-only discovery; no external research, redesign, code changes, refactoring, or deployment  
**Source of truth:** the checked-out repository

> **Critical identity discrepancy:** The supplied brief calls the business **TrueAuto / TrueAuto.io**, but the repository consistently identifies the business and production domain as **Throughout (PVT) LTD / Throughout / throughout.io**. No occurrence of “TrueAuto” or `trueauto.io` was found in the repository. Whether this repository is intended to become TrueAuto, whether TrueAuto is a rebrand, or whether the wrong repository was supplied is **NOT FOUND / NEEDS INPUT**.

## Executive summary

The repository describes Throughout as a Sri Lanka-based digital delivery company and “full-stack digital growth studio.” It sells two engagement models:

1. **Dedicated services/project teams** for a defined product, platform, campaign, or workstream.
2. **Dedicated offshore teams** that integrate with a client’s tools, rituals, roadmap, and day-to-day operation.

Its promoted disciplines are software engineering, product/UI/UX design, AI development and automation, data engineering, quality assurance, cloud/DevOps, and digital marketing. The stated audience is startup founders, digital agencies, product companies, and growing businesses. The site says it serves Sri Lanka and clients worldwide.

The repository also presents three owned products—Checkout, Rankout, and Comflo—four named portfolio projects, and five anonymized case-study pages. The named portfolio data for ScaleLabz and Ado Coffee contains serious internal contradictions between the brand description, project description, challenge, solution, technology stack, and claimed results. Those claims must not be reused without verification.

The current site has a strong technical foundation (Next.js App Router, TypeScript, Tailwind CSS, Sanity blog, metadata, sitemaps, structured data, GA4/GTM, Meta Pixel, forms, newsletter, Calendly, and career application handling), but its content architecture is inconsistent: named work is embedded only on the homepage; case studies are anonymous; some navigation omits important pages; global canonical metadata can resolve incorrectly; referenced social-preview files are missing; and several trust claims are unsupported or only casually mentioned.

---

# 1. Business understanding

## What the company does

Throughout is described as:

- A Sri Lanka-based digital delivery company.
- A full-stack digital growth studio combining engineering, design, data, AI, QA, DevOps, and marketing.
- A provider of focused project teams and long-term dedicated offshore teams.
- A builder/operator of its own software products as well as client software.

## Primary engagement models

### Dedicated services

A focused team owns a defined product, platform, campaign, or specialist workstream from planning through delivery. The promised characteristics are a clear scope/outcome/delivery rhythm, a team matched to the project, and direct communication with practitioners.

### Dedicated offshore teams

A stable, managed long-term team integrates into the client’s tools, working rhythm, roadmap, and technical environment. Roles may cover engineering, product design, data, DevOps, QA, AI, and marketing.

## Target customers

- Startup founders
- Digital agencies
- Product companies
- Growing businesses
- Companies with an existing internal or agency team that need added specialist capacity
- Companies needing either a defined delivery outcome or long-term offshore capacity

## Target industries

Industries explicitly evidenced by projects/assets/content:

- Ecommerce and retail
- Hospitality and staff training
- Coffee/consumer goods
- Jewellery
- Creative/content agencies
- Publishing/content sites
- B2B sales operations
- SaaS/startups
- Travel, health, audit, property, education, and legal appear as unused industry video assets only; service experience in those industries is **NOT FOUND / NEEDS INPUT**.

## Target markets and geography

- Base: Sri Lanka; schema specifies Colombo, Sri Lanka.
- Service area: “Sri Lanka” and “Worldwide.”
- Footer says “Available worldwide.”
- Ado Coffee is described as bringing Sri Lankan coffee to Switzerland.
- Other specific priority countries/regions: **NOT FOUND / NEEDS INPUT**.

## Problems the company says it solves

- Slow or difficult hiring for multidisciplinary digital teams.
- Lack of specialist capability inside existing teams.
- Need to launch, improve, or scale digital products.
- Need for maintainable web/mobile platforms and APIs.
- Operational manual work suitable for AI or workflow automation.
- Fragmented data, cloud, DevOps, and QA capability.
- Confusing product experiences and weak design/engineering handoff.
- Disconnected marketing, landing pages, tracking, and technical execution.
- Need for continuity, retained product context, visible ownership, and dependable delivery.

## Main value propositions

- One accountable multidisciplinary delivery partner.
- Teams shaped around the actual roadmap and technical environment.
- Direct communication with the people doing the work.
- Faster team formation than a conventional hiring cycle.
- Technical depth rather than generic headcount.
- Visible progress, clear ownership, and regular review points.
- Ability to combine design, engineering, data, AI, QA, DevOps, and marketing.
- Practical experience building and operating owned products.

## Differentiators currently communicated

- Two explicit engagement models: defined project/service and embedded offshore team.
- Multidisciplinary capability under one company.
- Engineering positioned as a core capability, not an outsourced add-on.
- Long-term integration into client workflows.
- Product thinking tested through owned products.
- Sri Lanka-based talent with worldwide availability.

## Primary calls to action

- “Book a Free Consultation” / “Book a free consultation” (Calendly popup or contact page).
- “Build Your Team.”
- “Start an Engineering Project.”
- “Start a Design Project.”
- “Start a Marketing Project.”
- “Chat on WhatsApp.”
- Contact form: “Tell us what you need.”
- Newsletter signup.
- Careers: “View open roles” and application submission.
- Product links: “Explore Checkout,” “Explore Rankout,” and “Explore Comflo.”

## Trust signals present

- Four named portfolio brands: ScaleLabz, Ado Coffee, Hostraspace, Artisans Touch.
- Two supported-team examples: CodeMorphs and Comflo.
- Five anonymized results-led case-study pages.
- Five named team members with roles and photographs.
- Three live external product links.
- External links to four portfolio websites.
- Company legal name, contact email, WhatsApp, social profiles, Sri Lanka location, and worldwide availability.
- Organization schema claims founding year 2022.
- Homepage mentions “BestWeb.LK 2026 wins for projects like bavaram.lk.” No dedicated evidence, award badge, exact category, issuing body link, or supporting project record exists in the repository: **NEEDS VERIFICATION**.
- Testimonials, formal partner badges, certifications, third-party reviews, and named client quotes: **NOT FOUND / NEEDS INPUT**.

---

# 2. Complete public route map

The App Router contains **20 page files representing 18 canonical route patterns plus 2 redirect-only routes**. Of the canonical patterns, two are dynamic (`/careers/[slug]`, `/insights/[slug]`). The six fallback internship records imply six possible career-detail URLs when the external CRM is unavailable. The number of live insight URLs cannot be determined from the repository because posts live in Sanity.

| Page | Route | Purpose and main sections | Main CTA | Content source | SEO title / description | Status |
|---|---|---|---|---|---|---|
| Home | `/` | Hero; engagement models; capabilities; featured work; owned products; reasons to choose Throughout; company gallery; delivery process; FAQ; closing CTA | Book a Free Consultation | `app/page.tsx`, `components/home/HomepageRedesign.tsx`, portfolio data | “Dedicated Development Teams & Digital Services \| Throughout”; description about project/offshore teams | Active, primary landing page |
| About | `/about` | Positioning; who the company is; principles; team; CTA | Book a Free Consultation | `app/about/page.tsx`, `TeamSection.tsx` | “About Throughout \| Dedicated Digital Product Teams”; Sri Lanka-based team description | Active |
| Dedicated Teams | `/dedicated-teams` | Hero; CodeMorphs and Comflo examples; supported capabilities; 3-step process; continuity benefits; CTA | Build Your Team / consultation | Page-local content | “Dedicated Offshore Development Teams”; long-term team description | Active |
| Engineering | `/engineering` | Service hero; outcomes; capabilities; process; dedicated-team cross-sell; FAQ; CTA | Start an Engineering Project | Page-local data + shared service template | “Software Engineering Services”; product engineering, mobile/web, AI, data, QA, cloud/DevOps | Active |
| Design | `/design` | Service hero; outcomes; capabilities; process; dedicated-team cross-sell; FAQ; CTA | Start a Design Project | Page-local data + shared template | “Product & UI/UX Design Services”; strategy, research, UI, systems, web/brand | Active |
| Digital Marketing | `/digital-marketing` | Service hero; outcomes; capabilities; process; dedicated-team cross-sell; FAQ; CTA | Start a Marketing Project | Page-local data + shared template | “Digital Marketing & SEO Services”; SEO, content, paid, lifecycle, analytics, CRO | Active |
| Case Studies index | `/case-studies` | Hero; featured performance case; four more case cards; closing CTA | Discuss Your Project | Hardcoded page-local array | “Case Studies \| Real Results & Real Projects” | Active but not linked in header/footer; omitted from sitemap index itself |
| Performance case | `/case-studies/website-performance-optimization` | Overview; problem; solution; visualized proof; results; technology sidebar | Start Your Project | Hardcoded page | “Website Performance Optimization \| Case Study”; 48→92 score and 3.4s reduction | Active; client anonymous |
| AI SEO case | `/case-studies/ai-seo-growth` | Overview; problem; AI content engine; chart; results; technology sidebar | Start Your Project | Hardcoded page | “AI SEO Growth Experiment \| Case Study”; +72% traffic and rankings | Active; client anonymous |
| Shopify case | `/case-studies/shopify-store-conversion` | Overview; problem; UX/mobile/checkout/upsell solution; analytics mockup; results | Start Your Project | Hardcoded page | “Shopify Store Conversion Improvement \| Case Study”; +38% conversion | Active; client anonymous |
| Workflow case | `/case-studies/workflow-automation-system` | Overview; problem; routing/CRM/alerts/reporting; workflow visualization; results | Start Your Project | Hardcoded page | “Workflow Automation System \| Case Study”; 80% less manual work | Active; client anonymous |
| SaaS MVP case | `/case-studies/mvp-product-launch` | Overview; problem; prototype/stack/deploy/analytics solution; timeline; results | Start Your Project | Hardcoded page | “SaaS MVP Development \| Case Study”; launch in four weeks | Active; client anonymous |
| Insights listing | `/insights` | Intro; category filter; post cards | Read article / newsletter in global footer | Sanity `post` documents | “Insights & Blog”; custom software, AI, automation, product strategy | Active; runtime content count unknown |
| Insight detail | `/insights/[slug]` | Article header; author/date/categories; Portable Text body; back link | Back to Insights | Sanity by slug | Dynamic title/excerpt, canonical, article OG | Active dynamic route |
| Careers listing | `/careers` | Hero; open roles; empty state; hiring process | View open roles | External CRM with static fallback records | “Careers at Throughout”; current opportunities and hiring process | Active |
| Career detail | `/careers/[slug]` | Role details; structured sections; application form | Apply | CRM/fallback internship data | Dynamic role title and first 160 chars of description | Active dynamic route; 6 fallback slugs |
| Contact | `/contact` | Hero; Calendly CTA; email/WhatsApp; contact form | Book a Free Consultation / submit form | Page + contact component | “Contact Throughout \| Book a Free Consultation”; project/team requirements | Active |
| Legal combined page | `/privacy-policy` | Privacy Policy; Terms of Service; contact | Email legal/privacy questions | Hardcoded page | “Terms & Privacy Policy”; company terms/privacy | Active; last updated 25 Nov 2025 |
| Agency Partners redirect | `/agency-partners` | Permanent redirect | N/A | `permanentRedirect` | Inherits destination | Legacy redirect to `/dedicated-teams` |
| Terms redirect | `/terms-of-service` | Permanent redirect | N/A | `permanentRedirect` | Inherits destination | Redirect to `/privacy-policy#terms-of-service` |

## Framework-level redirects / hidden legacy paths

- `/services` → `/engineering` (permanent).
- `/services/:path*` → `/engineering` (temporary).
- `/internships` → `/careers` (permanent).
- `/internships/:path*` → `/careers/:path*` (permanent).
- `/portfolio` → `/#featured-work` (permanent).
- `/agency-partners` → `/dedicated-teams` (permanent page-level redirect).
- `/terms-of-service` → `/privacy-policy#terms-of-service` (permanent page-level redirect).

## Confirmed fallback career URLs

- `/careers/social-media-content-creation-intern`
- `/careers/digital-marketing-intern`
- `/careers/business-development-intern`
- `/careers/ai-automation-engineer-intern`
- `/careers/software-engineer-intern-product-development`
- `/careers/web-engineer-intern`

Pricing, FAQ index, product-detail pages on the main domain, named portfolio-detail pages, standalone service subpages, and dedicated landing pages beyond those above are **NOT FOUND**.

---

# 3. Navigation architecture

## Header

- Logo: `/images/logo.png`, linked to `/`, alt text “Throughout (PVT) LTD.”
- Desktop links: Engineering, Design, Marketing, Dedicated Teams.
- Desktop CTA: “Book a Free Consultation,” opening a Calendly popup.
- Mobile: hamburger toggles a panel with the same four links and a full-width consultation CTA.
- Active-state behavior: exact route or nested route prefix.
- Not in header: Work, Products, About, Case Studies, Insights, Careers, Contact, Legal.
- No dropdowns.

## Footer

- Newsletter signup strip.
- Brand column with logo, short positioning copy, LinkedIn, Facebook, Instagram.
- Resources: Home, About Us, Work (homepage anchor), Blog, Careers, Contact Us.
- Services: Dedicated Teams, Digital Marketing, Engineering, Design.
- Products: Comflo and Rankout. **Checkout is missing from footer despite appearing on the homepage.**
- Contact: `info@throughout.io`, WhatsApp, “Available worldwide.”
- CTA: “Book a free consultation,” but this footer CTA links to `/contact` rather than opening Calendly.
- Legal: one combined “TERMS & PRIVACY POLICY” link.

## Current hierarchy

```text
Home
├── Engagement models (anchor)
├── Capabilities (anchor)
├── Featured work (anchor)
│   ├── ScaleLabz (external)
│   ├── Ado Coffee (external)
│   ├── Hostraspace (external)
│   └── Artisans Touch (external)
├── Products (external)
│   ├── Checkout
│   ├── Rankout
│   └── Comflo
├── Engineering
├── Design
├── Digital Marketing
├── Dedicated Teams
│   ├── CodeMorphs (external)
│   └── Comflo (external)
├── About
├── Case Studies (unlinked from global navigation)
│   ├── Website Performance Optimization
│   ├── AI SEO Growth Experiment
│   ├── Shopify Store Conversion Improvement
│   ├── Workflow Automation System
│   └── SaaS MVP Development
├── Insights
│   └── [Sanity post slug]
├── Careers
│   └── [role slug]
├── Contact
└── Terms & Privacy Policy
```

---

# 4. Important current marketing content

## Homepage

**Headline:** “The right team to build, launch and scale your digital product.”

**Supporting copy:** Throughout assembles engineering, design, data, AI, DevOps, QA, and marketing expertise for startups, agencies, and product companies without a drawn-out hiring cycle.

**Major section messages:**

- “One partner. Two clear ways to work.”
- “Specialists who work as one delivery team.”
- “Real products, shipped and live.”
- “We don’t just build for clients. We build our own.”
- “Built for teams that cannot compromise on delivery.”
- “From need to working team.”
- Closing: “Tell us what you need to build or the team you need to build it.”

**Homepage FAQ topics:** project team vs offshore team; supporting existing teams; company types served; how an engagement begins.

## About

**Headline:** “A focused team for ambitious digital products.”

**Core copy:** Throughout is a Sri Lanka-based company combining engineering, product design, data, AI, QA, DevOps, and marketing. Clients can use it for a defined project or a dedicated offshore team. Principles are depth over headcount, visible work, and collaborative integration.

## Dedicated Teams

**Headline:** “Build a team that works like part of yours.”

**Capabilities:** engineering, product design, data and DevOps, QA/AI/marketing. The process is Define → Assemble → Integrate. Benefits emphasize role matching, direct collaboration, stable product knowledge, clear ownership, and visible delivery.

## Service pages

All three share the same narrative structure: headline and summary, three intended outcomes, six capabilities, three-step process, dedicated-team cross-sell, five FAQs, and a closing consultation CTA.

## Contact details

- Email: `info@throughout.io`
- WhatsApp display: `+94 70 700 7992`
- Contact WhatsApp URL: `https://wa.me/94707007992`
- Footer/service CTA WhatsApp URLs contain inconsistent shortened numbers (`https://wa.me/707007992`), likely broken or incorrect.
- Calendly: `https://calendly.com/throughoutwithyou/30min`
- Address: only Colombo, Sri Lanka in structured data; no street address.
- Social: LinkedIn, Facebook, Instagram.

## Team

- Bavaram Karunaaharan — CEO and Co-Founder
- Insaf Inhaam — CTO and Co-Founder
- Janith Viranga — Software Engineer
- Aysha Shahani — Software Engineer
- Amrith Shylendra — Sales Executive
- `khansa.png` exists but no matching current team record uses it.

## Statistics and outcome claims

The repository contains many strong metrics, but they are not independently supported inside the repository. They should be validated before redesign use:

- ScaleLabz: 3× faster loads, 99.9% uptime, +40% conversion, 500K+ daily users.
- Ado Coffee: -60% support tickets, 85% CSAT, $200K annual savings, 24/7 support.
- Performance case: PageSpeed 48→92, load 5.1s→1.7s, Core Web Vitals passed, +28% conversion.
- AI SEO case: +72% organic traffic, 24 new top-10 keywords, 3.5× impressions over 90 days.
- Shopify case: +38% conversion, -12% abandonment, 2× faster mobile; mock dashboard also shows $48,290 sales, 3.4% conversion, 842 orders.
- Workflow automation: 80% less manual work, 20+ hours/week saved, lead response 24h→5m, “100% error-free.”
- MVP: four-week launch, 50+ beta users in first week, roadmap validated.

---

# 5. Services inventory

## Top-level services (4)

### 1. Software Engineering

- **URL:** `/engineering`
- **Description:** Product engineering, web/mobile development, AI automation, data engineering, QA, cloud, and DevOps delivered by one team.
- **Capabilities:** web/mobile products; SaaS/internal tools; platforms and APIs; integrations; AI and workflow automation; data pipelines/platforms/reporting; cloud, CI/CD, observability; manual/automated QA.
- **Target problem:** building or improving dependable products/platforms with coordinated technical ownership.
- **Process:** Understand → Shape → Build & improve.
- **CTA:** Start an Engineering Project / free consultation.
- **Related work:** all technical portfolio records and performance, workflow, MVP case studies; exact mapping is not declared.

### 2. Product & UI/UX Design

- **URL:** `/design`
- **Description:** Product strategy, UX research, UI design, prototypes, design systems, web design, and brand identity.
- **Capabilities:** problem framing; feature priorities; interviews and journey mapping; web/mobile/dashboard/SaaS UI; interactive prototypes; reusable design systems; conversion-focused websites; visual identity.
- **Target problem:** unclear product decisions, user friction, inconsistent interfaces, and weak implementation handoff.
- **Process:** Discover → Explore → Refine & hand off.
- **CTA:** Start a Design Project / free consultation.
- **Related work:** ecommerce redesign and MVP prototype narratives; no explicit relation table.

### 3. Digital Marketing

- **URL:** `/digital-marketing`
- **Description:** SEO, content, paid media, lifecycle marketing, analytics, and conversion optimization connected to design/engineering.
- **Capabilities:** technical/on-page/content SEO; content strategy; Google/Meta campaigns; CRO; lifecycle email; analytics/reporting; landing pages and tracking through other teams.
- **Target problem:** disconnected acquisition and implementation, unclear measurement, poor conversion paths.
- **Process:** Diagnose → Prioritise → Launch & learn.
- **CTA:** Start a Marketing Project / free consultation.
- **Related work:** AI SEO and Shopify conversion cases.

### 4. Dedicated Offshore Teams

- **URL:** `/dedicated-teams`
- **Description:** Long-term teams across engineering, design, data, QA, DevOps, AI, and marketing, integrated into a client organization.
- **Target problem:** need for continuing capability without building the hiring operation alone.
- **Process:** Define → Assemble → Integrate.
- **Examples shown:** CodeMorphs (dedicated technical delivery support), Comflo (dedicated product engineering support).
- **CTA:** Build Your Team / free consultation.

## Service capabilities without dedicated pages

The following are meaningful services but route only to a parent page or exist only in schema/content: web development, mobile development, SaaS platforms, internal tools, APIs, integrations, AI development, AI agents, workflow automation, data engineering, QA, cloud infrastructure, DevOps, Shopify development, product strategy, UX research, UI design, prototyping, design systems, web design, brand identity/logo design, social media creative/management, SEO, content strategy, paid media, CRO, lifecycle/email marketing, analytics/reporting.

MVP development appears in assets and a case study but has no current service page. `/services/*` legacy URLs collapse to `/engineering`.

---

# 6. Products and packaged solutions

## Checkout

- **Type:** Owned POS product.
- **URL:** `https://checkout.throughout.io/`
- **Purpose:** Offline-first point of sale combining sales, inventory, customers, purchasing, and reporting.
- **Target user:** retail/commerce operators; more specificity **NOT FOUND**.
- **Problem solved:** fragmented or connectivity-dependent store operations.
- **Screenshots/assets:** only a code-rendered illustrative dashboard (`ProductDashboardPreview`); no real product screenshots or logo file found.
- **CTA:** Explore Checkout.
- **Status:** Presented as an operated product; commercial availability/details **NOT FOUND**.

## Rankout

- **Type:** Owned SEO/AEO/GEO platform.
- **URL:** `https://rankout.app/`
- **Purpose:** research, automate, implement, and measure search/answer/generative visibility while keeping AI-drafted changes under user control.
- **Target user:** marketers, SEO teams, site operators; exact ICP **NOT FOUND**.
- **Features:** research, automation, implementation, measurement, controlled AI drafting.
- **Screenshots/assets:** code-rendered dashboard only; no dedicated image/logo in public assets.
- **CTA:** Explore Rankout.
- **Status:** Presented as live.

## Comflo

- **Type:** Owned commerce-operations product.
- **URL:** `https://comflo.app/`
- **Purpose:** connected workspace for customer conversations, orders, channels, and retention.
- **Target user:** growing ecommerce businesses.
- **Problem solved:** fragmented commerce operations and customer communication.
- **Assets:** `/images/logos/comflo-logo.png`, `comflo-logo-full.jpeg`, and `comflo-logo-letter.jpeg`; code-rendered dashboard.
- **CTA:** Explore Comflo.
- **Status:** Presented as live; also used as a dedicated product-engineering support example.

No pricing, product sign-up flow, feature detail pages, product screenshots, roadmap/status badges, or product testimonials are stored in this repository.

---

# 7. Projects, portfolio, and case studies

## Named portfolio projects (4)

### ScaleLabz

- **URL:** homepage featured work; external `https://scalelabz.com/`.
- **Brand/industry:** video editing, content growth, creative agency.
- **Assets:** `/images/portfolio/screencapture-scalelabz.png`; unused `/images/portfolio/scalelabz.png`.
- **Stored project record:** categories Web Development/E-Commerce; Next.js, Node.js, PostgreSQL, Stripe, AWS; challenge describes legacy PHP scaling; solution describes microservices; metrics include 500K+ daily users and +40% conversion.
- **Conflict:** brand description and project record describe materially different business/project contexts. **NEEDS VERIFICATION**.
- **Case-study readiness:** visually strong but not publishable as a factual case study until scope and metrics are verified.

### Ado Coffee

- **URL:** homepage; external `https://adocoffee.ch/`.
- **Brand/industry/location:** premium Sri Lankan coffee brand serving Switzerland; coffee/ecommerce.
- **Asset:** `/images/portfolio/screencapture-adocoffee-ch.png`.
- **Stored project record:** categories AI/ML and Automation; GPT-4 support chatbot; 5,000+ daily tickets; claimed $200K annual savings.
- **Conflict:** short description is a coffee/ecommerce brand, while project fields read like an enterprise chatbot case. **NEEDS VERIFICATION**.
- **Case-study readiness:** strong screenshot and brand story; project scope/results not reliable enough for publication.

### Hostraspace

- **URL:** homepage; external `https://hostraspace.com/`.
- **Industry/type:** hospitality/retail training SaaS.
- **Challenge:** mandatory training feels like paperwork and has poor completion.
- **Solution/features:** Next.js gamified training with course library, timed quizzes, points/coins, badges, leaderboard, certificates.
- **Technologies:** Next.js, React.
- **Assets:** `/images/portfolio/work-hostraspace.png`; unused `hostraspace-showcase-v1.png` and `showcase/hostraspace.png`.
- **Outcomes:** feature outputs only; no quantified business results.
- **Case-study readiness:** best structured named candidate, but needs client quote, baseline/outcome metrics, project timeline, services, and implementation detail.

### Artisans Touch

- **URL:** homepage; external `https://artisans-touch.com/`.
- **Industry/type:** handcrafted jewellery ecommerce/Shopify.
- **Challenge:** premium-feeling storefront without harming browsing/checkout.
- **Solution:** custom Shopify theme, full-bleed editorial photography, restrained type, streamlined cart/checkout.
- **Technologies:** Shopify, Liquid.
- **Asset:** `/images/portfolio/work-artisans-touch.png`.
- **Outputs:** 150+ product catalogue, responsive mobile shopping, custom storefront, streamlined checkout.
- **Case-study readiness:** good named candidate; needs verified conversion/performance outcomes, client quote, engagement length, services, and more screens.

## Anonymized case-study pages (5)

### Website Performance Optimization

- Anonymous ecommerce client with a slow marketing/store site.
- Work: responsive image formats, code minification/deferment, edge caching/CDN, Core Web Vitals fixes.
- Technologies: Next.js, React, Cloudflare, PageSpeed Insights, Lighthouse, Vercel.
- Claims: score 48→92, load 5.1s→1.7s, Core Web Vitals passed, +28% conversion.
- Visual proof is a coded diagram, not a client screenshot.
- Proper named case study: **NO—client, dates, source screenshots, and metric evidence are missing.**

### AI SEO Growth Experiment

- Anonymous publishing blog.
- Work: AI keyword discovery, programmatic briefs/NLP structure, technical SEO/schema/internal links, GSC API monitoring.
- Technologies: OpenAI APIs, Google Search Console, Ahrefs API, Python NLP, Next.js App Router, MDX.
- Claims: +72% organic traffic, 24 new top-10 keywords, 3.5× impressions over 90 days.
- Proper named case study: **NO—client, starting volumes, time period dates, and source evidence missing.**

### Shopify Store Conversion Improvement

- Anonymous fashion/consumer Shopify brand with Instagram-heavy acquisition.
- Work: product-page UX, sticky mobile purchase bar, slide-out cart, Shop Pay/Apple Pay, upsell recommendations.
- Technologies: Shopify Liquid, Alpine.js, Tailwind CSS, Shop Pay, Hotjar, GA4.
- Claims: +38% conversion, -12% abandonment, 2× faster mobile; visual mockup includes sales/order metrics.
- Proper named case study: **NO—client, metric definitions, baseline, exact period, and real screenshots missing.**

### Workflow Automation System

- Anonymous B2B company.
- Work: form routing, CRM sync, Slack alerts by territory, automated reporting.
- Technologies: n8n, Zapier, REST APIs, HubSpot, Slack API, Google Sheets API.
- Claims: 80% less manual work, 20+ hours/week saved, 24h→5m response, error-free records.
- Proper named case study: **NO—client, architecture evidence, dates, and claim substantiation missing.**

### SaaS MVP Development

- Anonymous startup founder.
- Work: Figma prototype, Next.js/Tailwind build, Vercel delivery, Supabase authentication, PostHog analytics.
- Technologies: Next.js 14, React, Tailwind CSS, Supabase, Vercel, PostHog, Figma.
- Claims: launch in 4 weeks, 50+ beta users in week one, roadmap validated.
- Proper named case study: **NO—product/client identity, screenshots, user evidence, feature scope, and validation method missing.**

## Other project/client references

- **CodeMorphs:** creative + tech studio; dedicated technical delivery support; logo asset and external site. No scope, dates, team, outcomes, screenshots, or testimonial.
- **Comflo:** product plus dedicated product engineering support example. Details beyond the product description are absent.
- **bavaram.lk:** mentioned only in a homepage sentence tied to “BestWeb.LK 2026 wins”; no record or asset explicitly links to it.

## Potential case studies

1. **Hostraspace** — strongest named, internally coherent project record and multiple visual assets; needs measurable outcomes and client voice.
2. **Artisans Touch** — coherent named Shopify project with screenshot and defined deliverables; needs verified commercial outcomes.
3. **CodeMorphs** — potentially strong dedicated-team story if engagement details and outcomes can be collected.
4. **Comflo** — potentially strong “we build our own products” or embedded product-team story; needs product screenshots and measurable traction.
5. **ScaleLabz** — usable only after correcting contradictory project data and validating all claims.
6. **Ado Coffee** — usable only after replacing the apparently mismatched chatbot record with the real engagement.
7. **Five anonymous cases** — structurally complete narratives, but not credible portfolio proof until client permission/identity or defensible anonymized evidence is supplied.

---

# 8. Asset inventory

## Logos and brand marks

- `/public/images/logo.png` — 974×256, main logo, used in header/footer/schema.
- `/public/images/logoWhite.png` — 974×256, unused explicit white variant.
- `/public/images/singlelogo.png` — 2550×3300, unused large mark/graphic.
- `/public/images/singlelogo1.png` — 1685×1371, unused mark/graphic.
- `/public/images/logos/codemorphs-logo.png` — 730×362, used.
- `/public/images/logos/comflo-logo.png` — 640×640, used.
- `/public/images/logos/comflo-logo-full.jpeg`, `comflo-logo-letter.jpeg` — unused Comflo variants.
- AI-tool logos (ChatGPT, Claude, Cursor, Lovable) — unused.

## Project and product visuals

- Used portfolio screenshots: ScaleLabz, Ado Coffee, Hostraspace, Artisans Touch under `/public/images/portfolio/`.
- Additional unused Hostraspace visuals: `hostraspace-showcase-v1.png`, `showcase/hostraspace.png`.
- Unused ScaleLabz visual: `scalelabz.png`.
- No real screenshots found for Checkout, Rankout, or Comflo; the homepage renders abstract dashboard mockups in React.
- Case-study pages use code-drawn diagrams/mock dashboards rather than image assets.

## Team and company photography

- Used team photos: Bavaram, Insaf, Janith, Aysha, Amrith.
- Unused: `/public/images/team/khansa.png`.
- Seven optimized JPG gallery photos are used by the homepage slider under `/public/images/gallery/web/`.
- Original HEIC versions remain under `/public/images/gallery/`; these are unused and duplicate the subject matter in larger source formats.
- Additional gallery JPEG: `980C...jpeg`, used.

## Service/editorial imagery

- Three AI-generated studio scenes under `/public/images/ai-generated/` — unused and large (2.4–7 MB).
- Four “our-services” stock/editorial images — unused; `colleagues-working-project-discussing-details.jpg` is ~15 MB.
- Six service/MVP images duplicated byte-for-byte between `/images/home/` and `/images/services/` (three duplicate pairs).
- Three MVP process images — unused.
- `dedicated-team-hero.webp`, `hero_dashboard.png`, `banner.png`, and `ctabg.png` are mostly unused except `ctabg.png` has one code reference.

## Industry videos

Unused MP4 files for travel, health, ecommerce, audit, property, education, and legal. No associated copy or page maps them to verified client experience.

## Technology icons

Thirty-plus SVGs for React, Next.js, Node.js, Python, AWS, GCP, Docker, Kubernetes, Figma, Shopify, WordPress, databases, AI tools, etc. None are currently referenced by app/components/data code.

## Blog imagery

`/public/images/insights/insight-1.png` through `insight-5.png` and `placeholder.png` are unused. Current posts expect Sanity-hosted cover images.

## Fonts and icons

- Fonts load through `next/font`: Inter and JetBrains Mono; no local font files.
- UI icons come from `react-icons/fi`; some social icons are inline SVG.

## Asset issues

- Missing referenced files: `/images/og-default.png`, `/images/twitter-default.png`, `/images/twitter-contact.png`, `/images/og-contact.jpg`, and `/apple-touch-icon.png` are referenced in metadata but absent.
- Three exact duplicate service image pairs.
- Numerous unused, high-resolution files create repository weight without current site value.
- `.DS_Store` files are checked into public asset folders.
- Several full-page screenshots are 5.5–10 MB and should be optimized before reuse.
- No dedicated client logo library for the four portfolio brands.
- No verified case-study evidence images, before/after captures, product UI galleries, testimonial portraits, award assets, or product logo/screenshot sets for Checkout and Rankout.

---

# 9. Current brand and design system

## Identity

- Name: Throughout (PVT) LTD / Throughout.
- Logo blue is documented as `#3399ff`; the functional AA primary is `#2563eb`.
- Visual direction comment in code: “60% Vercel / 25% Linear / 15% Stripe.”

## Colors

- Canvas: `#fafafa`; elevated white `#ffffff`; soft `#f4f4f7`.
- Ink: `#171717`; secondary `#48484f`; tertiary `#85858c`; muted `#a3a3aa`.
- Borders: `#e6e6ea`, strong `#d6d6dc`.
- Primary: `#2563eb`; hover/logo blue `#3399ff`; press `#1d4ed8`; soft `#eaf3fd`.
- Dark surfaces: `#0a0a0d`, `#15151a`, `#1d1d22`; navy `#003366`.
- Dark text: `#f5f5f7`; muted `#a6a6ae`.
- Legacy tokens remain: brand `#6ab4fe`, dark `#10141a`, card `#181e26`, accent `#2563eb`, border `#232a36`.

## Typography

- Primary sans: Inter.
- Utility/eyebrow/number font: JetBrains Mono.
- Headings commonly use 600–800 weight, tight letter spacing, 3xl–7xl responsive scale.
- Body copy commonly 14–20px with 24–32px line height.
- Eyebrows commonly 12–14px uppercase with wide tracking.

## Components and surfaces

- Buttons: mostly pill-shaped (`rounded-full`), 44–48px minimum height, blue primary or outlined secondary.
- Cards: 16–24px corner radii; thin hairline borders; restrained white/soft surfaces.
- Large sections/CTA shells: 24px radius, sometimes dark blue/near-black gradients.
- Shadows: whisper, card, and floating elevation ladder.
- Spacing: max width commonly `max-w-7xl`; horizontal padding 16/24/32px; section vertical padding commonly 80–112px.
- Motion: hover translate/scale, CSS float/blob/fade animations, cursor-reactive hero field, auto-scrolling portfolio screenshots, gallery slider, and `motion` package usage where applicable. Reduced-motion CSS is present.
- CSS framework: Tailwind CSS 4 plus `@theme` tokens and a legacy Tailwind config.
- Component library: no external component system; custom components and `react-icons`.

## Logo variants available

Main horizontal dark/colored logo (`logo.png`), explicit white horizontal version (`logoWhite.png`), and two standalone-mark-like PNG files. Exact approved brand usage rules: **NOT FOUND / NEEDS INPUT**.

---

# 10. Technical stack

- **Framework:** Next.js 16.0.10, App Router.
- **UI:** React 19.2.3, React DOM 19.2.3.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS 4, PostCSS, custom CSS variables/utilities.
- **Icons:** React Icons 5.5 (primarily Feather set).
- **Animation:** Motion 13.1.1 plus custom CSS and browser `requestAnimationFrame`.
- **CMS/blog:** Sanity (`@sanity/client`, Portable Text); separate Studio subproject in `studio-throoout`.
- **Database:** MongoDB via Mongoose for job applications.
- **Forms/email:** contact/newsletter API routes; Nodemailer; Google APIs; Cloudinary dependency; job application model/API.
- **Career data:** external CRM endpoint via `lib/careersApi.ts`, with static fallback records.
- **Scheduling:** Calendly popup loaded client-side.
- **Analytics/tracking:** Google Tag Manager, GA4, Meta Pixel, custom conversion helpers.
- **Images:** Next Image; Sanity CDN remote pattern; some images intentionally unoptimized for full-page scrolling.
- **SEO:** Next Metadata API, generated Open Graph routes, robots, two sitemap implementations, JSON-LD.
- **Hosting/deployment:** standard Next scripts; no `.openai/hosting.json`, Vercel config, Dockerfile, or explicit production host config found. Vercel is mentioned in case-study copy.
- **Repository security concern:** `throughout-website-7fa6425106a7.json` appears to be a Google service-account credential file. Its contents were not reproduced in this discovery document. It should be removed from version control and the credential rotated if active.

---

# 11. Blog and content system

## Capability

- Listing: `/insights`.
- Detail: `/insights/[slug]`.
- Storage: Sanity dataset `production`, project ID configured in code.
- Content schema: title, slug, author reference, published datetime, one or more categories, excerpt, cover image with optional alt text, Portable Text body.
- Categories constrained in Studio: AI, Design, Engineering, Marketing, Teams.
- Authors: name, role, image/alt, bio.
- Listing behavior: category filter and post cards.
- Detail behavior: title, excerpt, image, author, date, categories, Portable Text rendering.
- SEO: dynamic title/description/canonical, Open Graph article metadata, Twitter metadata, published time, image licensing `ImageObject` schema.
- Sitemap: Sanity slugs included in main sitemap and also exposed from `/insights/sitemap.xml`-style route logic.

## Missing blog features

- Search: a `WebSite` schema declares an `/insights?q=` search action, but the UI/code does not implement search.
- Pagination: not present.
- Tags separate from categories: not present.
- Related posts: not present.
- Table of contents: not present.
- Social sharing controls: not present.
- Breadcrumb UI/schema: not present.
- `Article`/`BlogPosting` schema: not present; Open Graph article metadata exists, but JSON-LD is only `ImageObject`.
- Draft/preview workflow and explicit published status: not visible in the repository.

## Existing articles

No article documents are checked into the repository. They are fetched from Sanity at runtime, so titles, slugs, categories, dates, SEO titles, and descriptions are **NOT FOUND / NEEDS INPUT** from a repository-only inspection. Repository article count: **0 local posts; live Sanity count unknown**.

---

# 12. Structural SEO audit

## Present

- Per-page metadata for most canonical pages.
- Dynamic career and insight metadata.
- Canonicals on most primary service/company pages.
- Global and some page-level Open Graph/Twitter metadata.
- Root sitemap with dynamic insight slugs.
- Robots rules and sitemap reference.
- Organization, WebSite, Service, JobPosting, FAQ, and ImageObject structured data.
- Semantic H1/H2/H3 structures are generally present.
- Image alt text is generally supplied for rendered Next Image assets.
- `llms.txt` exists.

## Weaknesses and inconsistencies

1. **Global canonical risk:** root layout sets canonical to the homepage. Pages without their own alternate canonical—especially case-study detail pages—may inherit the homepage canonical.
2. **Missing assets:** metadata references several nonexistent social image files. Generated `app/opengraph-image.tsx` routes exist, but metadata also names absent PNG/JPG files.
3. **Case-study index omission:** detail pages are in the sitemap, but `/case-studies` itself is omitted.
4. **Career detail discovery:** career detail URLs are not included in the root sitemap.
5. **Duplicate insight sitemap logic:** a root sitemap already adds post URLs while `app/insights/sitemap.ts` provides another sitemap without clear sitemap-index linkage.
6. **No breadcrumb schema/UI.**
7. **No Article/BlogPosting JSON-LD.**
8. **No case-study-specific schema.**
9. **Global Service schema language differs from visible pages:** it lists social media management/creatives, Shopify development, and logo design not emphasized identically on current pages.
10. **SearchAction mismatch:** structured data promises site search that does not exist.
11. **Case-study content is anonymous and uncited**, weakening credibility and E-E-A-T.
12. **Portfolio work has no index/detail URLs**, limiting internal linking and indexable project content.
13. **Header omits About, Work, Case Studies, Insights, and Contact**, reducing discoverability.
14. **Social creator handle `@throughout_io` is declared but no corresponding X link is visible.**
15. **Potentially stale/unsupported keyword metadata and claims** exist globally; keywords do not replace page-specific search architecture.
16. **Image alt is optional in Sanity**, so CMS posts can publish without descriptive alt text.
17. **No explicit noindex handling** for missing insight/role records; missing routes rely on rendering behavior rather than clearly documented `notFound()`/robots metadata in every case.

## Logical future search landing-page candidates (content already supports them)

These are content opportunities, not redesign recommendations: dedicated offshore development teams; software/product engineering; AI automation; data engineering; QA/testing; Cloud/DevOps; Shopify development; SaaS MVP development; product strategy/UI/UX; design systems; SEO; paid media; conversion optimization; marketing analytics; ecommerce development; hospitality training software. Any creation should follow market/keyword research later.

---

# 13. Conversion flow

## Existing conversion mechanisms

- Persistent header Calendly CTA.
- Homepage/service/dedicated-team Calendly CTAs.
- Contact page Calendly CTA.
- Contact form collecting name, email, phone, message.
- Email link.
- WhatsApp links.
- Newsletter form in footer.
- Careers application form, including job-specific applications and file/data processing through API infrastructure.
- External product exploration links.

## Current journey

```text
Visitor
→ Home or service page
→ Understand project-team vs offshore-team model
→ Review capabilities / portfolio / anonymized results
→ Read FAQs or supporting process
→ Book Calendly call, submit contact form, email, or WhatsApp
→ Internal lead handling (email/analytics integrations)
```

## Conversion gaps

- No explicit qualification fields for budget, timeline, service, company, or engagement model in the visible contact form.
- No clear confirmation of what happens after form submission beyond status feedback.
- No dedicated product signup/demo flows on the main site.
- No downloadable lead magnet or documented sales resource.
- Case studies are not globally discoverable and named portfolio work does not link to internal detail pages.
- Strong result claims lack visible evidence or client attribution.
- WhatsApp URLs are inconsistent; some likely omit the full country/phone number.
- Footer “Book a free consultation” behaves differently from same-named CTAs elsewhere.
- No pricing/rate guidance or minimum engagement information.
- Newsletter value proposition and cadence are not stated in the footer.

---

# 14. Trust and social proof inventory

| Signal | Where | Assessment |
|---|---|---|
| Four named live projects | Homepage featured work | Strongest current proof, but two records conflict internally |
| Five results-led cases | `/case-studies/*` | Detailed but anonymous and visually simulated |
| CodeMorphs and Comflo | Dedicated Teams page | Useful engagement examples, minimal evidence |
| Team names/roles/photos | About page; CTA avatars | Helpful human proof; no biographies/credentials |
| Founded 2022 | Organization JSON-LD | Not stated visibly; verify |
| Sri Lanka / worldwide | About, footer, JSON-LD | Consistent broad positioning |
| BestWeb.LK 2026 mention | Homepage Life at Throughout | Unsubstantiated in repo; collect award details |
| Product ownership | Homepage | Differentiator; lacks adoption/customer metrics |
| Metrics/results | Portfolio data and case studies | Numerous but unsupported; validate before reuse |
| Testimonials/reviews | — | **NOT FOUND / NEEDS INPUT** |
| Certifications/partner badges | — | **NOT FOUND / NEEDS INPUT** |
| Client logo cloud | — | **NOT FOUND / NEEDS INPUT** |

---

# 15. Major component inventory

| Component | Path | Used by | Behavior / content |
|---|---|---|---|
| Navbar | `components/Navbar.tsx` | Global layout | Responsive menu, active links, Calendly CTA; nav labels hardcoded |
| Footer | `components/Footer.tsx` | Global layout | Newsletter, link columns, socials, contact, legal; business content hardcoded |
| Calendly popup/button | `components/CalendlyPopup.tsx` | Header, home, services, contact, teams | Lazy-loads Calendly and records open/booked analytics; URL hardcoded |
| Homepage composition | `components/home/HomepageRedesign.tsx` | Home | Most homepage business copy, services/products, FAQs, CTAs hardcoded |
| Hero team growth | `components/home/HeroTeamGrowth.tsx` | Home | Animated hero visual/copy support |
| Hero cursor field | `components/home/HeroCursorField.tsx` | Home | Interactive decorative particle field |
| Featured work | `components/home/FeaturedWork.tsx` | Home | Uses portfolio data; auto-scrolls page screenshots; pauses on hover/reduced motion |
| Product dashboard preview | `components/home/ProductDashboardPreview.tsx` | Home | Code-rendered illustrative interfaces for 3 products |
| Gallery slider | `components/home/GallerySlider.tsx` | Home | Company/gallery photo carousel |
| Unified service page | `components/service/UnifiedServicePage.tsx` | Engineering, Design, Marketing | Shared hero/outcomes/capabilities/process/team cross-sell/CTA; receives content props |
| Service FAQ | `components/service/ServiceFAQ.tsx` | Home and service pages | Accordion plus optional FAQ JSON-LD |
| Service CTA section | `components/services/ServicesCTASection.tsx` | Legacy/limited use | Consultation + WhatsApp CTA; contains hardcoded phone URL |
| Team section | `components/about/TeamSection.tsx` | About | Five hardcoded team records/cards |
| Contact info/form | `components/contact/ContactInfoSection.tsx` | Contact | Email/WhatsApp plus POST to contact API; business contact hardcoded |
| Case-study layout | `components/case-studies/CaseStudyLayout.tsx` | Five case pages | Shared section/sidebar/result patterns; CTA defaults/hardcoded styling |
| Insights client | `app/insights/InsightsClient.tsx` | Insights listing | Category filtering and cards; data from Sanity |
| Insight details | `components/insights/InsightDetails.tsx` | Insight detail | Portable Text rendering, missing state, article presentation |
| Newsletter signup | `components/ui/NewsletterSignup.tsx` | Footer | Form state and newsletter API request |
| Application form | `components/careers/ApplicationForm.tsx` | Career detail | Large application flow and upload/submission behavior |
| Buttons | `components/ui/Button.tsx` | Case studies and other pages | Shared primary/secondary link styles |
| Inner banner / banner badge | `components/ui/*` | Limited/legacy pages | Reusable banner framing |

---

# 16. Content and design-input gaps

## Identity and strategy

- Confirm whether the intended brand is TrueAuto or Throughout and supply the correct domain, legal entity, logo, and brand assets.
- Confirm the official short positioning statement and whether “digital growth studio,” “digital delivery company,” or “dedicated digital teams” is the primary category.
- Define priority countries, verticals, company sizes, buyer roles, and ideal engagement size.
- Confirm founding year and any office/location details intended for public display.

## Services

- Decide which capability names are actual sellable services versus supporting skills.
- Provide engagement scope examples, timelines, team shapes, pricing model/range, deliverables, and exclusions.
- Clarify whether social media management, creative production, Shopify, MVP studio, and brand identity remain active services.
- Add evidence for each discipline: named work, methods, deliverables, credentials, and outcomes.

## Products

- Collect official logos, real screenshots, customer/user segments, feature sets, pricing/access, traction metrics, testimonials, support links, and current release status for Checkout, Rankout, and Comflo.
- Confirm ownership relationship and whether each product belongs under the company site.

## Projects and case studies

- Correct the ScaleLabz and Ado Coffee records.
- Identify clients/products behind the five anonymized cases or document approved anonymization language.
- Validate every metric with source, baseline, time period, and attribution.
- Collect client quotes, approver names/titles, industry, country, engagement dates/duration, team composition, services, business challenge, technical constraints, launch links, and before/after visuals.
- Clarify whether CodeMorphs, Comflo, and bavaram.lk may be shown as client/project proof.
- Collect consistent logo files and several high-quality screens for each selected case.

## Trust

- Testimonials and permission to publish.
- Client logo permissions.
- Awards: exact award/category/year/project and proof URL/badge.
- Certifications, partnerships, review-platform profiles, security/process credentials.
- Company statistics: projects shipped, clients served, countries, retention, team size, years, uptime/performance—only where defensible.
- Team biographies, expertise, credentials, LinkedIn links, and current team roster.

## Content

- Export/list the current Sanity posts to establish the actual blog inventory.
- Define editorial cadence, audience, author ownership, and conversion goal for Insights.
- Gather FAQ answers on budgets, timelines, IP, communication, timezone overlap, staffing, replacement/continuity, security, and support.
- Clarify careers source of truth (CRM vs static fallback) and active openings.

## Contact/legal

- Correct all WhatsApp URLs and settle one formatted phone number.
- Supply full registered office address if required.
- Confirm privacy/terms counsel approval, governing entity details, retention policies, and cookie consent requirements.
- Define lead-routing owner, response-time expectation, and post-submit message.

## Visual assets

- Official brand guidelines and vector logo files.
- Real product screenshots and named-case-study galleries.
- Client logos, testimonial portraits, award marks.
- Replace/remove stale unused stock and AI-generated imagery as appropriate later.
- Create valid social-preview assets or point metadata consistently to generated routes.

---

# 17. Redesign input summary for UI/UX designer

## TrueAuto Overview

The repository is for **Throughout (PVT) LTD**, not TrueAuto. Throughout is a Sri Lanka-based digital delivery company providing multidisciplinary project teams and dedicated offshore teams. It combines engineering, design, data, AI, QA, DevOps, and marketing and also presents three owned products. The brand/domain mismatch must be resolved before design begins.

## Target Customers

Startup founders, digital agencies, product companies, and growing businesses that need a product/project delivered, specialist capability added, or a long-term offshore team. Markets are described only as Sri Lanka and worldwide.

## Current Services

Four top-level offerings: Software Engineering, Product & UI/UX Design, Digital Marketing, and Dedicated Offshore Teams. Beneath them are roughly 25–30 named capabilities spanning web/mobile/SaaS/API work, AI and automation, data, cloud/DevOps, QA, product strategy, UX/UI, brand/web design, SEO, paid media, content, lifecycle, analytics, and CRO.

## Current Products

Checkout (offline-first POS), Rankout (SEO/AEO/GEO research/automation/measurement), and Comflo (commerce conversations/orders/channels/retention). They link externally and have no dedicated main-site detail pages or real screenshot libraries in this repository.

## Projects / Case Studies

Four named homepage projects (ScaleLabz, Ado Coffee, Hostraspace, Artisans Touch) and five anonymous case-study narratives. Hostraspace and Artisans Touch are the most coherent named records. ScaleLabz and Ado Coffee data is internally inconsistent. CodeMorphs and Comflo appear as dedicated-team examples. None currently combines a named client, validated metrics, testimonial, and complete visual story.

## Current Pages

Home, About, Dedicated Teams, Engineering, Design, Digital Marketing, Case Studies index, five case details, Insights listing/detail, Careers listing/detail, Contact, and combined Privacy/Terms. Agency Partners and Terms are redirect routes. Portfolio and legacy service/internship routes redirect.

## Existing Brand Identity

Minimal, technology-led visual system: near-white canvas, black/gray ink, vivid blue accent, dark navy/black bands, Inter headings/body and JetBrains Mono labels. Rounded pill CTAs, 16–24px cards, hairline borders, restrained shadows, and interactive motion. The current logo is a horizontal Throughout mark; vector source and usage guidelines are missing.

## Available Visual Assets

Four project screenshots, team portraits, office/company gallery photography, Comflo/CodeMorphs logos, large unused AI/stock service imagery, unused industry videos, many unused technology SVGs, and several duplicate/stale assets. Product screenshot coverage and client-logo coverage are weak.

## Current Conversion Strategy

The primary conversion is a free Calendly consultation, supported by a contact form, email, WhatsApp, newsletter, and careers application. Content moves from engagement model → capabilities/work/trust → process/FAQ → consultation. The most important gaps are unverified proof, inconsistent WhatsApp links, no project qualification detail, and weak internal paths to case studies.

## SEO / Content Situation

Technically mature basics exist: metadata, dynamic metadata, robots, sitemap, Sanity blog, schema, analytics, and social metadata. Key problems are canonical inheritance, missing referenced social images, no named portfolio routes, anonymous/uncited case studies, missing article/breadcrumb schema, duplicated sitemap logic, and a declared search action without search functionality. No local blog posts exist; live content is in Sanity.

## Technical Constraints

The site is a Next.js 16/React 19/TypeScript/Tailwind 4 App Router application. Sanity drives Insights; MongoDB/Mongoose and server APIs handle applications; Nodemailer/Google APIs support forms; Calendly, GA4/GTM, and Meta Pixel are integrated. A redesign should account for these existing operational workflows even if the visual system is replaced.

## Missing Information

- Correct brand identity (TrueAuto vs Throughout).
- Verified service priorities, ICP, markets, offers, and engagement terms.
- Correct and validated project records and result evidence.
- Testimonials, client permissions, partner/certification/award proof.
- Complete product facts, screenshots, status, pricing, and traction.
- Current Sanity article export.
- Official vector logos/brand guide and consistent social assets.
- Accurate phone/WhatsApp details and full address if public.
- Team bios/credentials and complete company statistics.

---

# Inspection coverage and counting notes

## Directories/files inspected

- All route and API files under `app/`, including static, dynamic, redirect, metadata image, sitemap, robots, error, and not-found files.
- All components under `components/`, including home, service, case-study, insights, careers, contact, about, and UI components.
- All structured data under `data/`.
- All utilities/integrations under `lib/` and `src/sanity/`.
- All Sanity Studio schemas/configuration under `studio-throoout/`.
- Project configuration: `package.json`, lockfile, Next, TypeScript, ESLint, PostCSS, Tailwind, README, web manifest, and `llms.txt`.
- Full `public/` asset tree, with file sizes, pixel dimensions for raster images, duplicate hashes, and source references.
- Root auxiliary files including the existing design-system analysis and menu file were included in the repository inventory; they do not define additional live routes.

## Counts

- **Page files:** 20.
- **Canonical public route patterns:** 18, including 2 dynamic patterns.
- **Redirect-only page routes:** 2, plus 5 framework redirect patterns.
- **Concrete fallback career detail URLs:** 6.
- **Top-level services:** 4.
- **Named service capabilities:** approximately 27 (wording overlaps between pages/schema).
- **Owned products/solutions:** 3.
- **Formal project/case-study records:** 9 (4 named portfolio + 5 anonymous case studies).
- **Additional client/product engagement references:** 2 (CodeMorphs, Comflo), plus 1 unstructured award/project mention (bavaram.lk).
- **Repository-stored blog articles:** 0; live Sanity total **NOT FOUND / NEEDS INPUT**.

## Accuracy caveat

This document reports what the repository says, not whether every marketing claim is true. Contradictory records, anonymous cases, metrics without evidence, and brand/domain mismatch are explicitly marked for validation. No external sites, live CMS data, analytics accounts, production pages, or third-party profiles were used.
