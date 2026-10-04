---
title: "Interroger"
slug: "interroger"
lang: "fr"
seoTitle: "Interroger vos posts et vos publicités LinkedIn | Aide Nuvora"
description: "Ask Intelligence répond aux questions formulées avec vos mots à partir de vos posts LinkedIn, de votre calendrier de publication, de votre compte publicitaire LinkedIn, de la Bibliothèque de contenus et de la file de validation. Données incluses, recherche web, modèles, compétences, références avec @, conversations conservées et prix de chaque réponse."
excerpt: "Des questions en langage courant, des réponses tirées de vos données LinkedIn, et le prix affiché sous chaque réponse."
section: "intelligence"
order: 6
updated: 2026-10-04
appPaths: ["/ask"]
audience: "Les créateurs et les administrateurs posent des questions ; les lecteurs peuvent ouvrir la page, mais pas interroger"
related: ["linkedin-posts", "calendar", "linkedin-ads", "assets-library", "validation", "skills", "balance-and-payments", "account-and-sign-in"]
shots:
  - file: "/images/help/ask-page.fr.webp"
    route: "/ask"
    alt: "La page Ask Intelligence : Conversations précédentes, Données incluses et Nouvelle conversation dans le bandeau, l’interrupteur Recherche web sur OFF avec la mention La recherche web est désactivée pour votre équipe, la liste Modèle, Utiliser une compétence et la zone de saisie de la question"
    captured: 2026-10-04
sources: ["src/pages/ask.astro", "src/scripts/askIntelligence.ts", "src/scripts/askMentions.ts", "src/scripts/modelPicker.ts", "src/scripts/skillsPicker.ts", "src/pages/api/intelligence/ask.ts", "src/pages/api/intelligence/sources.ts", "src/pages/api/intelligence/chats/index.ts", "src/lib/intelligence.ts", "src/lib/skills-db.ts", "src/lib/playground.ts", "src/middleware.ts", "src/lib/app.ts"]
---

**Interroger** est l’endroit où vous posez, avec vos propres mots, vos questions sur votre travail LinkedIn. Ouvrez **Interroger** dans le menu : la page s’intitule **Ask Intelligence**. Elle lit vos données, dans la limite de vos droits d’accès, et rédige la réponse en précisant sur quoi elle s’appuie et ce qu’elle a coûté.

Par exemple : « Quels posts sont parus ce mois-ci, et comment s’est comporté le compte publicitaire la semaine dernière ? »

![La page Ask Intelligence : Conversations précédentes, Données incluses et Nouvelle conversation dans le bandeau, l’interrupteur Recherche web sur OFF avec la mention La recherche web est désactivée pour votre équipe, la liste Modèle, Utiliser une compétence et la zone de saisie de la question](/images/help/ask-page.fr.webp)

## Ce qu’Interroger peut lire

| Données | Ce qu’Interroger lit |
|---|---|
| **Posts LinkedIn** | Vos posts LinkedIn : en brouillon, programmés et publiés, avec leur statut et leur date prévue, lus en entier quand la question porte sur le texte. Également le calendrier de publication : ce qui est prévu et ce qui est paru, avec les dates, le statut et le lien vers la publication en ligne. |
| **LinkedIn Ads** | Votre propre compte publicitaire LinkedIn, lu en direct avec votre accès LinkedIn : pour chaque campagne, son groupe, son statut, son objectif, son budget quotidien et son enchère, avec les dépenses, les impressions, les clics, le taux de clic, les résultats et le coût par résultat, sur 7 à 90 jours (30 par défaut), comparés à la période précédente. |
| **Bibliothèque de contenus** | Les fichiers et les dossiers de l’équipe, ainsi que les documents eux-mêmes : PDF, Word, Excel, Markdown, texte, et les textes rédigés dans Nuvora. |
| **Validation** | Ce qui attend une validation, qui l’a demandée et qui tranche, et ce qui a été décidé, avec les derniers commentaires. |

Chaque type de données suit vos droits : les posts LinkedIn exigent le droit **Posts** ou **Publication et programmation**, LinkedIn Ads exige le droit **LinkedIn Ads**, et le compte publicitaire est toujours le vôtre, connecté dans [Mes connexions](/fr/aide/mes-connexions). Voir [LinkedIn Ads](/fr/aide/linkedin-ads).

Interroger se contente de lire. Il ne modifie jamais un post, une campagne ou un fichier.

## Poser une question

1. Tapez votre question dans la zone du bas (1 000 caractères au plus).
2. Appuyez sur **Entrée** ou cliquez sur **Interroger** pour l’envoyer. **Maj+Entrée** passe à la ligne.
3. La réponse s’affiche dans le fil. Posez une question de relance dans la même zone : les relances restent dans le fil, et le bouton devient **Envoyer**.

