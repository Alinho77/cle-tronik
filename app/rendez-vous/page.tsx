"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BRANDS } from "@/lib/brands";

const keyTypes = [
  "Clé classique",
  "Clé à puce",
  "Télécommande",
  "Smart Key / Clé intelligente",
  "Ajout clé supplémentaire",
  "Perte totale",
  "Autre",
];

export default function RendezVousPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isBrandPickerOpen, setIsBrandPickerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBrandPickerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBrandPickerOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(e.currentTarget);
    formData.set("brand", selectedBrand);
    const data = {
      brand: formData.get("brand"),
      model: formData.get("model"),
      year: formData.get("year"),
      keyType: formData.get("keyType"),
      address: formData.get("address"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error || "Erreur lors de l'envoi");
      }

      setSubmitSuccess(true);
      setSelectedBrand("");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.";
      setSubmitError(message);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Demande envoyée !</h2>
            <p className="text-lg text-gray-600 mb-6">
              Votre demande de devis a été transmise avec succès.
            </p>
            <p className="text-gray-600 mb-8">
              Nous vous contacterons dans les plus brefs délais par téléphone ou
              email pour confirmer votre rendez-vous.
            </p>
            <Button onClick={() => setSubmitSuccess(false)} variant="outline">
              Faire une autre demande
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demande de rendez-vous
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous pour recevoir un devis gratuit
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informations du véhicule</CardTitle>
            <CardDescription>
              Précisez les détails de votre véhicule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="brand">Marque *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="brand"
                      name="brand"
                      required
                      className="flex-1"
                      value={selectedBrand}
                      onChange={(event) => setSelectedBrand(event.target.value)}
                      placeholder="Ex: Renault, Peugeot, BMW..."
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsBrandPickerOpen(true)}
                    >
                      Choisir
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Cliquez sur « Choisir » pour sélectionner une marque ou
                    saisissez-la manuellement.
                  </p>
                </div>
                <div>
                  <Label htmlFor="model">Modèle *</Label>
                  <Input
                    id="model"
                    name="model"
                    required
                    placeholder="Ex: Megane, 308, Serie 3..."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Année *</Label>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    required
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    placeholder="Ex: 2015"
                  />
                </div>
                <div>
                  <Label htmlFor="keyType">Type de clé *</Label>
                  <select
                    id="keyType"
                    name="keyType"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Sélectionnez...</option>
                    {keyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Adresse d'intervention *</Label>
                <Input
                  id="address"
                  name="address"
                  required
                  placeholder="Ex: 123 Avenue des Champs-Élysées, Paris 75008"
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Vos coordonnées</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Ex: Jean Dupont"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={siteConfig.contact.phoneDisplay}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean.dupont@exemple.fr"
                  />
                </div>

                <div className="mt-4">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Précisions supplémentaires sur votre demande..."
                  />
                </div>
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  {submitError}
                </div>
              )}

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-900">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <p>
                  <strong>Réponse rapide :</strong> Nous vous recontactons sous
                  2 heures aux heures d'ouverture (8h-20h).
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>

              <p className="text-xs text-center text-gray-500">
                En envoyant ce formulaire, vous acceptez notre{" "}
                <a href="/politique-confidentialite" className="underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      {isBrandPickerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIsBrandPickerOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-700"
              aria-label="Fermer"
              onClick={() => setIsBrandPickerOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold">
              Sélectionnez votre marque
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Faites défiler la liste et cliquez sur la marque de votre
              véhicule.
            </p>
            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex gap-4">
                {BRANDS.map((brand) => (
                  <button
                    key={brand.slug}
                    type="button"
                    onClick={() => {
                      setSelectedBrand(brand.name);
                      setIsBrandPickerOpen(false);
                    }}
                    className="flex min-w-[120px] flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-center shadow-sm transition hover:border-blue-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <span className="text-3xl">
                      {brand.Icon ? (
                        <brand.Icon
                          size={32}
                          className="text-neutral-700"
                          aria-hidden="true"
                        />
                      ) : (
                        brand.fallback ?? ""
                      )}
                    </span>
                    <span className="mt-2 text-sm font-semibold text-gray-700">
                      {brand.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
