import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Wrench } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'À propos',
  description: 'Découvrez Clé-Tronik, service professionnel de programmation de clés automobiles en Île-de-France',
}

export default function AProposPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de Clé-Tronik</h1>
        <p className="text-xl text-gray-600">
          Votre partenaire de confiance pour la programmation de clés automobiles
        </p>
      </div>

      {/* Présentation */}
      <section className="max-w-4xl mx-auto mb-16">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                <strong>Clé-Tronik</strong> est une entreprise spécialisée dans la programmation
                de clés automobiles et la gestion des systèmes anti-démarrage. Basés à Paris,
                nous intervenons rapidement dans toute l'Île-de-France pour répondre à vos besoins.
              </p>
              <p>
                Notre mission est simple : vous offrir un service professionnel, rapide et fiable
                pour toutes vos problématiques de clés automobiles. Que vous ayez perdu vos clés,
                besoin d'une clé de secours ou rencontré un problème de programmation, nous sommes là.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Nos engagements */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nos engagements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
              title: 'Expertise technique',
              description: 'Techniciens certifiés et matériel professionnel de pointe pour garantir une intervention réussie.'
            },
            {
              icon: <Wrench className="h-12 w-12 text-blue-600" />,
              title: 'Intervention mobile',
              description: 'Déplacement à domicile ou sur lieu de travail. Pas de déplacement de véhicule nécessaire.'
            },
            {
              icon: <Shield className="h-12 w-12 text-blue-600" />,
              title: 'Garantie totale',
              description: 'Toutes nos interventions sont garanties 1 an. Assurance RC professionnelle incluse.'
            }
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Matériel */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Notre matériel professionnel</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-600 mb-6">
              Nous utilisons exclusivement des équipements professionnels certifiés pour garantir
              une intervention de qualité sur tous types de véhicules.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {siteConfig.equipment.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Marques supportées */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Marques supportées</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-600 mb-6">
              Nous intervenons sur une large gamme de marques automobiles :
            </p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {siteConfig.brands.map((brand) => (
                <div key={brand.name} className="text-center">
                  <div className="text-3xl mb-2">{brand.logo}</div>
                  <p className="text-sm font-semibold">{brand.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              Compatibilité selon millésime. Vérification par VIN recommandée.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Informations légales */}
      <section className="max-w-4xl mx-auto">
        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Informations légales</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">SIREN :</p>
                <p className="text-gray-600">{siteConfig.legal.siren}</p>
              </div>
              <div>
                <p className="font-semibold">Assurance :</p>
                <p className="text-gray-600">{siteConfig.legal.assurance}</p>
              </div>
              <div>
                <p className="font-semibold">Zone d'intervention :</p>
                <p className="text-gray-600">{siteConfig.zone.region} ({siteConfig.zone.base})</p>
              </div>
              <div>
                <p className="font-semibold">Horaires :</p>
                <p className="text-gray-600">{siteConfig.hours.display}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Avertissement */}
      <section className="max-w-4xl mx-auto mt-12">
        <Card className="border-amber-300 bg-amber-50">
          <CardContent className="p-6">
            <p className="text-sm text-amber-900">
              <strong>⚠️ Avertissement légal :</strong> {siteConfig.legal.warning}
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

