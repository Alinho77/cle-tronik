import { Phone, Clock, CreditCard, MapPin, ChevronRight, Star, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/config/site'
import { formatPhoneNumber } from '@/lib/utils'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Clé-Tronik
              <br />
              <span className="text-blue-200">Programmation et dépannage de clés auto</span>
              <br />
              <span className="text-blue-100">à Paris et en Île-de-France</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-50 leading-relaxed">
              Nos techniciens se déplacent partout en Île-de-France pour remplacer, réparer ou programmer vos clés auto, sur place et sans passage en concession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700">
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Urgence ? Appeler maintenant
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/rendez-vous">
                  Demander un devis gratuit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm md:text-base text-blue-100 opacity-90">
              Réponse en moins de 10 minutes.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                <MapPin className="mr-1 h-4 w-4" />
                Intervention mobile
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                <CreditCard className="mr-1 h-4 w-4" />
                Paiement CB
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                <Clock className="mr-1 h-4 w-4" />
                Facture
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Appelez-nous",
                description: `Contactez-nous au ${siteConfig.contact.phoneDisplay} ou demandez un devis en ligne. Diagnostic gratuit.`,
              },
              {
                step: "2",
                title: "Intervention rapide",
                description: "Nous nous déplaçons chez vous en Île-de-France en 30-60 minutes selon disponibilité.",
              },
              {
                step: "3",
                title: "Programmation",
                description: "Programmation de votre clé sur place en 20 minutes à 2 heures selon le modèle.",
              }
            ].map((item) => (
              <Card key={item.step} className="border-2">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Marques prises en charge
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {siteConfig.brands.map((brand) => (
              <Card key={brand.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-4xl mb-2">{brand.logo}</div>
                  <p className="font-semibold">{brand.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            Compatibilité selon millésime. Vérification par VIN recommandée.
          </p>
        </div>
      </section>

      {/* Urgent Lost Key */}
      <section className="py-16 bg-red-50 border-t border-b border-red-100">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-red-300">
            <CardContent className="p-8">
              <div className="flex items-start">
                <AlertCircle className="h-12 w-12 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-red-900 mb-4">
                    Perte totale de clés ?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Besoin urgent d'intervention ? Appelez-nous maintenant pour une intervention rapide.
                  </p>
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <a href={`tel:${siteConfig.contact.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Appeler le {formatPhoneNumber(siteConfig.contact.phone)}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Témoignages clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marc L.",
                location: "Nanterre",
                text: "Perte totale de clé sur ma BMW. Intervention en moins d'une heure et programmation impeccable. Service professionnel et efficace !",
                rating: 5
              },
              {
                name: "Sophie D.",
                location: "Montreuil",
                text: "Très contente du service. Ajout d'une clé supplémentaire sur ma Peugeot 308, tout s'est bien passé. Prix correct et intervention rapide.",
                rating: 5
              },
              {
                name: "Pierre M.",
                location: "Versailles",
                text: "Réparation de télécommande Mercedes. Le technicien a su résoudre le problème rapidement. Je recommande vivement Clé-Tronik !",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Matériel professionnel
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Outils certifiés pour une intervention de qualité
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {siteConfig.equipment.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une intervention ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous maintenant pour un diagnostic gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
            <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Urgence ? Appeler maintenant
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/rendez-vous">
                Demander un devis gratuit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm md:text-base text-blue-100 opacity-90">
            Réponse en moins de 10 minutes.
          </p>
        </div>
      </section>
    </>
  )
}
