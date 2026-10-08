---
title: "Choisir un modèle"
slug: "choisir-un-modele"
lang: "fr"
seoTitle: "Choisir le modèle d’IA qui rédige : Rapide, Équilibré ou Puissant | Aide Nuvora"
description: "Le sélecteur de modèle des étapes de rédaction de Nuvora et d’Interroger : les choix Rapide, Équilibré et Puissant, le coût d’une exécution, Tous les modèles, la mémorisation de votre choix, et la page Benchmarks des modèles, qui compare les modèles de texte sur des benchmarks publics."
excerpt: "Trois choix simples pour l’IA qui rédige vos posts et répond à vos questions, tous les modèles à portée de clic, et une page qui les compare sur des benchmarks publics."
section: "library"
order: 9.5
updated: 2026-10-08
appPaths: ["/settings/model-benchmarks", "/settings", "/social/linkedin/posts", "/ask"]
audience: "Toute personne qui rédige ou interroge avec l’IA ; la page Benchmarks des modèles est ouverte à tous"
related: ["linkedin-posts", "ask", "skills", "agents", "account-and-sign-in", "balance-and-payments"]
shots: []
sources: ["src/scripts/modelPicker.ts", "src/lib/model-tiers.ts", "src/lib/model-tiers-rules.ts", "src/lib/model-benchmarks.ts", "src/data/model-benchmarks.json", "src/pages/settings/model-benchmarks.astro", "src/pages/settings.astro", "src/scripts/selectionRewrite.ts", "src/components/panels/SocialContentPanel.astro", "src/pages/ask.astro", "src/scripts/askIntelligence.ts", "src/lib/app.ts"]
---

Quand Nuvora rédige un post ou répond à une question, c’est un modèle d’IA qui tient la plume. Nul besoin de connaître les modèles par leur nom pour choisir : chaque sélecteur s’ouvre sur trois options simples, **Rapide**, **Équilibré** et **Puissant**, et la liste complète reste à un clic.

## Où choisir le modèle

Le sélecteur de modèle apparaît partout où l’IA écrit du texte :

- dans le brief d’un post, à côté de **Langue**, pour **Rédiger avec l’IA** ;
- sous **Une autre version**, à l’étape du texte d’un post ;
- dans le menu qui s’ouvre quand vous surlignez un passage et cliquez sur **Réécrire avec l’IA** ;
- dans [Interroger](/fr/aide/interroger), à côté de **Utiliser une compétence**.

Les agents se règlent autrement : chacun garde son propre champ **Modèle** dans son formulaire. Voir [Agents](/fr/aide/agents).

## Le bouton

Le sélecteur tient en un seul bouton compact, qui affiche votre choix du moment : l’icône et le nom de l’option quand le modèle fait partie des trois, puis le nom du modèle, puis le coût d’une exécution type de cette fonction.

Cliquez dessus pour ouvrir **Choisir un modèle**. La touche Échap, un clic à l’extérieur ou un choix le referment. Au clavier, les flèches font passer d’une option à l’autre.

Quand un seul modèle est proposé, il n’y a pas de bouton : une ligne indique **Tourne sur**, suivi du nom du modèle.

## Rapide, Équilibré et Puissant

En haut de **Choisir un modèle**, les trois options se présentent sous forme de cartes :

| Option | Ce qu’indique la carte |
|---|---|
| **Rapide** | Rapide et économique, pour les brouillons et les posts courts |
| **Équilibré** | Une bonne qualité à un coût raisonnable, pour l’essentiel du travail |
| **Puissant** | Le plus performant, pour les travaux importants et les questions difficiles |

Chaque carte affiche le modèle utilisé, un globe s’il sait chercher sur le web, une image s’il sait lire les images, et son prix, avec **par exécution** juste en dessous. L’étoile **Recommandé ici** signale le modèle qu’emploie cette fonction quand personne ne choisit.

C’est Nuvora qui décide du modèle placé derrière chaque option, et ce choix peut évoluer à mesure que de nouveaux modèles arrivent : la carte fait donc toujours foi. Si le modèle d’une option est interdit dans votre équipe, ou si vous l’avez désactivé dans **Mes modèles**, l’option se reporte sur le modèle disponible le plus proche en prix. Rapide cherche d’abord parmi les modèles moins chers, Puissant d’abord parmi les plus performants, donc les plus chers : Rapide reste économique, Puissant reste solide.

Le modèle recommandé pour la fonction figure toujours parmi les trois : il prend la place de l’option la plus proche de lui en prix, et c’est cette carte qui porte l’étoile. Deux options n’affichent jamais le même modèle ; quand un ou deux modèles seulement sont proposés, vous ne voyez donc qu’une ou deux options.

Dans Interroger, tant que **Recherche web** est sur ON, le sélecteur ne propose que les modèles capables de chercher sur le web, et une option dont le modèle ne sait pas chercher disparaît des cartes.

## Tous les modèles

Sous les cartes, **Tous les modèles**, suivi du nombre de modèles, déplie la liste complète : chaque modèle utilisable à cet endroit, regroupé sous son fournisseur, avec le coût d’une exécution et les mêmes icônes web et image. L’étiquette **Par défaut** signale le modèle employé quand personne ne choisit.

Tapez quelques lettres dans **Rechercher un modèle ou un fournisseur** pour resserrer la liste. Si rien ne correspond, elle affiche « Aucun modèle ne correspond. »

