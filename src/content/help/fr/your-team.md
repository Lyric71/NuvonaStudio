---
title: "Votre équipe"
slug: "votre-equipe"
lang: "fr"
seoTitle: "Votre équipe, ses rôles et ses clients | Aide Nuvora"
description: "Travailler seul ou en équipe, les rôles Administrateur, Créateur, Lecteur et Client, inviter des personnes, répondre aux demandes d’adhésion, limites quotidiennes, suspension d’un accès, modules et droits par personne, ajout de clients et ouverture d’accès à leurs collaborateurs, informations de facturation et code de connexion."
excerpt: "Une équipe partage une même réserve de crédits et travaille pour ses clients. Les administrateurs invitent les personnes, fixent les limites quotidiennes, ajoutent les clients et ouvrent des accès à leurs collaborateurs."
section: "team"
order: 10
updated: 2026-10-08
appPaths: ["/team", "/invite"]
audience: "Tout le monde ; la plupart des actions reviennent aux administrateurs"
related: ["getting-started", "balance-and-payments", "client-space", "linkedin-posts", "validation", "skills", "agents", "account-and-sign-in"]
shots:
  - file: "/images/help/your-team-members.fr.webp"
    route: "/team"
    alt: "La page Équipe d’une nouvelle équipe : Vous seul, pour l’instant, le nom de l’équipe avec Enregistrer le nom, Crédits de l’équipe à $0.00 avec Acheter des crédits, la carte Membres avec un administrateur et Aucune limite pour les administrateurs, puis les cartes Inviter quelqu’un, Clients et Factures et connexion"
    captured: 2026-10-04
sources: ["src/pages/team.astro", "src/scripts/teamPanel.ts", "src/pages/api/team.ts", "src/pages/api/team/clients.ts", "src/pages/api/team/clients/[id].ts", "src/lib/team-clients.ts", "src/lib/invitations.ts", "src/lib/user-admin.ts", "src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/settings.astro", "src/pages/invite/[token].astro", "src/pages/signup.astro", "src/scripts/socialContent.ts", "src/pages/api/social-content/[id].ts", "src/lib/stored-files.ts", "src/lib/validation-http.ts", "src/scripts/validationRequest.ts", "src/pages/admin/users/[id].astro", "public/apps/nuvora/vocabulary.js"]
---

Dans Nuvora, une **équipe** désigne un groupe de personnes qui partagent une même réserve de crédits. Tout ce que l’équipe fait avec l’IA est d’abord prélevé sur les crédits de l’équipe. Une équipe peut aussi travailler pour des **clients** : les entreprises pour lesquelles elle rédige des posts LinkedIn. Ouvrez **Équipe** dans le menu.

## Seul ou en équipe

**Vous travaillez seul ?** Vous formez une équipe d’une personne, et rien ne change pour vous : les crédits que vous achetez paient ce que vous faites. La page Équipe affiche **Vous seul, pour l’instant**. Invitez quelqu’un, et cette personne partage dès lors avec vous les crédits de l’équipe.

**En équipe**, la page indique combien de personnes se partagent les crédits de l’équipe et les liste sous **Membres**. Un administrateur y voit aussi le solde de l’équipe, sous **Crédits de l’équipe**.

![La page Équipe d’une nouvelle équipe : Vous seul, pour l’instant, le nom de l’équipe avec Enregistrer le nom, Crédits de l’équipe à $0.00 avec Acheter des crédits, la carte Membres avec un administrateur et Aucune limite pour les administrateurs, puis les cartes Inviter quelqu’un, Clients et Factures et connexion](/images/help/your-team-members.fr.webp)

## Les quatre rôles

Nuvora compte quatre rôles.

