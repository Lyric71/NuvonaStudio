---
title: "LinkedIn Ads"
slug: "linkedin-ads"
lang: "fr"
seoTitle: "Tableau de bord, campagnes et bibliothèque publicitaire LinkedIn Ads | Aide Nuvora"
description: "Connectez votre compte publicitaire LinkedIn, suivez ses chiffres en direct dans le tableau de bord, activez ou mettez en pause vos campagnes, modifiez budgets, enchères et dates de fin, et fouillez la bibliothèque publicitaire publique de LinkedIn."
excerpt: "Votre compte publicitaire LinkedIn lu en direct : un tableau de bord, vos campagnes avec chaque modification confirmée avant de partir vers LinkedIn, et la bibliothèque publicitaire publique."
section: "linkedin"
order: 4
updated: 2026-10-04
appPaths: ["/ads/linkedin", "/ads/linkedin/campaigns", "/ads/linkedin/library", "/my-connections"]
audience: "Toute l’équipe ; modifier les campagnes exige un rôle Créateur ou Administrateur, ainsi qu’un rôle LinkedIn sur le compte publicitaire"
related: ["my-connections", "agents", "ask", "calendar", "your-team"]
shots:
  - file: "/images/help/linkedin-ads-connect.fr.webp"
    route: "/ads/linkedin"
    alt: "Le tableau de bord LinkedIn Ads avant toute connexion d’un compte publicitaire : Connectez votre compte LinkedIn Ads, trois étapes, Ouvrir Mes connexions, et les onglets Tableau de bord, Campagnes et Bibliothèque publicitaire"
    captured: 2026-10-04
  - file: "/images/help/linkedin-ads-library.fr.webp"
    route: "/ads/linkedin/library"
    alt: "L’onglet Bibliothèque publicitaire : l’invitation à connecter LinkedIn au-dessus du formulaire de recherche, avec Mot-clé, Annonceur, Pays, Du, Au et Rechercher des annonces"
    captured: 2026-10-04
sources: ["src/pages/ads/linkedin/index.astro", "src/pages/ads/linkedin/campaigns.astro", "src/pages/ads/linkedin/library.astro", "src/components/LiAdsAccountPicker.astro", "src/components/AdsConnect.astro", "src/components/panels/LinkedInAdsPanel.astro", "src/components/AgentFindings.astro", "src/scripts/liAdsDashboard.ts", "src/scripts/liAdsManage.ts", "src/scripts/linkedinAds.ts", "src/scripts/personalConnections.ts", "src/pages/my-connections.astro", "src/pages/api/linkedin-ads/dashboard.ts", "src/pages/api/linkedin-ads/manage.ts", "src/pages/api/linkedin-ads/search.ts", "src/pages/api/linkedin-ads/auth.ts", "src/lib/linkedin-ads-dashboard.ts", "src/lib/linkedin-ads-manage.ts", "src/lib/linkedin-ads.ts", "src/lib/linkedin-marketing.ts", "src/lib/user-linkedin-ads.ts", "src/lib/features.ts", "src/middleware.ts", "src/lib/app.ts"]
---

**LinkedIn Ads** fait entrer votre compte publicitaire LinkedIn dans Nuvora. Ouvrez-le depuis le menu : il réunit trois onglets.

- **Tableau de bord** : la santé du compte publicitaire, lue en direct chez LinkedIn à chaque ouverture.
- **Campagnes** : vos campagnes telles qu’elles tournent à l’instant, à activer, mettre en pause, modifier ou créer.
- **Bibliothèque publicitaire** : le registre public des publicités de LinkedIn, pour voir ce que diffusent d’autres entreprises.

Rien n’est copié dans Nuvora. Le tableau de bord et l’onglet Campagnes lisent votre compte publicitaire chez LinkedIn à l’ouverture de la page, avec votre propre accès LinkedIn, et chaque modification repart directement vers LinkedIn.

## Connecter votre compte publicitaire

Tant qu’aucun compte publicitaire n’est connecté, le tableau de bord et l’onglet Campagnes affichent **Connectez votre compte LinkedIn Ads**, avec ce message : « LinkedIn Ads n’est pas connecté. Connectez votre propre accès LinkedIn dans Mes connexions. »

![Le tableau de bord LinkedIn Ads avant toute connexion d’un compte publicitaire : Connectez votre compte LinkedIn Ads, trois étapes, Ouvrir Mes connexions, et les onglets Tableau de bord, Campagnes et Bibliothèque publicitaire](/images/help/linkedin-ads-connect.fr.webp)

