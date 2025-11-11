# 🚀 Guide de déploiement - Clé-Tronik

## Déploiement sur Vercel

### Méthode 1 : Déploiement depuis Git (Recommandé)

1. **Poussez votre code sur GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/cle-tronik.git
   git push -u origin main
   ```

2. **Connectez votre repo à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub/GitLab
   - Cliquez sur "New Project"
   - Importez votre repository
   - Vercel détectera automatiquement Next.js

3. **Configurez les variables d'environnement**
   Dans les paramètres du projet Vercel, ajoutez :
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=contact@cle-tronik.fr
   SMTP_PASS=votre_mot_de_passe_app
   EMAIL_TO=contact@cle-tronik.fr
   NEXT_PUBLIC_SITE_URL=https://cle-tronik.fr
   ```

4. **Déployez !**
   - Vercel déploie automatiquement à chaque push
   - Le déploiement prend 1-2 minutes

### Méthode 2 : Déploiement via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## Configuration du domaine personnalisé

1. Dans Vercel Dashboard → Settings → Domains
2. Ajoutez votre domaine `cle-tronik.fr`
3. Suivez les instructions pour configurer les DNS :
   ```
   Type A : @ → 76.76.21.21
   Type CNAME : www → cname.vercel-dns.com
   ```

## Configuration Email

### Option 1 : Gmail (Simple)

1. Activez la validation en 2 étapes sur votre compte Gmail
2. Générez un mot de passe d'application : [Google Account Settings](https://myaccount.google.com/apppasswords)
3. Utilisez ce mot de passe dans `SMTP_PASS`

### Option 2 : OVH/Mail professionnel

```env
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=contact@cle-tronik.fr
SMTP_PASS=votre_mot_de_passe
```

### Option 3 : SendGrid (Recommandé pour la production)

1. Créez un compte sur [SendGrid](https://sendgrid.com)
2. Générez une API Key
3. Configurez :
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=votre_api_key
   ```

## Vérifications post-déploiement

- [ ] Le site charge correctement
- [ ] Les formulaires fonctionnent
- [ ] Les emails sont reçus
- [ ] Le sitemap.xml est accessible : `/sitemap.xml`
- [ ] Le robots.txt est accessible : `/robots.txt`
- [ ] Les métadonnées SEO sont correctes
- [ ] Le site est responsive sur mobile

## Monitoring

### Vercel Analytics
- Surveillez les performances dans le dashboard Vercel
- Configurez les alertes pour les erreurs

### Google Search Console
1. Ajoutez votre site
2. Vérifiez la propriété via DNS
3. Soumettez le sitemap
4. Surveillez l'indexation

## Optimisations de performance

- ✅ Images optimisées avec Next.js Image
- ✅ Code splitting automatique
- ✅ Préchargement des polices
- ✅ CSS/JS minifiés en production
- ✅ Lazy loading des composants

## Sécurité

- ✅ HTTPS automatique avec Vercel
- ✅ Headers de sécurité configurés
- ✅ Validation Zod sur les formulaires
- ✅ Protection CSRF native Next.js
- ✅ Variables d'environnement sécurisées

## Sauvegarde

Le code source est automatiquement sauvegardé dans votre repository Git.

Pour les données emails, configurez :
- Sauvegarde automatique des emails entrants
- Archivage régulier des demandes de rendez-vous

## Dépannage

### Le site ne charge pas
- Vérifiez les logs Vercel
- Vérifiez les variables d'environnement
- Vérifiez que le build fonctionne en local

### Les emails ne partent pas
- Vérifiez SMTP credentials
- Testez avec un service comme [Mailtrap](https://mailtrap.io)
- Consultez les logs serverless de Vercel

### Erreur 500
- Consultez les logs de déploiement
- Vérifiez la console Next.js
- Testez les API routes individuellement

## Support

Pour toute question technique :
- Email : contact@cle-tronik.fr
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)

