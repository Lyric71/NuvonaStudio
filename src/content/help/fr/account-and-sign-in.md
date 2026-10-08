---
title: "Compte et connexion"
slug: "compte-et-connexion"
lang: "fr"
seoTitle: "Les paramètres de votre compte et la connexion | Aide Nuvora"
description: "La page Paramètres de Nuvora : votre nom, votre photo, votre adresse de connexion et votre mot de passe, le mode clair ou sombre, l’interface en anglais, en français ou en chinois, la date et l’heure, votre page d’accueil, le récapitulatif hebdomadaire, Mes modèles, la saisie vocale, vos agents, les factures et le journal d’activité ; puis le code de connexion par e-mail, les navigateurs de confiance, la réinitialisation du mot de passe, le sort d’un accès resté inutilisé et la déconnexion."
excerpt: "Tout ce qui vous concerne dans les Paramètres du compte, et le fonctionnement de la connexion, du code de connexion et de la récupération du mot de passe."
section: "account"
order: 14
updated: 2026-10-08
appPaths: ["/settings", "/login", "/forgot-password", "/reset-password"]
audience: "Tout le monde"
related: ["getting-started", "my-connections", "your-team", "balance-and-payments", "agents", "choosing-a-model", "troubleshooting"]
shots:
  - file: "/images/help/account-and-sign-in-settings.fr.webp"
    route: "/settings"
    alt: "La page Paramètres : le bandeau avec la personne connectée, son rôle et son équipe, Disponible maintenant, Dépensé aujourd’hui et Dépensé ce mois-ci ; la liste des sections à gauche ; les cartes Vue d’ensemble du compte et Votre nom"
    captured: 2026-10-04
