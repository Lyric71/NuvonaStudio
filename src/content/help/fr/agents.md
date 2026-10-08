---
title: "Agents"
slug: "agents"
lang: "fr"
seoTitle: "Des agents qui surveillent vos publications et vos publicités LinkedIn | Aide Nuvora"
description: "Les deux agents standard, Veilleur des publications LinkedIn et Veilleur LinkedIn Ads, les agents créés de zéro, les calendriers, Lancer maintenant, les constats et la suite à leur donner, l’e-mail des résultats, ce que coûte une exécution et qui la paie."
excerpt: "Les agents relisent à intervalle régulier vos publications LinkedIn et votre compte publicitaire, puis vous signalent ce qui a changé, dates et chiffres réels à l’appui."
section: "intelligence"
order: 7
updated: 2026-10-08
appPaths: ["/agents", "/agents/organization", "/agents/catalog", "/agents/runs"]
audience: "Tout le monde ; les créateurs et les administrateurs ajoutent, modifient et lancent les agents ; les agents de l’équipe sont réservés aux administrateurs"
related: ["linkedin-ads", "calendar", "linkedin-posts", "ask", "assets-library", "campaigns", "balance-and-payments", "your-team"]
shots:
  - file: "/images/help/agents-catalog.fr.webp"
    route: "/agents/catalog"
    alt: "Le catalogue des agents : la section Standard avec le Veilleur des publications LinkedIn et le Veilleur LinkedIn Ads, chacun avec ce qu’il lit, Voir le détail et Ajouter à mes agents"
    captured: 2026-10-04
  - file: "/images/help/agents-runs.fr.webp"
    route: "/agents/runs"
    alt: "L’onglet Poste de commande des agents, vide : En cours, Activés et Exécutions précédentes avec le filtre Agents de"
    captured: 2026-10-04
sources: ["src/pages/agents/index.astro", "src/pages/agents/organization.astro", "src/pages/agents/catalog.astro", "src/pages/agents/runs.astro", "src/scripts/agentsAdminPanel.ts", "src/scripts/agentForm.ts", "src/scripts/agentsCatalog.ts", "src/scripts/agentRunsPanel.ts", "src/scripts/agentFindings.ts", "src/components/AgentFindings.astro", "src/pages/ads/linkedin/index.astro", "src/pages/social/calendar/monthly.astro", "src/lib/agents/watchers.ts", "src/lib/agents/data-sources.ts", "src/lib/agents/external-sources.ts", "src/lib/campaigns.ts", "src/lib/agents/agent-spend.ts", "src/lib/agents/agent-web.ts", "src/lib/agents/scheduler.ts", "src/lib/agents/run-notify.ts", "src/pages/api/agents/run.ts", "src/pages/api/agents/runs.ts", "src/pages/api/agents/finding-action.ts", "src/pages/api/agents/settings.ts", "src/lib/app.ts", "vercel.json"]
---

Un **agent** surveille pour vous une partie de votre travail sur LinkedIn. À intervalle régulier, il relit ses données, les compare à ce qu’il avait vu la fois précédente et signale ce qui a changé sous forme de **constats** : de courtes alertes, avec les dates et les chiffres réels, et une suggestion pour la suite.

Rien ne tourne tant que personne n’a ajouté d’agent. Ouvrez **Agents** dans le menu : il compte quatre entrées, qui sont aussi les quatre onglets affichés en haut de chaque page Agents.

| Entrée du menu | Onglet | Ce qu’on y trouve |
|---|---|---|
| **Mes agents** | **Personnel** | Vos propres agents : les seuls que vous modifiez, testez et dupliquez. Ils puisent dans votre propre budget. |
| **Agents de l’équipe** | **Équipe** | Les agents partagés par toute l’équipe. Réservé aux administrateurs. |
| **Catalogue** | **Catalogue** | Les agents standard, ouverts à tous. |
| **Exécutions** | **Poste de commande des agents** | Ce qui tourne, ce qui est activé, et toutes les exécutions précédentes. |

## Les deux agents standard

