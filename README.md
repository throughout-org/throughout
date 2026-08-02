<div align="center">
	<img src="./public/images/logo.png" alt="Throughout Logo" width="180" />
</div>

# Throughout - Smart Software Solutions

Throughout is a modern software engineering company specializing in custom web, mobile, and AI solutions. We build fast, secure, and scalable digital products for startups and enterprises.

---

## 🌐 Main Pages Overview

| Page                                              | Description                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Home** (`/`)                                     | Landing page with hero, services, about, and trust sections.                        |
| **About** (`/about`)                               | Mission, vision, core values, and what makes Throughout unique.                     |
| **Engineering** (`/engineering`)                   | Custom software, web, and mobile engineering services.                              |
| **Design** (`/design`)                             | Product and brand design services.                                                  |
| **Digital Marketing** (`/digital-marketing`)       | SEO, growth, and digital marketing services.                                        |
| **Agency Partners** (`/agency-partners`)           | Partner programme for agencies reselling Throughout's services.                     |
| **Portfolio** (`/portfolio`)                       | Showcases our best work: web, mobile, AI, and automation projects.                  |
| **Case Studies** (`/case-studies`)                 | Detailed write-ups of real client projects and results.                             |
| **Case Study Detail** (`/case-studies/[slug]`)     | AI SEO growth, SaaS MVP launch, Shopify conversion, performance, and automation.     |
| **Insights/Blog** (`/insights`)                    | Latest articles, tech insights, and company news. Dynamic content from Sanity CMS.  |
| **Insight Details** (`/insights/[slug]`)           | Full article view for each insight or blog post.                                    |
| **Careers** (`/careers`)                           | Open career opportunities with details and application form.                        |
| **Career Details** (`/careers/[slug]`)             | Detailed info and application for each role.                                        |
| **Contact** (`/contact`)                           | Contact form, WhatsApp, and company info for inquiries and support.                 |
| **Privacy Policy** (`/privacy-policy`)             | Our privacy practices and data protection policies.                                 |
| **Terms of Service** (`/terms-of-service`)         | Legal terms for using our website and services.                                     |

---

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI with blue/sky gradient theme
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion transitions and scroll/hover effects
- **Contact Form**: Interactive form with validation and email delivery via Nodemailer
- **Newsletter Signup**: Mailchimp-powered subscription
- **Job Applications**: Resume uploads to Google Drive, application tracking in MongoDB, and email notifications
- **WhatsApp Integration**: Direct link to chat on WhatsApp
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter card support
- **Insights/Blog**: Dynamic content from Sanity CMS
- **Image Fallbacks**: Automatic placeholder for missing images
- **24/7 Support**: Always available for client needs

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 19
- **Animation**: Framer Motion, tsParticles
- **CMS**: Sanity.io (with Portable Text)
- **Database**: MongoDB (via Mongoose)
- **File Storage**: Cloudinary (resumes), Google Drive (via googleapis)
- **Email**: Nodemailer (SMTP), Mailchimp (newsletter)
- **Other**: react-calendly, ESLint

## 📰 Insights & CMS Integration

- **Dynamic Insights/Blog**: Insights and blog articles are rendered dynamically from Sanity CMS and local data files.
- **Rich Content**: Uses Sanity's Portable Text for rich formatting (lists, headings, etc.) and a fallback image mechanism for missing images.

### Editing Insights

- **Sanity CMS**: Most insights/blog content is managed via Sanity Studio ([src/sanity/client.ts](src/sanity/client.ts)).
- **Local Data**: Some demo/sample insights are stored in [data/insights.ts](data/insights.ts) for development or fallback.
- **How to Update**: Edit in Sanity Studio for production, or update [data/insights.ts](data/insights.ts) for local/demo content.
- **Content Structure**: The `content` field supports HTML and Portable Text blocks.

### Careers

