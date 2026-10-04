---
title: "Premiers pas avec Nuvora"
slug: "premiers-pas"
lang: "fr"
seoTitle: "Premiers pas | Aide Nuvora"
description: "Ce qu’est Nuvora, comment créer votre compte seul ou en équipe, comment vous connecter, comment se présente le menu, et comment rédiger et publier votre premier post LinkedIn."
excerpt: "Créez votre compte, repérez-vous dans le menu et publiez votre premier post LinkedIn en quelques minutes."
section: "getting-started"
order: 1
updated: 2026-10-04
appPaths: ["/signup", "/login", "/social/linkedin/posts"]
audience: "Tout le monde"
related: ["linkedin-posts", "calendar", "linkedin-ads", "validation", "ask", "agents", "assets-library", "my-connections", "balance-and-payments", "your-team", "client-space", "account-and-sign-in"]
shots:
  - file: "/images/help/getting-started-menu.fr.webp"
    route: "/social/linkedin/posts"
    clip: "#side-nav"
    alt: "Le menu de gauche : Posts, Calendrier, LinkedIn Ads, Validation, Interroger, Agents, Bibliothèque de contenus, Éditeur d’images et Compétences, avec Équipe et Crédits tout en bas"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/styles/apps/nuvora.css", "public/apps/nuvora/vocabulary.js", "src/lib/auth.ts", "src/middleware.ts", "src/pages/signup.astro", "src/lib/signup.ts", "src/pages/api/signup/verify.ts", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/invite/[token].astro", "src/scripts/creditChip.ts", "src/components/ThemeSwitch.astro", "src/components/panels/SocialContentPanel.astro", "src/scripts/socialContent.ts", "src/lib/social/connect-guide.ts"]
---

Nuvora est un espace de travail pour LinkedIn, et pour LinkedIn seulement. Vous y rédigez vos posts avec l’IA ou à la main, puis vous les publiez sur votre profil LinkedIn ou sur les pages entreprise que vous administrez, tout de suite ou à l’heure de votre choix. Chaque post prévu, programmé ou publié apparaît dans un calendrier. Votre compte publicitaire LinkedIn est lu en direct, avec son tableau de bord, ses campagnes et la Bibliothèque publicitaire. Un post peut attendre l’approbation d’un collègue ou d’un client avant de partir. **Interroger** répond à vos questions sur vos posts, votre calendrier et votre compte publicitaire, et des agents surveillent pour vous votre rythme de publication et votre compte publicitaire. Vos visuels sont rangés dans la Bibliothèque de contenus, où l’Éditeur d’images met une image au format LinkedIn.

Vous pouvez travailler seul, ou au sein d’une équipe qui partage un solde prépayé unique, tenu en dollars américains, et qui travaille pour des clients ; ceux-ci se connectent pour voir ce qui a été conçu pour eux. Chaque opération payante annonce son coût : la génération d’une image ou une publication affiche son prix avant que vous ne cliquiez, et un brouillon ou une réponse de l’IA indique ce qu’il a coûté dès qu’il est prêt.

## Créer votre compte

1. Sur la page de connexion, cliquez sur **Créer un compte**.
2. Saisissez votre **Prénom**, votre **Nom** et votre **E-mail**.
3. Sous **How you work**, choisissez l’une des trois options :
   - **Moi seulement** : « Create on your own, with your own credits. You can invite people later. » Nuvora vous ouvre une équipe d’une seule personne, à votre nom, dont vous êtes l’administrateur.
   - **Create a team** : « You run it: invite people, and they create from one shared pool of credits. » Un champ apparaît pour saisir le nom de votre équipe. Vous en êtes l’administrateur.
   - **Join a team** : « Votre équipe utilise déjà Nuvora : un administrateur vous donne accès. » Un champ apparaît, où vous indiquez le nom de votre équipe ou l’adresse e-mail de votre administrateur.
4. Cochez la case d’acceptation des conditions d’utilisation.
5. Cliquez sur **Recevoir mon code**. Nuvora vous envoie par e-mail un code à 6 chiffres. Rien n’est créé tant que vous ne l’avez pas saisi.

Le code reste valable 20 minutes. Les adresses jetables ne permettent pas d’ouvrir un compte : utilisez votre adresse professionnelle ou personnelle. Si l’adresse possède déjà un compte, vous recevez à la place d’un code un e-mail qui vous le signale.

### Saisir le code

L’écran suivant s’intitule **Consultez votre boîte de réception**.

