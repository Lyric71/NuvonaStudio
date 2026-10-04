---
title: "Mes connexions"
slug: "mes-connexions"
lang: "fr"
seoTitle: "Connecter votre profil, vos pages et vos comptes publicitaires LinkedIn | Aide Nuvora"
description: "Mes connexions dans Nuvora : vos comptes publicitaires LinkedIn pour les pages LinkedIn Ads, votre profil LinkedIn et les pages entreprise que vous administrez pour publier, la durée de vie d’une connexion, son renouvellement et la vérification lancée à chaque connexion."
excerpt: "Connectez votre propre profil LinkedIn, vos pages entreprise et vos comptes publicitaires, gardez-les actifs et sachez aussitôt lequel réclame une nouvelle connexion."
section: "account"
order: 12
updated: 2026-10-04
appPaths: ["/my-connections", "/connections-check"]
audience: "Tout le monde, sauf les accès client"
related: ["linkedin-posts", "linkedin-ads", "calendar", "agents", "account-and-sign-in", "troubleshooting"]
shots:
  - file: "/images/help/my-connections-page.fr.webp"
    route: "/my-connections"
    alt: "Mes connexions sans rien de connecté : la carte Vos comptes publicitaires LinkedIn avec LinkedIn Ads, Non connecté et Connecter LinkedIn Ads, puis la carte Vos comptes sociaux avec la carte LinkedIn et ses quatre étapes"
    captured: 2026-10-04
sources: ["src/pages/my-connections.astro", "src/scripts/personalConnections.ts", "src/scripts/socialAccounts.ts", "src/pages/api/social/connect/[platform].ts", "src/pages/api/social/callback/[platform].ts", "src/pages/api/social/accounts/[id].ts", "src/pages/api/connections/personal.ts", "src/pages/api/connections/linkedin-ads.ts", "src/lib/social/connect-guide.ts", "src/lib/social/scheduler.ts", "src/lib/social/notify.ts", "src/lib/connection-health.ts", "src/pages/api/connections/health.ts", "src/scripts/connectionCheckNotice.ts", "src/pages/connections-check.astro", "src/middleware.ts", "src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/settings.astro"]
---

**Mes connexions** est la page où vous branchez votre propre LinkedIn : votre profil et les pages entreprise que vous animez, pour que vos posts partent en votre nom ou en celui de la page, et votre compte publicitaire LinkedIn, pour que les pages LinkedIn Ads lisent vos propres campagnes. Cliquez sur votre photo en haut à droite, puis sur **Mes connexions**. Dans **Paramètres du compte**, la section **Vos connexions** y mène aussi, avec le bouton **Ouvrir Mes connexions**.

La page réunit deux cartes : d’abord **Vos comptes publicitaires LinkedIn**, puis **Vos comptes sociaux**.

![Mes connexions sans rien de connecté : la carte Vos comptes publicitaires LinkedIn avec LinkedIn Ads, Non connecté et Connecter LinkedIn Ads, puis la carte Vos comptes sociaux avec la carte LinkedIn et ses quatre étapes](/images/help/my-connections-page.fr.webp)

## Rien qu’à vous

Tout ce que vous connectez ici vous appartient. Personne d’autre dans votre équipe, administrateurs compris, ne peut le voir, publier avec ou consulter vos comptes publicitaires par son intermédiaire, et vous ne pouvez pas davantage utiliser les connexions d’un collègue. Chaque personne qui publie ou qui consulte le compte publicitaire connecte son propre LinkedIn.

Vous vous identifiez sur LinkedIn même : Nuvora ne voit donc jamais votre mot de passe. Se connecter ne publie rien et ne coûte rien.

Les accès client n’ouvrent pas Mes connexions : ils ne publient rien.

## Vos comptes publicitaires LinkedIn

La carte **LinkedIn Ads** regroupe les comptes publicitaires dans lesquels les pages LinkedIn Ads lisent et gèrent vos campagnes, avec votre propre rôle LinkedIn. Rien n’est dépensé tant que vous n’activez pas vous-même une campagne.

