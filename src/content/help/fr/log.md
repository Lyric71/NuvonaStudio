---
title: "Journal"
slug: "journal"
lang: "fr"
seoTitle: "Votre Journal : exécutions, e-mails, connexions et dépenses | Aide Nuvora"
description: "Le Journal, dans le menu sous votre photo : vos exécutions et notifications, les passages de vos agents, les e-mails reçus de Nuvora, vos connexions et vos dépenses, dans un tableau à filtrer, à trier et à exporter."
excerpt: "Votre historique personnel dans Nuvora : brouillons, posts et notifications, exécutions de vos agents, e-mails reçus, connexions et actions payantes."
section: "account"
order: 14.5
updated: 2026-10-17
appPaths: ["/log"]
audience: "Tous les membres de l’équipe, sauf les accès client ; personne d’autre ne voit votre Journal"
related: ["getting-started", "account-and-sign-in", "agents", "linkedin-posts", "balance-and-payments", "your-team"]
shots: []
sources: ["src/pages/log.astro", "src/scripts/logPanel.ts", "src/lib/user-log.ts", "src/pages/api/log.ts", "src/scripts/activityTracker.ts", "src/scripts/activityKinds.ts", "src/lib/activity-jobs.ts", "src/pages/api/jobs.ts", "src/lib/spend-actions.ts", "src/layouts/Layout.astro", "src/lib/features.ts", "src/lib/app.ts"]
---

Le **Journal** tient votre historique personnel dans Nuvora. Un seul tableau y réunit les brouillons, visuels et posts que Nuvora a traités pour vous et les notifications qu’il vous a adressées, les exécutions de vos agents, les e-mails qu’il vous a envoyés, les connexions à votre compte et les actions payantes qui vous ont été facturées. C’est là qu’on vérifie si un post programmé est bien parti, ce qui a échoué en votre absence, quel navigateur s’est connecté la veille au soir ou ce qu’a coûté un brouillon.

**Activité**, en haut de la page, montre ce qui tourne et ce qui s’est achevé dans la journée. Le Journal garde l’historique au-delà. À ne pas confondre avec la carte **Journal d’activité** des **Paramètres du compte**, qui met vos dépenses en graphique.

## Ouvrir le Journal

Cliquez sur votre photo, en haut à droite, puis sur **Journal**. La page s’ouvre sur la mention **Votre historique**, au-dessus du titre.

Deux autres chemins y mènent :

