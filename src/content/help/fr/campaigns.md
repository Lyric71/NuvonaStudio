---
title: "Campagnes"
slug: "campagnes"
lang: "fr"
seoTitle: "Regrouper posts et visuels LinkedIn en campagnes | Aide Nuvora"
description: "Une campagne rassemble sous un nom et un brief les posts, visuels et documents d’une même opération LinkedIn, qu’Interroger, vos agents et vos posts lisent ensuite d’un seul tenant."
excerpt: "Réunissez sous un même nom les visuels, documents et posts d’une opération LinkedIn, puis laissez Interroger, vos agents et vos prochains posts les lire ensemble."
section: "library"
order: 8.5
updated: 2026-10-08
appPaths: ["/campaigns", "/campaigns/[id]"]
audience: "Les créateurs et les administrateurs les constituent, les lecteurs les consultent ; les accès client ne les voient pas"
related: ["assets-library", "ask", "agents", "linkedin-posts", "your-team", "linkedin-ads"]
shots:
  - file: "/images/help/campaigns-list.fr.webp"
    route: "/campaigns"
    alt: "La page Campagnes : Nouvelle campagne et Fonctionnement de cette page dans le bandeau sombre, les tuiles Campagnes, Images, Vidéos et Textes, et la carte de la campagne nuvdocs-1008 Spring launch avec ses images, son brief, 3 images, 1 texte et la date de sa mise à jour"
    captured: 2026-10-08
  - file: "/images/help/campaigns-page.fr.webp"
    route: "/campaigns/[id]"
    alt: "La page de la campagne nuvdocs-1008 Spring launch : Toutes les campagnes, Ajouter des contenus et Supprimer la campagne dans le bandeau, les tuiles Images, Vidéos, Textes et Documents, les trois cartes Poser une question sur cette campagne, La confier à un agent et Écrire à partir de cette campagne, la carte Nom et brief, puis les contenus sous Dans cette campagne"
    captured: 2026-10-08
  - file: "/images/help/campaigns-menu.fr.webp"
    route: "/campaigns"
    alt: "Le menu, Campagnes déplié : Toutes les campagnes, puis la campagne nuvdocs-1008 Spring launch de l’équipe, à côté de la page Campagnes"
    captured: 2026-10-08
  - file: "/images/help/campaigns-choice.fr.webp"
    route: "/social/linkedin/posts"
    alt: "Le brief d’un nouveau post LinkedIn, avec nuvdocs-1008 Spring launch choisie sous Campagne, à côté de Rédiger avec l’IA et de Je l’écris moi-même"
    captured: 2026-10-08
  - file: "/images/help/campaigns-filter.fr.webp"
    route: "/files"
    alt: "Le filtre Campagne ouvert dans la Bibliothèque de contenus : Toutes les campagnes, Hors campagne et nuvdocs-1008 Spring launch, chacune avec le nombre de fichiers qu’elle ferait apparaître"
    captured: 2026-10-08
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/campaigns/index.astro", "src/pages/campaigns/[id].astro", "src/scripts/campaignsPanel.ts", "src/pages/api/asset-campaigns/index.ts", "src/pages/api/asset-campaigns/[id].ts", "src/lib/campaigns.ts", "src/scripts/filesPanel.ts", "src/scripts/askMentions.ts", "src/scripts/askIntelligence.ts", "src/lib/intelligence.ts", "src/lib/agents/external-sources.ts", "src/scripts/agentForm.ts", "src/scripts/libraryFolderPicker.ts", "src/lib/brief-sources.ts", "src/lib/features.ts", "public/apps/nuvora/vocabulary.js", "src/scripts/campaignChoice.ts", "src/lib/request-campaign.ts", "src/lib/stored-files.ts"]
---

Une campagne regroupe sous un seul nom tout le matériel d’une opération LinkedIn : les visuels, les diapositives d’un carrousel, les briefs et les documents, les posts. Vous lui associez un court brief. Interroger, vos agents et votre prochain post lisent alors l’ensemble d’un coup, sans que vous ayez à désigner chaque fichier. L’entrée **Campagnes** du menu, sous **Éditeur d’images**, se déplie en une courte liste : en tête, **Toutes les campagnes**, qui ouvre la page Campagnes, puis les campagnes de l’équipe, classées par ordre alphabétique. Un clic sur un nom ouvre la campagne correspondante.