1. Cliquez sur **Connecter LinkedIn Ads**. LinkedIn s’ouvre dans le même onglet.
2. Connectez-vous avec l’identifiant LinkedIn qui a déjà accès au compte publicitaire dans Campaign Manager, puis autorisez l’accès.
3. De retour sur Mes connexions, la carte affiche cet identifiant, puis **Comptes que vous gérez avec cet identifiant** : chaque compte publicitaire qu’il ouvre, avec son nom, son numéro et sa devise.
4. Cochez les comptes publicitaires que vous gérez. Chaque coche est enregistrée sur-le-champ, et la carte l’annonce : **Enregistré. Les pages LinkedIn Ads proposent les comptes que vous avez cochés.** Le compte sur lequel vous travaillez dans les pages LinkedIn Ads porte ici l’étiquette **Déjà utilisées**.

Si l’identifiant n’ouvre aucun compte publicitaire, la carte indique **Cet identifiant LinkedIn n’ouvre aucun compte publicitaire** : connectez-vous avec l’identifiant qui détient un rôle sur le compte dans Campaign Manager.

**Plusieurs identifiants LinkedIn sont possibles.** Dès qu’un premier est connecté, un encadré propose : « Vous gérez des comptes publicitaires LinkedIn avec un autre identifiant LinkedIn ? Connectez-le aussi : ses comptes rejoignent le sélecteur des pages LinkedIn Ads. » Cliquez sur **Connecter un autre identifiant LinkedIn** et connectez-vous avec cet identifiant. Chacun dispose de sa propre carte, avec ses propres coches.

**Déconnecter**, sur la carte d’un identifiant, demande confirmation puis le retire : ses comptes publicitaires quittent les pages LinkedIn Ads jusqu’à ce que vous le connectiez de nouveau, et l’autorisation que vous aviez accordée est révoquée.

Ce que vous faites ensuite du compte publicitaire (le tableau de bord, les campagnes, la bibliothèque publicitaire) est décrit dans [LinkedIn Ads](/fr/aide/linkedin-ads).

## Vos comptes sociaux

Cette carte rassemble ce sur quoi vous publiez : votre profil LinkedIn et les pages entreprise que vous y gérez. LinkedIn est le seul réseau sur lequel Nuvora publie.

### Connecter LinkedIn

La carte **LinkedIn** détaille les étapes :

1. Appuyez sur **Connecter un compte**. LinkedIn s’ouvre dans cet onglet.
2. Connectez-vous à LinkedIn avec votre propre compte, puis appuyez sur **Autoriser**.
3. Votre profil revient ici, avec chaque page entreprise dont LinkedIn vous connaît déjà comme administrateur.
4. Gardez votre profil et les pages entreprise pour lesquelles vous publiez, et retirez les autres.

De retour sur la page, une ligne indique combien de comptes sont revenus, par exemple « 1 account connected. », rappelle qu’ils n’appartiennent qu’à vous (personne d’autre dans l’espace de travail ne peut publier dessus) et vous invite à retirer ce que vous n’aviez pas l’intention de connecter.

C’est le compte LinkedIn déjà ouvert dans ce navigateur qui revient. Pour connecter un autre identifiant LinkedIn, connectez-vous d’abord à LinkedIn avec cet identifiant, puis cliquez sur **Connecter un autre compte** dans la carte.

Si une page entreprise manque à l’appel, c’est que LinkedIn ne vous compte pas parmi ses administrateurs. Demandez au propriétaire de la page de vous ajouter, puis connectez-vous de nouveau.

### Vos comptes connectés

Dès qu’un compte est connecté, la carte LinkedIn en fait le compte (**1 connecté**) et nomme chaque compte avec son statut ; un clic sur un nom vous amène à sa ligne, plus bas. Chaque ligne affiche le nom du compte, **LinkedIn** et son identifiant public, son type (**Profil** ou **Page**), la mention **Rien qu’à vous** et la date de son dernier post. Quatre boutons agissent sur lui :

