---
title: "Posts LinkedIn"
slug: "posts-linkedin"
lang: "fr"
seoTitle: "Rédiger, programmer et publier des posts LinkedIn | Aide Nuvora"
description: "Le module Posts : rédiger le brief et le brouillon d’un post LinkedIn, lui ajouter des images et revenir à un jeu antérieur, indiquer à quel client il est destiné, le soumettre à validation, puis le publier sur votre profil ou sur une page entreprise que vous administrez, tout de suite ou à l’heure programmée."
excerpt: "Rédigez un post LinkedIn avec l’IA ou à la main, donnez-lui une image ou un carrousel, et publiez-le sur votre profil ou votre page entreprise, tout de suite ou à l’heure de votre choix."
section: "linkedin"
order: 2
updated: 2026-10-08
appPaths: ["/social/linkedin/posts", "/my-connections"]
audience: "Créateurs et administrateurs ; les lecteurs consultent"
related: ["calendar", "validation", "my-connections", "assets-library", "campaigns", "skills", "choosing-a-model", "client-space", "your-team", "agents"]
shots:
  - file: "/images/help/linkedin-posts-studio.fr.webp"
    route: "/social/linkedin/posts"
    alt: "Le module Posts sur un nouveau post : le bandeau avec Tous les posts, Fonctionnement de cette page, Nouveau post et les quatre tuiles d’étape, puis le brief avec Format, Émoticônes, Langue, le sélecteur de modèle sur Équilibré, Importer un fichier, Rédiger avec l’IA et Je l’écris moi-même"
    captured: 2026-10-08
  - file: "/images/help/linkedin-posts-picture-versions.fr.webp"
    route: "/social/linkedin/posts"
    alt: "L’étape des images d’un post en carrousel : Texte seul, Une image et Carrousel avec 2 diapositives, les cartes Générer à nouveau, Ajouter depuis la bibliothèque et Importer depuis votre ordinateur à gauche, les deux diapositives à droite avec Modifier la diapositive 1 dans l’éditeur d’images, et Versions des visuels avec v2 Sur la publication et v1 avec Utiliser cette version"
    captured: 2026-10-08
sources: ["src/lib/app.ts", "src/pages/social/linkedin/posts.astro", "src/pages/social/linkedin/articles.astro", "src/components/panels/SocialContentPanel.astro", "src/components/panels/SocialFormatBlock.astro", "src/scripts/socialContent.ts", "src/scripts/selectionRewrite.ts", "src/scripts/emojiPicker.ts", "src/scripts/modelPicker.ts", "src/scripts/imageEditor.ts", "src/scripts/imageEditorNetworks.ts", "src/pages/api/social-content/draft.ts", "src/pages/api/social-content/[id].ts", "src/pages/api/social/publications/index.ts", "src/lib/social-format-skills.ts", "src/lib/social/networks/linkedin.ts", "src/lib/social/connect-guide.ts", "src/lib/social/limits.ts", "src/lib/social/live.ts", "src/lib/social/scheduler.ts", "src/lib/social/fault.ts", "src/lib/social/http.ts", "src/lib/social/notify.ts", "src/lib/own-work.ts", "src/lib/team-clients.ts", "src/lib/validation-lock.ts", "src/lib/social-content-db.ts", "src/pages/api/social-content/visual-versions/[id].ts", "src/scripts/libraryFolderPicker.ts", "src/lib/brief-sources.ts", "public/apps/nuvora/vocabulary.js", "src/scripts/campaignChoice.ts", "src/lib/request-campaign.ts"]
---

**Posts**, dans le menu, rassemble vos posts LinkedIn, du premier brouillon jusqu’à la mise en ligne. Vous rédigez un post avec l’IA ou à la main, vous lui donnez une image ou un carrousel, et vous le publiez sur votre profil LinkedIn ou sur une page entreprise que vous administrez, tout de suite ou au moment de votre choix. À moins que vous ne préfériez le publier vous-même depuis l’éditeur de LinkedIn.

## Avant de commencer

**Pour publier depuis Nuvora, connectez votre compte LinkedIn.** Les connexions sont personnelles : vous reliez votre propre compte LinkedIn dans **Mes connexions**, dans le menu qui s’ouvre sous votre photo. Personne d’autre ne peut publier avec, et vous ne pouvez pas publier avec celui d’un collègue. Voir [Mes connexions](/fr/aide/mes-connexions).

