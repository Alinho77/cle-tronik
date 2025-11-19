import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Cloner une clé ou ajouter une clé supplémentaire ?',
  description: 'Quelle est la différence entre le clonage et l\'ajout de clé ? Quand choisir une solution plutôt qu\'une autre ?',
}

export default function CloneVsAjoutPage() {
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
        Cloner une clé ou ajouter une clé supplémentaire ?
      </h1>

      <div className="text-gray-600 mb-8">
        Publié le 10 janvier 2024 • 4 min de lecture
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Souhaitez-vous une clé de secours ? Deux solutions s'offrent à vous : le clonage ou l'ajout.
          Voici les différences et quand choisir chacune.
        </p>

        <h2>L'ajout de clé supplémentaire</h2>
        <p>
          <strong>L'ajout</strong> consiste à programmer une nouvelle clé dans le système du véhicule.
          Le véhicule a alors plusieurs clés enregistrées.
        </p>

        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Le véhicule reconnaît plusieurs clés indépendantes</li>
          <li>Chaque clé peut être désactivée individuellement</li>
          <li>Solution recommandée par les constructeurs</li>
          <li>Plus sécurisée</li>
        </ul>

        <p><strong>Quand l'utiliser :</strong></p>
        <ul>
          <li>Vous avez déjà vos clés existantes</li>
          <li>Vous souhaitez une clé de secours</li>
          <li>Vous voulez une solution fiable et sécurisée</li>
        </ul>

        <h2>Le clonage de clé</h2>
        <p>
          <strong>Le clonage</strong> copie les informations d'une clé existante sur une nouvelle clé.
          Les deux clés ont le même identifiant.
        </p>

        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Plus rapide à réaliser</li>
          <li>Peut être moins coûteux</li>
          <li>Pas besoin d'accéder au système de bord</li>
        </ul>

        <p><strong>Inconvénients :</strong></p>
        <ul>
          <li>Impossible de désactiver une clé sans désactiver l'autre</li>
          <li>En cas de perte, les deux clés sont compromises</li>
          <li>Non recommandé pour la sécurité</li>
        </ul>

        <p><strong>Quand l'utiliser :</strong></p>
        <ul>
          <li>Urgence et intervention rapide nécessaire</li>
          <li>Situation temporaire</li>
          <li>L'ajout n'est pas techniquement possible</li>
        </ul>

        <h2>Notre recommandation</h2>
        <p>
          Chez <strong>Clé-Tronik</strong>, nous recommandons fortement l'<strong>ajout de clé</strong>
          pour une solution durable et sécurisée. Le clonage ne doit être utilisé qu'en dernier recours
          ou en situation d'urgence.
        </p>

        <p>
          Contactez-nous au <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a> pour discuter de votre situation
          et obtenir un devis personnalisé.
        </p>
      </div>
    </article>
  )
}
