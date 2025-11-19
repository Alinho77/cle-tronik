import { Clock, Euro } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Services & Tarifs',
  description: 'Découvrez tous nos services et tarifs de programmation de clés automobiles en Île-de-France',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Tarifs</h1>
        <p className="text-xl text-gray-600">
          Programmation professionnelle de clés automobiles pour tous types de véhicules
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {siteConfig.services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="mr-2 h-4 w-4" />
                  {service.duration}
                </div>
                <div className="flex items-center font-semibold text-blue-600">
                  <Euro className="mr-1 h-4 w-4" />
                  {service.price}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-6 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-900">
          <strong>⚠️ Avertissement légal :</strong> {siteConfig.legal.warning}
        </p>
      </div>
    </div>
  )
}
