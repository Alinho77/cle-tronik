import { Card, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Clé-Tronik',
}

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Mentions légales</h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
              <p>
                Le site <strong>{siteConfig.url}</strong> est édité par :
              </p>
              <ul>
                <li><strong>Clé-Tronik</strong></li>
                <li>SIREN : {siteConfig.legal.siren}</li>
                <li>Adresse : {siteConfig.contact.address}</li>
                <li>Email : {siteConfig.contact.email}</li>
                <li>Téléphone : {siteConfig.contact.phoneDisplay}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <ul>
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li>Website : vercel.com</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est la propriété
                exclusive de <strong>Clé-Tronik</strong>, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
                autorisation écrite préalable de <strong>Clé-Tronik</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est
                périodiquement remis à jour. Toutefois, <strong>Clé-Tronik</strong> ne peut être tenu
                responsable des modifications administratives et juridiques survenant après publication
                ou de toute force majeure.
              </p>
              <p>
                En aucun cas, <strong>Clé-Tronik</strong> ne peut être tenu responsable des dommages
                directs ou indirects causés au matériel de l'utilisateur, lors de l'accès au site
                <strong>{siteConfig.url}</strong>, et résultant soit de l'utilisation d'un matériel ne
                répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Liens hypertextes</h2>
              <p>
                Le site <strong>{siteConfig.url}</strong> contient des liens hypertextes vers d'autres
                sites. Cependant, <strong>Clé-Tronik</strong> n'a pas la possibilité de vérifier
                l'ensemble du contenu des sites ainsi visités, et n'assume en conséquence aucune
                responsabilité de ce fait.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige en
                relation avec l'utilisation du site <strong>{siteConfig.url}</strong> est du ressort
                exclusif des tribunaux de Paris.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
              <p>
                Pour toute question ou réclamation concernant le présent site, vous pouvez nous
                contacter :
              </p>
              <ul>
                <li>Par email : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
                <li>Par téléphone : <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a></li>
                <li>Par courrier : {siteConfig.contact.address}</li>
              </ul>
            </section>

            <div className="mt-12 text-sm text-gray-600">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

