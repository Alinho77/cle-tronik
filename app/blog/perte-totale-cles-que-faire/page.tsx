import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Perte totale de clés : que faire ?',
  description: 'Vos clés ont été perdues ou volées ? Les étapes à suivre en urgence pour déverrouiller votre véhicule.',
}

export default function PerteTotalePage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl prose prose-lg">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
        </Button>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Perte totale de clés : que faire ?
      </h1>

      <div className="text-gray-600 mb-8">
        Publié le 5 janvier 2024 • 6 min de lecture
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Vous avez perdu toutes vos clés ou elles ont été volées ? Ne paniquez pas !
          Suivez ces étapes pour résoudre rapidement la situation.
        </p>

        <h2>1. Vérifiez bien que les clés sont perdues</h2>
        <p>
          Avant tout, assurez-vous d'avoir bien perdu toutes vos clés :
        </p>
        <ul>
          <li>Cherchez dans vos poches, sacs, et habitudes</li>
          <li>Vérifiez les endroits fréquentés récemment</li>
          <li>Demandez à votre entourage</li>
        </ul>

        <h2>2. Ne tentez PAS de déverrouiller vous-même</h2>
        <p>
          <strong>⚠️ Important :</strong> Ne tentez surtout pas d'ouvrir votre véhicule vous-même :
        </p>
        <ul>
          <li>Risque d'endommager la serrure</li>
          <li>Déclenchement possible de l'alarme</li>
          <li>Coûts de réparation supplémentaires</li>
        </ul>

        <h2>3. Contactez un professionnel</h2>
        <p>
          Appelez un professionnel de la programmation de clés comme <strong>Clé-Tronik</strong> :
        </p>
        <ul>
          <li>Diagnostic gratuit</li>
          <li>Intervention mobile rapide</li>
          <li>Équipement professionnel</li>
          <li>Prix transparent</li>
        </ul>

        <h2>4. Rassemblez les documents nécessaires</h2>
        <p>
          Pour des raisons de sécurité, le professionnel vous demandera :
        </p>
        <ul>
          <li><strong>La carte grise du véhicule</strong> (obligatoire)</li>
          <li><strong>Une pièce d'identité</strong> (obligatoire)</li>
          <li>Le numéro de série (VIN) du véhicule</li>
          <li>Le code-barres du véhicule si disponible</li>
        </ul>

        <h2>5. Le déroulement de l'intervention</h2>
        <p>
          Une fois sur place, le technicien va :
        </p>
        <ol>
          <li>Vérifier votre identité et vos documents</li>
          <li>Diagnostiquer le système anti-démarrage</li>
          <li>Ouvrir le véhicule si nécessaire</li>
          <li>Programmer une ou plusieurs nouvelles clés</li>
          <li>Vous fournir une facture</li>
        </ol>

        <h2>Combien ça coûte ?</h2>
        <p>
          Le tarif pour une perte totale de clés varie selon :
        </p>
        <ul>
          <li>La marque et le modèle du véhicule</li>
          <li>L'âge du véhicule</li>
          <li>Le système anti-démarrage</li>
          <li>Le type de clé (standard, télécommande, smart key)</li>
        </ul>

        <p>
          Comptez généralement entre <strong>150€ et 300€</strong> pour une perte totale.
          N'hésitez pas à demander un devis gratuit.
        </p>

        <h2>Intervention d'urgence à Paris et Île-de-France</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
            <Phone className="mr-2 h-6 w-6" />
            Besoin d'une intervention urgente ?
          </h3>
          <p className="text-red-900 mb-4">
            <strong>Clé-Tronik</strong> intervient 7j/7 de 8h à 20h dans toute l'Île-de-France.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Appeler le {siteConfig.contact.phoneDisplay}
            </a>
          </Button>
        </div>

        <p>
          Pour toute question ou demande de devis, contactez-nous. Nous sommes là pour vous aider !
        </p>
      </div>
    </article>
  )
}