![Le catalogue des agents : la section Standard avec le Veilleur des publications LinkedIn et le Veilleur LinkedIn Ads, chacun avec ce qu’il lit, Voir le détail et Ajouter à mes agents](/images/help/agents-catalog.fr.webp)

### Veilleur des publications LinkedIn

Il passe en revue les publications LinkedIn environ une fois par jour : ce qui est paru ces 30 derniers jours, ce qui est programmé pour les 14 prochains, la file de publication et les brouillons. Il signale :

- l’absence de post publié depuis 7 jours ou plus, en précisant depuis quelle date ;
- l’absence de toute programmation dans les 7 prochains jours ;
- chaque publication en échec, avec sa date, son compte et le motif invoqué ;
- les posts programmés dont l’heure est passée sans qu’ils soient partis ;
- les brouillons laissés en plan depuis 7 jours ou plus ;
- les posts en attente de validation depuis 3 jours ou plus ;
- les posts approuvés que personne n’a programmés.

Un rythme régulier et un planning rempli donnent un constat au plus. L’agent ne lit que ce que voit la personne pour qui il tourne : un brouillon que son auteur garde privé est laissé de côté. Un post déjà publié compte, quel qu’en soit l’auteur.

Ses constats apparaissent sous la vue mensuelle du [Calendrier](/fr/aide/calendrier), dans **Constats sur la publication LinkedIn**.

### Veilleur LinkedIn Ads

Il lit en direct le compte publicitaire LinkedIn de la personne pour qui il tourne, avec l’accès LinkedIn de cette personne. Environ une fois par jour, il compare les 7 derniers jours aux 7 précédents, campagne par campagne, et suit le rythme de consommation du budget du mois. Il signale :

- une hausse ou une baisse des dépenses de 25 % ou plus, pour le compte ou pour une campagne ;
- un coût par clic ou un coût par résultat qui varie de 20 % ou plus ;
- les campagnes activées qui ne diffusent plus, et la raison pour laquelle LinkedIn les retient ;
- des dépenses du mois bien parties pour dépasser nettement, ou au contraire manquer, ce que permettent les budgets quotidiens des campagnes actives ;
- les alertes du compte qui méritent une action.

Il cite les chiffres des deux périodes, devise comprise, et ignore les campagnes dont les dépenses sont négligeables sur l’une comme sur l’autre.

