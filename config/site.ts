export const siteConfig = {
  name: "Clé-Tronik",
  slogan: "La clé de votre mobilité",
  url: "https://cle-tronik.fr",
  description:
    "Service professionnel de programmation de clés automobiles à Paris et en Île-de-France. Intervention mobile 7j/7 pour Renault, Peugeot, Citroën, Toyota, BMW, Mercedes et bien plus.",

  contact: {
    phone: "+33768862998",
    phoneDisplay: "07 68 86 29 98",
    whatsapp: "+33768862998",
    email: "contact@cle-tronik.fr",
    address: "Paris, Île-de-France",
  },

  hours: {
    monday: "8h - 20h",
    tuesday: "8h - 20h",
    wednesday: "8h - 20h",
    thursday: "8h - 20h",
    friday: "8h - 20h",
    saturday: "8h - 20h",
    sunday: "8h - 20h",
    display: "8h – 20h, 7j/7",
  },

  zone: {
    region: "Île-de-France",
    base: "Paris",
    communes: [
      "Paris (75)",
      "Seine-Saint-Denis (93)",
      "Hauts-de-Seine (92)",
      "Val-de-Marne (94)",
      "Val-d'Oise (95)",
      "Yvelines (78)",
      "Essonne (91)",
      "Seine-et-Marne (77)",
      // Principales communes
      "Boulogne-Billancourt",
      "Nanterre",
      "Saint-Denis",
      "Argenteuil",
      "Montreuil",
      "Versailles",
      "Créteil",
      "Aulnay-sous-Bois",
      "Vitry-sur-Seine",
      "Colombes",
      "Asnières-sur-Seine",
      "Rueil-Malmaison",
      "Cergy",
      "Courbevoie",
      "Antony",
    ],
  },

  equipment: [
    {
      name: "Autel IM508S",
      description: "Diagnostic avancé et programmation multi-marques",
    },
    { name: "XP400", description: "Programmation clés et télécommandes" },
    {
      name: "Xhorse Key Tool Max Pro",
      description: "Outil professionnel de programmation",
    },
    { name: "Autel APB112", description: "Programmation spécialisée BMW" },
    {
      name: "Clés universelles Xhorse",
      description: "Clés transpondeur universelles",
    },
  ],

  brands: [
    {
      name: "Renault",
      logo: "🟡",
      immo: "IMMO3, IMMO4",
    },
    {
      name: "Peugeot",
      logo: "🦁",
      immo: "IMMO3, PSA Code",
    },
    {
      name: "Citroën",
      logo: "😎",
      immo: "IMMO3, PSA Code",
    },
    {
      name: "Toyota",
      logo: "🔹",
      immo: "Toyota IdBox",
    },
    {
      name: "Lexus",
      logo: "✨",
      immo: "Lexus Smart Key",
    },
    {
      name: "VW",
      logo: "🔷",
      immo: "IMMO2, IMMO3, IMMO4",
    },
    {
      name: "Audi",
      logo: "🔸",
      immo: "IMMO2, IMMO3, IMMO4",
    },
    {
      name: "Skoda",
      logo: "🚗",
      immo: "IMMO3, IMMO4",
    },
    {
      name: "BMW",
      logo: "⚪",
      immo: "IMMO3, IMMO4, CAS",
    },
    {
      name: "Mini",
      logo: "🇬🇧",
      immo: "IMMO3, IMMO4",
    },
    {
      name: "Mercedes",
      logo: "⭐",
      immo: "W210-W251, ESL-EIS",
    },
    {
      name: "Ford",
      logo: "🟦",
      immo: "PAT, PAT-S, FP",
    },
    {
      name: "Nissan",
      logo: "🐋",
      immo: "NAT1, NAT2",
    },
    {
      name: "Hyundai",
      logo: "H",
      immo: "Hyundai Code",
    },
    {
      name: "Kia",
      logo: "K",
      immo: "Kia Code",
    },
  ],

  services: [
    {
      id: "1",
      title: "Programmation de clé / transpondeur",
      description:
        "Programmation complète d'une nouvelle clé ou transpondeur pour votre véhicule. Compatible avec tous les systèmes IMMO.",
      duration: "30-60 min",
      price: "À partir de 120€",
    },
    {
      id: "2",
      title: "Ajout d'une clé supplémentaire",
      description:
        "Ajout d'une clé de secours sans perte de vos clés existantes. Rapide et sûr.",
      duration: "20-40 min",
      price: "À partir de 100€",
    },
    {
      id: "3",
      title: "Perte totale de clé",
      description:
        "Service d'urgence pour perte complète des clés. Diagnostic et reprogrammation complète.",
      duration: "1-2h",
      price: "À partir de 180€",
    },
    {
      id: "4",
      title: "Réparation ou clonage de télécommande",
      description:
        "Réparation de télécommande défectueuse ou clonage d'une nouvelle. Fixation ou programmation selon modèle.",
      duration: "15-45 min",
      price: "À partir de 80€",
    },
    {
      id: "7",
      title: "Programmation Smart Key",
      description:
        "Programmation de clés intelligentes sans contact (Push-to-Start) pour véhicules modernes.",
      duration: "45-90 min",
      price: "À partir de 150€",
    },
    {
      id: "5",
      title: "Lecture / écriture EEPROM ou MCU",
      description:
        "Intervention sur puce EEPROM ou MCU pour contournement anti-démarrage ou réparation électronique.",
      duration: "1-3h",
      price: "Sur devis",
    },
    {
      id: "6",
      title: "Réparation / remplacement ESL-EIS Mercedes",
      description:
        "Spécialité Mercedes : réparation ou remplacement des modules ESL (EIS) défectueux.",
      duration: "2-4h",
      price: "Sur devis",
    },
  ],

  pricing: [
    {
      type: "Clé classique + programmation",
      price: "120€",
      guarantee: "1 an",
      delay: "30-60 min",
    },
    {
      type: "Clé à puce + programmation",
      price: "140€",
      guarantee: "1 an",
      delay: "30-60 min",
    },
    {
      type: "Télécommande + programmation",
      price: "160€",
      guarantee: "1 an",
      delay: "30-60 min",
    },
    {
      type: "Smart Key / Clé intelligente",
      price: "200€",
      guarantee: "1 an",
      delay: "45-90 min",
    },
    {
      type: "Ajout clé supplémentaire",
      price: "100€",
      guarantee: "1 an",
      delay: "20-40 min",
    },
    {
      type: "Perte totale + urgence",
      price: "200€",
      guarantee: "1 an",
      delay: "1-2h",
    },
    {
      type: "Diagnostic (remboursé si intervention)",
      price: "0€",
      guarantee: "-",
      delay: "Gratuit",
    },
  ],

  legal: {
    siren: "XXX XXX XXX",
    assurance: "RC Pro + Garantie travaux",
    warning:
      "Intervention uniquement sur présentation de la carte grise et d'une pièce d'identité. Diagnostic gratuit si intervention confirmée.",
  },
};

export type SiteConfig = typeof siteConfig;