La connexion est personnelle : elle repose sur votre propre identifiant LinkedIn, et c’est LinkedIn qui décide de ce que vous pouvez voir et modifier. Chaque coéquipier connecte le sien.

1. Cliquez sur **Ouvrir Mes connexions**, ou sur le lien **Connecter LinkedIn Ads** en haut de la page, qui ouvre Mes connexions dans un nouvel onglet. Voir [Mes connexions](/fr/aide/mes-connexions).
2. Sur la carte **Vos comptes publicitaires LinkedIn**, cliquez sur **Connecter LinkedIn Ads**.
3. Connectez-vous à LinkedIn avec l’identifiant qui détient un rôle sur votre compte publicitaire dans Campaign Manager, puis autorisez l’accès.
4. De retour sur la carte, sous **Comptes que vous gérez avec cet identifiant**, cochez les comptes publicitaires à faire entrer dans Nuvora. Chaque coche est enregistrée aussitôt.
5. Revenez dans **LinkedIn Ads**.

Si vous accédez à des comptes publicitaires par plusieurs identifiants LinkedIn, cliquez sur **Connecter un autre identifiant LinkedIn** sur la carte : ses comptes rejoignent la même liste. **Déconnecter** retire un identifiant, et ses comptes publicitaires disparaissent des pages LinkedIn Ads jusqu’à ce que vous le reconnectiez.

### Choisir le compte publicitaire sur lequel travailler

Dès que des comptes sont cochés, l’en-tête de la page affiche **Compte publicitaire LinkedIn** : la liste des comptes cochés, chacun avec son numéro et sa devise. Choisissez-en un, et la page se recharge sur ce compte. Votre choix vaut pour les trois onglets. **Gérer les comptes** ouvre Mes connexions dans un nouvel onglet.

Si aucun compte n’est coché, les pages indiquent : « Aucun compte publicitaire LinkedIn n’est choisi. Cochez les comptes que vous gérez dans Mes connexions. »

## Le tableau de bord

Le tableau de bord s’ouvre sur les **30 jours** écoulés. Choisissez **7 jours**, **14 jours**, **30 jours** ou **90 jours** en haut de la page. Chaque chiffre est comparé à la période précédente, de même durée. Les périodes s’arrêtent la veille, en UTC, comme LinkedIn les publie.

Les chiffres sont gardés en mémoire dix minutes. **Actualiser** relit LinkedIn. **Campaign Manager** ouvre le même compte publicitaire sur LinkedIn, dans un nouvel onglet.

Tous les montants sont exprimés dans la devise de votre compte publicitaire.

### Les chiffres du haut

| Chiffre | Ce qu’il mesure |
|---|---|
| **Dépenses** | Ce que le compte publicitaire a dépensé sur la période. |
| **Résultats** | Les conversions sur votre site, plus les leads issus des formulaires LinkedIn. |
| **Coût / résultat** | Ce que vous coûte un résultat. |
| **Clics** | Les clics sur vos publicités. |
| **Taux de clic** | Les clics divisés par les impressions. |
| **Prix moyen du clic** | Ce que coûte un clic en moyenne. |
| **Impressions** | Le nombre de fois où vos publicités ont été affichées. |

Chaque chiffre indique son évolution par rapport à la période précédente, avec une petite courbe de tendance.

### Les cartes du dessous

- **Jour par jour** : ce que vous avez dépensé chaque jour et les résultats obtenus. Le dernier jour est hachuré et marqué **En cours de consolidation** : LinkedIn peut mettre une journée à arrêter ses chiffres.
- **Budget du mois** : les dépenses engagées à ce jour, face à ce que permettent les budgets quotidiens de vos campagnes actives.
- **À surveiller** : les problèmes qui coûtent de l’argent dès maintenant, repérés par des règles simples appliquées à vos propres chiffres. Rien n’est modifié à votre place. La carte signale par exemple une publicité refusée, une campagne activée mais pas diffusée, une campagne restée invisible sur toute la période, une campagne qui a dépensé sans le moindre résultat, une campagne peu cliquée, une campagne qui épuise tout son budget quotidien, une campagne réduite à une seule publicité, une campagne qui s’achève dans moins de trois jours, ou des clics plus chers qu’avant. **Ouvrir les campagnes** vous mène à l’onglet Campagnes.
- **Plus fortes variations** : les campagnes qui ont le plus bougé par rapport à la période précédente.
- **Campagnes** : toutes les campagnes de la période, en commençant par la plus dépensière, avec **Budget / jour**, **Dépenses**, **Impressions**, **Clics**, **Taux de clic**, **Résultats** et **Coût / résultat**. Basculez entre **En cours** et **Tous**.