**Tous les modèles** s’ouvre déjà déplié quand votre modèle du moment ne fait pas partie des trois.

**Comparer les modèles**, en haut à droite, ouvre la page [Benchmarks des modèles](#benchmarks-des-modèles) dans un nouvel onglet.

## Le coût d’une exécution

Le prix affiché sur le bouton, sur les cartes et dans la liste correspond au coût, tout compris, d’une exécution type de cette fonction pour votre équipe : un post dans le brief, une réponse dans Interroger. Un long brief ou une longue conversation coûte davantage, un brief court moins. Le prix exact de chaque exécution s’affiche sur celle-ci et il est facturé tel qu’affiché. Voir [Solde et paiements](/fr/aide/solde-et-paiements).

## Votre choix est mémorisé

Nuvora retient votre choix pour chaque fonction, sur ce navigateur : le modèle qui rédige vos posts est mémorisé à part de celui qui répond dans Interroger. Sur un autre navigateur ou un autre ordinateur, le sélecteur s’ouvre sur le modèle recommandé.

Choisissez le modèle marqué **Par défaut** (la carte à l’étoile, ou la ligne qui porte l’étiquette **Par défaut**) pour suivre de nouveau le réglage par défaut : si Nuvora le change plus tard, vos exécutions suivront.

Si vous avez désactivé le modèle par défaut d’une fonction dans **Mes modèles**, le sélecteur s’ouvre sur le premier modèle que vous avez gardé. Un modèle mémorisé qui n’est plus proposé est oublié. Voir [Compte et connexion](/fr/aide/compte-et-connexion#mes-modèles).

## Benchmarks des modèles

La page **Benchmarks des modèles** montre comment les modèles de texte se situent les uns par rapport aux autres sur des benchmarks publics, pour les fois où les trois options ne suffisent pas à trancher. Ouvrez-la depuis **Comparer les modèles** dans n’importe quel sélecteur, ou depuis le lien **Comparer les modèles sur des benchmarks publics** de la carte **Mes modèles**, dans **Paramètres**.

La page s’ouvre sur les trois options, présentées en cartes. Chacune indique **Tourne sur** suivi du modèle, ou **Indisponible ici** ; puis son niveau de prix, de $ à $$$$, qui situe le coût du modèle par rapport aux autres ; enfin, le coût approximatif d’un post (« environ … par post »).

### Scores et coûts

**Scores et coûts** liste les modèles de texte autorisés dans votre équipe, du plus fort au plus faible sur l’Intelligence Index. **Fournisseur** limite le tableau à un seul éditeur ; **Tous les fournisseurs** les affiche de nouveau tous. Cliquez sur une colonne pour trier : les scores se rangent du plus fort au plus faible, le prix et les coûts du moins cher au plus cher, et un second clic inverse l’ordre. Les modèles sans chiffre restent toujours en bas.

| Colonne | Ce qu’elle montre |
|---|---|
| **Modèle** | Le nom du modèle et son fournisseur, l’option qu’il occupe (**Rapide**, **Équilibré** ou **Puissant**) et les icônes **Recherche sur le web** et **Lit les images**. |
| **Prix** | Le niveau de prix, de $ à $$$$. |
| **Intelligence Index** | Un score global établi par Artificial Analysis, qui combine dix épreuves exigeantes de raisonnement, de connaissances, de code et de travail d’agent. |
| **LMArena Text** | Une note bâtie sur des votes à l’aveugle, où les internautes désignent la meilleure de deux réponses. |
| **Output speed** | Le nombre de tokens, en gros de mots, que le modèle écrit par seconde une fois lancé. |
| **Humanity’s Last Exam** | Environ 2 000 questions d’experts très difficiles, dans de nombreux domaines, traitées sans outils. |
| **GPQA Diamond** | Des questions de sciences de niveau universitaire avancé, difficiles à résoudre même avec une recherche web. |
| **tau2-bench Telecom** | Une conversation de service client où le modèle doit se servir d’outils et respecter les règles. |
| **Un post** | Ce que coûte un post LinkedIn à votre équipe, tout compris. |
| **Un article** | Ce que coûte un article long à votre équipe, tout compris. |

Chaque score renvoie à la page où il a été relevé. Un petit « v » signale un chiffre communiqué par l’éditeur du modèle, faute de chiffre indépendant. Un tiret signifie qu’il n’existe aucun chiffre public : aucun score n’est jamais estimé. Les modèles les plus récents affichent un tiret sous GPQA Diamond et tau2-bench Telecom, deux tests qui ne leur sont plus appliqués.

La ligne placée sous le titre donne la date du relevé (« Scores relevés le », suivi de la date). Les scores sont mis à jour environ deux fois par mois.

Les coûts correspondent à ce que paie votre équipe pour une exécution type. Une exécution réelle coûte davantage avec un long brief, moins avec un brief court.

### Ce que mesurent les benchmarks

La dernière carte, **Ce que mesurent les benchmarks**, explique chaque benchmark et renvoie à sa source. Un bon score à un test ne rend pas un modèle meilleur en tout : pour des textes marketing, regardez d’abord l’indice global et l’arène, où les internautes votent pour les réponses qu’ils préfèrent.

La page ne liste que les modèles de texte : ceux qui créent des images n’y figurent pas.
