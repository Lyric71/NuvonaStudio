---
title: "Solde et paiements"
slug: "solde-et-paiements"
lang: "fr"
seoTitle: "Crédits, paiements, factures et consommation | Aide Nuvora"
description: "Le fonctionnement des crédits Nuvora : un solde prépayé en dollars américains, les crédits de l’équipe d’abord puis les vôtres, le quota journalier, l’achat par carte, Alipay ou WeChat Pay, les codes promotionnels, le rechargement automatique, les factures, le journal de consommation et ce qui est payant."
excerpt: "Des crédits prépayés règlent chaque exécution IA. Achetez-les par carte, Alipay ou WeChat Pay, ou automatiquement, et retrouvez chaque facture et chaque débit."
section: "money"
order: 13
updated: 2026-10-04
appPaths: ["/billing", "/billing/payment", "/billing/invoices", "/billing/usage"]
audience: "Tout le monde, en particulier les administrateurs de l’équipe"
related: ["your-team", "linkedin-posts", "ask", "agents", "assets-library", "troubleshooting"]
shots:
  - file: "/images/help/balance-and-payments-buy.fr.webp"
    route: "/billing"
    alt: "La page Acheter des crédits d’un compte vide : Crédits restants à $0.00 avec le badge Fonctions IA désactivées, la répartition entre les crédits partagés de l’équipe et vos propres crédits, puis 1. Pour qui et combien avec les onglets de l’équipe et Votre compte, les montants prédéfinis, et 2. Payer avec Carte, Alipay, WeChat Pay et le code promotionnel"
    captured: 2026-10-04
sources: ["src/pages/billing/index.astro", "src/pages/billing/payment.astro", "src/pages/billing/invoices.astro", "src/pages/billing/usage.astro", "src/scripts/creditsPanel.ts", "src/scripts/usagePanel.ts", "src/scripts/creditChip.ts", "src/pages/api/billing/credits.ts", "src/pages/api/billing/checkout.ts", "src/pages/api/billing/auto-topup.ts", "src/lib/credits.ts", "src/lib/promo.ts", "src/lib/stripe.ts", "src/lib/storage-billing.ts", "src/lib/social/billing.ts", "src/pages/api/social-content/draft.ts", "src/pages/api/intelligence/ask.ts", "src/lib/agents/scheduler.ts", "src/pages/settings.astro", "src/layouts/Layout.astro", "src/lib/app.ts", "vercel.json"]
---

Nuvora fonctionne avec des crédits prépayés : 1 crédit = 1 dollar américain. Vous achetez des crédits, et chaque exécution IA est réglée sur ce solde, au prix affiché sur l’exécution elle-même. Les crédits n’expirent jamais. Ouvrez **Crédits** dans le menu : vous y trouverez **Acheter des crédits**, **Factures** et **Consommation**.

## Qui paie une exécution

Chaque exécution IA est d’abord réglée sur les crédits de l’équipe, puis sur les vôtres :

1. **Les crédits de l’équipe.** Votre équipe achète des crédits qui alimentent un solde commun. Si un administrateur vous a fixé une limite quotidienne, vous y puisez chaque jour jusqu’à ce montant ; la limite repart de zéro à minuit UTC.
2. **Vos propres crédits.** Ce que vous achetez pour votre compte vous appartient, sans quota journalier ni plafond d’aucune sorte. Ces crédits prennent le relais une fois votre quota partagé du jour épuisé, ou lorsque le solde commun est à sec.

Le montant affiché dans la barre supérieure de chaque page correspond à ce que vous pouvez dépenser à l’instant : ce que vous pouvez encore prélever aujourd’hui sur les crédits de l’équipe, plus vos propres crédits.

La page **Acheter des crédits** s’ouvre sur ce même montant, intitulé **Crédits restants**, accompagné d’un badge : **Actif**, **Bientôt épuisé** ou **Fonctions IA désactivées**. Juste en dessous, il se décompose en trois lignes : ce que les crédits de l’équipe vous autorisent aujourd’hui, **Vos propres crédits** et **Total que vous pouvez dépenser maintenant**.

![La page Acheter des crédits d’un compte vide : Crédits restants à $0.00 avec le badge Fonctions IA désactivées, la répartition entre les crédits partagés de l’équipe et vos propres crédits, puis 1. Pour qui et combien avec les onglets de l’équipe et Votre compte, les montants prédéfinis, et 2. Payer avec Carte, Alipay, WeChat Pay et le code promotionnel](/images/help/balance-and-payments-buy.fr.webp)