![Le menu, Campagnes déplié : Toutes les campagnes, puis la campagne nuvdocs-1008 Spring launch de l’équipe, à côté de la page Campagnes](/images/help/campaigns-menu.fr.webp)

Une campagne ne copie rien. Elle renvoie à des fichiers déjà présents dans la [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus) : un même fichier peut donc figurer dans plusieurs campagnes, et le retirer de l’une d’elles ne le supprime jamais.

Ces campagnes n’ont rien à voir avec celles de votre compte publicitaire LinkedIn, que vous pilotez depuis [LinkedIn Ads](/fr/aide/linkedin-ads).

## La page Campagnes

En haut, le bandeau sombre réunit **Fonctionnement de cette page**, **Nouvelle campagne** et quatre tuiles : **Campagnes**, avec le nombre total de contenus qu’elles renferment, puis **Images**, **Vidéos** et **Textes**, comptés sur l’ensemble des campagnes.

Sous le bandeau, chaque campagne a sa carte : quelques-unes de ses images, son nom, le début de son brief, le nombre de contenus de chaque type, la date de sa dernière mise à jour et l’auteur de la campagne. Un clic sur la carte ouvre la campagne.

![La page Campagnes : Nouvelle campagne et Fonctionnement de cette page dans le bandeau sombre, les tuiles Campagnes, Images, Vidéos et Textes, et la carte de la campagne nuvdocs-1008 Spring launch avec ses images, son brief, 3 images, 1 texte et la date de sa mise à jour](/images/help/campaigns-list.fr.webp)

## Créer une campagne

1. Cliquez sur **Nouvelle campagne** dans le bandeau.
2. Saisissez un **Nom** de 120 caractères au plus. Deux campagnes de l’équipe ne peuvent pas porter le même nom.
3. Rédigez, si vous le souhaitez, le **Brief** : l’objectif, la cible, le message clé, les dates. Il reste facultatif, mais Interroger et vos agents le lisent avec les contenus, et quelques lignes suffisent à rendre leurs réponses plus justes. Il accepte jusqu’à 4 000 caractères.
4. Cliquez sur **Créer la campagne**.

La campagne s’ouvre sur sa propre page, le sélecteur de la bibliothèque déjà ouvert pour y verser ses premiers contenus. **Annuler** referme le formulaire sans rien créer.

## Ajouter des contenus

Trois chemins mènent au même résultat : un fichier de la Bibliothèque de contenus entre dans la campagne.

- **Depuis la page de la campagne.** Cliquez sur **Ajouter des contenus** dans le bandeau. Sous **Ajouter des contenus de la bibliothèque**, cherchez par nom, prompt, texte ou étiquette, ou limitez l’affichage à un type avec **Tous**, **Images**, **Vidéos**, **Textes**, **Documents** ou **Autres fichiers**. Cochez ce qui relève de la campagne, puis cliquez sur le bouton d’ajout, qui reprend le nombre de contenus cochés (**Ajouter 2 contenus**, par exemple). Les contenus déjà présents portent la mention **Dans la campagne**. Le sélecteur affiche les 200 premiers résultats ; au-delà, affinez la recherche. **Gérer la bibliothèque** ouvre la Bibliothèque de contenus dans un nouvel onglet.
- **Depuis un fichier de la Bibliothèque de contenus.** Ouvrez son menu **Actions** et choisissez **Ajouter à une campagne**. Un volet **Campagnes** se déplie sous la ligne : il cite les campagnes qui contiennent déjà le fichier (**Déjà dans :**) ou signale qu’il n’est **Dans aucune campagne pour l’instant**. Choisissez une campagne dans la liste, puis cliquez sur **Ajouter**. Pour un fichier qui figure déjà dans une campagne, l’entrée du menu s’intitule **Campagnes**.
- **Depuis plusieurs fichiers à la fois.** Cochez leurs lignes dans la Bibliothèque de contenus : la barre qui apparaît propose une liste de campagnes et **Ajouter à la campagne**.

