import MarquesClient from "./MarquesClient";

export const metadata = {
  title: "Marques prises en charge",
  description:
    "Liste complète des marques automobiles prises en charge pour la programmation de clés",
};

export default function MarquesPage() {
  return <MarquesClient />;
}
