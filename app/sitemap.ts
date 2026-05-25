import { MetadataRoute } from 'next';
import { guideItems, siteUrl } from '@/data/items';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/map', '/blueprints', '/fragments', '/materials', '/recipes'];
  const routes = [...staticRoutes, ...guideItems.map((i) => `/${i.slug}`)];
  return routes.map((route) => ({ url: `${siteUrl}${route}/`, lastModified: new Date(), changeFrequency: route === '' ? 'daily' : 'weekly', priority: route === '' ? 1 : 0.8 }));
}