Dans le volet comme dans la barre, la liste se termine par **Nouvelle campagne…** : saisissez un nom dans **Nom de la campagne**, et la campagne naît avec les fichiers. Son brief s’écrira plus tard, sur sa page.

Tout ce qui entre dans la bibliothèque peut rejoindre une campagne : le texte d’un post, l’image qui l’accompagne, un visuel enregistré depuis l’Éditeur d’images, un fichier importé.

## Remplir une campagne au fil de la création

Nul besoin de ranger votre travail après coup. Deux endroits proposent un choix **Campagne**, réglé d’office sur **Aucune** :

- dans les [posts LinkedIn](/fr/aide/posts-linkedin), à côté de **Rédiger avec l’IA** dans le brief, puis de nouveau à l’étape des images, avec les réglages du rendu ;
- dans la [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus), au bandeau, à côté de **Nouveau dossier**, où il affiche **Aucune campagne**.

Sélectionnez-y une campagne : tant qu’elle reste retenue, tout ce que la page enregistre dans la Bibliothèque de contenus vient s’y ajouter, du post et de ses images aux modifications enregistrées automatiquement, en passant par les rendus et les fichiers importés. Chaque fichier rejoint par ailleurs la bibliothèque, comme à l’ordinaire.

![Le brief d’un nouveau post LinkedIn, avec nuvdocs-1008 Spring launch choisie sous Campagne, à côté de Rédiger avec l’IA et de Je l’écris moi-même](/images/help/campaigns-choice.fr.webp)

Le choix vaut pour la page entière, non pour un champ isolé : le brief et l’étape des images d’un post affichent toujours la même campagne, et l’un ne bouge jamais sans l’autre. Un rechargement ramène la page sur **Aucune**.

Revenir à **Aucune** met seulement fin aux ajouts : rien de ce que la campagne contient déjà n’en sort. Pour en retirer un fichier, passez par **Retirer**, sur la page de la campagne.

Le choix n’apparaît qu’aux personnes autorisées à modifier les campagnes, c’est-à-dire, par défaut, aux créateurs et aux administrateurs. Les fichiers envoyés en [Validation](/fr/aide/validation) ne le proposent pas.

## Filtrer la bibliothèque par campagne

Dès que l’équipe compte une campagne, la Bibliothèque de contenus gagne un filtre **Campagne**, placé entre **Étiquettes** et **Ajouté par**. Il propose **Toutes les campagnes** et **Hors campagne**, précieux pour repérer ce qui reste à ranger, puis chaque campagne sous son nom, avec le nombre de fichiers qu’elle ferait apparaître. La campagne retenue s’affiche en pastille sous les filtres, comme n’importe quel autre filtre ; un clic sur la pastille la retire.

![Le filtre Campagne ouvert dans la Bibliothèque de contenus : Toutes les campagnes, Hors campagne et nuvdocs-1008 Spring launch, chacune avec le nombre de fichiers qu’elle ferait apparaître](/images/help/campaigns-filter.fr.webp)

## La page d’une campagne

Le bandeau affiche le nom et le brief de la campagne, **Toutes les campagnes** pour revenir à la liste, **Ajouter des contenus**, **Supprimer la campagne**, ainsi qu’une tuile par type : **Images**, **Vidéos**, **Textes** et **Documents**.

Juste en dessous, trois cartes rappellent à quoi la campagne peut servir :

- **Poser une question sur cette campagne** ouvre [Interroger](/fr/aide/interroger) avec la campagne déjà citée dans la zone de question. Interroger lit son brief et chacun de ses contenus avant de répondre.
- **La confier à un agent** ouvre **Agents**, où vous créez un agent de zéro en cochant cette campagne parmi les données qu’il lit.
- **Écrire à partir de cette campagne** rappelle que le brief d’un post peut s’appuyer sur elle.

La carte **Nom et brief** sert à renommer la campagne et à réécrire son brief. Terminez par **Enregistrer**.

