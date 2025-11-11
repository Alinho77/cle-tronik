import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Tarifs',
  description: 'Tarifs transparents pour la programmation de clés automobiles à Paris et Île-de-France',
}

export default function TarifsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarifs</h1>
        <p className="text-xl text-gray-600">
          Tarifs transparents et sans surprise. Devis gratuit avant intervention.
        </p>
      </div>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4 text-left font-semibold">Type de clé</th>
              <th className="border p-4 text-center font-semibold">Prix</th>
              <th className="border p-4 text-center font-semibold">Garantie</th>
              <th className="border p-4 text-center font-semibold">Délai</th>
            </tr>
          </thead>
          <tbody>
            {siteConfig.pricing.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border p-4">{item.type}</td>
                <td className="border p-4 text-center font-semibold text-blue-600">{item.price}</td>
                <td className="border p-4 text-center">{item.guarantee}</td>
                <td className="border p-4 text-center">{item.delay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🚗 Intervention mobile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Déplacement à domicile ou sur lieu de travail en Île-de-France</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💰 Diagnostic gratuit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Diagnostic gratuit si intervention confirmée. Pas de surprise.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🛡️ Garantie 1 an</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Toutes nos interventions sont garanties 1 an. Prix tout compris.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>💡 Note :</strong> Les tarifs indiqués sont des tarifs indicatifs. Le prix final peut varier selon le modèle de véhicule et la complexité de l'intervention.
          Un devis gratuit et sans engagement vous sera toujours fourni avant toute intervention.
        </p>
      </div>
    </div>
  )
}