| Rôle | Ce qu’il fait |
|---|---|
| **Administrateur** | Dirige l’équipe : invite les personnes, répond aux demandes d’adhésion, attribue à chacun son rôle, fixe la limite quotidienne de chaque créateur, suspend un accès, renomme l’équipe, ajoute les clients et ouvre des accès à leurs collaborateurs, achète les crédits de l’équipe, et rédige les compétences et les agents de l’équipe (**Compétences de l’équipe** et **Agents de l’équipe** dans le menu). Les administrateurs n’ont pas de limite quotidienne. |
| **Créateur** | Produit le travail : rédige et publie les posts LinkedIn et pilote le compte publicitaire LinkedIn, actions payantes comprises, avec les crédits de l’équipe et dans la limite quotidienne qu’un administrateur peut lui fixer. Peut aussi acheter ses propres crédits. Indique pour quel client un post est conçu, et soumet le travail à approbation dans [Validation](/fr/aide/validation). |
| **Lecteur** | Voit le travail de l’équipe. Ne crée rien et ne dépense rien. |
| **Client** | Une personne de l’une des entreprises pour lesquelles l’équipe travaille, à qui un administrateur a ouvert un accès. Ne voit que ce qui a été créé pour son entreprise, dans son [Espace client](/fr/aide/espace-client) : le télécharge, le commente et l’approuve. Ne détient aucun crédit et ne dépense rien. |

La personne qui crée une équipe en est le premier administrateur. Votre propre rôle figure dans **Paramètres du compte**, sous votre photo en haut à droite, avec une ligne qui résume ce qu’il permet.

### Modules et droits par personne

Au-delà du rôle, l’accès de chacun peut être réglé plus finement :

- **Modules** : un module désactivé pour une personne disparaît entièrement pour elle, du menu comme des pages. Les modules sont **Posts**, **Calendrier**, **LinkedIn Ads**, **Validation**, **Interroger**, **Agents**, **Bibliothèque de contenus**, **Éditeur d’images**, **Campagnes** et **Compétences**.
- **Droits** : ce qu’une personne peut faire dans chaque domaine (le voir, y créer, y modifier, y supprimer), réglé pour **Posts**, **Publication et programmation**, **LinkedIn Ads**, **Validation**, **Contenus**, **Éditeur d’images**, **Campagnes**, **Interroger**, **Agents**, **Compétences**, **Membres de l’équipe**, **Réglages de l’équipe** et **Crédits partagés**. Chaque droit suit le rôle de la personne tant qu’il n’est pas modifié pour elle.

Un administrateur règle les deux sur la page de la personne : sur la page Équipe, cliquez sur **Détails** dans sa ligne, ajustez les cartes **Modules** et **Les droits, module par module**, puis cliquez sur **Enregistrer les modifications**. **Retour à l’équipe** ramène à la liste. Personne ne peut modifier ses propres droits.

## Inviter quelqu’un

