import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'programmation clé auto',
    'dépannage clé voiture Paris',
    'perte totale clé voiture',
    'programmation transpondeur',
    'réparation télécommande auto',
    'smart key programmation',
    'clé automobile Île-de-France',
    'IMMO bypass',
    'anti-démarrage déverrouillage'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-verification-code',
  },
}

function jsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      "name": siteConfig.name,
      "description": siteConfig.description,
      "url": siteConfig.url,
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": siteConfig.zone.region,
        "addressLocality": siteConfig.zone.base,
        "addressCountry": "FR"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "addressLocality": siteConfig.zone.base,
          "addressRegion": siteConfig.zone.region,
          "addressCountry": "FR"
        },
        "geoRadius": "Île-de-France"
      },
      "priceRange": "$$",
      "image": `${siteConfig.url}/og-image.jpg`
    })
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd()}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

