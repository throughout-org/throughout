<div align="center">
	<img src="./public/images/logo.png" alt="Throughout Logo" width="180" />
</div>

# Throughout - Smart Software Solutions

Throughout is a modern software engineering company specializing in custom web, mobile, and AI solutions. We build fast, secure, and scalable digital products for startups and enterprises.

---

## 🌐 Main Pages Overview

| Page                                          | Description                                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Home** (`/`)                                 | Redesigned landing page: hero, team growth highlight, and a products-we've-built showcase with animated dashboard previews. |
| **About** (`/about`)                           | Mission, vision, core values, and what makes Throughout unique.                     |
| **Engineering** (`/engineering`)               | Custom software, web, and mobile engineering services.                              |
| **Design** (`/design`)                         | Product and brand design services.                                                  |
| **Digital Marketing** (`/digital-marketing`)   | SEO, growth, and digital marketing services.                                        |
| **Dedicated Teams** (`/dedicated-teams`)       | Long-term offshore teams for startups, product companies, agencies, and businesses. |
| **Portfolio** (`/portfolio`)                   | Showcases our best work: web, mobile, AI, and automation projects.                  |
| **Case Studies** (`/case-studies`)             | Detailed write-ups of real client projects and results.                             |
| **Case Study Detail** (`/case-studies/[slug]`) | AI SEO growth, SaaS MVP launch, Shopify conversion, performance, and automation.     |
| **Insights/Blog** (`/insights`)                | Repository-managed Markdown articles, tech insights, and company news.              |
| **Insight Details** (`/insights/[slug]`)       | Full article view for each insight or blog post.                                    |
| **Careers** (`/careers`)                       | Open career opportunities with details and application form.                        |
| **Career Details** (`/careers/[slug]`)         | Detailed info and application for each role.                                        |
| **Contact** (`/contact`)                       | Contact form, WhatsApp, and company info for inquiries and support.                 |
| **Agency Partners** (`/agency-partners`)       | White-label engineering page for agency partners (not currently linked in the nav). |
| **Privacy Policy** (`/privacy-policy`)         | Our privacy practices and data protection policies.                                 |
| **Terms of Service** (`/terms-of-service`)     | Legal terms for using our website and services.                                     |

The primary nav (see [components/Navbar.tsx](components/Navbar.tsx)) links **Engineering**, **Design**, **Marketing**, and **Dedicated Teams**. Service pages (Engineering, Design, Digital Marketing, Agency Partners) now share a single [UnifiedServicePage](components/service/UnifiedServicePage.tsx) component driven by per-page content.

---

## 🚀 Features