- **Moi seulement** ou **Create a team** : saisissez le code dans **Code de vérification**, choisissez un **Mot de passe** d’au moins 8 caractères, puis cliquez sur **Créer mon compte**. Vous êtes connecté et arrivez sur **Posts**.
- **Join a team** : saisissez le code et cliquez sur **Envoyer ma demande**. Aucun mot de passe ne vous est encore demandé. L’écran **Votre demande est envoyée** vous indique que les administrateurs de l’équipe ont été prévenus. Dès que l’un d’eux accepte, vous recevez une invitation par e-mail. Ouvrez-la, choisissez votre mot de passe et cliquez sur **Rejoindre et se connecter**.

Rien ne vous parvient ? Regardez dans le dossier des indésirables, ou cliquez sur **recommencez** pour corriger l’adresse.

## Se connecter

Saisissez votre **Identifiant** (votre adresse e-mail) et votre **Mot de passe**, puis cliquez sur **Se connecter**. La page de connexion s’affiche dans la langue de votre navigateur, anglais, français ou chinois, et les noms de langue sous le cadre permettent d’en changer. Une fois connecté, Nuvora adopte la langue enregistrée dans votre compte, que vous modifiez à tout moment dans **Paramètres du compte**, sous **Langue**.

Vous arrivez sur **Posts**, ou sur la page d’accueil choisie dans **Paramètres du compte**. Un accès client arrive toujours sur son **Espace client**, et un partenaire commercial sur **Commissions**.

