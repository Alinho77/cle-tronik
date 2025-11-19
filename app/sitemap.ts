import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/zones',
    '/marques',
    '/rendez-vous',
    '/blog',
    '/a-propos',
    '/mentions-legales',
    '/politique-confidentialite',
    '/blog/anti-demarrage-comment-ca-marche',
    '/blog/clone-vs-ajout-cle',
    '/blog/perte-totale-cles-que-faire',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
