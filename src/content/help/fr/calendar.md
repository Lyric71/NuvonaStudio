---
title: "Calendrier"
slug: "calendrier"
lang: "fr"
seoTitle: "Planifier et suivre votre calendrier de publication LinkedIn | Aide Nuvora"
description: "Le Calendrier : chaque post LinkedIn prévu, programmé, publié ou refusé, par mois, par semaine ou en une seule liste, avec en dessous les constats du veilleur des publications."
excerpt: "Voyez ce qui est prévu, ce qui est programmé et ce qui est déjà en ligne sur LinkedIn, déplacez un envoi à un autre jour et donnez suite à ce qu’a relevé le veilleur des publications."
section: "linkedin"
order: 3
updated: 2026-10-04
appPaths: ["/social/calendar/monthly", "/social/calendar/weekly", "/social/calendar/list"]
audience: "Toute l’équipe ; les créateurs et les administrateurs planifient et déplacent"
related: ["linkedin-posts", "agents", "validation", "my-connections", "account-and-sign-in"]
shots:
  - file: "/images/help/calendar-monthly.fr.webp"
    route: "/social/calendar/monthly"
    alt: "Le Calendrier en vue Mensuel pour octobre 2026 : le bandeau avec Mensuel, Hebdomadaire et Liste, le bouton No brand, Fonctionnement de cette page et Ajouter une publication, les compteurs À faire, Prévu, Publié et Refusée à zéro, et la grille du mois encore vide"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/pages/social/calendar/monthly.astro", "src/pages/social/calendar/weekly.astro", "src/pages/social/calendar/list.astro", "src/components/panels/SocialCalendarPanel.astro", "src/scripts/socialCalendar.ts", "src/pages/api/social-posts/index.ts", "src/pages/api/social-posts/[id].ts", "src/lib/social-db.ts", "src/lib/social/publications.ts", "src/lib/social/limits.ts", "src/lib/own-work.ts", "src/lib/no-brand.ts", "src/components/AgentFindings.astro", "src/scripts/agentFindings.ts", "src/pages/api/agents/run.ts", "src/pages/api/agents/findings.ts", "src/pages/api/agents/finding-action.ts", "src/lib/agents/watchers.ts", "src/lib/agents/agents-db.ts", "src/middleware.ts"]
---

**Calendrier**, dans le menu, présente votre activité de publication sur LinkedIn jour par jour : ce qui reste à rédiger et à publier, ce que Nuvora doit envoyer, ce qui est déjà en ligne et ce que LinkedIn a refusé. Un post que vous programmez ou publiez depuis [Posts](/fr/aide/posts-linkedin) y apparaît de lui-même, avec le profil ou la page sur lequel il paraît.

## Le bandeau

Le bandeau sombre, en haut, comporte :

- **Mensuel**, **Hebdomadaire** et **Liste**, les trois façons de lire le calendrier ;
- **Fonctionnement de cette page**, une courte note sur les couleurs et les vues ;
- **Ajouter une publication**, pour en planifier une à la main ;
- la période affichée, avec les flèches vers le mois (ou la semaine) précédent et suivant, et **Aujourd’hui** pour revenir à la date du jour ;
- quatre compteurs pour la période affichée : **À faire**, **Prévu**, **Publié** et **Refusée**. La barre sous chacun d’eux représente sa part de la période.

Le bouton **No brand**, à côté des trois vues, correspond au planning propre à votre équipe. Votre équipe n’en a qu’un, il n’y a donc rien à choisir à cet endroit.

![Le Calendrier en vue Mensuel pour octobre 2026 : le bandeau avec Mensuel, Hebdomadaire et Liste, le bouton No brand, Fonctionnement de cette page et Ajouter une publication, les compteurs À faire, Prévu, Publié et Refusée à zéro, et la grille du mois encore vide](/images/help/calendar-monthly.fr.webp)

## Ce que signifient les couleurs

Chaque publication porte l’une des quatre couleurs des compteurs :