Sous chaque réponse :

- **D’après :** nomme les données sur lesquelles s’appuie la réponse, par exemple **LinkedIn Ads** ou **Validation**.
- **Depuis le web :** liste les pages consultées, quand la recherche web était activée.
- La dernière ligne indique le nombre de tokens et le prix de cette réponse, ainsi que le nombre de recherches web lorsqu’il y en a eu.

### Désigner un dossier ou un document avec @

Tapez **@** dans la zone, puis les premières lettres d’un nom. La liste des dossiers et des fichiers de la Bibliothèque de contenus auxquels vous avez accès s’ouvre. Choisissez-en un : il s’inscrit dans votre question, et Interroger lit exactement ce dossier ou ce document au lieu de deviner celui que vous aviez en tête.

Par exemple : « Résume le brief de @Clients/Acme ».

## Données incluses

**Données incluses**, dans le bandeau, liste tout ce qu’Interroger peut lire pour vous, tout étant coché par défaut. Décochez ce que cette conversation doit écarter. **Tout inclure** recoche l’ensemble, **Effacer** décoche tout.

Ce choix est enregistré avec la conversation. Il ne peut que restreindre ce à quoi vous avez accès, jamais l’étendre.

## Conversations

Chaque conversation est conservée, et vous seul voyez les vôtres.

- **Nouvelle conversation** en démarre une autre. Celle qui est à l’écran reste dans votre liste.
- **Conversations précédentes** indique combien vous en avez et ouvre la liste, de la plus récente à la plus ancienne, avec un champ de recherche. Cliquez sur l’une d’elles pour la rouvrir là où vous l’aviez laissée. **Renommer** lui donne un titre de votre choix, **Supprimer** l’efface après confirmation.

## Recherche web

Par défaut, Interroger répond à partir de vos seules données. L’interrupteur **Recherche web** permet à une réponse de puiser aussi sur le web.

- Sur **ON**, la réponse peut chercher sur le web, liste les pages lues et les tient à part de vos données. **Recherches par réponse, jusqu’à** fixe le nombre de recherches que la prochaine réponse peut lancer, de 1 à 6. Moins il y a de recherches, plus le prix baisse.
- Chaque recherche est facturée et s’ajoute au prix affiché sous la réponse.
- Ce choix est enregistré avec la conversation.

Quand la recherche web n’est pas autorisée pour votre équipe, l’interrupteur reste sur **OFF** et la page indique « La recherche web est désactivée pour votre équipe. »

Tous les modèles ne savent pas chercher sur le web. Avec un modèle qui ne le sait pas, la page indique « Ce modèle ne dispose pas de sa propre recherche web. » Tant que l’interrupteur est sur ON, la liste **Modèle** ne propose que les modèles capables de chercher.

## Choisir un modèle

**Modèle** affiche **Par défaut :** suivi du modèle que votre équipe utilise quand personne n’en choisit. Choisissez-en un autre dans la liste pour l’utiliser pour vos questions. Votre choix est mémorisé sur ce navigateur pour Interroger.

Pour masquer les modèles dont vous ne vous servez jamais, rendez-vous dans **Paramètres** > **Mes modèles**. Voir [Compte et connexion](/fr/aide/compte-et-connexion).

## Utiliser une compétence

**Utiliser une compétence** ouvre **Compétences à appliquer** : vos propres compétences et celles de votre équipe. Rien n’est appliqué tant que vous ne le choisissez pas. Une compétence choisie accompagne les questions que vous envoyez tant qu’elle reste sélectionnée, quel que soit l’usage pour lequel elle a été rédigée. **Gérer les compétences** ouvre les pages Compétences. Voir [Compétences](/fr/aide/competences).

## Ce que cela coûte

Chaque réponse est une exécution d’IA payante. Son prix s’affiche sous la réponse et il est facturé tel qu’affiché, comme toute autre exécution dans Nuvora. Voir [Solde et paiements](/fr/aide/solde-et-paiements).

Ce qui fait monter le prix :

- la longueur de la question, du fil jusque-là et des données lues ;
- le modèle choisi ;
- chaque recherche web, quand l’interrupteur est sur ON.

Quand vos crédits ou une limite de dépense seraient dépassés, la question est refusée avec le motif, et rien n’est facturé.

## Qui peut utiliser Interroger

| Rôle | Interroger |
|---|---|
| Administrateur | Pose des questions, sur tout ce que ses droits lui ouvrent. |
| Créateur | Pose des questions, sur tout ce que ses droits lui ouvrent. |
| Lecteur | Ouvre la page, mais ne peut pas poser de question : une question est refusée avec le message « Votre rôle (lecteur) est en lecture seule. » |
| Client | Aucun accès. |
