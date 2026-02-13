# Throoout - Smart Software Solutions


Throoout is a modern software engineering company specializing in custom web, mobile, and AI solutions. We build fast, secure, and scalable digital products for startups and enterprises.


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

- Insights/blog content is managed via Sanity CMS ([src/sanity/client.ts](src/sanity/client.ts))
- Rich text fields (like `content`) use Sanity's Portable Text and are rendered with `@portabletext/react` for full formatting (including lists, headings, etc.)
- Images in insights use a fallback mechanism: if an image fails to load, a placeholder is shown


### Editing Content

- To update insights, edit content in your Sanity Studio or via the Sanity API
- The `content` field in Sanity is an array of blocks (type: `array`, of: `block`)
- Lists, headings, and formatting are supported and rendered automatically


### Dependencies

If you add or update content structure, make sure to install:

```bash
npm install @portabletext/react @sanity/image-url next-sanity react-calendly
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

# ![THROOOUT Logo](./public/images/throoout-logo.png)


## 📝 Customization

### Update Contact Information
1. **WhatsApp Number**: Replace the placeholder in [app/page.tsx](app/page.tsx) with your actual WhatsApp number
2. **Email**: Update `hello@Throoout.com` with your company email

### Change Colors

The main gradient colors can be adjusted in [app/page.tsx](app/page.tsx):
- Primary gradient: `from-blue-600 to-sky-600`
- Background gradient: `from-blue-50 via-sky-50 to-pink-50`

### Update Content

- Landing page content: edit in [app/page.tsx](app/page.tsx)
- Insights/blog content: edit in Sanity Studio (see [src/sanity/client.ts](src/sanity/client.ts) for config)


## 📱 Contact Methods

- **Email**: hello@Throoout.com
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

© 2026 Throoout. All rights reserved.

---

**Note**: Make sure to update the WhatsApp number and email address before deploying to production!