| Couleur | Compteur | Ce qu’elle signifie |
|---|---|---|
| Ambre | **À faire** | Prévue, mais rien n’est programmé : elle reste à rédiger et à publier. |
| Bleu | **Prévu** | Programmée : Nuvora l’enverra de lui-même à l’heure indiquée, et elle n’est pas encore partie. |
| Vert | **Publié** | En ligne sur LinkedIn. |
| Rouge | **Refusée** | Son heure est venue et LinkedIn l’a refusée. La raison figure sur la carte. |

Les heures s’affichent dans votre propre fuseau horaire, défini dans **Paramètres**. Voir [Compte et connexion](/fr/aide/compte-et-connexion).

## Mensuel

Le mois sous forme de grille, du lundi au dimanche, avec la date du jour entourée. Chaque publication y figure comme une petite carte posée sur son jour : le réseau, l’heure de départ, un mot qui dit où elle en est (**Prévu**, **Sending** ou **Non partis**), les initiales du responsable et le titre. Survolez une carte pour lire le compte sur lequel elle part et, si elle a été refusée, pour quelle raison.

- **Cliquez sur la partie vide d’un jour** pour y planifier une publication.
- **Cliquez sur un post rédigé dans Posts** pour l’ouvrir là-bas, à son étape **La publication**.
- **Cliquez sur une publication ajoutée à la main** pour l’ouvrir dans sa fenêtre et la modifier.

## Hebdomadaire

La semaine, à raison d’une rangée par jour, du lundi au dimanche. Chaque carte indique son état, **Responsable :** suivi du nom (ou **Aucun responsable pour le moment**), ses notes et, pour un post envoyé par Nuvora, chaque compte sur lequel il part, avec son heure et son état. Sur une carte :

- **Modifier la planification** ouvre la fenêtre d’un post rédigé dans Posts, pour en changer le jour, le responsable ou les notes. Un clic sur la carte elle-même ouvre le post.
- **Marquer comme publié** fait passer une carte ambre au vert.
- **Ajouter le lien** ouvre la fenêtre où coller l’adresse d’un post marqué comme publié.
- **Voir la publication** l’ouvre sur LinkedIn.

**+ Ajouter une publication**, sous chaque jour, en planifie une ce jour-là. Un jour sans rien affiche **Rien de prévu.**

## Liste

Toutes les publications, une par ligne, dans leur ordre de départ.

1. Choisissez la période : **Ce mois-ci** (les flèches du bandeau la font avancer mois par mois), **À partir d’aujourd’hui** (tout ce qui reste à venir) ou **Tout**.
2. Tapez dans **Chercher un titre, un réseau, une personne** : la recherche porte sur le titre, les notes, le réseau, les comptes et le responsable.
3. Ne gardez qu’un seul état grâce au filtre : **Tous les états**, **À faire**, **Prévu**, **Publié** ou **Refusée**.

Les colonnes sont **Date**, **Heure**, **Publication**, **Réseau**, **Responsable**, **État** et **Comptes**. Cliquez sur **Date** pour inverser l’ordre. La dernière colonne reprend les mêmes actions que les cartes de la vue hebdomadaire, et le nombre de publications s’affiche à côté des filtres. Les quatre compteurs suivent la période et la recherche, mais pas le filtre d’état.

## Ajouter une publication

Cliquez sur **Ajouter une publication** dans le bandeau, ou cliquez sur un jour. La fenêtre demande :

1. **Titre** : une ligne qui résume le sujet du post.
2. **Date de publication**, déjà réglée sur le jour cliqué.
3. **Plateforme** : LinkedIn.
4. **Qui est responsable** : le collègue chargé de le rédiger et de le publier, ou **Personne pour le moment**.
5. **Statut** : **À faire** ou **Publié**.
6. **Lien vers le post publié** (facultatif) : collez-le une fois le post en ligne.
7. **Notes** (facultatif) : tout ce que l’équipe doit savoir.