- **Tout voir dans le Journal**, au pied du panneau **Activité** ;
- le bouton **Plus** de la carte qui récapitule les notifications manquées (voir [Au retour, une pile de notifications](/fr/aide/journal#au-retour-une-pile-de-notifications)).

## Les six rubriques

Les onglets placés sous l’en-tête de la page décident de ce qu’affiche le tableau ; chacun indique le nombre de lignes qu’il compte sur la période :

| Rubrique | Contenu |
|---|---|
| **Tout** | Les cinq rubriques suivantes réunies dans un même tableau. |
| **Exécutions et notifications** | Toutes les tâches annoncées par **Activité** : les brouillons et visuels de post que vous avez lancés, et ce qui s’est produit sans vous, comme un post programmé publié ou refusé. Les lignes effacées d’**Activité** y figurent toujours. |
| **Agents** | Les exécutions de vos propres agents, et celles que vous avez déclenchées vous-même avec **Lancer maintenant**. |
| **E-mails** | Les e-mails que Nuvora a envoyés à votre adresse : codes de connexion, récapitulatifs, synthèses, alertes, etc. |
| **Connexions** | Chaque **S’est connecté**, **Connexion refusée**, **S’est déconnecté** et **Réinitialisation du mot de passe demandée** de votre compte. |
| **Dépenses** | Chaque action payante qui vous a été facturée, au prix facturé. |

## Lire le tableau

Chaque ligne correspond à un événement, réparti sur huit colonnes :

| Colonne | Contenu |
|---|---|
| **Date** | Le jour et l’heure, au format de vos réglages de date et d’heure. |
| **Section** | **Exécutions**, **Agents**, **E-mails**, **Connexions** ou **Dépenses**. |
| **Type** | Une exécution reprend le type affiché dans **Activité**, par exemple **Post pour les réseaux sociaux**, **Visuels de post** ou **La publication**. Les autres lignes indiquent **Exécution d’agent**, **E-mail**, **Connexion** ou **Action payante**. |
| **Quoi** | Le nom de la tâche ou de l’agent, l’objet de l’e-mail, l’événement de connexion ou le nom de l’action payante. |
| **Statut** | **Terminé**, **Échec** ou **En cours** pour les exécutions et les agents ; **Envoyé** ou **Non envoyé** pour les e-mails ; **Réussi** ou **Refusé** pour les connexions ; **Facturé** pour les actions payantes. |
| **Détails** | Le résultat ou l’erreur d’une exécution, ce qu’a relevé un agent, la raison pour laquelle un e-mail n’est pas parti, le navigateur, le système, le lieu et l’adresse IP d’une connexion (« Chrome · Windows »), ou les jetons consommés sur un modèle par une action payante. |
| **Durée** | Le temps qu’a pris une exécution ou un passage d’agent. |
| **Facturé** | Ce que vous a coûté une action payante, ou une exécution d’agent facturée. |

Au-dessus du tableau, une ligne résume ce que gardent les filtres, par exemple « 133 lignes · 14 en échec · $0.03 facturés ». Un clic sur l’en-tête d’une colonne trie le tableau selon cette colonne ; un second clic inverse l’ordre. Les cases vides restent toujours en fin de liste.

## Affiner la liste

- **Période**, en haut à droite : **Aujourd’hui**, **7 derniers jours**, **30 derniers jours** (par défaut), **90 derniers jours** ou **12 derniers mois**.
- **Statut**, à côté des onglets : **Tous les statuts**, **Réussi**, **Échec** ou **En cours**. **Échec** garde les tâches et exécutions d’agents en échec, les e-mails non envoyés et les connexions refusées.
- **Type** : **Tous les types**, ou l’un des types présents dans la rubrique.
- **Rechercher dans le journal** : ne garde que les lignes dont le nom, les détails, le type ou le statut contiennent les mots saisis.

Le tableau affiche 100 lignes par page. En dessous, la pagination situe la page (« Lignes 1 à 100 sur 133 ») et propose **Précédent**, les numéros de page et **Suivant**. L’adresse de la page retient la période, la rubrique, les filtres, le tri et la page : un rechargement ou un favori rouvre la même vue.

Toute la période se charge d’un coup, jusqu’à 1 000 lignes par rubrique. Au-delà, la ligne de synthèse ajoute « Cette période contient plus de lignes que le journal n’en affiche d’un coup. Choisissez une période plus courte pour tout voir. »

**Exporter en CSV**, à côté de **Période**, enregistre toutes les lignes que gardent les filtres, toutes pages confondues, avec des valeurs brutes qu’un tableur additionne sans peine : l’heure au format ISO, la durée en secondes et le montant facturé en dollars américains.

## Ouvrir une ligne

- Une exécution ouvre la page à laquelle elle appartient, comme une ligne d’**Activité**.
- Une exécution d’agent ouvre l’onglet **Exécutions** des agents, sur cette exécution précise. Voir [Agents](/fr/aide/agents).
- Un e-mail déplie son texte sous sa ligne. Un nouveau clic sur l’objet le replie.
- Une connexion ou une action payante ne mène nulle part : tout ce qu’il faut savoir figure sur la ligne.

Les e-mails qui donnent accès à votre compte (le code de connexion, la réinitialisation du mot de passe, le code d’inscription, l’e-mail de bienvenue et les invitations) sont recensés avec leur objet et leur heure, sans jamais en montrer le texte. Un clic affiche seulement : « Cet e-mail contenait un code de connexion ou un lien vers votre compte : son texte n’est donc pas conservé ici. » Une session restée ouverte sur un poste partagé ne peut ainsi pas servir à s’emparer de votre mot de passe.

## Au retour, une pile de notifications

Les tâches achevées pendant votre absence s’annoncent à votre retour dans Nuvora, chacune par une carte en bas à droite de l’écran. Au-delà de cinq, seules les cinq plus récentes ont droit à une carte. Une dernière carte ferme la pile : **Pendant votre absence**, « 12 autres notifications » (avec le nombre réel) et un bouton **Plus** qui ouvre le Journal.

Toutes sont alors considérées comme annoncées : aucune seconde vague ne surgit à la page suivante. Elles vous attendent toutes dans **Exécutions et notifications**.

## Qui voit votre Journal

Vous seul. Le Journal ne lit que vos propres lignes, quel que soit le rôle de la personne qui le consulte, administrateurs de l’équipe compris. Ceux-ci voient toutefois vos dernières connexions sur votre fiche, ouverte depuis **Équipe** : c’est un autre écran.

Les accès client n’ont pas de Journal. Chez eux, la carte des notifications manquées affiche le nombre sans le bouton **Plus**.

Le Journal a sa propre ligne dans les droits, **Journal**, sous **Commun**, accordée d’emblée à tous les rôles sauf Client : « Son propre historique : exécutions, notifications, exécutions d’agents, e-mails reçus, connexions et actions payantes. Le droit de consultation suffit ; personne d’autre n’y a accès. » Quand un administrateur la retire à quelqu’un, **Journal** quitte son menu, **Activité** perd son lien **Tout voir dans le Journal** et la carte des notifications manquées n’affiche plus que le nombre. Voir [Votre équipe](/fr/aide/votre-equipe).

## Ce que cela coûte

Consulter ou exporter le Journal ne coûte rien. **Dépenses** détaille le coût de chacune de vos actions payantes ; **Journal d’activité**, dans les **Paramètres du compte**, en fait la synthèse. Voir [Solde et paiements](/fr/aide/solde-et-paiements).