Quand il reste moins de $5.00, un encadré ambré vous suggère d’acheter des crédits ou d’activer le rechargement automatique. À zéro, la page affiche « Vous n’avez plus de crédits IA. Toutes les fonctions IA sont coupées jusqu’à votre prochain achat. Le reste du produit n’est pas concerné. » Vos posts, votre calendrier et vos fichiers restent à leur place.

Si vous avez épuisé votre quota du jour alors que l’équipe dispose encore de crédits, la page l’indique : **Votre quota partagé du jour est épuisé.** Il repart de zéro à minuit UTC. Achetez des crédits personnels pour continuer tout de suite, ou demandez à un administrateur de relever votre limite quotidienne (voir [Votre équipe](/fr/aide/votre-equipe)).

## Ce qui est payant

Le prix de chaque exécution s’affiche sur l’exécution elle-même, et ce montant est déduit directement de vos crédits. Dans Nuvora, sont payants :

- la rédaction d’un post avec l’IA, et la réécriture d’un passage de post avec l’IA ;
- les images d’un post générées par l’IA, et le prompt d’image rédigé avec **Améliorer avec l’IA** ;
- chaque réponse dans **Interroger**, ainsi que sa recherche web lorsque vous l’activez ;
- chaque exécution d’un agent, essai compris, et chaque post rédigé à partir d’un constat d’agent ;
- le stockage des fichiers de l’équipe, sous la forme d’un petit loyer quotidien prélevé sur les crédits de l’équipe, et le téléchargement d’un fichier stocké. Voir [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus).

