---
title: "Partenaires"
slug: "partenaires"
lang: "fr"
seoTitle: "L’espace partenaire | Aide Nuvora"
description: "Ce que voit un partenaire commercial de Nuvora : la création d’équipes et de personnes, l’invitation de prospects avec ses propres mots, et les commissions perçues sur ce que paient ces comptes."
excerpt: "Réservé aux partenaires commerciaux : créez des équipes et des personnes, invitez des prospects et suivez vos commissions."
section: "partner"
order: 15
updated: 2026-10-04
appPaths: ["/partner/users", "/partner/invitations", "/partner/commissions"]
audience: "Les partenaires commerciaux"
related: ["getting-started", "your-team", "balance-and-payments"]
shots: []
sources: ["src/pages/partner/users.astro", "src/pages/partner/invitations.astro", "src/pages/partner/commissions.astro", "src/lib/partners.ts", "src/lib/partner-invites.ts", "src/pages/signup.astro", "src/layouts/Layout.astro", "src/lib/auth.ts", "src/lib/app.ts", "public/apps/nuvora/vocabulary.js"]
---

L’entrée **Partenaire** n’apparaît dans le menu que pour les partenaires commerciaux : les personnes qui apportent des clients à Nuvora et touchent une commission sur ce que ces clients paient. Si vous ne la voyez pas, cet article ne vous concerne pas.

Après sa connexion, un partenaire arrive sur **Commissions**, sauf s’il a choisi une autre page d’accueil. Le menu **Partenaire** compte trois pages : **Utilisateurs**, **Invitations** et **Commissions**.

## Utilisateurs : créer des équipes et des personnes

Sur **Partenaire** > **Utilisateurs**, vous créez les comptes des clients que vous apportez. Chaque personne que vous créez appartient à une équipe, et leur nombre n’est pas limité.

1. Sous **Créer un utilisateur**, choisissez une équipe que vous avez déjà créée, ou l’option de création d’une nouvelle équipe, puis saisissez son nom et son **Adresse de facturation**.
2. Saisissez le **Prénom**, le **Nom** et l’**E-mail** de la personne, et choisissez sa **Langue préférée** : tous les e-mails qu’elle recevra seront rédigés dans cette langue.
3. Choisissez son **Rôle** : **Administrateur**, ou **Créateur** pour quelqu’un qui produit le travail. **Ce que chaque rôle permet** présente les quatre rôles de Nuvora : Administrateur, Créateur, Lecteur et Client.
4. Cliquez sur **Créer l’utilisateur**.

La première personne d’une nouvelle équipe doit en être l’administrateur, qui dirige l’équipe et achète ses crédits. Vous ne pouvez ajouter des personnes qu’à une équipe que vous avez créée, et une adresse qui possède déjà un compte ne peut pas resservir. La personne reçoit un e-mail de bienvenue avec un lien pour choisir son mot de passe.

Un créateur que vous ajoutez ne puise rien dans les crédits de l’équipe tant qu’un administrateur de l’équipe n’a pas fixé sa limite quotidienne sur la page Équipe. Les lecteurs, ainsi que les accès des clients de l’équipe, sont ajoutés ensuite par les administrateurs de l’équipe, sur cette même page. Voir [Votre équipe](/fr/aide/votre-equipe).

Sous le formulaire, le tableau liste vos équipes et leurs membres, avec pour chaque personne son **Rôle**, sa date de création (**Créé**), **Dépensé ce mois-ci**, **Dépensé à ce jour**, **Nous a payé** et **Votre commission**. Les chiffres d’une équipe incluent ceux de ses membres. Un prospect qui a ouvert un compte grâce à votre invitation figure sur une ligne à part, marquée **Inscrit via votre invitation**.

## Invitations : des prospects, avec vos propres mots

Sur **Partenaire** > **Invitations**, vous écrivez vous-même à un prospect.

1. Sous **Inviter un prospect**, saisissez **Son adresse** et, si vous le souhaitez, **Son nom**, **Son entreprise** et **Sa langue**.
2. Rédigez l’**Objet** et **Votre message**. Nuvora vous propose un texte : modifiez-en une phrase ou la totalité. Les trois balises affichées sous le message sont remplacées par son nom, son entreprise et votre propre nom au moment de l’envoi, et le bouton qui ouvre le compte est ajouté sous votre texte : vous n’avez jamais de lien à coller.
3. Ouvrez **Le lire comme votre prospect** pour vérifier le rendu.
4. Cliquez sur **Envoyer l’invitation**. Cochez d’abord **Garder ce texte pour la prochaine fois** si vous voulez que votre version vous soit proposée la prochaine fois ; **Enregistrer comme mon texte par défaut** fait la même chose sans envoyer, et **Revenir au texte proposé** rétablit le texte d’origine.

L’e-mail part du domaine de Nuvora, ce qui lui évite les dossiers de courrier indésirable, avec votre propre adresse comme adresse de réponse : la réponse de votre prospect vous parvient directement.

Le lien de l’e-mail ouvre la page d’inscription avec l’adresse de votre prospect déjà renseignée, et une ligne qui précise que c’est vous qui l’avez invité. Le jour où il termine la création de son compte, celui-ci devient l’un de vos comptes, exactement comme si vous l’aviez créé vous-même.

Vous pouvez envoyer 30 invitations par jour ; le formulaire indique combien vous en avez envoyé au cours des dernières 24 heures. Sous **Vos prospects**, chaque invitation affiche son état : **Envoyé**, **Opened**, **Compte ouvert**, **Rappelée** ou **Expirée**. **Renvoyer** remplace le lien précédent, et **Rappeler** le désactive. Une invitation devenue compte indique **Désormais l’un de vos comptes**.

## Commissions

**Partenaire** > **Commissions** présente ce que vos comptes ont payé et la part qui vous revient. Les tuiles du haut donnent **Votre taux**, le nombre d’équipes et d’utilisateurs que vous avez créés, **Ils nous ont payé** et **Vous avez gagné**.

Votre commission est une part de ce que paient vos comptes : leurs achats de crédits et leurs recharges automatiques, remboursements éventuels déduits. Elle porte sur l’argent encaissé, et non sur la consommation : un compte qui a acheté des crédits vous a déjà rapporté votre part avant même de les dépenser.

Un compte vous rapporte à partir du jour où vous le créez, ou du jour où votre prospect l’ouvre grâce à votre invitation. Le taux en vigueur ce jour-là est figé sur le compte : une modification ultérieure de vos conditions ne revient jamais sur ce que vous avez déjà gagné. Les crédits offerts à un client par Nuvora elle-même ne constituent pas un paiement et ne donnent lieu à aucune commission.

Le tableau **Vos comptes** compte une ligne par équipe et par utilisateur, avec **Rémunérateur depuis**, **Ils ont payé**, **Taux** et **Vous avez gagné**, et un total en bas. Une équipe paie sur ses crédits partagés, un utilisateur sur les crédits qu’il a achetés pour lui-même.
