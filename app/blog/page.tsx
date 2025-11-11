import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, Clock } from 'lucide-react'

export const metadata = {
  title: 'Blog',
  description: 'Articles et conseils sur la programmation de clés automobiles et les systèmes anti-démarrage',
}

const articles = [
  {
    slug: 'anti-demarrage-comment-ca-marche',
    title: 'L\'anti-démarrage : comment ça marche ?',
    description: 'Découvrez le fonctionnement des systèmes anti-démarrage immobilisants installés sur les véhicules modernes.',
    duration: '5 min',
    date: '2024-01-15'
  },
  {
    slug: 'clone-vs-ajout-cle',
    title: 'Cloner une clé ou ajouter une clé supplémentaire ?',
    description: 'Quelle est la différence entre le clonage et l\'ajout de clé ? Quand choisir une solution plutôt qu\'une autre ?',
    duration: '4 min',
    date: '2024-01-10'
  },
  {
    slug: 'perte-totale-cles-que-faire',
    title: 'Perte totale de clés : que faire ?',
    description: 'Vos clés ont été perdues ou volées ? Les étapes à suivre en urgence pour déverrouiller votre véhicule.',
    duration: '6 min',
    date: '2024-01-05'
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Conseils et informations sur la programmation de clés automobiles
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Card key={article.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-2">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span className="mr-4">
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{article.duration}</span>
                </div>
                <Button asChild variant="outline">
                  <Link href={`/blog/${article.slug}`}>
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

