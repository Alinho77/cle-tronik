import { Suspense } from "react";
import MarquesClient from "./MarquesClient";

export const metadata = {
  title: "Marques prises en charge",
  description:
    "Liste complète des marques automobiles prises en charge pour la programmation de clés",
};

export default function MarquesPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 text-center">
          Chargement...
        </div>
      }
    >
      <MarquesClient />
    </Suspense>
  );
}
