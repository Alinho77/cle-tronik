import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page introuvable</h2>
        <p className="text-xl text-gray-600 mb-12">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              <Search className="mr-2 h-5 w-5" />
              Voir nos services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

