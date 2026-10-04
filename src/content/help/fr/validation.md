---
title: "Validation"
slug: "validation"
lang: "fr"
seoTitle: "Faire approuver vos posts LinkedIn et vos fichiers | Aide Nuvora"
description: "Soumettez un post LinkedIn ou un fichier à l’approbation d’un coéquipier ou d’un interlocuteur chez votre client, rendez votre décision, proposez de nouvelles versions et commentez, le tout dans un seul fil."
excerpt: "Soumettez un post ou un fichier à approbation, gardez chaque version et chaque commentaire dans un même fil, et laissez un client approuver ce qui a été conçu pour lui."
section: "linkedin"
order: 5
updated: 2026-10-04
appPaths: ["/validation", "/validation/[id]"]
audience: "Tout le monde ; les clients approuvent ce qui a été conçu pour eux"
related: ["linkedin-posts", "your-team", "client-space", "assets-library"]
shots:
  - file: "/images/help/validation-page.fr.webp"
    route: "/validation"
    alt: "La page Validation intitulée Contenus à valider, avec le bouton Envoyer un contenu en validation et les onglets En attente de moi, Mes demandes et Tous les contenus, chacun à 0, au-dessus de la ligne Rien n’attend votre validation"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/middleware.ts", "src/pages/validation/index.astro", "src/pages/validation/[id].astro", "src/scripts/validationPanel.ts", "src/scripts/validationRequest.ts", "src/scripts/validationAsset.ts", "src/pages/api/validation/index.ts", "src/pages/api/validation/[id].ts", "src/pages/api/validation/[id]/comments.ts", "src/pages/api/validation/[id]/decision.ts", "src/pages/api/validation/[id]/versions.ts", "src/pages/api/validation/upload.ts", "src/lib/validation-db.ts", "src/lib/validation-http.ts", "src/lib/validation-mail.ts", "src/lib/validation-lock.ts", "src/lib/team-clients.ts", "src/scripts/socialContent.ts", "public/apps/nuvora/vocabulary.js"]
---

La validation permet de faire approuver votre travail avant sa parution sur LinkedIn. Vous soumettez un post ou un fichier à un coéquipier, ou à l’un des interlocuteurs du client pour lequel il a été conçu. Cette personne l’approuve, ou vous le renvoie avec un commentaire. Chaque version et chaque commentaire restent rassemblés dans un même fil.

Dans cet article, le demandeur est la personne qui a soumis le contenu, et le validateur celle qui doit l’approuver.

## L’aller-retour

1. Vous soumettez un contenu en validation et désignez un validateur.
2. Le validateur reçoit un e-mail contenant le lien.
3. Il l’ouvre, puis clique sur **Valider**, ou sur **Renvoyer** avec un commentaire.
4. Vous recevez sa décision par e-mail.
5. Si le contenu vous a été renvoyé, vous proposez une nouvelle version dans le même fil, et le validateur reçoit un nouvel e-mail.

Les allers-retours peuvent se répéter autant que nécessaire. Rien n’est supprimé en chemin.

## La page Validation

Ouvrez **Validation** dans le menu. La page s’intitule **Contenus à valider** et compte trois onglets, chacun avec son compteur :

- **En attente de moi** : ce qui attend votre décision.
- **Mes demandes** : tout ce que vous avez soumis en validation.
- **Tous les contenus** : tout ce que votre équipe a soumis en validation.

Le tableau présente chaque contenu dans les colonnes **Type**, **Version**, **Statut**, **Demandé par** (l’auteur de la demande), **Validateur** et **Dernière activité**. Votre propre nom est suivi de « (vous) ». Cliquez sur une ligne pour ouvrir le contenu.

| Statut | Ce qu’il signifie |
|---|---|
| **En attente de validation** | La version en cours attend la décision du validateur. |
| **Validé** | La version en cours a été approuvée. |
| **Non validé** | La version en cours a été renvoyée. Une nouvelle version est attendue. |

