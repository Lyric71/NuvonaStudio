---
title: "Découverte et astuces"
slug: "decouverte-et-astuces"
lang: "fr"
seoTitle: "La page Découverte, la visite rapide et les astuces | Aide Nuvora"
description: "La page Découverte qui vous accueille à la première connexion : les modules de votre menu, les premières étapes, le centre d’aide et la visite rapide de l’écran. Puis les astuces qui suivent chaque connexion, et la façon de les désactiver ou de les réactiver."
excerpt: "Tout ce que Nuvora peut faire pour vous réuni sur une page, l’écran expliqué en deux minutes, puis quelques astuces à chaque connexion."
section: "getting-started"
order: 1.5
updated: 2026-10-14
appPaths: ["/discover", "/settings"]
audience: "Tout le monde"
related: ["getting-started", "account-and-sign-in", "my-connections", "balance-and-payments", "your-team", "linkedin-posts"]
shots:
  - file: "/images/help/discovery-and-tips-page.fr.webp"
    route: "/discover?welcome=1"
    alt: "La page Découverte lors d’une première visite : Bienvenue à bord, le mot d’accueil avec Lancer la visite rapide et Ouvrir le centre d’aide, le nombre de modules du menu et la carte des modules autour du logo Nuvora"
    captured: 2026-10-14
  - file: "/images/help/discovery-and-tips-modules.fr.webp"
    route: "/discover?welcome=1"
    clip: "#dv-ch-modules"
    alt: "Ce que vous pouvez faire : les modules du menu listés à gauche et, à côté, celui qui est ouvert, avec son rôle, trois usages concrets, Ouvrir, Voir dans le menu et Article d’aide"
    captured: 2026-10-14
  - file: "/images/help/discovery-and-tips-tour.fr.webp"
    route: "/discover?welcome=1"
    alt: "La visite rapide pointe Posts dans le menu, avec le rôle du module, Passer la visite, Retour et Suivant"
    captured: 2026-10-14
  - file: "/images/help/discovery-and-tips-card.fr.webp"
    route: "/settings"
    clip: "la carte d’astuces"
    alt: "Une carte d’astuces : la nature de l’astuce, une capture de Nuvora, le titre et le texte, les points et le compteur, les flèches, Ne plus afficher et Me montrer"
    captured: 2026-10-14
sources: ["src/pages/discover.astro", "src/components/DiscoveryExplorer.astro", "src/components/DiscoveryCard.astro", "src/lib/discovery.ts", "src/scripts/discoveryTour.ts", "src/middleware.ts", "src/layouts/Layout.astro", "src/lib/tips.ts", "src/scripts/tipsNotice.ts", "src/pages/api/tips/index.ts", "src/pages/settings.astro"]
---

Deux repères vous aident à prendre vos marques dans Nuvora. **Découverte** est une page qui recense tout ce que vous pouvez faire : elle s’ouvre à votre première connexion, puis reste à un clic. Les **astuces**, elles, arrivent sur une petite carte à chaque connexion : une façon de faire à la fois, capture d’écran à l’appui.

## La page Découverte

### Quand elle s’ouvre

À votre toute première connexion, Nuvora ouvre **Découverte** avant toute autre page, que vous veniez de créer votre compte, d’accepter une invitation ou d’utiliser pour la première fois l’accès préparé par votre administrateur. La page s’intitule alors **Bienvenue à bord**. Si vous vous rendiez sur une page précise, depuis le lien d’un e-mail par exemple, le bouton **Accéder à votre page**, en haut, vous y conduit.

Par la suite, vous la rouvrez quand bon vous semble : cliquez sur votre photo en haut à droite, puis sur **Découverte**. La page s’intitule alors **Tout ce que vous pouvez faire**.

Un accès client n’y passe jamais : il arrive directement sur son **Espace client**.

### Ce qu’elle présente

La page épouse votre propre menu : elle ne montre que les modules auxquels vous avez accès, dans l’ordre de votre menu. Un module qu’un administrateur a désactivé pour vous n’y figure pas.

![La page Découverte lors d’une première visite : Bienvenue à bord, le mot d’accueil avec Lancer la visite rapide et Ouvrir le centre d’aide, le nombre de modules du menu et la carte des modules autour du logo Nuvora](/images/help/discovery-and-tips-page.fr.webp)