Publier un post sur LinkedIn ne coûte rien, pas plus que d’écrire un post vous-même. Voir [Posts](/fr/aide/posts-linkedin#ce-que-cela-coûte).

## Acheter des crédits

1. Ouvrez **Crédits** > **Acheter des crédits**.
2. Si vous êtes administrateur, choisissez sous **1. Pour qui et combien** le solde à approvisionner : l’onglet au nom de votre équipe, ou **Votre compte**. L’équipe est sélectionnée d’emblée. Les autres membres achètent pour **Votre compte** et ne voient pas d’onglets.
3. Choisissez un montant : un montant prédéfini de $10 à $1000, le vôtre saisi dans **Montant (USD)**, ou le curseur. Le minimum est de $10.00 et le maximum de $1000.00 par achat.
4. Vérifiez **Facture établie au nom de**. Voir [Factures](#factures).
5. Sous **2. Payer**, choisissez **Carte**, **Alipay** ou **WeChat Pay**.
6. Si vous avez un code promotionnel, saisissez-le sous **Code promotionnel** et cliquez sur **Appliquer**.
7. Avant votre premier achat seulement, cochez la case qui vaut acceptation des **Conditions d’utilisation**, y compris le fait que les crédits ne sont jamais remboursés.
8. Cliquez sur le bouton d’achat, qui reprend le montant choisi, par exemple **Acheter $25.00 de crédits**. Il affiche **Ouverture de Stripe…** et vous conduit à la page de paiement de Stripe.
9. Payez sur Stripe. Vous revenez sur la page **Paiement**, qui affiche le résultat de votre achat.

Un paiement par carte est confirmé en quelques secondes. Avec Alipay et WeChat Pay, le règlement peut demander un peu plus de temps.

### Moyens de paiement

- **Carte** : Visa, Mastercard et les autres cartes internationales, débitées en dollars américains.
- **Alipay** : débité en dollars américains.
- **WeChat Pay** : débité en yuans, au taux fixe affiché sur la page. Vous recevez exactement le montant de crédits en dollars que vous avez choisi, et le bouton affiche les deux montants.

Vous saisissez vos coordonnées de paiement sur la page de Stripe, jamais dans Nuvora.

### Vous payez depuis la Chine continentale ?

Lorsque vous payez depuis la Chine continentale, la page affiche un rappel au-dessus du bouton d’achat : le paiement peut prendre jusqu’à 2 minutes. Gardez la page Nuvora et la page Stripe ouvertes jusqu’à votre retour dans Nuvora ; fermer l’onglet, rafraîchir ou changer de réseau interrompt le paiement. Si vous avez déjà payé, vos crédits et votre facture arrivent malgré tout dès que Stripe confirme.

Le même encadré propose de payer localement : Nuvora peut émettre un fapiao (发票). Vous réglez en Chine, en RMB, et votre compte est crédité. Écrivez à hello@nuvora.studio en indiquant le montant souhaité.

### Codes promotionnels

Un code promotionnel ne change jamais ce que vous payez : il ajoute des crédits offerts à votre achat. Une fois le code accepté, l’encadré affiche le code et ce qu’il ajoute, et le récapitulatif indique **Credits you receive**. Les crédits offerts arrivent dès que Stripe confirme le paiement.

Un code peut ne s’appliquer qu’à partir d’un montant minimum, à certains comptes seulement, ou un nombre limité de fois ; quand un code ne s’applique pas, l’encadré en donne la raison. **Retirer** le supprime.

## Rechargement automatique

Le rechargement automatique débite une carte enregistrée quand le solde passe sous un seuil, pour qu’un long traitement ne soit jamais interrompu. Il ne fonctionne qu’avec une carte : Alipay et WeChat Pay ne peuvent pas être débités sans votre intervention.

1. Sur **Crédits** > **Acheter des crédits**, sous **Rechargement automatique**, cliquez sur **Enregistrer une carte**. Stripe s’ouvre pour enregistrer la carte, puis vous ramène dans Nuvora.
2. Cochez **Recharger automatiquement**.
3. Fixez les règles :
   - **Inférieur à ($)** : le seuil sous lequel la carte est débitée.
   - **Montant de la recharge ($)** : la somme ajoutée à chaque fois.
   - **Limite quotidienne ($)** : le montant maximum débité automatiquement en une journée.
4. Cliquez sur **Enregistrer les réglages de rechargement**.

Deux garde-fous l’encadrent : au moins cinq minutes entre deux débits, et la limite quotidienne. Une carte refusée le suspend : la carte affiche alors **Le rechargement automatique est en pause.** avec le motif, et **Réessayer** le relance. **Remplacer la carte** en enregistre une autre.

Un administrateur règle le rechargement automatique des crédits de l’équipe dans l’onglet de l’équipe ; chacun peut en régler un pour ses propres crédits dans **Votre compte**.

## Factures

Stripe émet une facture pour chaque achat et pour chaque rechargement automatique. Le montant est toujours libellé en dollars américains, quel que soit le moyen de paiement.

Ouvrez **Crédits** > **Factures**. Les administrateurs choisissent **Afficher les factures de** avec les deux mêmes onglets. Le tableau **Factures** indique la **Date**, le **Type**, le **Montant**, le moyen (**Payé avec**), le **Statut** et le numéro de **Facture**, avec **Voir** pour ouvrir la facture en ligne et **PDF** pour la télécharger.

En dessous, **Historique des crédits** liste chaque mouvement du solde, du plus récent au plus ancien : achats et rechargements en entrée, exécutions en sortie, ainsi que tout remboursement ou ajustement. Les 100 derniers mouvements sont affichés.

Seul un administrateur voit les factures et l’historique de l’équipe. Chaque membre voit les siens.

Le destinataire de la facture se décide au moment de l’achat :

- Un achat pour l’équipe est toujours facturé à l’équipe, à son nom, avec l’adresse e-mail et l’adresse de facturation qu’un administrateur tient à jour sur la page Équipe, sous **Factures et connexion** (voir [Votre équipe](/fr/aide/votre-equipe)).
- Un achat pour **Votre compte** vous est facturé, ou à votre équipe si vous êtes administrateur et que vous le choisissez.

Votre propre nom et votre adresse de facturation se règlent dans **Paramètres du compte** > **Factures**.

## Consommation

**Consommation**, sous la même entrée de menu, est le journal de chaque action payante : ce qui a tourné, quand, et pour quel coût, sur le mois en cours ou le précédent. Choisissez le mois dans **Mois**.

Chacun voit ses propres actions. Les administrateurs voient toute l’équipe, regroupée par personne, et peuvent isoler une personne dans **Utilisateur**. Chaque ligne indique **Date**, **Action**, **Type**, **Modèle**, **Tokens** et **Coût**. Parmi les actions que vous croiserez :

| Action | De quoi il s’agit |
|---|---|
| **Réseaux sociaux · brouillon de publication** | Un post rédigé avec l’IA. |
| **Réécriture de texte** | Un passage de post réécrit avec l’IA. |
| **Réseaux sociaux · prompt de visuel** | Un prompt d’image rédigé avec **Améliorer avec l’IA**. |
| **Réseaux sociaux · visuel** | Une image de post générée par l’IA. |
| **Ask Intelligence** | Une réponse dans Interroger. |
| **Ask Intelligence · recherche web** | La recherche web qui étaye une réponse. |
| **Exécution d’agent**, **Essai d’agent** | Une exécution de l’un de vos agents. |
| **Constat d’agent · brouillon de publication** | Un post rédigé à partir du constat d’un agent. |
| **Stockage de fichiers (quotidien)** | Le loyer quotidien des fichiers stockés par l’équipe. |
| **Téléchargement de fichier (transfert)** | Le téléchargement d’un fichier stocké. |

Les mêmes chiffres figurent dans **Paramètres du compte** > **Journal d’activité**.
