---
title: "Espace client"
slug: "espace-client"
lang: "fr"
seoTitle: "Votre espace client : consulter, télécharger, approuver | Aide Nuvora"
description: "Pour les collaborateurs des clients d’une équipe : la connexion, le contenu de votre Espace client, l’ouverture et le téléchargement du travail, son approbation ou son renvoi dans Validation, et votre compte."
excerpt: "L’équipe avec laquelle vous travaillez a créé des posts LinkedIn pour votre entreprise. Voici comment les retrouver, les télécharger, les commenter et les approuver."
section: "team"
order: 11
updated: 2026-10-04
appPaths: ["/client", "/validation", "/validation/[id]", "/settings", "/invite"]
audience: "Les accès client"
related: ["validation", "account-and-sign-in", "your-team"]
shots: []
sources: ["src/pages/client.astro", "src/scripts/clientSpace.ts", "src/pages/api/client/index.ts", "src/lib/team-clients.ts", "src/lib/app.ts", "src/middleware.ts", "src/lib/auth.ts", "src/layouts/Layout.astro", "src/scripts/creditChip.ts", "src/pages/settings.astro", "src/lib/storage-billing.ts", "src/lib/stored-files.ts", "src/pages/validation/index.astro", "src/scripts/validationPanel.ts", "src/scripts/validationAsset.ts", "src/pages/api/validation/[id]/comments.ts", "src/lib/validation-http.ts", "src/lib/invitations.ts", "src/pages/invite/[token].astro"]
---

Cet article vous concerne si une équipe qui utilise Nuvora travaille pour votre entreprise et vous a ouvert un accès. Votre accès porte le rôle **Client**. Il vous montre ce que l’équipe a créé pour votre entreprise, et rien d’autre de son travail. Vous le téléchargez, vous le commentez, et vous l’approuvez quand l’équipe vous le demande.

Un accès client ne crée rien et ne dépense rien. Vous ne détenez aucun crédit et ne voyez aucun prix.

## Première connexion

L’administrateur de l’équipe vous ouvre un accès. Vous recevez une invitation par e-mail.

1. Ouvrez le lien contenu dans l’e-mail.
2. Choisissez votre mot de passe, cochez les conditions d’utilisation et cliquez sur **Rejoindre et se connecter**.

Le lien reste valable 7 jours. S’il a expiré, demandez à l’équipe de vous en envoyer un nouveau. Les fois suivantes, connectez-vous avec votre adresse e-mail et votre mot de passe. Si l’équipe l’exige, un code à 6 chiffres vous est aussi envoyé par e-mail à chaque connexion : voir [Compte et connexion](/fr/aide/compte-et-connexion).

Vous arrivez toujours sur votre **Espace client**. Le menu compte deux entrées, **Espace client** et **Validation**, et les paramètres de votre compte se trouvent sous votre photo, en haut à droite.

## Votre Espace client

La page s’intitule **Conçu pour**, suivi du nom de votre entreprise. Elle liste tout ce que l’équipe a créé pour votre entreprise, du plus récent au plus ancien, regroupé par jour.

Les onglets du bandeau sombre, en haut, filtrent par type : **Tous**, **Images**, **Vidéos**, **Posts** ou **Fichiers**.

- **Un post** occupe toute une ligne : **LinkedIn**, son titre et son texte, ses images à côté, et son état : **Publié**, **Planned for** suivi d’une date, ou **Mis à jour** suivi de la date de sa dernière modification. Un post publié propose **Voir en ligne**, qui l’ouvre sur LinkedIn. Cliquez sur une image pour l’afficher en grand.
- **Une image ou une vidéo** apparaît sous forme de fiche, avec son nom, sa date, sa taille et **Télécharger**. Cliquez sur l’image pour l’afficher en grand. Sous **Tous**, les images d’un post ne figurent que sur le post ; sous **Images**, chacune dispose en plus de sa propre fiche.
- **Un fichier** affiche son nom, sa date, sa taille et **Télécharger**. Le texte d’un post que l’équipe a étiqueté pour vous peut aussi apparaître ici sous forme de fichier, dont le nom se termine par `.md`.

Vous voyez le travail lui-même. Les coûts restent du côté de l’équipe.

Tant que rien n’a été partagé avec votre entreprise, la page l’indique. Ce que l’équipe crée pour vous apparaît ici dès qu’elle l’étiquette pour votre entreprise, et vous recevez un e-mail chaque fois que votre approbation est requise.

## Télécharger

**Télécharger**, sur une fiche, enregistre le fichier d’origine sur votre ordinateur. Le téléchargement ne vous coûte rien : l’équipe le prend en charge.

## Approuver le travail de l’équipe

Quand l’équipe sollicite votre approbation, une carte en haut de votre espace liste ce qui attend, par exemple **Une création attend votre approbation**. Chaque ligne nomme le contenu, indique **Vous êtes le validateur** (ou **Pour votre équipe au sein de l’entreprise** quand c’est un de vos collègues qui a été sollicité) et affiche son état : **En attente d’approbation**, **Approuvé** ou **Renvoyé**. Vous recevez aussi un e-mail avec un lien.

1. Cliquez sur le contenu. Sa page s’ouvre dans **Validation**, sur la version à examiner.
2. Lisez-le ou regardez-le. Les versions antérieures, s’il y en a, se trouvent dans les onglets **v1**, **v2**, etc.
3. Rédigez un **Commentaire**. Il est obligatoire si vous renvoyez la version.
4. Cliquez sur **Valider** pour l’approuver, ou sur **Renvoyer** pour demander des modifications.

L’équipe reçoit votre décision par e-mail. Si vous avez renvoyé le contenu, elle y répond par une nouvelle version sur la même page, et vous en êtes de nouveau averti par e-mail.

Vous pouvez commenter tout contenu de votre entreprise soumis à relecture, même lorsque le validateur est quelqu’un d’autre : écrivez dans le **Fil de discussion** et cliquez sur **Commentaire**. Les autres participants du fil reçoivent un e-mail. Voir [Validation](/fr/aide/validation).

L’entrée **Validation** du menu liste les mêmes fils, sous **En attente de moi**, **Mes demandes** et **Tous les contenus**. Vous ne voyez jamais que ceux de votre entreprise. Un accès client répond dans un fil ; il ne soumet jamais rien en validation.

## Votre compte

Cliquez sur votre photo, en haut à droite, puis sur **Paramètres du compte**. Vous y modifiez votre nom, votre photo, votre e-mail de connexion et votre mot de passe, l’apparence, la langue, ainsi que les formats de date et d’heure. Votre rôle y apparaît comme **Client** : « Sees what the team made for your company, downloads it, comments on it and approves it. » Voir [Compte et connexion](/fr/aide/compte-et-connexion).

**Se déconnecter** se trouve dans le même menu.

## En cas de problème

| Ce que vous voyez | Que faire |
|---|---|
| « Your login is not attached to a client any more. Ask the team that invited you. » | L’équipe a modifié sa liste de clients. Contactez la personne qui vous a invité. |
| Vous ne parvenez pas à vous connecter | L’équipe a peut-être suspendu votre accès. Contactez la personne qui vous a invité. Si vous avez oublié votre mot de passe, cliquez sur **Mot de passe oublié ?** sur la page de connexion. |
| Une page vous renvoie vers votre Espace client | Un accès client n’ouvre que son espace, Validation et les paramètres de son compte. |
| Un élément attendu manque | C’est l’équipe qui décide de ce qu’elle partage avec votre entreprise. Demandez-lui de l’étiqueter pour vous. |