- **Redesigned Homepage**: New hero with a cursor field effect, a team-growth highlight, and a product showcase (Checkout, Rankout, Comflo) with animated, count-up dashboard mockups ([components/home/HomepageRedesign.tsx](components/home/HomepageRedesign.tsx), [components/home/ProductDashboardPreview.tsx](components/home/ProductDashboardPreview.tsx))
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Analytics**: Google Tag Manager (in addition to GA and Meta Pixel) wired up in the root layout
- **Contact Form**: Interactive form with validation and email delivery via Nodemailer
- **Newsletter Signup**: Mailchimp-powered subscription
- **Job Applications**: Resume uploads to Google Drive, application tracking in MongoDB, and email notifications
- **WhatsApp Integration**: Direct link to chat on WhatsApp
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter card support
- **Insights/Blog**: File-based Markdown content with typed frontmatter, metadata, schema, related posts, and article CTAs
- **Image Fallbacks**: Automatic placeholder for missing images
- **24/7 Support**: Always available for client needs

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 19 (React Compiler via `babel-plugin-react-compiler`)
- **Animation**: `motion` (Framer Motion's successor package), used for the homepage product dashboard previews
- **Content**: Markdown files with YAML frontmatter, parsed by `gray-matter` and rendered with `markdown-to-jsx`
- **Database**: MongoDB (via Mongoose)
- **File Storage**: Cloudinary (resumes), Google Drive (via googleapis)
- **Email**: Nodemailer (SMTP), Mailchimp (newsletter)
- **Icons**: react-icons

> The site was streamlined to a smaller set of core dependencies — tsParticles, `next-sanity`, and `react-calendly` have been removed in favor of lighter, purpose-built implementations (e.g. `components/home/HeroCursorField.tsx`, `components/CalendlyPopup.tsx`). Animation later returned in a targeted way via the `motion` package for the product showcase.

## 📰 Repository-managed Insights

- **File-based content**: Published articles live in [`content/insights/`](content/insights/) and are statically generated by Next.js.
- **Rich content**: Markdown supports headings, lists, links, quotes, code, tables, and images.
- **Typed frontmatter**: [`lib/insights.ts`](lib/insights.ts) validates the SEO, author, image, relationship, and CTA fields required by every article.

### Editing Insights

- **How to update**: Add or edit a `.md` file in [`content/insights/`](content/insights/). Keep the filename and `slug` aligned.
- **Required structure**: Copy an existing article's frontmatter and supply every field. Builds fail early when required data is missing or a slug is duplicated.
- **Publishing**: Commit the article and its local cover image to Git. No CMS account or runtime API is required.

### Careers

- **Dynamic Careers Page**: Role listings are fetched from the CRM's internship/job API and rendered dynamically.
- **Rich Metadata**: Each role includes title, duration, stipend, location, status, description, responsibilities, requirements, skills, and benefits.
- **How to Update**: Add, edit, or close openings from the CRM.
- **Dynamic Routing**: Individual role details are available at `/careers/[slug]`.
- **CRM Base URL**: Configured via `CRM_PUBLIC_API_BASE_URL` / `NEXT_PUBLIC_CRM_API_BASE_URL`.

## 🔐 Environment Variables

Create a `.env.local` file at the project root and set the following values:

```bash
# MongoDB
MONGODB_URI=

# Contact form email (SMTP via Nodemailer)
SMTP_USER=
SMTP_PASS=
MAIL_FROM="Throughout Team"

# Newsletter (Mailchimp)
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=

# Cloudinary (resume uploads)
CLOUDINARY_URL=

# Google OAuth2 (Drive uploads for job applications)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
GOOGLE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=
GOOGLE_DRIVE_FOLDER_URL=

# CRM source for careers page
CRM_PUBLIC_API_BASE_URL="https://crm.throughout.io"
NEXT_PUBLIC_CRM_API_BASE_URL="https://crm.throughout.io"

# Optional: restrict CORS on API routes
CORS_ALLOWED_ORIGINS=
```

The SEO audit endpoint currently proxies to a hardcoded local service URL in [app/api/seo-audit/route.ts](app/api/seo-audit/route.ts).

## 🚦 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Scripts

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 📝 Customization

### Update Contact Information

1. **WhatsApp Number**: Update the WhatsApp link/number used across the site (e.g. [components/Footer.tsx](components/Footer.tsx) and [components/contact/ContactInfoSection.tsx](components/contact/ContactInfoSection.tsx)).
2. **Email**: Update `hello@throughout.io` with your company email.

### Update Content

- Landing page content: edit in [app/page.tsx](app/page.tsx) and [components/home/HomepageRedesign.tsx](components/home/HomepageRedesign.tsx)
- Service pages: edit per-page content passed into [components/service/UnifiedServicePage.tsx](components/service/UnifiedServicePage.tsx)
- Insights/blog content: edit Markdown and frontmatter in [`content/insights/`](content/insights/)

## 🧩 API Endpoints

| Endpoint                | Method | Description                                                                                    |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------ |
| `/api/contact`           | POST   | Sends contact form submissions via email (Nodemailer/SMTP).                                    |
| `/api/newsletter`        | POST   | Subscribes an email address to the Mailchimp newsletter list.                                  |
| `/api/job-applications`  | POST   | Uploads resume to Google Drive, stores the application in MongoDB, and emails a notification.  |
| `/api/seo-audit`         | POST   | Proxies a URL to the external SEO audit service.                                               |
| `/api/google/auth`       | GET    | Starts the Google OAuth2 flow (Drive access for resume uploads).                               |
| `/api/google/callback`   | GET    | Google OAuth2 redirect callback; exchanges the code for tokens.                                |

### Job Applications

**POST** `/api/job-applications`
Request: `{ jobTitle, name, email, phone, coverLetter, resumeUrl, referralSource? }`

### Newsletter

**POST** `/api/newsletter`
Request: `{ email, firstName?, source? }`

### SEO Audit

**POST** `/api/seo-audit`
Request: forwarded as-is to the SEO audit backing service.

## 🤝 Contribution Guide

1. Fork the repo and create a branch.
2. Run `npm run lint` before submitting PRs.
3. Describe your changes clearly in the PR.
4. For major features, open an issue first.

## 📱 Contact Methods

- **Email**: hello@throughout.io
- **WhatsApp**: Direct chat integration
- **Contact Form**: Built-in form submission (API-powered)

## 📄 License

© 2026 Throughout. All rights reserved.

---

**Note**: Make sure to update the WhatsApp number and email address before deploying to production!
</content>
