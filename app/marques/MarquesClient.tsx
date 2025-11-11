"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  BRAND_BY_SLUG,
  BRAND_ICON_BY_NAME,
  BRAND_SLUG_BY_NAME,
} from "@/lib/brands";
import { siteConfig } from "@/config/site";
import { BrandLeadModal } from "@/components/BrandLeadModal";

export default function MarquesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    const slug = searchParams.get("brand");
    const brandInfo = slug ? BRAND_BY_SLUG[slug] : undefined;

    if (brandInfo) {
      setSelectedBrand(brandInfo.name);
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const handleCardClick = (brand: string) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
    const slug = BRAND_SLUG_BY_NAME[brand];
    if (slug) {
      router.replace(`/marques?brand=${slug}`, { scroll: false });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrand(null);
    router.replace("/marques", { scroll: false });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {toast && (
        <div
          className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <span>{toast.message}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-xs font-semibold uppercase tracking-wide text-current"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Marques prises en charge
        </h1>
        <p className="text-xl text-gray-600">
          Compatibilité selon millésime. Vérification par VIN recommandée.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2">
          {siteConfig.brands.map((marque) => {
            const Icon = BRAND_ICON_BY_NAME[marque.name];
            return (
              <button
                type="button"
                key={marque.name}
                className="flex w-full flex-col items-center rounded-lg border border-gray-200 p-6 text-center shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => handleCardClick(marque.name)}
              >
                <div className="mb-3">
                  {Icon ? (
                    <Icon size={32} className="text-neutral-700" />
                  ) : (
                    <span className="text-4xl">{marque.logo}</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{marque.name}</h3>
              </button>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <p className="mb-4 text-sm text-amber-900">
            <strong>⚠️ Important :</strong>
          </p>
          <ul className="ml-4 list-disc space-y-2 text-sm text-amber-900">
            <li>La compatibilité dépend du millésime de votre véhicule</li>
            <li>Vérification du VIN recommandée avant intervention</li>
            <li>
              Certains modèles récents peuvent nécessiter un outil spécifique
            </li>
            <li>
              Contactez-nous pour confirmer la faisabilité de votre intervention
            </li>
          </ul>
        </div>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
          <p className="text-blue-900">
            <strong>Votre marque n'est pas listée ?</strong> Contactez-nous au{" "}
            {siteConfig.contact.phoneDisplay}. Nous pouvons potentiellement
            intervenir sur d'autres marques selon le modèle.
          </p>
        </div>
      </div>

      <BrandLeadModal
        open={isModalOpen}
        brand={selectedBrand}
        onClose={handleCloseModal}
        onSuccess={() =>
          setToast({
            type: "success",
            message: "Demande envoyée avec succès !",
          })
        }
      />
    </div>
  );
}
