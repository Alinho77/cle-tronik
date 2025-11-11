import { MapPin, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Zones d\'intervention',
  description: 'Intervention à domicile dans toute l\'Île-de-France pour la programmation de clés automobiles',
}

export default function ZonesPage() {
  const departments = [
    { code: '75', name: 'Paris' },
    { code: '93', name: 'Seine-Saint-Denis' },
    { code: '92', name: 'Hauts-de-Seine' },
    { code: '94', name: 'Val-de-Marne' },
    { code: '95', name: 'Val-d\'Oise' },
    { code: '78', name: 'Yvelines' },
    { code: '91', name: 'Essonne' },
    { code: '77', name: 'Seine-et-Marne' },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Zones d'intervention</h1>
        <p className="text-xl text-gray-600">
          Service mobile dans toute l'Île-de-France
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">{siteConfig.zone.region}</h2>
              <p className="text-lg text-gray-600 mb-6">
                Intervention à domicile, sur votre lieu de travail ou lieu de panne dans toute la région parisienne
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                8 départements couverts
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <h2 className="text-2xl font-bold mb-6">Départements couverts</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {departments.map((dept) => (
            <Card key={dept.code} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{dept.code}</div>
                <div className="font-semibold">{dept.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main cities */}
        <h2 className="text-2xl font-bold mb-6">Principales communes</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {siteConfig.zone.communes.slice(8).map((commune, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                  <span>{commune}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>ℹ️ Information :</strong> Votre commune n'est pas dans la liste ?
            Contactez-nous au {siteConfig.contact.phoneDisplay} pour vérifier notre zone d'intervention.
            Nous couvrons la majorité de l'Île-de-France.
          </p>
        </div>
      </div>
    </div>
  )
}