Sous le tableau de bord, **Constats LinkedIn Ads** rassemble ce qu’a relevé l’agent Veilleur LinkedIn Ads. Voir [Agents](/fr/aide/agents).

## Campagnes

L’onglet Campagnes lit vos campagnes chez LinkedIn à son ouverture et y renvoie directement chaque modification. Les chiffres couvrent les 30 derniers jours.

En haut figurent **Campagnes actives**, **Publicités du compte**, **Dépenses, 30 jours**, **Taux de clic**, **Résultats** et **Coût / résultat**, puis les boutons **Nouveau groupe**, **Nouvelle campagne**, **Actualiser** et **Campaign Manager**.

À gauche, **Groupes de campagnes** liste vos groupes (affichez **Tous** ou **En cours**). Cliquez sur un groupe pour voir ses campagnes à droite. Chaque campagne indique son objectif, son mode de paiement, son budget quotidien, ses chiffres, et une note quand LinkedIn la retient.

### Ce que vous pouvez modifier

| Où | Ce que vous pouvez faire |
|---|---|
| Un groupe de campagnes | L’activer ou le mettre en pause avec son interrupteur. Mettre un groupe en pause arrête toutes ses campagnes. |
| Une campagne | L’activer ou la mettre en pause. Modifier les champs **Nom**, **Budget quotidien**, **Enchère** et **Date de fin**, puis cliquer sur **Enregistrer les modifications**. **Archiver** l’archive sur LinkedIn (un brouillon n’a pas de bouton Archiver). |
| Une publicité | L’activer ou la mettre en pause. **Aperçu** montre le post tel que LinkedIn l’affiche, quand le post est public ; **Ouvrir le post sur LinkedIn** l’ouvre directement sur LinkedIn. |

**Publicités dans Campaign Manager** ouvre les publicités de la campagne sur LinkedIn, là où l’on ajoute des publicités et où l’on affine l’audience.

### Chaque modification est d’abord confirmée

Chaque modification ouvre une fenêtre de confirmation avant le moindre envoi :

1. La fenêtre affiche « Lecture de ce que LinkedIn contient à cet instant, rien n’est encore envoyé… ».
2. Elle détaille exactement ce qui va changer, face à ce que LinkedIn contient à cet instant, et le vérifie. Quand tout est en ordre, elle indique « Voici exactement ce qui sera envoyé à LinkedIn. »
3. Cliquez sur **Appliquer dans LinkedIn** pour l’envoyer, ou sur **Annuler** pour tout laisser en l’état.

Une fois la modification acceptée par LinkedIn, la page affiche « Fait dans LinkedIn. » et relit les campagnes. Si une vérification échoue, la fenêtre en donne la raison et **Appliquer dans LinkedIn** reste inactif.

### Créer un groupe ou une campagne

- **Nouveau groupe** : donnez-lui un **Nom**, réglez l’interrupteur **Activés** selon qu’il doit démarrer actif ou non (ses campagnes restent à activer une par une), puis cliquez sur **Vérifier et créer**.
- **Nouvelle campagne** : elle démarre en brouillon, et rien n’est dépensé tant que vous ne l’activez pas. Choisissez son **Groupe de campagnes**, un **Nom**, un **Objectif** (**Visites du site**, **Leads**, **Conversions sur le site**, **Engagement** ou **Notoriété de la marque**), le **Mode de paiement** (**Au clic** ou **Pour 1 000 impressions** ; la notoriété de la marque ne s’achète que pour 1 000 impressions), l’**Enchère**, le **Budget quotidien** (LinkedIn demande au moins 10 par jour dans la plupart des devises), la **Langue de l’audience** et, sous **Où elle est diffusée**, au moins un pays, une région ou une ville. Cliquez sur **Vérifier et créer**.

L’un comme l’autre passe par la même confirmation. L’audience d’une nouvelle campagne ne retient au départ que les lieux et la langue : affinez-la par intitulé de poste, secteur ou taille d’entreprise dans Campaign Manager, ajoutez-y ses publicités, puis activez-la ici.

