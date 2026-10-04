---
title: "Compétences"
slug: "competences"
lang: "fr"
seoTitle: "Les compétences qui façonnent vos posts LinkedIn | Aide Nuvora"
description: "Ce qu’est une compétence, comment en prendre une dans le Catalogue, la modifier ou écrire la vôtre, comment fonctionnent les compétences de l’équipe, et où elles façonnent vos posts LinkedIn et vos questions dans Interroger."
excerpt: "Des instructions réutilisables que l’IA suit quand elle rédige vos posts LinkedIn, choisies dans le brief du post ou sur une question dans Interroger."
section: "library"
order: 9
updated: 2026-10-04
appPaths: ["/skills", "/skills/organization", "/skills/catalog"]
audience: "Tout le monde ; les compétences de l’équipe sont rédigées par les administrateurs"
related: ["linkedin-posts", "ask", "your-team"]
shots:
  - file: "/images/help/skills-my-skills.fr.webp"
    route: "/skills"
    alt: "Mes compétences : les onglets Personnel, Équipe et Catalogue, Nouvelle compétence, et les compétences standard de format de post, toutes activées, avec Dupliquer, Désactiver, Modifier et Supprimer"
    captured: 2026-10-04
  - file: "/images/help/skills-catalog.fr.webp"
    route: "/skills/catalog"
    alt: "Le Catalogue avec son champ de recherche, les filtres Tous, Réseaux sociaux, Marketing, Voix de la marque et Petites entreprises, et les compétences Réseaux sociaux marquées Dans mes compétences"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/middleware.ts", "src/pages/skills/index.astro", "src/pages/skills/organization.astro", "src/pages/skills/catalog.astro", "src/components/SkillsNav.astro", "src/scripts/skillsPanel.ts", "src/scripts/skillsPicker.ts", "src/pages/api/skills/index.ts", "src/lib/skills-db.ts", "src/lib/skill-catalog.ts", "src/lib/social-format-skills.ts", "src/lib/kwp-skills.ts", "src/pages/api/social-content/draft.ts", "src/scripts/socialContent.ts", "src/components/panels/SocialContentPanel.astro", "src/pages/ask.astro", "src/scripts/askIntelligence.ts", "public/apps/nuvora/vocabulary.js"]
---

Une **compétence** est un ensemble d’instructions réutilisables que l’IA applique : une méthode, une liste de contrôle, une charte éditoriale, une série de règles. Vous l’écrivez une fois, puis vous la choisissez quand l’IA rédige pour vous : plus besoin de recopier les mêmes consignes.

Dans Nuvora, les compétences façonnent les brouillons de vos [posts LinkedIn](/fr/aide/posts-linkedin) et peuvent accompagner une question dans [Interroger](/fr/aide/interroger).

## Où servent les compétences

### Dans le brief d’un post

Quand vous rédigez un post, ouvrez **Compétences et matière**, sur le bord droit du brief. Sa carte **Compétences** contient une liste déroulante de toutes les compétences activées qui s’appliquent à **Réseaux sociaux** : celles de votre équipe, marquées **Équipe**, et les vôtres, marquées **Personnel**. **Gérer les compétences** ouvre cette page dans un nouvel onglet.

**LinkedIn post format** est sélectionnée par défaut. Ses règles fixent le format du brouillon, qui est ensuite vérifié et corrigé en conséquence : une accroche de moins de 140 caractères, 1 300 à 2 500 caractères de texte brut, 3 à 5 hashtags à la fin, aucun lien dans le corps du texte. Désélectionnez-la et le brouillon est rédigé librement, sans ce contrôle.

Toute autre compétence ne s’applique que si vous la choisissez. Votre choix accompagne l’exécution et tout ce qui en découle.

### Dans Interroger

Sur la page Interroger, **Utiliser une compétence** affiche le même type de liste déroulante, avec toutes les compétences activées de votre équipe et les vôtres. Rien ne s’applique tant que vous n’en choisissez pas une.

### Ce que coûtent les compétences

Une compétence ajoute du texte à la requête : elle pèse donc quelques tokens de plus dans le prix de l’exécution qu’elle accompagne. Gardez vos compétences courtes et précises : ce qu’il faut faire, ce qu’il faut éviter, la mise en forme attendue.

## Le menu Compétences

| Entrée | Qui la voit | Ce qu’elle contient |
|---|---|---|
| **Mes compétences** | Tout le monde | Vos propres compétences : celles que vous avez ajoutées depuis le Catalogue ou depuis votre équipe, et celles que vous avez écrites. Ce sont les seules modifiables. |
| **Compétences de l’équipe** | Les administrateurs, dans le menu ; chaque membre, par l’onglet **Équipe** des pages Compétences | Les compétences que vos administrateurs ont écrites pour toute l’équipe. |
| **Catalogue** | Tout le monde | Toutes les compétences standard fournies avec Nuvora, ouvertes à tous. |

