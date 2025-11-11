import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Marques prises en charge',
  description: 'Liste complète des marques automobiles prises en charge pour la programmation de clés',
}

export default function MarquesPage() {
  const marquesParGroupe = [
    {
      groupe: 'Groupe PSA',
      marques: ['Peugeot', 'Citroën']
    },
    {
      groupe: 'Groupe Renault-Nissan',
      marques: ['Renault', 'Nissan']
    },
    {
      groupe: 'Groupe Volkswagen',
      marques: ['VW', 'Audi', 'Skoda']
    },
    {
      groupe: 'BMW Group',
      marques: ['BMW', 'Mini']
    },
    {
      groupe: 'Hyundai-Kia',
      marques: ['Hyundai', 'Kia']
    },
    {
      groupe: 'Toyota-Lexus',
      marques: ['Toyota', 'Lexus']
    },
    {
      groupe: 'Autres',
      marques: ['Mercedes', 'Ford']
    }
  ]

  const marqueMap = new Map(siteConfig.brands.map(b => [b.name, b]))

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Marques prises en charge</h1>
        <p className="text-xl text-gray-600">
          Compatibilité selon millésime. Vérification par VIN recommandée.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="multiple" defaultValue={[]}>
          {marquesParGroupe.map((groupe) => (
            <AccordionItem key={groupe.groupe} value={groupe.groupe}>
              <AccordionTrigger value={groupe.groupe}>
                <span className="text-xl font-semibold">{groupe.groupe}</span>
              </AccordionTrigger>
              <AccordionContent value={groupe.groupe}>
                {groupe.marques.map((nomMarque) => {
                  const marque = marqueMap.get(nomMarque)
                  if (!marque) return null

                  return (
                    <div key={nomMarque} className="mb-4 last:mb-0 pb-4 border-b last:border-0">
                      <div className="flex items-center mb-2">
                        <span className="text-3xl mr-3">{marque.logo}</span>
                        <h3 className="text-lg font-bold">{marque.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-11">
                        <strong>Systèmes anti-démarrage :</strong> {marque.immo}
                      </p>
                    </div>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-900 mb-4">
            <strong>⚠️ Important :</strong>
          </p>
          <ul className="text-sm text-amber-900 space-y-2 ml-4 list-disc">
            <li>La compatibilité dépend du millésime de votre véhicule</li>
            <li>Vérification du VIN recommandée avant intervention</li>
            <li>Certains modèles récents peuvent nécessiter un outil spécifique</li>
            <li>Contactez-nous pour confirmer la faisabilité de votre intervention</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-blue-900">
            <strong>Votre marque n'est pas listée ?</strong> Contactez-nous au {siteConfig.contact.phoneDisplay}.
            Nous pouvons potentiellement intervenir sur d'autres marques selon le modèle.
          </p>
        </div>
      </div>
    </div>
  )
}