- **En tête de page**, un mot d’accueil à votre prénom, les boutons **Lancer la visite rapide** et **Ouvrir le centre d’aide**, le nombre de modules de votre menu et une carte de ces modules. Survolez un module sur la carte pour découvrir son rôle : cliquez dessus pour descendre jusqu’à sa présentation.
- **Une barre de sections** vous accompagne tout au long de la page : **Par où commencer**, **Vos modules**, **Votre compte** et **Centre d’aide**. Un clic suffit pour rejoindre l’une d’elles.
- **Premiers pas** : les trois chantiers à ouvrir d’abord. **Connecter votre compte LinkedIn** (**Ouvrir Mes connexions**), puisque les posts partent de votre propre profil ou de votre page entreprise : **Ajoutez des crédits** (**Ouvrir Crédits**) : **Travailler seul ou en équipe** (**Ouvrir Équipe**), car rien ne vous empêche de démarrer seul et de créer une équipe plus tard.
- **Ce que vous pouvez faire** : vos modules, en liste à gauche. Cliquez sur l’un d’eux pour le déplier à côté : son rôle, trois usages concrets et trois liens. **Ouvrir** vous emmène dans le module, **Voir dans le menu** le désigne dans le menu de gauche, et **Article d’aide** ouvre, dans un nouvel onglet, l’article que lui consacre ce centre d’aide, dans votre langue. Tant que vous n’y touchez pas, la liste fait défiler les modules d’elle-même.
- **Votre compte** : **Équipe** et **Crédits**, ainsi que **Partenaire** pour les partenaires commerciaux, présentés de la même manière.
- **Centre d’aide** : une sélection d’articles pour bien démarrer, puis **Nouveautés**, le journal de toutes les évolutions de Nuvora, et **Signaler un bug**.

![Ce que vous pouvez faire : les modules du menu listés à gauche et, à côté, celui qui est ouvert, avec son rôle, trois usages concrets, Ouvrir, Voir dans le menu et Article d’aide](/images/help/discovery-and-tips-modules.fr.webp)

### La visite rapide

**Lancer la visite rapide**, en haut de la page ou dans le mot d’accueil, assombrit l’écran puis en éclaire chaque zone tour à tour, en expliquant à quoi elle sert : le menu, puis chacun de ses modules, les boutons du haut de l’écran (votre page d’accueil, **Activité**, votre solde, le menu placé sous votre photo) et enfin le lien vers le centre d’aide, en bas de page. Comptez environ deux minutes.

- **Suivant** et **Retour**, ou les flèches du clavier, font avancer ou reculer la visite : un compteur indique l’étape en cours.
- **Passer la visite**, la croix ou la touche Échap l’interrompent à tout moment.
- La dernière étape, **Tout est prêt**, se referme avec **Terminé**.

Sur un module, **Voir dans le menu** lance une visite d’une seule étape, qui désigne ce module et lui seul.

![La visite rapide pointe Posts dans le menu, avec le rôle du module, Passer la visite, Retour et Suivant](/images/help/discovery-and-tips-tour.fr.webp)

## Les astuces après la connexion

Une fois connecté, quelques instants après l’affichage de la première page, une petite carte apparaît dans le coin inférieur droit de l’écran, sous la notification de la vérification des connexions s’il y en a une. Elle ne masque jamais la page : vous pouvez continuer à travailler.

La carte rassemble jusqu’à huit astuces, à commencer par celles que vous n’avez pas encore lues : une astuce consacrée à une fonction arrivée ces dernières semaines prend la tête. Chacune affiche sa nature (**Mode d’emploi**, **Le saviez-vous ?**, **Nouveauté**, **Gagnez du temps** ou **Pour votre équipe**), une capture de Nuvora dans votre langue, un titre et une ou deux phrases.

![Une carte d’astuces : la nature de l’astuce, une capture de Nuvora, le titre et le texte, les points et le compteur, les flèches, Ne plus afficher et Me montrer](/images/help/discovery-and-tips-card.fr.webp)

- Les flèches, ou les touches fléchées gauche et droite, affichent l’astuce précédente ou suivante. Le compteur, **1 / 8** par exemple, indique où vous en êtes.
- **Me montrer** ouvre la page dont traite l’astuce. La carte y reste affichée, pour que vous puissiez la relire en passant à la pratique.
- **Plein écran**, le bouton du haut, déploie l’astuce par-dessus la page, sa capture aussi grande que la fenêtre le permet. Le même bouton, un clic sur la page assombrie ou la touche Échap la renvoient dans son coin.
- **Fermer**, la croix, range la carte jusqu’à votre prochaine connexion.
- **Ne plus afficher** désactive les astuces. La carte annonce alors **Astuces désactivées**, avec un lien vers les **Paramètres**, où vous pouvez les réactiver.

La carte vous suit de page en page dans le même onglet du navigateur, jusqu’à ce que vous la fermiez. Seules les pages qui vous sont ouvertes font l’objet d’astuces : une astuce sur LinkedIn Ads ne parvient jamais à une personne dont le menu ne comporte pas LinkedIn Ads.

À votre toute première connexion, la carte patiente : elle n’apparaît que sur la première page ouverte après Découverte.

### Désactiver ou réactiver les astuces

Ouvrez **Paramètres du compte** depuis le menu placé sous votre photo, puis la section **Astuces** :

- **Afficher des astuces à la connexion** : activé, la carte s’affiche après chaque connexion : désactivé, elle ne se montre plus.
- **Voir une astuce maintenant** ouvre la carte sur-le-champ, quel que soit l’état de l’interrupteur.

Voir [Compte et connexion](/fr/aide/compte-et-connexion#astuces).
