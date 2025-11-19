import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import Logo from '@/components/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm">{siteConfig.slogan}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{siteConfig.hours.display}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/zones" className="hover:text-white">Zones d'intervention</Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white">À propos</Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Clé-Tronik. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