### Qui peut modifier les campagnes

Deux conditions, toutes deux nécessaires :

- **Dans Nuvora** : un rôle Créateur ou Administrateur. Un Lecteur consulte LinkedIn Ads, mais la page lui indique « Votre rôle dans cet espace permet de consulter LinkedIn Ads sans le modifier. »
- **Sur LinkedIn** : un rôle de gestionnaire de campagnes ou supérieur sur le compte publicitaire. Avec un rôle LinkedIn inférieur, la page indique « Votre rôle LinkedIn sur ce compte publicitaire permet de consulter les campagnes sans les modifier. » Un gestionnaire du compte peut relever votre rôle dans Campaign Manager.

## Bibliothèque publicitaire

La **Bibliothèque publicitaire** est le registre public des publicités de LinkedIn. Elle sert à la veille concurrentielle : ce que d’autres entreprises mettent en avant, sous quels formats, où et pendant combien de temps.

![L’onglet Bibliothèque publicitaire : l’invitation à connecter LinkedIn au-dessus du formulaire de recherche, avec Mot-clé, Annonceur, Pays, Du, Au et Rechercher des annonces](/images/help/linkedin-ads-library.fr.webp)

### L’autorisation LinkedIn, une fois pour toutes

LinkedIn exige un accès authentifié pour fouiller sa bibliothèque publicitaire.

- Si vous avez connecté LinkedIn Ads dans Mes connexions, la recherche passe par votre propre connexion, et la page indique **Recherche avec votre propre connexion LinkedIn Ads**.
- Sinon, elle passe par une connexion partagée. Tant que celle-ci n’existe pas, la page affiche **Connectez LinkedIn pour fouiller la bibliothèque publicitaire** : « LinkedIn exige une connexion unique pour autoriser l’accès. La connexion est partagée par tous et se renouvelle d’elle-même. » Un administrateur clique sur **Connecter LinkedIn** et se connecte une seule fois. Les autres lisent « Demandez à un administrateur de le connecter. »

### Rechercher

1. Saisissez un **Mot-clé** (un sujet, par exemple) ou un **Annonceur** (un nom d’entreprise). L’un des deux est obligatoire.
2. Affinez si vous le souhaitez : **Pays** accepte des codes ISO comme US, FR ou GB, tandis que **Du** et **Au** fixent une plage de dates.
3. Cliquez sur **Rechercher des annonces**.

Chaque résultat indique l’annonceur (et le payeur, lorsqu’il s’agit d’une autre entreprise), le format de la publicité, ses dates de diffusion et ses impressions. Pour les publicités diffusées dans l’Union européenne, LinkedIn publie aussi **Part des impressions par pays** et **Ciblage**, repris sur la carte lorsqu’ils sont disponibles. **Voir la publicité à côté de la liste** ouvre la publicité sur LinkedIn, dans une fenêtre placée à côté des résultats. **Afficher plus** charge les résultats suivants.

Si rien ne correspond, la page indique « Aucune annonce ne correspond à cette recherche. Élargissez le mot-clé ou retirez les filtres. »

## Ce que cela coûte

Rien dans Nuvora. Consulter le tableau de bord, modifier des campagnes dans l’onglet Campagnes et fouiller la bibliothèque publicitaire ne consomment aucun crédit. Les dépenses de vos campagnes sont facturées par LinkedIn sur votre compte publicitaire, et rien n’est dépensé tant que vous n’activez pas vous-même une campagne.

L’agent Veilleur LinkedIn Ads et les questions posées sur votre compte publicitaire dans Interroger sont des exécutions d’IA payantes. Voir [Agents](/fr/aide/agents) et [Interroger](/fr/aide/interroger).

## Qui voit LinkedIn Ads

| Rôle | LinkedIn Ads |
|---|---|
| Administrateur | Consulte les trois onglets, modifie les campagnes, connecte l’accès partagé à la bibliothèque publicitaire. |
| Créateur | Consulte les trois onglets, modifie les campagnes. |
| Lecteur | Consulte les trois onglets, ne modifie rien. |
| Client | Aucun accès. |

Quel que soit le rôle, le tableau de bord et l’onglet Campagnes ne montrent que les comptes publicitaires que vous avez vous-même connectés et cochés, lus avec votre propre accès LinkedIn.