Les nouvelles équipes demandent en outre une seconde étape : un code de connexion à 6 chiffres envoyé à votre adresse e-mail, valable 10 minutes. Saisissez-le sous **Code de connexion** et cliquez sur **Confirmer et se connecter**. Sur un ordinateur dont vous vous servez tous les jours, laissez cochée la case **Faire confiance à ce navigateur pendant 30 jours : il ne demandera plus que mon mot de passe.** Un administrateur peut désactiver cette étape pour toute l’équipe depuis la page **Équipe**. Voir [Compte et connexion](/fr/aide/compte-et-connexion#le-code-de-connexion-par-e-mail).

Une fois que vous êtes connecté, Nuvora vérifie vos connexions LinkedIn en arrière-plan. Si l’une d’elles doit être renouvelée, une notification l’annonce dans le coin inférieur droit de l’écran. Voir [Mes connexions](/fr/aide/mes-connexions#la-vérification-des-connexions-à-louverture-de-session).

## Se repérer

Le menu de gauche réunit d’abord les modules LinkedIn, puis, tout en bas, l’intendance :

| Entrée du menu | Ce qu’elle ouvre |
|---|---|
| **Posts** | Vos posts LinkedIn : le brief, le texte, les images, puis la publication sur votre profil ou sur une page entreprise. Voir [Posts LinkedIn](/fr/aide/posts-linkedin). |
| **Calendrier** | Chaque post prévu, programmé et publié, par mois, par semaine ou sous forme de liste. Voir [Calendrier](/fr/aide/calendrier). |
| **LinkedIn Ads** | **Tableau de bord**, **Campagnes** et **Bibliothèque publicitaire** : votre compte publicitaire lu en direct sur LinkedIn. Voir [LinkedIn Ads](/fr/aide/linkedin-ads). |
| **Validation** | Les posts et les fichiers en attente d’approbation, et ce que vous avez vous-même soumis. Voir [Validation](/fr/aide/validation). |
| **Interroger** | Des réponses tirées de vos posts, de votre calendrier et de votre compte publicitaire LinkedIn. Voir [Interroger](/fr/aide/interroger). |
| **Agents** | **Mes agents**, **Agents de l’équipe** (administrateurs seulement), **Catalogue** et **Exécutions** : des agents qui surveillent la publication et le compte publicitaire. Voir [Agents](/fr/aide/agents). |
| **Bibliothèque de contenus** | Tous les fichiers de votre équipe, rangés en dossiers. Voir [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus). |
| **Éditeur d’images** | Une image mise aux formats LinkedIn, recadrée, retouchée, enrichie de texte et aux couleurs de votre marque. Voir [L’Éditeur d’images](/fr/aide/bibliotheque-de-contenus#léditeur-dimages). |
| **Compétences** | **Mes compétences**, **Compétences de l’équipe** (administrateurs seulement) et le **Catalogue** : les consignes qui façonnent vos brouillons. Voir [Compétences](/fr/aide/competences). |
| **Partenaire** | Réservé aux partenaires commerciaux. Voir [Partenaires](/fr/aide/partenaires). |
| **Équipe** | Les personnes qui partagent votre solde, et vos clients. Voir [Votre équipe](/fr/aide/votre-equipe). |
| **Crédits** | Votre solde : **Acheter des crédits** pour le recharger, **Factures** et **Consommation**. Voir [Solde et paiements](/fr/aide/solde-et-paiements). |

Un administrateur peut désactiver un module pour une personne en particulier : il disparaît alors de son menu. Un accès client voit un menu bien plus court : **Espace client** et **Validation**. Voir [Espace client](/fr/aide/espace-client).

![Le menu de gauche : Posts, Calendrier, LinkedIn Ads, Validation, Interroger, Agents, Bibliothèque de contenus, Éditeur d’images et Compétences, avec Équipe et Crédits tout en bas](/images/help/getting-started-menu.fr.webp)

La barre en haut de chaque page comporte :

- Un bouton en forme de maison, qui fait de la page affichée votre page d’accueil, celle sur laquelle vous arrivez à la connexion. Un second clic rétablit la page par défaut.
- Un bouton soleil ou lune, qui bascule entre le thème clair et le thème sombre.
- **Activité** : les brouillons, générations et vérifications qui tournent pour vous, et leur issue. Le suivi continue pendant que vous passez à une autre page.
- Votre solde : le montant que vous pouvez dépenser dans l’immédiat. Cliquez dessus pour le recharger. Quand il est épuisé, il affiche **Acheter des crédits**. Un accès client n’a pas de solde et ne voit donc aucun montant à cet endroit.
- Votre photo, qui ouvre un menu avec **Paramètres du compte**, **Facturation et crédits**, **Équipe**, **Mes connexions**, les choix **Système**, **Clair** et **Sombre**, la ligne des langues et **Se déconnecter**.

Le pied de page renvoie au **Centre d’aide**, à **Signaler un bug**, à **Nous contacter**, au site nuvora.studio, aux **Nouveautés**, aux **Conditions d’utilisation** et à la **Politique de confidentialité**.

## Votre premier post

1. **Connectez LinkedIn.** Cliquez sur votre photo en haut à droite, puis sur **Mes connexions**. Sur la carte **LinkedIn**, sous **Vos comptes sociaux**, cliquez sur **Connecter un compte**, connectez-vous à LinkedIn sous votre propre nom et appuyez sur **Allow**. Votre profil revient, accompagné des pages entreprise dont LinkedIn vous reconnaît administrateur. Gardez celles pour lesquelles vous publiez. Voir [Mes connexions](/fr/aide/mes-connexions).
2. **Vérifiez votre solde.** Le montant affiché dans la barre du haut correspond à ce que vous pouvez dépenser. S’il indique **Acheter des crédits**, rechargez d’abord votre solde depuis **Crédits** > **Acheter des crédits**. Voir [Solde et paiements](/fr/aide/solde-et-paiements).
3. **Ouvrez Posts** dans le menu. Un nouveau post vous attend ; **Nouveau post** vide le formulaire pour en commencer un autre.
4. **Rédigez le brief.** Choisissez le **Format** (**Texte seul**, **+ Image** ou **+ Carrousel**), la **Langue** et le **Modèle** chargé de la rédaction. Dans la zone du brief, indiquez le sujet du post, à qui il s’adresse et ce qu’il doit obtenir.
5. **Cliquez sur Rédiger avec l’IA.** Le texte revient à l’étape suivante, prêt à être retouché, avec une ligne qui indique ce qu’a coûté le brouillon. Vous préférez l’écrire vous-même ? **Je l’écris moi-même** ouvre l’éditeur sans appel à l’IA et sans rien facturer.
6. **Publiez.** Ouvrez **La publication**. Dans l’onglet **Publier automatiquement**, cochez votre profil ou une page sous **Sous quelle identité il part**, puis cliquez sur **Publier maintenant**, ou sur **Programmer** pour choisir un jour et une heure. Rien n’est coché d’avance : **Programmer** et **Publier maintenant** restent verrouillés tant que vous n’avez pas coché de compte.

Chaque post programmé ou publié apparaît ensuite dans le [Calendrier](/fr/aide/calendrier). Le guide complet, images et validations comprises, se trouve dans [Posts LinkedIn](/fr/aide/posts-linkedin).