![La page Validation intitulée Contenus à valider, avec le bouton Envoyer un contenu en validation et les onglets En attente de moi, Mes demandes et Tous les contenus, chacun à 0, au-dessus de la ligne Rien n’attend votre validation](/images/help/validation-page.fr.webp)

## Envoyer un post en validation

Ouvrez le post dans **Posts**. Dans la barre placée sous l’aperçu du post, à côté de **Enregistrer**, cliquez sur **Envoyer en validation**. Voir [Posts LinkedIn](/fr/aide/posts-linkedin).

La fenêtre s’ouvre déjà remplie : le post part comme **Post pour les réseaux sociaux**, avec son texte tel qu’il apparaît à l’écran, modifications non enregistrées comprises. Chaque image du post l’accompagne sous forme de lien vers l’image dans la Bibliothèque de contenus, si bien que le validateur voit le post en entier.

1. Vérifiez le **Titre**.
2. Choisissez le **Validateur** : un coéquipier, ou l’un des interlocuteurs d’un client, regroupés sous **Client:** suivi du nom du client.
3. Ajoutez si vous le souhaitez un **Message au validateur** : les points à examiner, l’échéance, le contexte.
4. Cliquez sur **Envoyer en validation**.

Le fil s’ouvre dans un nouvel onglet, et le validateur est prévenu par e-mail.

Soumettre de nouveau le même post n’ouvre pas un second fil : une nouvelle version s’ajoute au fil existant.

## Envoyer un fichier depuis la page Validation

**Envoyer un contenu en validation** sert à soumettre tout le reste : un visuel, un document, un texte, un lien.