**Ajoutez-le à vos propres agents.** Il lui faut le compte publicitaire d’une personne à lire, or l’exécution planifiée d’un agent de l’équipe n’appartient à personne en particulier : il ne trouverait rien à lire. Connectez d’abord votre compte publicitaire, dans Mes connexions. Voir [LinkedIn Ads](/fr/aide/linkedin-ads#connecter-votre-compte-publicitaire).

Ses constats apparaissent sous le tableau de bord [LinkedIn Ads](/fr/aide/linkedin-ads), dans **Constats LinkedIn Ads**.

## Ajouter un agent standard

1. Ouvrez **Agents** > **Catalogue**.
2. Cliquez sur **Voir le détail** pour lire l’agent en entier avant de l’adopter : ce qu’il lit, le modèle sur lequel il tourne, sa fréquence d’exécution, s’il cherche sur le web, et ses instructions.
3. Cliquez sur **Ajouter à mes agents**. Le formulaire de l’agent s’ouvre, prérempli avec la configuration standard. Modifiez ce que vous voulez, puis confirmez avec **Ajouter l’agent**.

L’agent rejoint **Mes agents**, activé, et la carte du catalogue indique désormais **Dans mes agents**. Le catalogue, lui, reste tel qu’il est livré.

Vous pouvez aussi en ajouter un depuis le bas de **Mes agents** : dépliez **Ajouter un agent** et cliquez sur **Ajouter** à côté de l’agent.

## Créer un agent de zéro

Un agent personnalisé lit les données que vous choisissez et suit les instructions que vous rédigez.

1. Ouvrez **Agents** > **Mes agents**.
2. Dépliez **Créer un agent de zéro**.
3. Remplissez le formulaire (voir plus bas). Sous **Les données qu’il lit**, cochez ce qu’il doit lire :
   - **Activité sociale** : les contenus sociaux des 30 derniers jours, ce qui a été rédigé, planifié et publié.
   - **Publications LinkedIn** : les posts LinkedIn des 30 derniers jours et des 14 prochains, publiés, programmés ou en échec, ainsi que les brouillons en attente.
   - **Compte publicitaire LinkedIn** : le compte publicitaire de la personne pour qui l’agent tourne, lu en direct, les 7 derniers jours comparés aux 7 précédents.
   - **Dans la Bibliothèque de contenus** : n’importe quelle [campagne](/fr/aide/campagnes) de l’équipe, en tête de liste et signalée par **Campagne**, ainsi que n’importe quel dossier ou document de la bibliothèque. Une campagne apporte son brief et chacun de ses contenus, les images et les clips décrits par leur prompt. Un dossier apporte tous les documents qu’il contient, sous-dossiers compris. Les fichiers PDF, Word, Excel, Markdown et texte sont lus ; les images et les clips sont laissés de côté. Chaque téléchargement est facturé comme depuis la Bibliothèque de contenus. Au-delà de six entrées, un champ de recherche (**Rechercher une campagne, un dossier ou un document**) resserre la liste.
4. Rédigez ses **Instructions** : ce qu’il doit chercher dans ces données, ce qui mérite un constat, et ce qu’il doit ignorer.
5. Cliquez sur **Créer l’agent**. Il démarre activé.

Vous ne pouvez confier à un agent que des données que vous voyez vous-même. Chaque bloc suit vos droits, comme sur ses propres pages.

## Le formulaire de l’agent

Le même formulaire sert à ajouter, à créer et à modifier un agent.

| Champ | Son rôle |
|---|---|
| **Nom** | Le nom affiché sur sa carte et dans les e-mails. |
| **Modèle** | Le modèle avec lequel l’agent raisonne. |
| **Les données qu’il lit** | Imposées pour un agent standard ; à votre choix pour un agent que vous avez créé. |
| **Recherche web** | **ON** : à chaque exécution, l’agent cherche aussi sur le web, jusqu’à trois recherches, ce que vos données ne peuvent contenir (actualité des concurrents, faits de marché, prix, réglementation). Chaque recherche est facturée avec l’exécution. **OFF** : ses seules données. |
| **Ce que les utilisateurs lisent de son rôle** | La phrase affichée sur sa carte. |
| **Instructions (le brief sur lequel l’agent raisonne)** | Ce qu’il surveille et comment en juger. Laissez le champ vide sur un agent standard pour conserver les instructions standard. Ce qu’il a le droit de signaler et sa manière de graduer la gravité sont fixés par la plateforme. |
| **S’exécute toutes les (heures)** | Le délai minimal entre deux exécutions planifiées. |
| **Budget mensuel (USD)** et **Budget hebdomadaire (USD)** | Le maximum que cet agent peut dépenser par mois civil et sur sept jours glissants. Le premier plafond atteint l’empêche de tourner. Vide signifie aucune limite propre. Le formulaire affiche ce qu’il a dépensé ce mois-ci et sur les sept derniers jours. |
| **Envoyer les résultats à** | **Le propriétaire de l’agent** (vos propres agents) ou **Les administrateurs de l’équipe** (agents de l’équipe), **Uniquement ces personnes** avec une liste d’adresses, ou **Personne**. |
| **Contenu de l’e-mail** | **Résumé et lien**, ou **Résultats complets**, avec les constats dans l’e-mail. |

Un champ laissé vide reprend la version standard de l’agent. Les modifications s’appliquent dès l’exécution suivante.

## Gérer vos agents

Dans **Mes agents**, chaque carte indique le nom de l’agent, s’il est **activé** et à quelle fréquence il tourne, le modèle qu’il utilise et ce qu’il lit. Sur chaque carte :

- **Activé** / **Désactivé** : active ou désactive l’agent. Désactivé, il garde sa configuration mais cesse de tourner.
- **Modifier et tester** : ouvre le formulaire. Cliquez sur **Enregistrer** pour conserver vos modifications.
- **Dupliquer** : crée un nouvel agent à vous, prérempli avec la configuration de celui-ci.
- **Retirer de ces agents** (agent standard) ou **Supprimer cet agent** (agent que vous avez créé) : le retire de votre liste. Le catalogue et les agents de l’équipe n’en sont pas affectés.

### Testez avant de vous y fier

Dans **Modifier et tester**, sous **Exécution d’essai**, cliquez sur **Exécuter sur des données réelles**. L’agent tourne tel qu’il est rédigé à l’écran, modifications non enregistrées comprises, sur vos données actuelles, et les constats ne s’affichent qu’à cet endroit : rien n’est versé dans une liste de constats, et la mémoire que l’agent garde de son dernier passage reste intacte. Il s’agit d’un véritable appel d’IA, payant.

## Quand les agents tournent

Un agent activé tourne selon son calendrier. Le planificateur effectue un passage par jour, et un agent s’exécute lors de ce passage dès que le délai fixé dans **S’exécute toutes les (heures)** s’est écoulé depuis sa dernière exécution. Les deux agents standard tournent environ une fois par jour.

Une exécution saute entièrement l’appel d’IA, et ne coûte rien, quand rien n’a changé depuis le passage précédent ou quand il n’y a encore aucune donnée à lire (par exemple, aucun compte publicitaire connecté).

Pour lancer un agent immédiatement, ouvrez **Agents** > **Exécutions** et cliquez sur **Lancer maintenant** à côté de lui.

## Le poste de commande des agents

**Exécutions** ouvre le **Poste de commande des agents**.

![L’onglet Poste de commande des agents, vide : En cours, Activés et Exécutions précédentes avec le filtre Agents de](/images/help/agents-runs.fr.webp)

- **En cours** : les exécutions en train de tourner, et celles qui attendent le prochain passage du planificateur. La page s’actualise d’elle-même tant que quelque chose tourne.
- **Activés** : les agents qui tournent d’eux-mêmes, avec **Dernière exécution :** et **Prochaine exécution :**, et **Lancer maintenant**, qui déclenche aussitôt une exécution réelle et payante.
- **Exécutions précédentes** : les 50 exécutions les plus récentes, planifiées ou lancées à la main. Les exécutions d’essai n’y figurent pas. Chaque ligne indique comment l’exécution s’est terminée : **échec**, **aucune donnée à lire**, **rien n’a changé**, ou le nombre de constats. Ouvrez une ligne pour lire les constats, le modèle, les tokens consommés et le prix de l’exécution.

Un administrateur voit tous les agents de l’équipe et les agents personnels de chaque membre, peut lancer n’importe lequel d’entre eux et filtre **Exécutions précédentes** avec **Agents de**. Les autres voient leurs propres agents.

## Les constats

Chaque constat porte une gravité (**critique**, **avertissement** ou **info**), une date, un titre, une explication et, souvent, une **Suggestion :** qui propose une suite.

Où les lire :

- **Constats sur la publication LinkedIn**, sous la vue mensuelle du calendrier, pour le Veilleur des publications LinkedIn.
- **Constats LinkedIn Ads**, sous le tableau de bord LinkedIn Ads, pour le Veilleur LinkedIn Ads.
- **Exécutions précédentes**, dans le poste de commande des agents, pour tous les agents, y compris ceux que vous avez créés.
- L’e-mail des résultats, quand l’agent en envoie un.

Dans les deux listes de constats, les créateurs et les administrateurs peuvent agir sur chaque constat :

| Bouton | Son effet |
|---|---|
| **Marquer comme vu** | Le marque comme lu. Il reste dans la liste, avec la mention **pris en compte**. |
| **Résoudre** | Il a été traité : il quitte la liste. |
| **Ignorer** | C’était du bruit : il quitte la liste. |
| **Rédiger une réponse** | Rédige avec l’IA la réponse concrète à apporter et la conserve sous le constat, sous la mention **Réponse rédigée :**. Une exécution payante, dont le prix s’affiche avec le brouillon. |
| **Rédiger un post** | Rédige un post LinkedIn qui répond au constat et l’enregistre en brouillon dans vos posts, avec la mention **Post rédigé :** sous le constat. Une exécution payante, dont le prix s’affiche avec le brouillon. |

**Lancer les veilleurs maintenant**, en haut d’une liste de constats, lance aussitôt les agents et affiche le coût de l’exécution à côté du bouton.

## L’e-mail des résultats

Seules les exécutions planifiées envoient un e-mail. Quand vous lancez vous-même un agent, les résultats s’affichent à l’écran.

Après chaque exécution planifiée qui a fait appel à l’IA, l’agent écrit aux personnes choisies dans **Envoyer les résultats à** : par défaut, son propriétaire pour un agent personnel, et les administrateurs de l’équipe pour un agent de l’équipe. L’e-mail résume l’exécution (quand elle a tourné, ce qu’elle a lu, ce qui en est sorti, ce qu’elle a coûté), même quand rien ne méritait d’être signalé, et son bouton ouvre l’exécution dans le poste de commande des agents. Avec **Résultats complets**, les constats figurent aussi dans l’e-mail.

Une exécution qui a sauté l’appel d’IA, parce que rien n’avait changé ou qu’il n’y avait rien à lire, n’envoie rien.

## Les agents de l’équipe

**Agents de l’équipe** (l’onglet **Équipe**) est réservé aux administrateurs. Les agents ajoutés ici sont partagés : ils tournent pour toute l’équipe, et leurs exécutions sont payées par l’équipe.

- **Créer un agent de zéro**, en haut, et **Ajouter un agent**, en bas, fonctionnent comme dans Mes agents.
- **Configurer** choisit ce que vous réglez, par exemple les agents de l’équipe, ou les agents personnels d’un membre, gérés pour son compte.

Les membres voient les agents de l’équipe dans **Mes agents**, sous **Les agents de votre équipe**. **Voir le détail** en présente un en entier, et **Ajouter à mes agents** en crée une copie personnelle, qu’ils modifient, lancent et planifient eux-mêmes, et dont les exécutions leur sont facturées. L’agent de l’équipe reste tel quel.

Gardez le Veilleur LinkedIn Ads parmi les agents personnels : en agent de l’équipe, il n’a le compte publicitaire de personne à lire.

## Ce que coûte une exécution, et qui paie

Une exécution qui fait appel à l’IA est payante : les tokens du modèle, plus chaque recherche web quand **Recherche web** est activée. Une exécution qui ne constate aucun changement, ou qui n’a rien à lire, ne coûte rien.

| Exécution | Facturée à |
|---|---|
| Une exécution planifiée de votre agent personnel | Vous, propriétaire de l’agent, dans la limite quotidienne qui vous est accordée sur les crédits de l’équipe. |
| Une exécution planifiée d’un agent de l’équipe | L’équipe. |
| **Lancer maintenant** | La personne qui clique. |

Le prix de chaque exécution qui a fait appel à l’IA figure dans **Exécutions précédentes** et dans l’e-mail des résultats. Le **Budget mensuel (USD)** et le **Budget hebdomadaire (USD)** propres à l’agent l’arrêtent avant qu’il ne dépense davantage ; une limite plus stricte fixée pour vous ou pour l’équipe l’emporte toujours. Voir [Solde et paiements](/fr/aide/solde-et-paiements).

## Qui peut faire quoi

| Rôle | Agents |
|---|---|
| Administrateur | Tout ce qui suit, plus **Agents de l’équipe**, les exécutions de chaque membre dans le poste de commande des agents, et **Lancer maintenant** sur n’importe quel agent. |
| Créateur | Ajoute, crée, modifie, teste, duplique et lance ses propres agents ; agit sur les constats. |
| Lecteur | Ouvre les pages Agents et consulte la configuration des agents, mais ne peut ni en ajouter, ni en modifier, ni en tester, ni en lancer : « Votre rôle est en lecture seule : vous pouvez consulter la configuration de ces agents, mais ni la modifier ni lancer de test. » |
| Client | Aucun accès. |
