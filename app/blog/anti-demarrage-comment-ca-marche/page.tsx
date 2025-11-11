import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'L\'anti-démarrage : comment ça marche ?',
  description: 'Découvrez le fonctionnement des systèmes anti-démarrage immobilisants installés sur les véhicules modernes.',
}

export default function AntiDemarragePage() {
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
        L'anti-démarrage : comment ça marche ?
      </h1>

      <div className="text-gray-600 mb-8">
        Publié le 15 janvier 2024 • 5 min de lecture
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Les systèmes anti-démarrage, aussi appelés <strong>immobilisateurs</strong>, sont devenus
          une norme sur tous les véhicules modernes. Mais savez-vous exactement comment ils fonctionnent ?
        </p>

        <h2>Qu'est-ce qu'un système anti-démarrage ?</h2>
        <p>
          Un système anti-démarrage est un dispositif de sécurité électronique qui empêche le démarrage
          d'un véhicule sans la clé appropriée. Ce système est composé de plusieurs éléments :
        </p>

        <ul>
          <li><strong>Le transpondeur dans la clé</strong> : une puce électronique qui émet un code unique</li>
          <li><strong>L'antenne dans le véhicule</strong> : lit le code émis par la clé</li>
          <li><strong>L'unité de commande (ECU)</strong> : vérifie le code et autorise le démarrage</li>
        </ul>

        <h2>Le fonctionnement en détail</h2>
        <p>
          Quand vous insérez la clé dans le contact ou approchez une clé intelligente, voici ce qui se passe :
        </p>

        <ol>
          <li>L'antenne du véhicule détecte la présence de la clé</li>
          <li>Elle envoie un signal d'interrogation</li>
          <li>Le transpondeur dans la clé répond avec son code unique</li>
          <li>L'ECU compare ce code avec ceux stockés en mémoire</li>
          <li>Si le code est valide, le démarrage est autorisé</li>
        </ol>

        <h2>Les différents types de systèmes IMMO</h2>
        <p>
          Il existe plusieurs générations de systèmes anti-démarrage :
        </p>

        <ul>
          <li><strong>IMMO1</strong> : Premier système, aujourd'hui obsolète</li>
          <li><strong>IMMO2</strong> : VW/Audi des années 1990-2000</li>
          <li><strong>IMMO3</strong> : Norme actuelle, très répandue</li>
          <li><strong>IMMO4</strong> : Systèmes récents, plus complexes</li>
        </ul>

        <h2>Que faire si votre clé ne fonctionne plus ?</h2>
        <p>
          Si votre véhicule refuse de démarrer, cela peut être dû à :
        </p>

        <ul>
          <li>Une clé endommagée ou déprogrammée</li>
          <li>Un problème avec l'antenne du véhicule</li>
          <li>Un dysfonctionnement de l'ECU</li>
        </ul>

        <p>
          Dans ce cas, <strong>Clé-Tronik</strong> peut intervenir pour reprogrammer vos clés
          ou ajouter une clé supplémentaire. Contactez-nous au{' '}
          <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a> pour une intervention rapide.
        </p>
      </div>
    </article>
  )
}
