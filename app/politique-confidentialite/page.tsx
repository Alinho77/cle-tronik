import { Card, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles - Clé-Tronik',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Politique de confidentialité</h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <p className="lead">
              La présente politique de confidentialité a pour but d'informer les utilisateurs du site
              <strong>{siteConfig.url}</strong> sur la manière dont <strong>Clé-Tronik</strong>
              collecte, utilise et protège les informations personnelles qui peuvent être communiquées
              lors de l'utilisation du site.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles collectées sur ce site est :
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
              <h2 className="text-2xl font-bold mb-4">2. Données collectées</h2>
              <p>
                Nous collectons les données personnelles suivantes :
              </p>
              <ul>
                <li><strong>Données d'identification :</strong> nom, prénom, adresse, numéro de téléphone, adresse email</li>
                <li><strong>Données relatives au véhicule :</strong> marque, modèle, année, type de clé</li>
                <li><strong>Données de connexion :</strong> adresse IP, logs de connexion (de manière anonymisée)</li>
              </ul>
              <p>
                Ces données sont collectées via :
              </p>
              <ul>
                <li>Les formulaires de contact et demande de devis</li>
                <li>Les échanges téléphoniques</li>
                <li>La navigation sur le site (cookies techniques uniquement)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Finalité du traitement</h2>
              <p>
                Les données personnelles collectées sont utilisées pour :
              </p>
              <ul>
                <li>Répondre à vos demandes de renseignements</li>
                <li>Traiter vos demandes de devis et de rendez-vous</li>
                <li>Effectuer les interventions demandées</li>
                <li>Gérer la relation client</li>
                <li>Établir les factures</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Base légale du traitement</h2>
              <p>
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul>
                <li><strong>L'exécution d'un contrat :</strong> pour la fourniture de services</li>
                <li><strong>Le consentement :</strong> pour l'envoi d'informations commerciales</li>
                <li><strong>Les intérêts légitimes :</strong> pour la gestion de la relation client</li>
                <li><strong>Les obligations légales :</strong> pour la comptabilité et facturation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul>
                <li><strong>Données clients :</strong> durée de la relation contractuelle + 3 ans</li>
                <li><strong>Données comptables :</strong> 10 ans conformément à la législation en vigueur</li>
                <li><strong>Données de prospects :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Destinataires des données</h2>
              <p>
                Vos données personnelles sont destinées à <strong>Clé-Tronik</strong> et peuvent être
                transmises :
              </p>
              <ul>
                <li>Aux services comptables et fiscaux</li>
                <li>Aux prestataires techniques (hébergement, emailing)</li>
                <li>En cas d'obligation légale ou judiciaire</li>
              </ul>
              <p>
                Vos données ne sont en aucun cas vendues ou cédées à des tiers à des fins commerciales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul>
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p>
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site.
                Aucun cookie de tracking publicitaire n'est utilisé.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Sécurité</h2>
              <p>
                <strong>Clé-Tronik</strong> met en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données personnelles contre la perte, la destruction,
                l'altération ou l'accès non autorisé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p>
                Pour toute question concernant la présente politique de confidentialité, vous pouvez
                nous contacter :
              </p>
              <ul>
                <li>Par email : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
                <li>Par téléphone : <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a></li>
                <li>Par courrier : {siteConfig.contact.address}</li>
              </ul>
              <p>
                Vous avez également le droit de déposer une plainte auprès de la Commission Nationale
                de l'Informatique et des Libertés (CNIL) :
              </p>
              <ul>
                <li>Website : cnil.fr</li>
                <li>Adresse : 3 Place de Fontenoy - TSA 80715, 75334 Paris Cedex 07</li>
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