Les administrateurs voient la carte **Inviter quelqu’un**. Elle sert aux membres de votre équipe ; les collaborateurs d’un client reçoivent leur accès depuis la carte **Clients** (voir [Clients](#clients)).

1. Saisissez le **Prénom**, le **Nom** et l’**E-mail** de la personne.
2. Choisissez le **Rôle** : **Créateur**, **Lecteur** ou **Administrateur**.
3. Cliquez sur **Envoyer l’invitation**.

La personne reçoit un e-mail avec un lien pour choisir son mot de passe et rejoindre l’équipe. Sur cette page, elle coche les conditions d’utilisation et clique sur **Rejoindre et se connecter**. Un nouveau créateur partage les crédits de l’équipe sans limite, jusqu’à ce qu’un administrateur lui en fixe une.

Les invitations en suspens sont listées sous **En attente de réponse**, chacune avec son rôle et **Lien valable jusqu’au** suivi d’une date, ou **Le lien a expiré**. Une invitation reste valable 7 jours. **Annuler l’invitation** désactive son lien. Pour réinviter quelqu’un dont le lien a expiré, envoyez une nouvelle invitation.

Une adresse qui appartient déjà à une autre équipe ne peut pas être invitée : la page affiche « This person already belongs to another team. Ask a super admin to move them. » Si cela se produit, écrivez-nous via **Nous contacter**, en pied de page.

## Demandes d’adhésion

Quand quelqu’un s’inscrit avec **Join a team** et indique le nom de votre équipe ou l’adresse e-mail d’un administrateur, sa demande apparaît sous **Demandes d’adhésion**, avec la date à laquelle elle a été faite.

- **Accepter comme créateur** : la personne reçoit une invitation par e-mail, où elle choisit son mot de passe.
- **Refuser** : la demande est abandonnée.

## Limite quotidienne sur les crédits de l’équipe

Pour chaque créateur, un administrateur peut fixer une limite quotidienne, en dollars américains, sur les crédits de l’équipe. Saisissez le montant sur la ligne de la personne et cliquez sur **Enregistrer**. Laissez le champ vide pour ne fixer aucune limite. Sous le champ, **Utilisé aujourd’hui** indique ce qu’elle a déjà puisé dans les crédits de l’équipe dans la journée.

La limite repart de zéro à minuit UTC. Un créateur qui l’atteint continue sur ses propres crédits, s’il en a acheté. Sinon, ses exécutions IA sont refusées jusqu’au lendemain. Voir [Solde et paiements](/fr/aide/solde-et-paiements).

Les administrateurs n’ont pas de limite quotidienne, et leur ligne indique **Aucune limite pour les administrateurs**. Celle d’un lecteur indique **Un lecteur ne dépense rien**.

Les membres qui ne sont pas administrateurs voient la liste des personnes et leurs rôles, accompagnée de cette phrase : « Ici, chacun crée avec les crédits de l’équipe. Vos administrateurs décident des arrivées et du montant que chaque membre peut dépenser par jour. »

## Changer un rôle

Sur la ligne d’une personne, choisissez **Créateur**, **Lecteur** ou **Administrateur** dans la liste des rôles. Le changement s’applique aussitôt, et une ligne en haut de la page le confirme. Vous ne pouvez pas changer votre propre rôle.

## Suspendre un accès

**Suspendre l’accès** empêche une personne de se connecter, après confirmation. Rien de ce qu’elle a produit n’est perdu, et elle en est avertie par e-mail. **Rétablir l’accès** lui rend la main à tout moment, et elle en est de nouveau avertie. Chaque ligne affiche aussi **Dernière connexion** et une date, ou **Jamais connecté**.

Vous ne pouvez pas suspendre votre propre accès.

Un accès resté inutilisé pendant deux mois peut aussi être suspendu sans intervention de votre part : son titulaire reçoit d’abord un e-mail l’invitant à se connecter dans le mois, et s’il ne le fait pas, l’accès est suspendu et il en est averti par e-mail. L’accès apparaît alors dans la liste comme tout accès suspendu, et **Rétablir l’accès** le rouvre. Voir [Compte et connexion](/fr/aide/compte-et-connexion#un-accès-resté-inutilisé).

## Clients

La carte **Clients**, réservée aux administrateurs, liste les entreprises pour lesquelles votre équipe travaille. Leurs collaborateurs se connectent pour ne voir que ce qui a été créé pour leur entreprise : ils l’ouvrent, le téléchargent, le commentent et l’approuvent à la demande. Ils ne créent rien et ne dépensent rien.

### Ajouter un client

1. Sous **Nouveau client**, saisissez le nom de l’entreprise.
2. Cliquez sur **Ajouter le client**.

La page confirme l’ajout du client et vous invite à ouvrir un accès à ses collaborateurs. Deux clients d’une même équipe ne peuvent pas porter le même nom.

Pour renommer un client, modifiez le nom dans son champ et cliquez sur **Renommer**.

### Ouvrir un accès aux collaborateurs d’un client

Chaque client dispose de son propre petit formulaire, sous son nom.

1. Saisissez le **Prénom**, le **Nom** et l’**E-mail** de la personne.
2. Cliquez sur **Leur ouvrir un accès**.

La personne reçoit une invitation par e-mail, avec le rôle Client, et choisit son mot de passe sur la page d’invitation, comme tout le monde. Tant qu’elle ne l’a pas fait, elle figure sous son client comme **Invité**, avec **Lien valable jusqu’au** et une date, et **Annuler l’invitation** à côté. Un client qui n’a encore personne affiche **Personne chez ce client ne peut encore se connecter.**

Une fois connecté, chaque accès affiche son e-mail et **Dernière connexion**, ou **Jamais connecté**. **Suspendre l’accès** empêche cette personne de se connecter, et **Rétablir l’accès** le lui rend.

### Créer un post pour un client

Rien ne parvient à un client tant que vous n’avez pas indiqué que le travail lui est destiné. Créateurs et administrateurs le font sur le post lui-même, dans [Posts](/fr/aide/posts-linkedin#un-post-conçu-pour-un-client) : dès que votre équipe compte au moins un client, le post affiche une liste **Conçue pour** dans son en-tête. Choisissez le client, et le choix est enregistré aussitôt. Les images du post, ainsi que la copie de son texte dans la [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus), sont étiquetées pour ce même client.

Choisissez **Aucun client : l’équipe seulement** pour retirer un post à un client. L’équipe continue de voir tout ce qu’elle a produit, quel qu’en soit le destinataire.

Quand vous envoyez un contenu en [Validation](/fr/aide/validation#les-clients-comme-validateurs), la liste des validateurs présente vos collègues, puis les collaborateurs de chaque client sous **Client:** suivi du nom du client. Un contenu conçu pour un client ne peut être adressé qu’aux collaborateurs de ce client ou à un collègue. Désigner un collaborateur d’un client sur un contenu qui n’était encore destiné à personne le rattache à ce client, et ses collaborateurs peuvent alors l’ouvrir.

### Ce que voit un client

Un accès client arrive sur son **Espace client**, intitulé **Conçu pour** suivi du nom de son entreprise. On y trouve ce que l’équipe a créé pour cette entreprise, du plus récent au plus ancien : posts, images et fichiers. Aucun coût n’y figure jamais. Son menu se limite à **Espace client** et **Validation**, et il ne détient aucun crédit. Les téléchargements d’un client sont payés sur les crédits de l’équipe. Voir [Espace client](/fr/aide/espace-client).

### Supprimer un client

**Supprimer le client** demande d’abord une confirmation. Ce qui a été créé pour le client reste à l’équipe, sans plus être étiqueté pour personne, et les accès du client sont suspendus. Ses invitations en attente cessent de fonctionner.

## Factures et connexion

La carte **Factures et connexion**, réservée aux administrateurs, regroupe deux décisions que l’équipe prend pour elle-même.

- **Facturé à (une personne ou l’entreprise)**, **Factures envoyées à** et **Adresse de facturation** : les informations de facturation de l’équipe. Cliquez sur **Enregistrer les informations de facturation**. Chaque facture des crédits de l’équipe est établie au nom de l’équipe, envoyée à l’adresse e-mail indiquée sous **Factures envoyées à** et porte l’**Adresse de facturation** ; toute modification vaut dès la facture suivante.
- **Demander un code envoyé par e-mail à chaque connexion** : après le mot de passe, chaque membre saisit un code à 6 chiffres reçu par e-mail. Un navigateur qu’il désigne comme fiable en est dispensé pendant 30 jours. L’option est activée pour toute nouvelle équipe. Voir [Compte et connexion](/fr/aide/compte-et-connexion).

## Renommer l’équipe

Les administrateurs voient le nom de l’équipe dans un champ modifiable, en haut de la page. Modifiez-le et cliquez sur **Enregistrer le nom**. Un nom d’équipe compte au moins 2 caractères.

La même carte montre aux administrateurs le solde de l’équipe, sous **Crédits de l’équipe**, avec un bouton **Acheter des crédits**. Voir [Solde et paiements](/fr/aide/solde-et-paiements).