1. Donnez-lui un **Titre** et choisissez son **Type** : **Texte**, **Image**, **Vidéo**, **Post pour les réseaux sociaux**, **Fichier** ou **Autre**.
2. Choisissez le **Validateur**.
3. Joignez le contenu : **Déposer un fichier** (tous formats), **Coller un texte** ou **Indiquer une adresse** (un lien commençant par http:// ou https://).
4. Ajoutez un message si vous le souhaitez, puis cliquez sur **Envoyer en validation**.

Un fichier déposé rejoint la Bibliothèque de contenus de votre équipe et compte dans son stockage. La page du contenu s’ouvre une fois l’envoi effectué.

## Les clients comme validateurs

Quand un post ou un fichier a été conçu pour un client (voir [Votre équipe](/fr/aide/votre-equipe)), vous pouvez demander à l’un des interlocuteurs de ce client de l’approuver. Celui-ci l’ouvre depuis l’e-mail ou depuis son [Espace client](/fr/aide/espace-client), et décide comme n’importe qui.

- Un contenu conçu pour un client ne peut aller qu’aux interlocuteurs de ce client, ou à un coéquipier. Désigner une personne d’un autre client est refusé : « This piece was made for another client. Ask one of that client’s people, or a colleague. »
- Désigner l’interlocuteur d’un client sur un contenu qui n’était encore attribué à personne le rattache à ce client : dès lors, ses interlocuteurs le voient.
- Chaque nouvelle version d’un fil conçu pour un client est également montrée à ce client.

Un client ne voit que les fils de sa propre entreprise. Il peut les commenter et rendre sa décision quand il en est le validateur, mais il ne peut rien soumettre en validation, ni proposer de version, ni changer de validateur.

## Ce que reçoit le validateur

Un e-mail intitulé « À valider : » suivi du titre du contenu, avec un bouton qui l’ouvre. Une nouvelle version déclenche l’envoi de « Nouvelle version à valider : » suivi du titre. Quand le contenu est un fichier de la Bibliothèque de contenus, le bouton indique **Ouvrir dans la bibliothèque**, et l’e-mail contient aussi le lien vers le fil.

## La page du contenu

En haut figurent le type, le statut, le titre et un onglet par version (**v1**, **v2**, et ainsi de suite), la version en cours étant marquée **(en cours)**. Sous le titre figurent **Demandé par** et **Validateur**. Chaque version indique quand et par qui elle a été proposée (**Proposé**) puis, une fois la décision rendue, quand elle a été validée (**Validé**) ou renvoyée (**Renvoyé**). **Tous les contenus**, dans le bandeau, ramène à la page Validation.

La version s’affiche directement dans la page : un texte en entier, une image, une vidéo ou un PDF intégré, avec **Ouvrir le fichier** en dessous, ou un lien qui s’ouvre dans un nouvel onglet. Cliquez sur un autre onglet de version pour comparer.

À droite, le **Fil de discussion** retrace chaque événement et chaque commentaire, dans l’ordre.

## Décider

Lorsque vous êtes le validateur et que la version en cours est en attente, un formulaire intitulé **Votre décision sur la version 1** (ou 2, 3, et ainsi de suite) apparaît. Un administrateur le voit aussi et peut trancher à la place du validateur.

1. Lisez ou regardez la version.
2. Rédigez un **Commentaire**. Il est obligatoire pour renvoyer la version.
3. Cliquez sur **Valider** ou sur **Renvoyer**.

Le demandeur reçoit votre décision par e-mail : « Validé : » ou « Non validé : » suivi du titre. Chaque version reçoit une seule décision : si quelque chose mérite un nouvel examen, le demandeur soumet une nouvelle version.

## Proposer une nouvelle version

En tant que demandeur, ouvrez **Proposer une nouvelle version** sur la page du contenu. Le bloc s’ouvre de lui-même après le renvoi d’une version, et vous pouvez vous en servir à tout moment.

1. Déposez un fichier, collez un texte ou indiquez une adresse.
2. Précisez si vous le souhaitez **Ce qui a changé**.
3. Cliquez sur **Envoyer la version 2 en validation** (le bouton reprend le numéro de la version suivante).

Le statut repasse à **En attente de validation**, et le validateur est prévenu par e-mail.

## Commenter

Écrivez dans le **Fil de discussion**, puis cliquez sur **Commentaire**. Les autres participants du fil sont prévenus par e-mail.

## Changer de validateur

Le demandeur, le validateur ou un administrateur peut choisir un autre validateur dans la liste **Validateur** de la page du contenu. Sur un fil conçu pour un client, la liste propose vos coéquipiers et les interlocuteurs de ce client.

## Pendant l’attente, le post est verrouillé

Un post soumis en validation affiche **en attente de validation** dans **Posts**, avec la ligne « En attente de validation : cette publication est verrouillée jusqu’à la décision du validateur. Rien ne peut être modifié ni supprimé entre-temps. » Tant que le validateur n’a pas tranché, personne ne peut le modifier ni le supprimer, et il n’a pas de bouton **Envoyer en validation**. Validé, le post devient **approuvé** ; renvoyé, il redevient **brouillon**.

## Qui peut faire quoi

| Action | Qui |
|---|---|
| Ouvrir la page Validation et lire un fil | Toute l’équipe ; un client, pour les fils de sa propre entreprise |
| Soumettre un contenu, proposer une nouvelle version | Les créateurs et les administrateurs |
| Commenter | Les créateurs, les administrateurs, et un client sur les fils de sa propre entreprise |
| Valider ou renvoyer | Le validateur désigné, ou un administrateur |
| Changer de validateur | Le demandeur, le validateur ou un administrateur |

Les lecteurs n’ont qu’un accès en lecture : ils peuvent être désignés validateurs, mais ne peuvent pas enregistrer de décision. Désignez plutôt un créateur, un administrateur ou un interlocuteur du client.

## Ce que cela coûte

L’aller-retour ne coûte rien et ne fait intervenir aucune IA. Un fichier que vous déposez est conservé dans la Bibliothèque de contenus et facturé au titre du stockage, comme tout fichier qui s’y trouve. Voir [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus).

## Bon à savoir

- Impossible de retirer une demande ou de supprimer un fil, une version ou un commentaire. L’historique est conservé à dessein. Si une demande n’a plus lieu d’être, dites-le dans le fil.
- Un post déjà en attente de validation n’a pas de bouton **Envoyer en validation**. Ouvrez-le plutôt depuis la page Validation.