Une seule connexion couvre votre profil et les pages entreprise que vous administrez. LinkedIn renvoie votre profil ainsi que toutes les pages entreprise qui vous comptent parmi leurs administrateurs autorisés à publier. Gardez votre profil et les pages pour lesquelles vous publiez, retirez les autres. Si une page manque, c’est que LinkedIn ne vous reconnaît pas comme son administrateur : demandez au propriétaire de la page de vous ajouter, puis connectez-vous à nouveau.

La connexion dure 60 jours. Un e-mail vous prévient avant son expiration, et un clic suffit à la renouveler.

Rédiger un post, ou le publier vous-même dans l’éditeur de LinkedIn, ne demande aucun compte connecté.

**Qui fait quoi.** Les créateurs et les administrateurs rédigent, ajoutent des images et publient. Les lecteurs peuvent ouvrir le module et lire les posts auxquels ils ont accès. Les accès client ne voient pas du tout le module : un post parvient à un client par le biais de [Conçue pour](#un-post-conçu-pour-un-client).

## Ouvrir le module

Cliquez sur **Posts** dans le menu. Le bandeau sombre, en haut, comporte :

- le bouton de la liste des posts, qui affiche le titre du post ouvert (ou **All posts**) et le nombre de posts ;
- **Fonctionnement de cette page**, une courte note de présentation du module ;
- **Nouveau post**, qui vide le formulaire pour un nouveau post ;
- les quatre étapes du post ouvert, sous forme de tuiles numérotées de 00 à 03 : **Le brief**, **Le texte**, **Les images** et **La publication**. Chaque tuile indique où en est l’étape (terminée, en cours, à faire ou sans objet) ; un clic ouvre l’étape correspondante.

![Le module Posts sur un nouveau post : le bandeau avec Tous les posts, Fonctionnement de cette page, Nouveau post et les quatre tuiles d’étape, puis le brief avec Format, Émoticônes, Langue, le sélecteur de modèle sur Équilibré, Importer un fichier, Rédiger avec l’IA et Je l’écris moi-même](/images/help/linkedin-posts-studio.fr.webp)

## Retrouver un post

Cliquez sur le bouton de la liste des posts pour afficher tous vos posts dans un panneau superposé à la page. Chaque ligne indique le titre, le statut (brouillon, en attente de validation, approuvé ou publié), le jour de rédaction et le nombre d’images.

- Tapez dans le champ de recherche des mots du titre ou du texte, un statut, ou une date écrite sous la forme 2026-09, septembre ou 14/09/2026.
- Remplissez **Rédigé à partir de** et **vers** pour ne garder que les posts rédigés entre deux dates. Laissez l’un des deux vides pour tout ce qui précède ou suit. **Effacer les dates** supprime les deux.

Cliquez sur une ligne pour ouvrir le post. Le panneau se referme dès que vous cliquez ailleurs ou appuyez sur Échap.

## Qui voit un post

Un post appartient à la personne qui l’a rédigé. Tant que vous ne le partagez pas, vous êtes seul à le voir. Sur le bandeau, la ligne sous le titre indique qui peut voir le post ; cliquez sur **Qui le voit**, choisissez **Moi seulement** ou **Toute l’équipe**, puis **Enregistrer**.

Un post conçu pour un client est également visible par les collaborateurs de ce client, quel que soit son partage au sein de l’équipe. Voir [Un post conçu pour un client](#un-post-conçu-pour-un-client).

## Rédiger le brief

1. Choisissez le **Format** : **Texte seul**, **+ Image** ou **+ Carrousel**. Vous pourrez le changer plus tard, à l’étape des images.
2. Laissez **Émoticônes** coché pour semer quelques emoji dans le post, ou décochez-le pour n’en avoir aucun.
3. Choisissez la **Langue**, ainsi que le modèle chargé de la rédaction : **Rapide**, **Équilibré**, **Puissant** ou n’importe quel modèle sous **Tous les modèles**, chacun avec le coût d’un post. L’étoile **Recommandé ici** signale le modèle qu’emploie Nuvora quand personne ne choisit. Votre choix est conservé pour la fois suivante. Voir [Choisir un modèle](/fr/aide/choisir-un-modele).
4. Rédigez le brief comme vous brieferiez un rédacteur : l’angle ou l’actualité, le public visé et ce que le post doit obtenir. La zone accepte jusqu’à 20 000 caractères. **Importer un fichier** ajoute dans la zone le texte d’un fichier .txt ou .md ; le fichier lui-même n’est pas conservé.
5. Cliquez sur **Rédiger avec l’IA**, ou sur **Je l’écris moi-même** pour ouvrir l’éditeur sans appel à l’IA et sans rien facturer. Ce qui figure déjà dans la zone du brief devient alors le premier texte de votre post.

Le choix **Campagne**, à côté de **Rédiger avec l’IA**, range dans une campagne le post, ses images et chaque modification enregistrée automatiquement. L’étape des images affiche le même choix. Voir [Campagnes](/fr/aide/campagnes#remplir-une-campagne-au-fil-de-la-création).

Le volet situé au bord droit, **Compétences et matière**, déplie deux cartes :

- **Matière première**, entièrement facultative : **Fichiers** (PDF ou texte brut ; le texte en est extrait et conservé avec le post, le fichier lui-même n’est jamais stocké), un **Dossier de contexte tiré de la bibliothèque** (chaque document texte de ce dossier et de ses sous-dossiers est lu avant le début de la rédaction ; la même liste propose, sous **Campagnes**, les [campagnes](/fr/aide/campagnes) de l’équipe, dont le brief, l’inventaire des contenus et le texte des documents sont alors lus), **Pages à lire** (des adresses web, une par ligne, lues au moment de l’exécution) et **Mots-clés à viser** (tapez un terme et appuyez sur Entrée).
- **Compétences**, où **Format de post LinkedIn** est déjà sélectionné. Cette compétence porte les règles de publication de LinkedIn : grâce à elle, le brouillon est contrôlé au regard de ces règles et corrigé une fois s’il en enfreint une ; un brouillon qui dépasse encore 3 000 caractères après cette correction est refusé plutôt qu’enregistré. Ajoutez vos propres compétences, ou désélectionnez-la pour écrire en toute liberté. Voir [Compétences](/fr/aide/competences).

Le brouillon s’ouvre à l’étape du texte, avec une ligne qui indique ce qu’il a coûté. L’opération apparaît aussi dans **Activité**, en haut de la page : vous pouvez donc vous éloigner pendant qu’elle tourne.

## Retoucher le texte

L’étape du texte se résume à un éditeur, avec un titre de travail en haut et le texte en dessous. Ce que contient cette zone est exactement ce qui sera publié. LinkedIn accepte jusqu’à 3 000 caractères, et un compteur sous la zone indique la part de cet espace qu’occupe le texte. Seules les premières lignes s’affichent avant « voir plus » : faites en sorte que la première tienne debout toute seule.

À côté de l’éditeur, **Le post lui-même** montre le post tel que LinkedIn l’affichera. Vous pouvez aussi taper directement dedans : c’est le même texte.

- **L’enregistrement est automatique**, environ une seconde après votre dernière frappe, quand vous quittez le champ, et quand vous changez d’onglet ou fermez la page. Une ligne à côté d’**Enregistrer** affiche **Enregistrement…**, **Enregistré** ou **Not saved:** suivi de la raison.
- **Add an emoticon** ouvre un sélecteur d’emoji.
- **Les versions.** Chaque version du texte est conservée. Indiquez ce qu’il faut changer sous **Une autre version** (« plus court », « finir sur une question »), choisissez un modèle et cliquez sur **Écrire une autre version**. Dès qu’il en existe au moins deux, cliquez sur une version pour la charger, sur **Utiliser cette version** pour en faire celle qui sera publiée, ou sur **Supprimer** pour l’écarter. Le point vert signale la version retenue, celle qui part en publication, en validation et dans la Bibliothèque de contenus.
- **Réécrire un passage.** Surlignez un passage et cliquez sur **Réécrire avec l’IA**, juste à côté. Choisissez une retouche rapide (**Shorter**, **Longer**, **Plainer**, **More concrete**, **Fix the writing**, **More emoticons**, **Fewer emoticons**) ou tapez votre propre consigne ; seul ce passage est réécrit.
- **Relancer la rédaction.** La tuile du brief fait réapparaître ce à partir de quoi le post a été rédigé. Modifiez-le et cliquez sur **Draft again** : le nouveau texte devient une nouvelle version du même post, et celle dont vous disposez est conservée.

## Ajouter des images

Ouvrez **Les images**. La forme vient en premier, et vous pouvez la modifier à tout moment : **Texte seul**, **Une image** ou **Carrousel**. Pour un carrousel, **Diapositives** fixe leur nombre (de 2 à 8). Choisissez ensuite l’une des trois voies :

- **Générer avec l’IA** (**Générer à nouveau** une fois qu’une image existe), avec son prix sous l’intitulé.
- **Choisir dans la bibliothèque** (**Ajouter depuis la bibliothèque** une fois qu’une image existe) : une image déjà présente dans votre [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus).
- **Importer depuis votre ordinateur** : le fichier est enregistré dans votre Bibliothèque de contenus et placé sur le post.

L’étape se partage en deux colonnes. À gauche, les trois voies et les réglages de génération ; à droite, ce que porte le post à cet instant, qui reste sous vos yeux pendant une génération.

**Générer avec l’IA.** Sous **Créée par l’IA : le prompt**, décrivez l’image, ou, pour un carrousel, consacrez un bloc à chaque diapositive. Laissé vide, le prompt est tiré du brief et du post. **Améliorer avec l’IA** le rédige pour vous, à retoucher ensuite ; le sélecteur de modèle placé à côté désigne le modèle de texte qui l’écrit, avec son coût. Choisissez le **Moteur** et le **Format** : la liste des moteurs s’ouvre sur le moins cher, si bien qu’une génération lancée sans y toucher coûte toujours le moins possible. Le bouton placé sous les réglages (**Générer l’image**, **Générer le carrousel**, ou **Générer une nouvelle image** quand il en existe déjà une) affiche le prix avant que vous ne cliquiez.

Une génération apparaît dans **Activité**, et le post en conserve le résultat même si vous partez. Le **×** d’une image la retire du post ; elle reste dans la Bibliothèque de contenus. Cliquez sur une image pour l’afficher en grand.

**Versions des visuels.** Chaque jeu d’images qu’a porté le post est conservé et numéroté **v1**, **v2**, etc. : chaque génération, chaque retouche, chaque choix dans la bibliothèque et chaque import en crée un. La liste figure sous les images, de la plus récente à la plus ancienne ; chaque version montre sa première image, le nombre d’images qu’elle compte et sa date. Celle que porte le post est signalée par **Sur la publication**. **Utiliser cette version** remet un jeu antérieur sur le post ; le **×** voisin retire cette version de la liste, et ses fichiers restent dans la Bibliothèque de contenus.

**Modifier une image.** Sous les images, cliquez sur **Modifier dans l’éditeur d’images** (**Modifier la diapositive 1 dans l’éditeur d’images** pour un carrousel), ou survolez n’importe quelle image et cliquez sur son crayon, sous le **×** : chaque diapositive a le sien. L’image s’ouvre dans l’Éditeur d’images, sur son panneau **Réseaux sociaux** réglé sur LinkedIn. Choisissez son emplacement (**Post, format portrait** occupe le plus de place sur téléphone ; **Post, format carré** et **Post, paysage** sont les autres options), optez pour **Recadrer** ou pour **Image entière** sur fond d’image floutée ou de couleur, puis cliquez sur **Appliquer le format**. Vous pouvez aussi en régler la lumière et les couleurs, y écrire, dessiner une flèche ou placer un logo. Enregistrez ensuite avec **Enregistrer et l’utiliser dans la publication** : la copie retouchée remplace l’image dans le post, sur la même diapositive, et devient une nouvelle version des visuels. L’original reste parmi les versions et dans la Bibliothèque de contenus. La retouche est gratuite.

**L’image nettoyée.** Sur un post qui porte des images, **Joindre l’image nettoyée** (**Joindre les images nettoyées** pour un carrousel), dans la barre sous l’aperçu du téléphone, retire des fichiers les marques d’IA : les Content Credentials, que LinkedIn signale par un badge **CR**, et les balises écrites par le générateur. Chaque image marquée est redessinée sans elles, enregistrée dans la Bibliothèque de contenus et placée dans le post à sa place, sous forme de nouvelle version des visuels. Les pixels ne changent pas et l’original reste parmi les versions. Une image sans marque d’IA n’est pas touchée. L’opération est gratuite.

![L’étape des images d’un post en carrousel : Texte seul, Une image et Carrousel avec 2 diapositives, les cartes Générer à nouveau, Ajouter depuis la bibliothèque et Importer depuis votre ordinateur à gauche, les deux diapositives à droite avec Modifier la diapositive 1 dans l’éditeur d’images, et Versions des visuels avec v2 Sur la publication et v1 avec Utiliser cette version](/images/help/linkedin-posts-picture-versions.fr.webp)

Vous pouvez choisir un fichier PNG, JPEG, WebP, GIF ou AVIF. LinkedIn accepte tels quels le JPG, le PNG et le GIF ; une image WebP ou AVIF est convertie en JPG au moment de la publication. Une image publiée telle quelle peut peser jusqu’à 10 Mo.

## Un post conçu pour un client

Lorsque votre équipe travaille pour des clients, les créateurs et les administrateurs voient **Conçue pour** sur le bandeau d’un post ouvert. Choisissez le client auquel le post est destiné : le choix est enregistré aussitôt, et les images du post suivent. Les collaborateurs de ce client retrouvent alors le post, avec ses images, dans leur [Espace client](/fr/aide/espace-client). Choisissez **Aucun client : l’équipe seulement** pour revenir en arrière.

Cette ligne apparaît dès que votre équipe compte au moins un client. Voir [Votre équipe](/fr/aide/votre-equipe).

## Soumettre le post à validation

Sous **Le post lui-même**, la barre comporte **Envoyer en validation**. Désignez un collègue, ou l’un des collaborateurs du client s’il s’agit d’un post conçu pour un client. Le fil de discussion s’ouvre dans un nouvel onglet. Voir [Validation](/fr/aide/validation).

Pendant l’attente, le post est verrouillé : le bandeau affiche **En attente de validation : cette publication est verrouillée jusqu’à la décision du validateur. Rien ne peut être modifié ni supprimé entre-temps.** Rien ne peut y être modifié, supprimé ni publié tant que la décision n’est pas tombée. Approuvé, le post passe au statut approuvé ; renvoyé, il redevient un brouillon pour un nouveau tour.

## Publier automatiquement

Ouvrez **La publication** et restez sur l’onglet **Publier automatiquement**. Nuvora publie par l’intermédiaire de LinkedIn lui-même, au nom du profil ou de la page que vous cochez.

1. Sous **Sous quelle identité il part**, cochez un ou plusieurs de vos comptes. Chaque tuile porte la mention **Profil** ou **Page**. Rien n’est coché à l’ouverture de l’étape. Faute de compte LinkedIn connecté, l’onglet propose un bouton qui ouvre Mes connexions dans un nouvel onglet.
2. Ouvrez **What LinkedIn asks for** et réglez :
   - **Format** : **Feed post**, ou **Article with a link**. Un article demande **The link this article points to** ; LinkedIn ne lit pas cette page, si bien que l’aperçu est composé du titre du post et de sa première image.
   - **Qui le voit** : **Anyone on LinkedIn** ou **Connections only**.
   - **Personne ne peut partager ce post sur**, pour désactiver les republications.
3. Cliquez sur **Publier maintenant** pour l’envoyer à la seconde. Pour l’envoyer plus tard, cliquez sur **Programmer** : un bloc **Quand il part** s’ouvre. Choisissez un **Jour** et une **Heure**, ou l’un des raccourcis : **Dans une heure**, **Ce soir, 18 h**, **Demain, 9 h** ou **Lundi, 9 h**. Cliquez ensuite sur **Le programmer**.

Les boutons restent verrouillés tant qu’aucun compte n’est coché : le badge à côté des onglets indique **Inactif tant qu’aucun compte n’est coché**, puis **Prêt quand vous l’êtes**. L’heure s’entend dans votre propre fuseau horaire, défini dans **Paramètres**. Une heure programmée doit se situer au moins deux minutes plus tard et au plus un an plus tard, et un même post peut partir sur 20 comptes au maximum.

Nuvora consulte la file d’attente toutes les cinq minutes : un post prévu à 9 h part donc entre 9 h et 9 h 05. Il contrôle encore une fois le post au regard des limites de LinkedIn avant l’envoi. Quand un post programmé part, la personne qui l’a mis en file reçoit un e-mail qui le lui confirme. Chaque post programmé ou publié apparaît également dans le [Calendrier](/fr/aide/calendrier).

## Publier manuellement

L’onglet **Publier manuellement** ne demande ni compte connecté ni case cochée.

1. Cliquez sur **Publier vous-même**.
2. L’éditeur de LinkedIn s’ouvre dans un nouvel onglet, avec le texte déjà en place.
3. Suivez **Comment ça se passe, clic par clic** : une image unique vous attend dans le presse-papiers (appuyez sur Ctrl+V ou Cmd+V dans l’éditeur de LinkedIn), plusieurs diapositives sont téléchargées sous forme de fichiers à faire glisser, en commençant par la diapositive 1. Relisez le post une dernière fois, puis publiez-le là-bas.

Au passage, Nuvora retire du texte les adresses web et les liste sous le bouton, pour que vous puissiez les coller dans le premier commentaire. L’éditeur de LinkedIn supprime tout « & » isolé du texte qu’il reçoit : les esperluettes voyagent donc écrites en toutes lettres, et la note sous le bouton explique comment les rétablir. Si le texte arrive vide ou tronqué, cliquez sur **Copier le texte** et collez-le à nouveau.

**Ce que vous perdez en publiant vous-même** énumère les contreparties : impossible de choisir une heure, et Nuvora n’est jamais averti de la mise en ligne, si bien que le post n’entre de lui-même ni dans la file d’attente ni dans le calendrier. Une fois qu’il est en ligne, indiquez-le vous-même sous **Où en est le post** : choisissez **publié**, saisissez l’adresse dans **URL publiée (une fois en ligne)** (**+ Ajouter une adresse** pour chaque autre compte sur lequel il est paru), puis cliquez sur **Enregistrer**. Un post marqué comme publié apparaît dans le Calendrier.

## Suivre la file d’attente

Tout ce que vous programmez ou envoyez arrive sous **Dans la file d’attente**, à raison d’une ligne par compte :

| Statut | Ce qu’il signifie | Ce que vous pouvez faire |
|---|---|---|
| Planifié | En attente de son heure | **Annuler** |
| Sending now | En cours d’envoi | Patienter |
| Publié | En ligne, avec **Voir en ligne** | Le modifier ou le supprimer sur LinkedIn même |
| Non partis | Refusé, ou en attente d’une nouvelle tentative | **Try again now**, **Annuler** |

**Annuler** retire le post de la file d’attente après confirmation. Il reste dans le module et peut être programmé de nouveau.

Un incident passager du côté de LinkedIn fait l’objet de nouvelles tentatives automatiques, trois en tout, et la ligne indique l’heure de la prochaine. Un problème de contenu, ou un compte à reconnecter, n’entraîne aucune nouvelle tentative : la personne qui a mis le post en file reçoit un e-mail reprenant la réponse de LinkedIn. Un compte qui ne fonctionne plus affiche **Reconnecter** sur sa tuile et ne peut pas être coché : reconnectez-le dans Mes connexions. Une tuile indique aussi le nombre de jours restants lorsque la connexion expire dans une semaine ou moins.

Une fois un post parti, Nuvora ne peut plus le modifier ni le retirer de LinkedIn. Pour le modifier ou le supprimer, faites-le sur LinkedIn.

## Ce que cela coûte

Sont payants : **Rédiger avec l’IA**, **Draft again**, **Écrire une autre version**, la réécriture d’un passage, **Améliorer avec l’IA** et chaque image générée. Le prix d’une génération figure sur les boutons avant que vous ne cliquiez, et **Améliorer avec l’IA** affiche le sien dans le sélecteur de modèle voisin. Pour les autres, le coût de l’opération s’affiche sur la ligne d’état dès son retour.

Sont gratuits : **Je l’écris moi-même**, la saisie dans l’éditeur, la retouche d’une image dans l’Éditeur d’images, le retour à une version antérieure des visuels et la publication sur LinkedIn, par Nuvora ou à la main. Les fichiers que vous importez sont conservés dans la Bibliothèque de contenus et comptent dans votre espace de stockage. Chaque débit sur vos crédits est détaillé dans **Consommation**, sous **Crédits** dans le menu.

## Supprimer un post

**Supprimer**, sur le bandeau, efface définitivement le post de Nuvora, après confirmation. Un post déjà publié reste sur LinkedIn. Les administrateurs peuvent supprimer n’importe quel post. Vous pouvez supprimer votre propre post tant qu’il est encore en **Moi seulement**. Personne ne peut supprimer un post en attente de validation.
