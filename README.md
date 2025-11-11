# 🔑 Clé-Tronik

Site web professionnel pour un service de programmation de clés automobiles à Paris et en Île-de-France.

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui (implémentation personnalisée)
- **Icônes** : lucide-react
- **Formulaires** : React Hook Form + Zod
- **Email** : Nodemailer
- **SEO** : next-seo, sitemap.xml, robots.txt

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes

1. **Cloner le dépôt** :
```bash
git clone <votre-repo>
cd cle-tronik
```

2. **Installer les dépendances** :
```bash
npm install
```

3. **Configurer les variables d'environnement** :
Créez un fichier `.env.local` à la racine du projet :
```env
# SMTP Configuration (email)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app

# Email de réception
EMAIL_TO=contact@cle-tronik.fr

# URL du site (production)
NEXT_PUBLIC_SITE_URL=https://cle-tronik.fr
```

**Note** : Pour Gmail, vous devrez utiliser un [mot de passe d'application](https://support.google.com/accounts/answer/185833) plutôt que votre mot de passe principal.

4. **Lancer le serveur de développement** :
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
cle-tronik/
├── app/                          # App Router (Next.js 14)
│   ├── api/                      # API Routes
│   │   └── appointment/          # Route API pour formulaires
│   ├── blog/                     # Pages blog
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   ├── not-found.tsx             # Page 404
│   ├── robots.ts                 # robots.txt
│   └── sitemap.ts                # sitemap.xml
├── components/                   # Composants React
│   ├── ui/                       # Composants UI de base
│   ├── Header.tsx                # En-tête du site
│   └── Footer.tsx                # Pied de page
├── config/
│   └── site.ts                   # Configuration centralisée
├── lib/
│   ├── utils.ts                  # Utilitaires
│   └── email.ts                  # Service email
└── public/                       # Fichiers statiques
```

## 📝 Configuration

### Personnalisation des informations

Tous les contenus du site sont centralisés dans `config/site.ts`. Vous pouvez modifier :

- Coordonnées (téléphone, email, adresse)
- Horaires
- Zone d'intervention
- Services proposés
- Tarifs
- Marques supportées
- Matériel utilisé
- Informations légales (SIREN, assurance)

### Modification des couleurs

Les couleurs du thème sont définies dans `app/globals.css` via les variables CSS :
```css
--primary: 217 91% 60%;           /* Bleu principal */
--background: 0 0% 100%;          /* Fond blanc */
```

## 🚢 Déploiement

### Vercel (recommandé)

1. **Installer Vercel CLI** :
```bash
npm i -g vercel
```

2. **Déployer** :
```bash
vercel
```

Ou connectez votre dépôt GitHub à [Vercel](https://vercel.com) pour un déploiement automatique.

### Variables d'environnement sur Vercel

Configurez les variables d'environnement dans le tableau de bord Vercel :
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_TO`
- `NEXT_PUBLIC_SITE_URL`

### Autres plateformes

Le projet peut être déployé sur toute plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- Render

## 📧 Configuration email

Le site utilise Nodemailer pour l'envoi d'emails via SMTP. Exemples de configuration :

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=mot-de-passe-app
```

### OVH
```env
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=contact@cle-tronik.fr
SMTP_PASS=votre-mot-de-passe
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=votre-clé-api
```

## 🔒 Sécurité et RGPD

Le site inclut :
- ✅ Page de mentions légales
- ✅ Politique de confidentialité
- ✅ Avertissement légal sur les interventions
- ✅ Conformité RGPD pour les formulaires
- ✅ Protection CSRF (Next.js)

**Important** : Ajoutez une bannière de cookies si vous utilisez des services tiers (Google Analytics, etc.).

## 🎨 Personnalisation avancée

### Ajouter une nouvelle page

1. Créer un fichier dans `app/nouvelle-page/page.tsx`
2. Ajouter le lien dans `components/Header.tsx`

### Modifier le formulaire de rendez-vous

Éditez `app/rendez-vous/page.tsx` et `lib/email.ts`.

### Ajouter des articles de blog

Créez un nouveau dossier dans `app/blog/nouvel-article/page.tsx`.

## 📊 SEO

Le site est optimisé pour le référencement :
- ✅ Métadonnées complètes
- ✅ Schema.org JSON-LD (AutomotiveBusiness)
- ✅ Sitemap XML dynamique
- ✅ Robots.txt configuré
- ✅ URL propres et descriptives
- ✅ Images avec attributs alt
- ✅ Structure sémantique HTML5

## 🛠️ Scripts disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Build de production
npm run start        # Démarre le serveur de production
npm run lint         # Lance ESLint
```

## 📄 Licence

Propriétaire - Clé-Tronik

## 📞 Support

Pour toute question :
- Email : contact@cle-tronik.fr
- Téléphone : 07 68 86 29 98

## 🗺️ Roadmap

Fonctionnalités à venir :
- [ ] Bannière de cookies RGPD
- [ ] Système de blog avec CMS headless
- [ ] Intégration WhatsApp API
- [ ] Calendrier de rendez-vous en ligne
- [ ] Avis clients Google
- [ ] Multilingue (optionnel)

---

**Clé-Tronik** - La clé de votre mobilité 🔑