sources: ["src/pages/settings.astro", "src/styles/apps/nuvora.css", "public/apps/nuvora/vocabulary.js", "src/lib/app.ts", "src/layouts/Layout.astro", "src/components/ThemeSwitch.astro", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/api/login.ts", "src/pages/api/login/mfa.ts", "src/pages/forgot-password.astro", "src/pages/reset-password.astro", "src/lib/auth.ts", "src/pages/api/team.ts", "src/lib/inactivity-cleanup.ts", "src/lib/inactivity-mail.ts"]
---

Ouvrez **Paramètres du compte** depuis le menu placé sous votre photo, en haut à droite de chaque page. Le bandeau en tête de page indique qui est connecté, votre rôle, votre équipe et la date de votre arrivée, puis trois chiffres : **Disponible maintenant**, **Dépensé aujourd’hui** et **Dépensé ce mois-ci**. Quand votre solde est vide ou s’épuise, le bouton **Acheter des crédits** apparaît sous le premier. Un accès client n’a pas de solde.

Les sections sont listées à gauche, en quatre groupes : **Compte** (**Vue d’ensemble**, **Votre nom**, **Photo de profil**, **Sécurité**), **Préférences** (**Apparence**, **Langue**, **Date et heure**, **Page d’accueil**, **Vos connexions**, **Récapitulatif hebdomadaire**, **Mes modèles**, **Saisie vocale**), **Automatisation** (**Vos agents**) et **Facturation** (**Factures**, **Journal d’activité**). Un clic sur l’une d’elles vous y amène.

![La page Paramètres : le bandeau avec la personne connectée, son rôle et son équipe, Disponible maintenant, Dépensé aujourd’hui et Dépensé ce mois-ci ; la liste des sections à gauche ; les cartes Vue d’ensemble du compte et Votre nom](/images/help/account-and-sign-in-settings.fr.webp)

## Vue d’ensemble

**Vue d’ensemble du compte** affiche votre rôle et votre équipe. Votre rôle est **Administrateur**, **Créateur**, **Lecteur** ou **Client**, avec une ligne qui résume ce qu’il permet :

- **Créateur** : « Creates with the team’s credits, within the daily limit an admin sets. »
- **Lecteur** : « Sees the team’s work. Creates nothing and spends nothing. »
- **Client** : « Sees what the team made for your company, downloads it, comments on it and approves it. »

Un administrateur gère l’équipe, ses membres et ses crédits partagés. Voir [Votre équipe](/fr/aide/votre-equipe).

## Votre nom

Sous **Votre nom**, saisissez votre **Prénom** et votre **Nom**, puis cliquez sur **Enregistrer**. C’est ainsi que Nuvora s’adresse à vous et que vos collègues vous voient : dans l’en-tête, dans les listes de personnes et dans les e-mails que nous vous envoyons. Votre adresse de connexion ne change pas ici. Laissez les deux champs vides, et Nuvora affiche votre adresse e-mail à la place.

## Photo de profil

Sous **Photo de profil**, déposez une image dans le cadre ou cliquez sur **Importer une photo**. Formats acceptés : JPEG, PNG ou WebP. Les photos carrées donnent le meilleur résultat ; les images plus grandes sont recadrées et redimensionnées automatiquement. **Retirer** la supprime. Vous pouvez aussi cliquer sur votre photo dans le bandeau en haut de la page.

## Sécurité : adresse de connexion et mot de passe

**Connexion et sécurité** compte deux onglets, et un troisième lorsque votre équipe exige un code de connexion.

- **Adresse e-mail de connexion** : saisissez la **Nouvelle adresse e-mail** et votre **Mot de passe actuel**, puis cliquez sur **Mettre à jour l’e-mail**.
- **Mot de passe** : saisissez votre **Mot de passe actuel**, le **Nouveau mot de passe** (8 caractères au minimum) et **Confirmez le nouveau mot de passe**, puis cliquez sur **Mettre à jour le mot de passe**. Le panneau **Robustesse du mot de passe**, à côté du formulaire, vérifie au fil de la frappe la longueur, la présence de majuscules et de minuscules, d’un chiffre et d’un symbole.
- **Code de connexion** : les navigateurs que vous avez désignés comme fiables. Voir [Navigateurs de confiance](#navigateurs-de-confiance).

Votre mot de passe actuel est vérifié de nouveau avant que l’une ou l’autre modification ne s’applique.

## Apparence

Sous **Apparence**, choisissez **Système** (pour suivre cet appareil), **Clair** ou **Sombre**. Le choix prend effet immédiatement, sans rien à enregistrer, et il appartient à ce navigateur, pas à votre compte : vous pouvez lire en sombre sur un téléphone et en clair au bureau. Le bouton soleil ou lune de la barre supérieure bascule entre clair et sombre en un clic, et les trois mêmes choix figurent dans le menu sous votre photo.

## Langue

Nuvora parle anglais, français et chinois. La langue ne change que l’interface : les menus, les boutons et les messages. Vos posts, vos fichiers et tout ce que rédige votre équipe restent dans la langue où ils ont été écrits.

Vous la choisissez à trois endroits :

- Dans **Paramètres du compte**, sous **Langue** : choisissez-la dans **Ma langue** et cliquez sur **Enregistrer**. La page se recharge dans cette langue. Le choix est enregistré sur votre compte : il vous suit dans tous les navigateurs et sur tous les appareils depuis lesquels vous vous connectez, et les e-mails que Nuvora vous envoie sont eux aussi rédigés dans cette langue.
- Dans le menu sous votre photo : la ligne **Language · Langue · 语言** propose **English**, **Français** et **中文**. Cliquez sur l’une d’elles et la page se recharge dans cette langue.
- Sur la page de connexion, avant de vous connecter : cliquez sur **English**, **Français** ou **中文** sous le cadre de connexion. La page se recharge dans cette langue et la mémorise pour ce navigateur.

Si votre équipe ne propose que l’anglais, la section le signale : un administrateur ajoute les autres langues sur la page **Équipe**.

## Date et heure

Sous **Date et heure**, choisissez votre **Fuseau horaire** (ou **Suivre cet appareil**), un **Format de date** et un **Format de l’heure** (**24 heures** ou **12 heures**). Chaque option est illustrée par un exemple à la date du jour. Cliquez sur **Enregistrer** : la page se recharge, et chaque date dans Nuvora, calendrier et heure de publication des posts compris, s’affiche selon vos nouveaux réglages.

## Page d’accueil

Sous **Page d’accueil**, choisissez dans **Ouvrir cette page à ma connexion** la page sur laquelle vous arrivez en vous connectant. **Page par défaut de mon rôle** vous conduit sur **Posts**. Vous pouvez aussi cliquer sur le bouton en forme de maison de la barre supérieure, sur n’importe quelle page, pour en faire votre page d’accueil ; cliquez de nouveau pour revenir au réglage par défaut. Un lien qui pointe directement vers une page ouvre toujours cette page.

## Vos connexions

Votre profil LinkedIn, vos pages entreprise et vos comptes publicitaires LinkedIn se connectent sur une page dédiée. **Ouvrir Mes connexions** vous y conduit. Voir [Mes connexions](/fr/aide/mes-connexions).

## Récapitulatif hebdomadaire

Chaque lundi, Nuvora peut vous envoyer par e-mail ce qui a changé dans Nuvora au cours de la semaine écoulée, en langage clair et dans la langue de votre interface : les mêmes entrées que **Nouveautés**, en bas de chaque page. Une semaine sans changement n’envoie rien.

Sous **Récapitulatif hebdomadaire** :

- **M’envoyer le récapitulatif hebdomadaire des nouveautés** : activé, l’e-mail du lundi vous parvient ; désactivé, il s’arrête.
- **M’avertir par e-mail quand un nouveau modèle d’IA est ajouté** : un e-mail chaque fois qu’un nouveau modèle rejoint vos listes.

Chaque interrupteur est enregistré dès que vous le basculez. Chaque récapitulatif contient aussi un lien de désinscription, pour l’arrêter depuis votre messagerie. **Voir les nouveautés** ouvre la liste des changements, et **Gérer tous vos e-mails** ouvre la page où vous choisissez chacun des e-mails facultatifs que nous vous envoyons.

## Mes modèles

**Mes modèles** liste, par onglets, chaque modèle d’IA autorisé par votre équipe. Tous sont activés pour vous, y compris ceux ajoutés par la suite. Désactivez un modèle que vous ne souhaitez pas voir : il disparaît de vos propres listes de modèles, dans Posts, Interroger et partout ailleurs, sans rien changer pour les autres. Chaque interrupteur est enregistré dès que vous le basculez.

Un modèle désactivé continue de tourner là où il est déjà réglé : ce réglage ne fait qu’alléger les listes dans lesquelles vous choisissez. Le dernier modèle de chaque type reste toujours activé. Un modèle interdit par votre équipe n’apparaît pas du tout.

Le lien **Comparer les modèles sur des benchmarks publics**, sur la carte, ouvre **Benchmarks des modèles**, qui compare les modèles de texte autorisés dans votre équipe sur des scores publics et sur le coût d’un post ou d’un article. Un modèle de texte désactivé quitte aussi les options **Rapide**, **Équilibré** et **Puissant** : l’option se reporte sur le modèle le plus proche en prix parmi ceux que vous avez gardés. Voir [Choisir un modèle](/fr/aide/choisir-un-modele).

## Saisie vocale

Chaque zone de texte de plusieurs lignes, le brief d’un post compris, porte un micro dans son coin. Cliquez dessus et parlez : vos mots s’inscrivent à l’endroit du curseur au fur et à mesure que vous les prononcez. Cliquez de nouveau pour arrêter.

Sous **Saisie vocale** :

- **Afficher le micro dans les zones de texte** : désactivé, aucun micro n’apparaît et rien n’est jamais enregistré.
- **Modèle** : le modèle qui vous écoute, avec le nombre de langues qu’il connaît et son prix à la minute.
- **La langue dans laquelle vous parlez** : **Détection automatique**, ou la vôtre, ce qui aide pour les phrases courtes, les accents et les noms propres.

Cliquez sur **Enregistrer**. Chaque dictée est facturée à la seconde, comme toute autre exécution, et son prix s’affiche sous la zone quand vous arrêtez. Votre voix est transmise en direct au modèle et devient du texte pendant que vous parlez ; rien n’est enregistré ni conservé dans Nuvora. Votre navigateur demande l’accès au micro une seule fois, à la première utilisation.

## Vos agents

**Vos agents** explique que les agents peuvent être réglés pour vous seul : vos propres instructions, votre modèle et votre budget mensuel, par-dessus ce que votre équipe a fixé. Les agents personnels puisent dans votre propre budget. **Ouvrir vos agents** ouvre **Agents**. Voir [Agents](/fr/aide/agents).

## Factures

Sous **Factures**, saisissez le **Nom sur la facture** et l’**Adresse** imprimés sur les factures des crédits que vous achetez pour votre propre compte, puis cliquez sur **Enregistrer**. Les crédits achetés pour l’équipe sont toujours facturés à l’équipe. Voir [Solde et paiements](/fr/aide/solde-et-paiements).

## Journal d’activité

**Journal d’activité** recense chaque action payante que vous avez lancée, les ressources qu’elle a mobilisées et le montant facturé : le nombre d’actions enregistrées, ce que vous avez dépensé ce mois-ci et aujourd’hui, un graphique des 14 derniers jours, la dépense par action et la liste complète, que vous pouvez filtrer.

## Le code de connexion par e-mail

Les nouvelles équipes demandent une seconde étape à la connexion. Après votre mot de passe, Nuvora envoie un code à 6 chiffres à votre adresse e-mail. L’écran **Encore une étape** indique où il est parti et combien de temps il reste valable : 10 minutes.

1. Saisissez le code sous **Code de connexion**.
2. Laissez cochée la case **Faire confiance à ce navigateur pendant 30 jours : il ne demandera plus que mon mot de passe.** sur un ordinateur que vous utilisez tous les jours, ou décochez-la sur un poste partagé.
3. Cliquez sur **Confirmer et se connecter**.

**Envoyer un autre code** en envoie un nouveau ; le précédent cesse alors de fonctionner. **Se connecter avec un autre compte** ramène à l’étape du mot de passe. Un code mal saisi vous indique combien de tentatives il vous reste.

Un administrateur active ou désactive cette seconde étape pour toute l’équipe sur la page **Équipe**, sous **Factures et connexion**. Voir [Votre équipe](/fr/aide/votre-equipe).

### Navigateurs de confiance

L’onglet **Code de connexion** de **Connexion et sécurité** liste les navigateurs que vous avez désignés comme fiables. Retirez-en un, et sa prochaine connexion redemandera un code. **Ne plus faire confiance à aucun navigateur** les retire tous. L’onglet n’apparaît que si votre équipe exige un code de connexion.

## Mot de passe oublié

1. Sur la page de connexion, cliquez sur **Mot de passe oublié ?**
2. Saisissez votre adresse e-mail dans **Identifiant** et cliquez sur **Envoyer le lien de réinitialisation**.
3. Si un compte existe pour cette adresse, un lien de réinitialisation vous est envoyé. Il reste valable environ une heure.
4. Ouvrez le lien, saisissez un **Nouveau mot de passe** d’au moins 8 caractères et **Confirmez le mot de passe**, puis cliquez sur **Définir le nouveau mot de passe**.
5. La page affiche **Mot de passe mis à jour**. Cliquez sur **Se connecter**.

Un lien de réinitialisation ne sert qu’une fois. S’il a expiré, la page affiche **Ce lien est invalide ou a expiré** : cliquez sur **Demander un nouveau lien**.

## Un accès resté inutilisé

Un accès que personne n’a utilisé depuis deux mois peut recevoir un e-mail invitant son titulaire à se connecter avant une date, fixée un mois plus tard. Le message rappelle la dernière utilisation de l’accès (ou indique qu’il n’a jamais servi) et le jour où il sera désactivé. Une seule connexion avant cette échéance suffit : l’accès reste tel quel et rien d’autre ne change. Rester connecté sur un navigateur utilisé chaque jour compte aussi comme une utilisation.

Faute de connexion d’ici là, l’accès est désactivé et un e-mail vous en avertit. Rien n’est supprimé : le compte et son historique sont conservés, et un administrateur de votre équipe peut vous rendre l’accès depuis la page **Équipe** (voir [Votre équipe](/fr/aide/votre-equipe#suspendre-un-accès)). Mot de passe oublié entre-temps ? Passez par **Mot de passe oublié ?** sur la page de connexion, comme indiqué plus haut.

## Se déconnecter

Cliquez sur votre photo en haut à droite, puis sur **Se déconnecter**.