Cliquez sur **Enregistrer**. Une publication ajoutée de cette façon vous appartient : personne d’autre dans l’équipe ne la voit dans le calendrier. Pour partager le travail, rédigez le post dans [Posts](/fr/aide/posts-linkedin) et choisissez **Toute l’équipe** à cet endroit.

**Supprimer**, au bas de la fenêtre, retire une publication du planning après confirmation. Ce bouton est proposé à la personne qui l’a planifiée, tant qu’elle est seule à la voir, et aux administrateurs.

## Déplacer un post programmé

Faites glisser une carte bleue vers un autre jour, sur la grille mensuelle ou dans les rangées de la semaine. L’envoi suit et garde son heure : Nuvora publie le post le nouveau jour. Une carte refusée peut également être déplacée : elle est alors reprogrammée le nouveau jour, à la même heure. Un jour déjà passé est refusé : choisissez un jour à venir, ou programmez à nouveau le post depuis Posts.

## Constats sur la publication LinkedIn

Sous la grille mensuelle, **Constats sur la publication LinkedIn** affiche ce qu’a relevé le veilleur des publications LinkedIn. Il examine votre activité de publication sur LinkedIn environ une fois par jour : ce qui est parti au cours des 30 derniers jours, ce qui est programmé pour les 14 prochains, les publications qui ont échoué, et les brouillons ou les posts en attente de validation restés en souffrance. Il signale une semaine creuse, un planning vide et chaque échec, dates réelles à l’appui.

Le veilleur fonctionne dès qu’il figure parmi vos agents ou ceux de votre équipe : ajoutez-le depuis **Agents** > **Catalogue**. Voir [Agents](/fr/aide/agents). Tant qu’il n’a rien à signaler, le panneau affiche **Aucun constat ouvert.**

Chaque constat indique son niveau (info, avertissement ou critique), sa date, ce qui s’est passé et une prochaine étape précédée de **Suggestion :**. Les créateurs et les administrateurs peuvent y donner suite :

- **Marquer comme vu** : vous en avez pris connaissance. Il reste dans la liste, marqué comme vu.
- **Résoudre** : il est traité. Il quitte la liste.
- **Ignorer** : il n’a pas d’intérêt. Il quitte la liste.
- **Rédiger une réponse** : l’IA rédige la réponse concrète au constat, affichée juste en dessous.
- **Rédiger un post** : l’IA rédige un post LinkedIn qui répond au constat, enregistré comme brouillon dans Posts.

Ces deux rédactions sont payantes, et leur coût s’affiche à côté. Rédiger marque comme vu un nouveau constat.

**Lancer les veilleurs maintenant** exécute sur-le-champ tous les agents actifs de votre équipe, pas seulement celui-ci, et indique combien de nouveaux constats sont remontés, avec le coût de l’exécution à côté du bouton. Si aucun agent n’est encore actif, le bouton le signale. Les administrateurs voient en outre **Configurer les veilleurs**, qui ouvre **Agents de l’équipe** pour activer ou désactiver un agent et régler sa fréquence d’exécution.

## Qui peut faire quoi

| Action | Qui |
|---|---|
| Consulter le calendrier et les constats | Toute l’équipe |
| Ajouter, modifier, marquer comme publié, déplacer un envoi | Créateurs et administrateurs |
| Supprimer une publication | La personne qui l’a planifiée, tant qu’elle est seule à la voir, ou un administrateur |
| Donner suite à un constat, lancer les veilleurs | Créateurs et administrateurs |
| Configurer les veilleurs | Administrateurs |

Les accès client ne voient pas le calendrier. Un client suit les posts conçus pour lui dans son [Espace client](/fr/aide/espace-client).

## Ce que cela coûte

Le calendrier lui-même est gratuit : planifier, déplacer et marquer des publications ne coûte rien. Chaque exécution d’un veilleur qui fait appel à l’IA est payante, tout comme **Rédiger une réponse** et **Rédiger un post**. Chaque débit sur vos crédits est détaillé dans **Consommation**, sous **Crédits** dans le menu.