- **Dynamic Careers Page**: Role listings are fetched from the CRM's internship/job API and rendered dynamically.
- **Rich Metadata**: Each role includes title, duration, stipend, location, status, description, responsibilities, requirements, skills, and benefits.
- **How to Update**: Add, edit, or close openings from the CRM.
- **Dynamic Routing**: Individual role details are available at `/careers/[slug]`.
- **Fallback Behavior**: If the CRM API is unreachable, the website falls back to [data/internships.ts](data/internships.ts).

### Dependencies

If you add or update content structure, make sure to install:

```bash
npm install @portabletext/react @sanity/image-url next-sanity react-calendly
```

## 🔐 Environment Variables

Create a `.env.local` file at the project root and set the following values:

```bash
# Sanity
NEXT_PUBLIC_SANITY_API_TOKEN=

# MongoDB
MONGODB_URI=

# Contact form email (Zoho SMTP via Nodemailer)
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
GOOGLE_DRIVE_FOLDER_ID=

# Optional: External APIs
NEXT_PUBLIC_SEO_AUDIT_API_URL="http://127.0.0.1:8000/free-seo-audit"

# Optional: CRM source for careers page
CRM_PUBLIC_API_BASE_URL="https://crm.throughout.io"
```

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

1. **WhatsApp Number**: Update the WhatsApp link/number used across the site (e.g. contact and footer components).
2. **Email**: Update `hello@throughout.io` with your company email.

### Update Content

- Landing page content: edit in [app/page.tsx](app/page.tsx)
- Insights/blog content: edit in Sanity Studio (see [src/sanity/client.ts](src/sanity/client.ts) for config)

## 🧩 API Endpoints

| Endpoint                    | Method | Description                                                        |
| ---------------------------- | ------ | ------------------------------------------------------------------- |
| `/api/contact`               | POST   | Sends contact form submissions via email (Nodemailer/Zoho SMTP).   |
| `/api/newsletter`            | POST   | Subscribes an email address to the Mailchimp newsletter list.      |
| `/api/job-applications`      | POST   | Uploads resume to Google Drive, stores the application in MongoDB, and emails a notification. |
| `/api/seo-audit`             | POST   | Proxies a URL to the external SEO audit service.                   |
| `/api/google/auth`           | GET    | Starts the Google OAuth2 flow (Drive access for resume uploads).   |
| `/api/google/callback`       | GET    | Google OAuth2 redirect callback; exchanges the code for tokens.    |

### Job Applications

**POST** `/api/job-applications`
Request: `{ jobTitle, name, email, phone, coverLetter, resumeUrl, referralSource? }`

### Newsletter

**POST** `/api/newsletter`
Request: `{ email, firstName?, source? }`

### SEO Audit

**POST** `/api/seo-audit`
Request: forwarded as-is to `NEXT_PUBLIC_SEO_AUDIT_API_URL`'s backing service.

## 🗂️ Sanity Studio Setup

To edit blog/insights content, use Sanity Studio:

1. Clone or access your Sanity Studio project.
2. Run `npx sanity start` in the Studio directory.
3. Configure `src/sanity/client.ts` with your projectId, dataset, and API token.
4. Edit content in Studio and publish.

## 🤝 Contribution Guide

1. Fork the repo and create a branch.
2. Run `npm run lint` before submitting PRs.
3. Describe your changes clearly in the PR.
4. For major features, open an issue first.

## 📱 Contact Methods

- **Email**: hello@throughout.io
- **WhatsApp**: Direct chat integration
- **Contact Form**: Built-in form submission (API-powered)

## 🎨 Design Features

- Gradient backgrounds with animated blobs
- Smooth hover transitions
- Rounded corners and soft shadows
- Mobile-first responsive design
- Accessible and semantic HTML
- Portable Text rendering for rich content
- Image fallback for broken/missing images in insights

## 📄 License

© 2026 Throughout. All rights reserved.

---

**Note**: Make sure to update the WhatsApp number and email address before deploying to production!