**Dans cette campagne** recense ses contenus. Chacun propose **Ouvrir dans son module** lorsque le fichier a été produit dans Nuvora, **Dans la bibliothèque**, qui l’affiche dans la Bibliothèque de contenus, et **Retirer**, qui le sort de la campagne tout en le laissant dans la bibliothèque. La nouvelle version d’un fichier reste dans la campagne, et un fichier supprimé de la bibliothèque quitte de lui-même toutes les campagnes.

![La page de la campagne nuvdocs-1008 Spring launch : Toutes les campagnes, Ajouter des contenus et Supprimer la campagne dans le bandeau, les tuiles Images, Vidéos, Textes et Documents, les trois cartes Poser une question sur cette campagne, La confier à un agent et Écrire à partir de cette campagne, la carte Nom et brief, puis les contenus sous Dans cette campagne](/images/help/campaigns-page.fr.webp)

## Se servir d’une campagne

### Dans Interroger

Tapez **@** dans la zone de question, puis les premières lettres du nom de la campagne. Les campagnes apparaissent dans la liste, suivies de la mention **Campagne**, à côté des dossiers et des fichiers de la bibliothèque. Choisissez-en une : Interroger lit précisément cette campagne, c’est-à-dire son brief, l’inventaire de ses contenus (nom, type, prompt de chaque image, étiquettes, date) et le texte intégral de ses documents et de ses textes rédigés. Il suffit aussi de nommer la campagne dans votre question.

**Campagnes** fait partie des lignes de **Données incluses** : vous pouvez donc tenir toutes les campagnes à l’écart d’une conversation. Voir [Interroger](/fr/aide/interroger).

Par exemple : « Que manque-t-il encore à @Spring launch pour ses deux dernières semaines ? »

### Dans un agent

Quand vous créez un agent de zéro, les campagnes figurent en tête de **Dans la Bibliothèque de contenus**, chacune signalée par **Campagne**. Cochez-en une : à chaque exécution, l’agent lit son brief, l’inventaire de ses contenus, images et vidéos décrites par leur prompt, et ses documents. Une campagne supprimée cesse d’être lue. Voir [Agents](/fr/aide/agents).

### Dans un post

Dans le brief d’un post, la liste **Dossier de contexte tiré de la bibliothèque** comporte, sous les dossiers, un groupe **Campagnes**. Choisissez une campagne : son brief, l’inventaire de ses contenus et le texte de chacun de ses documents sont lus avant la rédaction du brouillon. Voir [Posts LinkedIn](/fr/aide/posts-linkedin).

## Qui voit quoi

Une campagne appartient à l’équipe. Toute personne de l’équipe autorisée à ouvrir Campagnes voit chaque campagne, mais n’y trouve que les contenus qu’elle peut voir dans la Bibliothèque de contenus : un fichier réglé sur **Moi seulement** reste réservé à son propriétaire, même au sein d’une campagne partagée.

| Rôle | Ce qu’il peut faire |
|---|---|
| **Administrateur** | Tout ce que fait un créateur, et supprimer n’importe quelle campagne. |
| **Créateur** | Créer des campagnes, y ajouter ou en retirer des contenus, les renommer, réécrire leur brief, les choisir dans le choix **Campagne** des posts et des imports, et supprimer celles qu’il a créées. |
| **Lecteur** | Ouvrir les campagnes et les consulter. |
| **Client** | Ne voit pas Campagnes. |

Un administrateur peut affiner ces règles personne par personne, avec la ligne **Campagnes** de **Les droits, module par module**, sous **Bibliothèque de contenus**, ou désactiver le module **Campagnes** pour quelqu’un. Voir [Votre équipe](/fr/aide/votre-equipe#modules-et-droits-par-personne).

## Supprimer une campagne

Cliquez sur **Supprimer la campagne** dans le bandeau, puis confirmez. Seule la campagne disparaît : ses contenus restent tous dans la Bibliothèque de contenus, et les agents qui la lisaient cessent de la lire.

## Ce que cela coûte

Les campagnes sont gratuites : les créer, les alimenter et les ouvrir ne coûte rien. Ce qui lit une campagne est facturé comme à l’ordinaire : une réponse d’Interroger, l’exécution d’un agent ou un brouillon affiche son prix, et plus la campagne est fournie, plus la lecture est longue. Voir [Solde et paiements](/fr/aide/solde-et-paiements).
