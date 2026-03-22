<div align="center">
	<img src="./public/images/logo.png" alt="Throughout Logo" width="180" />
</div>

# Throughout - Smart Software Solutions

Throughout is a modern software engineering company specializing in custom web, mobile, and AI solutions. We build fast, secure, and scalable digital products for startups and enterprises.

---

## 🌐 Main Pages Overview

| Page                                             | Description                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Home** (`/`)                                   | Landing page with hero, services, about, and trust sections. Modern, animated, and conversion-focused. |
| **About** (`/about`)                             | Learn about our mission, vision, core values, and what makes Throughout unique.                        |
| **Services** (`/services`)                       | Explore our full range of software, web, mobile, cloud, and AI/ML solutions.                           |
| **Why Us** (`/why-us`)                           | Discover our strengths, approach, and why clients choose Throughout for their projects.                |
| **Portfolio** (`/portfolio`)                     | Showcases our best work: web, mobile, AI, and automation projects.                                     |
| **Insights/Blog** (`/insights`)                  | Latest articles, tech insights, and company news. Dynamic content from Sanity CMS.                     |
| **Insight Details** (`/insights/[slug]`)         | Full article view for each insight or blog post.                                                       |
| **Internships** (`/internships`)                 | Open internship opportunities with details and application form.                                       |
| **Internship Details** (`/internships/[slug]`)   | Detailed info and application for each internship role.                                                |
| **Contact** (`/contact`)                         | Contact form, WhatsApp, and company info for inquiries and support.                                    |
| **Free SEO Auditor** (`/free-seo-aduitor`)       | Free tool to analyze your website’s SEO and get actionable recommendations.                            |
| **MVP Studio** (`/mvp-studio`)                   | Launch your SaaS MVP in 3 weeks with our fixed-scope, AI-accelerated process.                          |
| **n8n Agency** (`/n8n-agency`)                   | Workflow automation, integration, and managed n8n services for businesses.                             |
| **WhatsApp Automation** (`/whatsapp_automation`) | AI chatbot, CRM integration, and sales automation for WhatsApp.                                        |
| **Privacy Policy** (`/privacy-policy`)           | Our privacy practices and data protection policies.                                                    |
| **Terms of Service** (`/terms-of-service`)       | Legal terms for using our website and services.                                                        |

---

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI with blue/sky gradient theme
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Contact Form**: Interactive form with validation and API integration
- **WhatsApp Integration**: Direct link to chat on WhatsApp
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter card support
- **Insights/Blog**: Dynamic content from Sanity CMS
- **Image Fallbacks**: Automatic placeholder for missing images
- **24/7 Support**: Always available for client needs

## 📋 Main Sections

1. **Navigation Bar** – Fixed header with smooth scrolling
2. **Hero Section** – Eye-catching headline with animated gradient background
3. **About Us** – Mission, vision, and core values
4. **Services** – Web, mobile, cloud, and AI solutions
5. **Why Choose Us** – Key differentiators and strengths
6. **Insights/Blog** – Latest tech articles and company news
7. **Contact** – Form, WhatsApp, and email integration
8. **Footer** – Company information and links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 19.2.3
- **Node.js**: 20.x (required)
- **CMS**: Sanity.io (with Portable Text)
- **Content Rendering**: @portabletext/react
- **Other**: react-calendly, Docker, ESLint, PostCSS

## 📰 Insights & CMS Integration

- **Dynamic Insights/Blog**: Insights and blog articles are rendered dynamically from Sanity CMS and local data files.
- **Rich Content**: Uses Sanity's Portable Text for rich formatting (lists, headings, etc.) and a fallback image mechanism for missing images.

### Editing Insights

- **Sanity CMS**: Most insights/blog content is managed via Sanity Studio ([src/sanity/client.ts](src/sanity/client.ts)).
- **Local Data**: Some demo/sample insights are stored in [data/insights.ts](data/insights.ts) for development or fallback.
- **How to Update**: Edit in Sanity Studio for production, or update [data/insights.ts](data/insights.ts) for local/demo content.
- **Content Structure**: The `content` field supports HTML and Portable Text blocks.

### Internships

- **Dynamic Internships Page**: Internship listings are rendered from [data/internships.ts](data/internships.ts).
- **Rich Metadata**: Each internship includes title, duration, stipend, location, status, description, responsibilities, requirements, skills, and benefits.
- **How to Update**: Add, edit, or remove internships in [data/internships.ts](data/internships.ts). Each internship is an object in the exported array.
- **Dynamic Routing**: Individual internship details are available at `/internships/[slug]`.
- **Open/Closed Status**: Only internships with `status: "open"` are shown on the main page. Use the helper functions `getOpenInternships()` and `getInternshipBySlug(slug)` from [data/internships.ts](data/internships.ts).

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

# Cloudinary (for resume uploads)
CLOUDINARY_URL=

# Email (Gmail SMTP)
GMAIL_USER=
GMAIL_PASS=
MAIL_FROM="Throughout Team"

# Optional: CORS for job applications API
CORS_ALLOWED_ORIGINS="http://localhost:3000,http://localhost:3001"

# Optional: External APIs
NEXT_PUBLIC_SEO_AUDIT_API_URL="http://127.0.0.1:8000/free-seo-audit"
NEXT_PUBLIC_CONTACT_API_URL=
NEXT_PUBLIC_CONTACT_API_KEY=
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

# ![THROUGHOUT Logo](./public/images/logo.png)

## 📦 Scripts

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 📝 Customization

### Update Contact Information

1. **WhatsApp Number**: Replace the placeholder in [app/page.tsx](app/page.tsx) with your actual WhatsApp number
2. **Email**: Update `hello@throughout.io` with your company email

### Change Colors

The main gradient colors can be adjusted in [app/page.tsx](app/page.tsx):

- Primary gradient: `from-blue-600 to-sky-600`
- Background gradient: `from-blue-50 via-sky-50 to-pink-50`

### Update Content

- Landing page content: edit in [app/page.tsx](app/page.tsx)
- Insights/blog content: edit in Sanity Studio (see [src/sanity/client.ts](src/sanity/client.ts) for config)

## 🧩 API Endpoints

## 🗂️ Sanity Studio Setup

To edit blog/insights content, use Sanity Studio:

1. Clone or access your Sanity Studio project.
2. Run `npx sanity start` in the Studio directory.
3. Configure `src/sanity/client.ts` with your projectId, dataset, and API token.
4. Edit content in Studio and publish.

## 🐳 Docker Usage

To build and run the app with Docker:

```bash
docker build -t throughout .
docker run -p 3000:3000 throughout
```

## 🔑 Environment Example

Copy `.env.example` to `.env.local` and fill in your secrets:

```bash
cp .env.example .env.local
```

## 📤 API Request/Response Formats

### Job Applications

**POST** `/api/job-applications`
Request: `{ name, email, resume, ... }`
Response: `{ success: true, message: "Application received" }`

### SEO Audit

**POST** `/api/seo-audit`
Request: `{ url }`
Response: `{ score, recommendations, ... }`

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
- Security best practices (OWASP Top 10)
- CI/CD ready, Docker support

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

© 2026 Throughout. All rights reserved.

---

**Note**: Make sure to update the WhatsApp number and email address before deploying to production!
