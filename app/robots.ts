import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const environment = process.env.VERCEL_ENV;
  const isProduction = environment === 'production';
  const siteUrl = 'https://www.throoout.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Example: disallow private paths in production only
        // disallow: isProduction ? ['/private/', '/admin/'] : []
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