Les pages Compétences partagent aussi trois onglets en haut : **Personnel**, **Équipe** et **Catalogue**.

![Mes compétences : les onglets Personnel, Équipe et Catalogue, Nouvelle compétence, et les compétences standard de format de post, toutes activées, avec Dupliquer, Désactiver, Modifier et Supprimer](/images/help/skills-my-skills.fr.webp)

## Mes compétences

Votre liste commence par les compétences standard de format de post, dont **LinkedIn post format**, chacune marquée **Standard** et **activé**. Elle contient aussi les compétences de format des autres réseaux : un post LinkedIn ne s’en sert que si vous les choisissez, et vous pouvez les désactiver.

Chaque compétence indique où elle s’applique (**Réseaux sociaux**) et propose :

- **Dupliquer** : en crée une variante.
- **Désactiver** (ou **Activer**) : une compétence désactivée est conservée, mais n’est plus proposée.
- **Modifier** : ouvre le formulaire. Changez le **Nom**, **À quoi elle sert (visible par les personnes, pas par l’IA)**, les **Instructions (ce que l’IA suit)** et **Où elle s’applique**, puis cliquez sur **Enregistrer**.
- **Supprimer** : la retire de votre liste, après confirmation. Une compétence prise dans le Catalogue ou auprès de votre équipe y reste disponible. Une compétence standard de format de post que vous supprimez revient avec son texte d’origine ; désactivez-la plutôt pour qu’elle ne vous gêne plus.

Pour en écrire une de toutes pièces, cliquez sur **Nouvelle compétence**, remplissez le même formulaire et cliquez sur **Créer la compétence**. Les instructions tiennent en 8 000 caractères au plus. Rédigez-les comme vous briefferiez un collègue : des règles courtes ou des étapes numérotées donnent les meilleurs résultats.

Sous **Où elle s’applique**, cochez **Réseaux sociaux** pour que la compétence soit proposée dans vos posts. Une compétence sans aucune case cochée est conservée et reste proposée dans Interroger, où l’on choisit les compétences à la main, mais nulle part ailleurs.

Un Lecteur peut consulter les compétences, mais pas les modifier.

## Le Catalogue

Le Catalogue range les compétences standard par rubriques, avec un champ de recherche (**Rechercher une compétence**) et un filtre par rubrique : **Réseaux sociaux**, **Marketing**, **Voix de la marque** et **Petites entreprises**. Chaque fiche porte la mention **S’applique à**, qui précise où la compétence fonctionne.

- **Réseaux sociaux** regroupe les règles de publication de chaque réseau, à commencer par **LinkedIn post format**. Ces compétences figurent déjà dans votre propre liste : leurs fiches indiquent donc **Dans mes compétences**.
- **Marketing**, **Voix de la marque** et **Petites entreprises** rassemblent des méthodes de rédaction comme **Brand voice enforcement**, **Brand review**, **Draft marketing content** et **Social content calendar for small business**.

Pour prendre une compétence :

1. Cliquez sur **Voir le détail** pour la lire en entier avant de la prendre : à quoi elle sert, où elle s’applique et les instructions que suit l’IA.
2. Cliquez sur **Ajouter à mes compétences**. Votre propre copie apparaît sous **Mes compétences**, et la fiche indique désormais **Dans mes compétences**.

Le Catalogue, lui, reste tel qu’il a été livré. C’est votre copie que vous modifiez.

![Le Catalogue avec son champ de recherche, les filtres Tous, Réseaux sociaux, Marketing, Voix de la marque et Petites entreprises, et les compétences Réseaux sociaux marquées Dans mes compétences](/images/help/skills-catalog.fr.webp)

## Compétences de l’équipe

Les compétences de l’équipe sont rédigées par ses administrateurs pour tout le monde. Elles sont proposées dans les listes déroulantes de chaque membre, avant les compétences personnelles de chacun.

- **Les administrateurs** ouvrent **Compétences** > **Compétences de l’équipe** pour les écrire, les modifier, les désactiver et les supprimer, avec le même formulaire que ci-dessus. La liste **Configurer**, en haut, sélectionne les compétences de l’équipe, ou celles d’un membre pour les gérer à sa place.
- **Les autres membres** ouvrent l’onglet **Équipe** des pages Compétences pour consulter les compétences de l’équipe activées. Chacune propose **Voir le détail**, **Ajouter à mes compétences** et **Dupliquer**.

**Ajouter à mes compétences** place parmi les vôtres une copie portant le même nom. Une compétence personnelle qui porte le nom d’une compétence de l’équipe la remplace sur vos propres exécutions : vous pouvez ainsi l’ajuster pour vous seul. **Dupliquer** crée une compétence distincte, qui s’applique à côté de l’originale.

Les compétences standard ne sont pas ajoutées à l’équipe : le Catalogue est ouvert à chaque membre, qui ajoute à ses propres compétences ce dont il a besoin.