- **Renommer** change le nom affiché dans Nuvora, pratique quand deux pages se ressemblent.
- **Désactiver** met le compte à l’arrêt : plus rien ne peut y être programmé, et ce qui attend déjà dans la file ne partira pas. **Activer** le remet en service.
- **Reconnecter** relance la connexion à LinkedIn et renouvelle l’accès.
- **Retirer** supprime la connexion, après confirmation. Plus rien ne peut être publié par ce biais, et les posts déjà envoyés restent sur LinkedIn. Le retrait est refusé tant qu’un post est encore programmé sur le compte : annulez d’abord ce post, ou désactivez plutôt le compte.

### Durée de vie d’une connexion

Une connexion LinkedIn dure 60 jours. Un clic sur **Reconnecter** suffit à la renouveler.

Chaque ligne porte une ligne d’état :

| État | Ce que cela signifie |
|---|---|
| **Connected, 45 days left** (le nombre varie) | Tout va bien. |
| **Connect it again within 5 days** (le nombre varie) | L’accès expire dans moins d’une semaine. Cliquez dès maintenant sur **Reconnecter**. |
| **Reconnectez-le pour publier** | L’accès a expiré ou a été retiré côté LinkedIn. Les posts programmés sur ce compte ne partiront pas tant que vous ne l’aurez pas reconnecté. |
| **Switched off** | Vous l’avez désactivé. |
| **Something went wrong on the last send**, ou le motif donné par LinkedIn | La dernière publication sur ce compte a échoué, pour la raison affichée. |

Environ une semaine avant l’échéance, Nuvora vous envoie un e-mail indiquant que LinkedIn cessera de publier dans tant de jours, avec un lien **Le reconnecter** vers cette page. Si l’accès expire malgré tout, un second e-mail vous prévient qu’il faut le reconnecter ; rien n’est perdu dans la file d’attente, et la reconnexion tient en un clic.

## La vérification des connexions à l’ouverture de session

Une fois que vous êtes connecté, Nuvora vérifie les connexions LinkedIn que vous avez établies et laissées actives : vos comptes sociaux et vos identifiants LinkedIn publicitaires. Un accès peut cesser de fonctionner sans bruit, quand vous changez votre mot de passe LinkedIn ou retirez l’autorisation sur LinkedIn, et vous ne l’apprendriez sinon qu’à l’échec d’un post.

La vérification ne vous retarde jamais. Votre première page s’ouvre aussitôt, la vérification tourne en arrière-plan sous la forme d’une ligne **Vérification des connexions** dans **Activité**, et la réponse vous parvient sur la page où vous vous trouvez, sous la forme d’une notification dans le coin inférieur droit de l’écran. Elle ne masque jamais la page :

| Réponse | Ce qu’affiche la notification |
|---|---|
| Tout fonctionne | **Toutes vos connexions fonctionnent**. Un mince trait se vide le long de son bord inférieur, et la notification disparaît d’elle-même au bout de sept secondes environ. |
| Un point demande votre attention | **Certaines connexions demandent votre attention**, puis une ligne par compte avec son nom, son identifiant public et « L’accès a expiré ou a été retiré. Reconnectez-vous à ce compte. » La notification vous suit de page en page dans cet onglet jusqu’à ce que vous la fermiez, ou qu’une nouvelle vérification ne trouve plus rien à redire. |
| La vérification a échoué | **La vérification des connexions n’a pas pu aboutir**. Vos connexions n’ont pas été testées. |

Sur un compte qui demande votre attention, **Reconnecter** ouvre Mes connexions dans un nouvel onglet, directement sur la bonne carte. Reconnectez-vous-y, revenez, puis cliquez sur **Vérifier à nouveau** dans la notification. Quand la vérification signale un problème ou a échoué, la notification propose aussi **Détails**, qui ouvre la vérification complète, **Vos connexions**, dans un nouvel onglet et teste de nouveau l’ensemble.

Pour fermer la notification, cliquez sur la croix dans son coin (son info-bulle indique **Ignorer**) ou appuyez sur Échap.

Les comptes que vous avez désactivés ne sont pas testés. Sans aucune connexion, il n’y a ni vérification ni ligne dans Activité. La vérification a lieu une fois par ouverture de session.
