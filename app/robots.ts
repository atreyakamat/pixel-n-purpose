import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://pixelnpurpose.com/sitemap.xml',
    host: 'https://pixelnpurpose.com',
  }
}
