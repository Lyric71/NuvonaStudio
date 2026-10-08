---
title: "Bibliothèque de contenus et Éditeur d’images"
slug: "bibliotheque-de-contenus"
lang: "fr"
seoTitle: "Bibliothèque de contenus et Éditeur d’images pour vos visuels LinkedIn | Aide Nuvora"
description: "Tous les fichiers de votre équipe au même endroit, rangés en dossiers : retrouvez-les, étiquetez-les, déplacez-les, téléchargez-les et versez-les dans une campagne, puis cadrez une image pour LinkedIn dans l’Éditeur d’images (post, bannière de profil, couverture de page, photo de profil) avant de la recadrer, de la retoucher, de lui appliquer un rendu, d’y écrire, d’y dessiner et d’y placer un logo."
excerpt: "Les fichiers de votre équipe rangés en dossiers, et l’Éditeur d’images qui cadre une image pour LinkedIn, dans votre navigateur et gratuitement."
section: "library"
order: 8
updated: 2026-10-08
appPaths: ["/files", "/files/tools/image-editor"]
audience: "Tout le monde, sauf les accès client"
related: ["campaigns", "linkedin-posts", "validation", "ask", "balance-and-payments"]
shots:
  - file: "/images/help/assets-library-page.fr.webp"
    route: "/files"
    alt: "La Bibliothèque de contenus d’une équipe encore vide : Nouveau dossier et Importer des fichiers dans le bandeau sombre, les tuiles Images, Vidéos, Textes, Documents et Autre à 0, la recherche avec les filtres Type, Date, Étiquettes et Ajouté par, et la liste vide"
    captured: 2026-10-04
  - file: "/images/help/assets-library-add-to-campaign.fr.webp"
    route: "/files"
    alt: "La Bibliothèque de contenus avec cinq fichiers d’une équipe de test : sous la première ligne, mat-1008-launch-hero.jpg, le volet Campagnes indique Déjà dans : mat-1008 Spring launch, avec la liste des campagnes sur Nouvelle campagne…, le champ Nom de la campagne, Ajouter et Annuler"
    captured: 2026-10-08
  - file: "/images/help/image-editor-page.fr.webp"
    route: "/files/tools/image-editor"
    alt: "La page de l’Éditeur d’images : la zone où déposer une image, Dans la Bibliothèque de contenus, et les quatre étapes Ouvrir une image, Cadrer pour LinkedIn, Recadrer, ajuster, écrire, dessiner, et L’enregistrer"
    captured: 2026-10-04
  - file: "/images/help/image-editor-linkedin.fr.webp"
    route: "/files/tools/image-editor?network=linkedin"
    alt: "L’Éditeur d’images ouvert sur la photo d’un bureau avec un ordinateur portable, panneau Réseaux sociaux affiché : le rail avec Réseaux sociaux, Recadrer, Ajuster, Effets, Texte, Dessiner et Image, Enregistrer en haut à droite, les six emplacements LinkedIn sous Emplacement avec Post, format portrait marqué Conseillé, et la carte Bonnes pratiques sur LinkedIn"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/middleware.ts", "src/layouts/Layout.astro", "src/pages/files/index.astro", "src/scripts/filesPanel.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/pages/api/files/folders/[id].ts", "src/lib/stored-files.ts", "src/lib/storage-billing.ts", "src/components/AssetToolsNav.astro", "src/pages/files/tools/image-editor.astro", "src/scripts/imageEditor.ts", "src/scripts/imageEditorNetworks.ts", "src/scripts/imageEditorLauncher.ts", "src/lib/social/limits.ts", "src/scripts/lightbox.ts", "src/scripts/socialContent.ts", "src/components/panels/SocialContentPanel.astro", "src/lib/campaigns.ts", "src/pages/api/asset-campaigns/index.ts", "public/apps/nuvora/vocabulary.js", "src/scripts/campaignChoice.ts", "src/lib/request-campaign.ts"]
---

La **Bibliothèque de contenus** réunit tous les fichiers de votre équipe au même endroit, rangés en dossiers : les visuels, documents et briefs que vous importez, ainsi que les images ajoutées à vos posts ou enregistrées depuis l’Éditeur d’images. Elle s’ouvre depuis l’entrée **Bibliothèque de contenus** du menu.

L’**Éditeur d’images**, juste en dessous dans le menu, s’occupe d’une image que vous avez déjà : il la cadre pour LinkedIn, la recadre, la retouche, permet d’y écrire et d’y dessiner, et d’y poser un logo. Il est présenté [plus bas](#léditeur-dimages).

Un accès client ne voit pas la Bibliothèque de contenus. Ce que l’équipe produit pour un client lui parvient dans son [Espace client](/fr/aide/espace-client).

## La bibliothèque

Le bandeau sombre, en haut, regroupe **Nouveau dossier** et **Importer des fichiers**, le nombre de contenus et la place qu’ils occupent, ainsi qu’une tuile par type : **Images**, **Vidéos**, **Textes**, **Documents** et **Autre**. Un clic sur une tuile n’affiche plus que ce type ; un second clic les rétablit tous. Un fichier peut peser jusqu’à 50 Mo.

Ce que vous importez ici est visible par toute votre équipe. Les images ajoutées à un post y sont conservées elles aussi : retirer une image d’un post la laisse dans la bibliothèque, prête à resservir.

![La Bibliothèque de contenus d’une équipe encore vide : Nouveau dossier et Importer des fichiers dans le bandeau sombre, les tuiles Images, Vidéos, Textes, Documents et Autre à 0, la recherche avec les filtres Type, Date, Étiquettes et Ajouté par, et la liste vide](/images/help/assets-library-page.fr.webp)

### Importer

Cliquez sur **Importer des fichiers** et choisissez un ou plusieurs fichiers. Ils rejoignent le dossier ouvert, ou **Tous les contenus**, à la racine. Une barre se remplit pendant l’envoi de chaque fichier.

Pour verser vos imports dans une campagne, retenez-la dans la liste voisine de **Nouveau dossier**, qui indique **Aucune campagne** tant que vous n’y touchez pas. Voir [Campagnes](/fr/aide/campagnes#remplir-une-campagne-au-fil-de-la-création).

### Retrouver un fichier

- Tapez dans **Chercher dans les noms, prompts, textes et étiquettes…** : les mots sont recherchés dans les noms de fichiers, les textes et les étiquettes.
- Affinez avec les filtres placés dessous : **Type** (chaque type, et son origine, **Créé ici** ou **Importé**), **Date** (**Aujourd’hui**, **7 derniers jours**, **30 derniers jours**, **90 derniers jours**, **Cette année**, ou deux dates de votre choix), **Étiquettes**, **Campagne** (dès que l’équipe compte une campagne ; voir [Campagnes](/fr/aide/campagnes#filtrer-la-bibliothèque-par-campagne)) et **Ajouté par**.
- Une recherche ou un filtre parcourt toute la bibliothèque, et pas seulement le dossier ouvert.
- Triez la liste par **Plus récents d’abord**, **Plus anciens d’abord**, **Nom, de A à Z** ou **Plus lourds d’abord**, et basculez entre **Liste** et **Grille**.

### Dossiers

Cliquez sur **Nouveau dossier**, saisissez son nom : il apparaît dans le dossier ouvert. Un clic ouvre un dossier ; le chemin affiché au-dessus de la liste permet de remonter. Pour déplacer un fichier, faites glisser sa ligne sur un dossier, ou choisissez **Déplacer** dans son menu **Actions**.

Cochez plusieurs lignes pour les traiter d’un coup : les déplacer, leur ajouter ou leur retirer une étiquette, les verser dans une campagne, ou les supprimer.

Supprimer un dossier supprime tout ce qu’il contient. Un dossier qui renferme des fichiers ajoutés par quelqu’un d’autre ne peut pas être supprimé : seule la personne qui a ajouté un fichier peut le supprimer.

Un dossier sert aussi de matière à la rédaction : dans le brief d’un post, **Dossier de contexte tiré de la bibliothèque** fait lire chaque document texte du dossier avant que l’écriture ne commence (voir [Posts LinkedIn](/fr/aide/posts-linkedin)), et [Interroger](/fr/aide/interroger) peut lire un dossier dès que vous le nommez.

### Verser des fichiers dans une campagne

Une [campagne](/fr/aide/campagnes) réunit sous un nom et un brief les fichiers d’une même opération LinkedIn, pour qu’Interroger, vos agents et vos posts les lisent ensemble. Les fichiers ne bougent pas : la campagne se contente d’y renvoyer, et un même fichier peut appartenir à plusieurs campagnes.

- **Un seul fichier** : dans son menu **Actions**, choisissez **Ajouter à une campagne**. Un volet **Campagnes** se déplie sous la ligne et cite les campagnes qui contiennent déjà le fichier (**Déjà dans :**, chaque nom renvoyant à sa campagne), ou signale qu’il n’est **Dans aucune campagne pour l’instant**. Choisissez une campagne, puis cliquez sur **Ajouter**. Pour un fichier qui figure déjà dans une campagne, l’entrée du menu s’intitule **Campagnes**.
- **Plusieurs fichiers** : cochez leurs lignes, choisissez une campagne dans la barre qui apparaît, puis cliquez sur **Ajouter à la campagne**.

Pour lancer une campagne sur-le-champ, prenez **Nouvelle campagne…** en bas de la liste, saisissez son nom dans **Nom de la campagne**, puis ajoutez. La campagne contient aussitôt les fichiers ; son brief s’écrira plus tard, sur sa page.

![La Bibliothèque de contenus avec cinq fichiers d’une équipe de test : sous la première ligne, mat-1008-launch-hero.jpg, le volet Campagnes indique Déjà dans : mat-1008 Spring launch, avec la liste des campagnes sur Nouvelle campagne…, le champ Nom de la campagne, Ajouter et Annuler](/images/help/assets-library-add-to-campaign.fr.webp)

### Le menu Actions

Un clic sur une ligne ouvre le fichier. Chaque ligne possède en outre un menu **Actions**, dont le contenu dépend du fichier :

| Élément | Ce qu’il fait |
|---|---|
| **Ouvrir dans son module** | Sur un fichier qui garde l’adresse de la page où il a été créé, l’ouvre à cet endroit. |
| **Voir** | Affiche l’image ou la vidéo en grand. Sur une image, la visionneuse propose un bouton **Modifier** qui ouvre l’Éditeur d’images. |
| **Télécharger** | Enregistre le fichier d’origine sur votre ordinateur. |
| **Modifier l’image** | Ouvre l’image dans l’[Éditeur d’images](#léditeur-dimages). Proposé sur les images qu’un navigateur sait modifier : JPG, PNG, WebP, GIF et AVIF notamment. |
| **Versions** | Liste les versions antérieures d’un fichier, dès qu’il en compte plus d’une, chacune avec son propre bouton **Télécharger**. |
| **Déposer une nouvelle version** | Remplace un fichier que vous avez importé par une version plus récente. L’ancienne reste accessible sous **Versions**. |
| **Étiquettes** | Vos propres mots, comme « lancement T3 » ou « validé ». Tapez une étiquette et appuyez sur Entrée, ou cliquez sur l’une des étiquettes **Déjà utilisées**, puis sur **Enregistrer**. Un clic sur une étiquette, où qu’elle apparaisse, filtre la liste sur elle. |
| **Renommer** | Change le nom affiché dans la bibliothèque. |
| **Déplacer** | Range le fichier dans un autre dossier. |
| **Ajouter à une campagne** | Verse le fichier dans une [campagne](/fr/aide/campagnes), existante ou créée sur-le-champ. L’entrée devient **Campagnes** dès que le fichier figure dans l’une d’elles. |
| **Qui le voit** | Proposé sur un fichier issu de votre propre travail que vous avez ajouté : **Moi seulement** ou **Toute l’équipe**. |
| **Supprimer** | Efface définitivement le fichier, après confirmation. Seule la personne qui l’a ajouté voit cette option. |

### Qui peut faire quoi

Toute l’équipe parcourt la bibliothèque, y cherche et y télécharge. Importer, étiqueter, renommer et déplacer demandent le rôle Créateur ou Administrateur : un Lecteur ne fait que consulter. Seule la personne qui a ajouté un fichier peut le supprimer.

### Ce que coûtent les fichiers

Conserver des fichiers entraîne un petit coût de stockage quotidien, prélevé sur les crédits de votre équipe, et chaque téléchargement un petit coût de transfert, prélevé sur vos crédits comme toute action payante. Supprimez ce dont vous n’avez plus besoin : le coût de stockage baisse dès le lendemain. Une fois les crédits épuisés, aucun nouveau fichier ne peut être importé avant une recharge. Voir [Solde et paiements](/fr/aide/solde-et-paiements).

## L’Éditeur d’images

L’Éditeur d’images cadre une image pour LinkedIn, la recadre à n’importe quel format, la fait pivoter ou la retourne en miroir, règle sa lumière et ses couleurs, lui applique un rendu, y inscrit des légendes, y trace flèches, lignes, cadres et cercles, et y pose un logo ou toute autre image. Les retouches sont gratuites et se font dans votre navigateur : la page l’annonce par **Dans votre navigateur · Gratuit**, et rien ne quitte votre ordinateur tant que vous n’enregistrez pas.

### Ouvrir une image

| Depuis | Comment |
|---|---|
| **Éditeur d’images**, dans le menu | Déposez une image sur **Déposez une photo ici, ou cliquez pour en choisir une**, ou cliquez sur **Dans la Bibliothèque de contenus** et choisissez-en une. |
| La Bibliothèque de contenus | **Modifier l’image** dans le menu **Actions** d’une image, ou **Modifier** dans la visionneuse plein format. |
| Un post | Le crayon posé sur l’une des images du post. Voir [Modifier une image d’un post](#modifier-une-image-dun-post). |

![La page de l’Éditeur d’images : la zone où déposer une image, Dans la Bibliothèque de contenus, et les quatre étapes Ouvrir une image, Cadrer pour LinkedIn, Recadrer, ajuster, écrire, dessiner, et L’enregistrer](/images/help/image-editor-page.fr.webp)

L’éditeur accepte les images JPG, PNG, WebP, GIF et AVIF. Une image de plus de 4 096 pixels sur son côté le plus long est retouchée à 4 096 pixels, ce que signale le panneau d’enregistrement.

### L’espace de travail

L’éditeur occupe tout l’écran. La barre du haut affiche le nom de l’image, **Annuler** et **Rétablir**, le zoom (un clic sur le pourcentage ajuste l’image à la fenêtre) et **Enregistrer**. Le rail de gauche ouvre un panneau à la fois : **Réseaux sociaux**, **Recadrer**, **Ajuster**, **Effets**, **Texte**, **Dessiner** et **Image**. **Enregistrer** ouvre le dernier panneau, **Enregistrer l’image**. L’éditeur s’ouvre sur **Recadrer**, ou sur **Réseaux sociaux** quand vous retouchez l’image d’un post.

Tout ce que vous ajoutez par-dessus l’image (une légende, une flèche, un cadre, un logo) reste un élément distinct jusqu’à l’enregistrement : cliquez dessus pour le déplacer, le redimensionner, changer son style ou le supprimer. Un élément sélectionné affiche quatre boutons au-dessus de ses réglages : dupliquer, avancer d’un plan, reculer d’un plan et supprimer.

### Réseaux sociaux : cadrer pour LinkedIn

Le panneau **Réseaux sociaux** prépare une image pour un emplacement précis de LinkedIn, aux dimensions en pixels qu’exige LinkedIn.

1. Sous **Emplacement**, choisissez où l’image sera publiée. **Conseillé** signale la recommandation de LinkedIn lui-même pour un post.

| Emplacement | Taille en pixels | De quoi il s’agit |
|---|---|---|
| **Post, format portrait** (Conseillé) | 1080 × 1350 | Occupe le plus de place sur mobile |
| **Post, format carré** | 1200 × 1200 | S’affiche bien sur tous les écrans |
| **Post, landscape** | 1200 × 627 | Également le format d’un aperçu de lien |
| **Bannière de profil** | 1584 × 396 | L’arrière-plan d’un profil personnel |
| **Couverture de page** | 1512 × 256 | La couverture d’une page entreprise |
| **Photo de profil** | 400 × 400 | Affichée dans un cercle |

2. Sous **Cadrage**, choisissez comment l’image prend cette forme :
   - **Recadrer** : un cadre de recadrage aux bonnes proportions apparaît sur l’image. Faites-le glisser sur la partie à conserver.
   - **Image entière** : rien n’est coupé. L’espace autour de l’image est comblé, selon le réglage **Autour de l’image**, par une **Image floutée** d’elle-même ou par une couleur unie.
3. Pour une bannière, une couverture de page ou une photo de profil, laissez **Montrer ce que le réseau recouvre** activé pour voir ce que LinkedIn superpose à l’image : la photo de profil ronde en bas à gauche d’une bannière, le logo de la page en bas à gauche d’une couverture et un coin à dégager en bas à droite, ou le cercle d’une photo de profil. Tenez vos textes et votre logo à l’écart de ces zones.
4. Cliquez sur **Appliquer le format**. L’image prend la taille de l’emplacement, et le panneau d’enregistrement est réglé sur un format de fichier accepté par LinkedIn, avec un nom qui indique le réseau et la taille, par exemple « (LinkedIn 1080x1350) ».

Une fois l’emplacement choisi, le panneau affiche aussi :

- **Rendu sur le réseau** : de petits aperçus de l’image telle que LinkedIn la montre, dans le fil, sur ordinateur et sur mobile pour une bannière ou une couverture de page, ou dans un cercle pour une photo de profil.
- **Vérifications** : les proportions, une largeur suffisante (552 pixels au minimum) et une netteté adaptée à la taille, l’acceptation du format de fichier par LinkedIn (le WebP est refusé), le poids du fichier au regard de la limite de LinkedIn pour cet emplacement, la présence éventuelle d’un élément ajouté dans une zone que LinkedIn recouvre, et la lisibilité de vos textes sur mobile.
- **Enregistrer pour LinkedIn** : applique le format si ce n’est pas déjà fait, puis ouvre le panneau d’enregistrement.
- **Bonnes pratiques sur LinkedIn** : quelques règles brèves, comme éloigner les détails d’une bannière de son coin inférieur gauche, caché par la photo de profil.

![L’Éditeur d’images ouvert sur la photo d’un bureau avec un ordinateur portable, panneau Réseaux sociaux affiché : le rail avec Réseaux sociaux, Recadrer, Ajuster, Effets, Texte, Dessiner et Image, Enregistrer en haut à droite, les six emplacements LinkedIn sous Emplacement avec Post, format portrait marqué Conseillé, et la carte Bonnes pratiques sur LinkedIn](/images/help/image-editor-linkedin.fr.webp)

### Recadrer

Faites glisser les coins du cadre, ou choisissez un format sous **Format** : **Libre**, **Original**, **Carré** (1:1), **Portrait** (4:5), **Story** (9:16), **Paysage** (16:9), **Lien** (1.91:1), **Photo** (3:2) ou **Écran** (4:3).

Si vous avez choisi un emplacement dans **Réseaux sociaux**, il figure en tête de cette liste, avec sa taille. La taille du résultat, en pixels, s’affiche sous les formats. **Rotation et miroir** regroupe **Vers la gauche**, **Vers la droite**, **Miroir** et **Retourner**. Cliquez sur **Appliquer le recadrage** pour découper l’image, ou sur **Réinitialiser** pour repartir de zéro. Les légendes et les dessins déjà posés suivent l’image quand elle est recadrée ou pivotée.

### Ajuster

Huit curseurs sous **Lumière et couleurs** : **Luminosité**, **Contraste**, **Saturation**, **Vibrance**, **Chaleur**, **Teinte**, **Netteté** et **Flou**. L’image change à mesure que vous les déplacez. Un double-clic remet un curseur à zéro ; **Tout réinitialiser** les remet tous.

### Effets

**Rendus** applique un rendu à l’ensemble de l’image, par-dessus vos réglages : **Original**, puis **Mono**, **Noir**, **Sépia**, **Vintage**, **Kodachrome**, **Technicolor**, **Polaroid** et **Brownie**. Chacun affiche un petit aperçu de votre propre image. Cliquez sur **Original** pour retirer le rendu.

### Texte

Cliquez sur **Ajouter le texte**, ou double-cliquez sur l’image à l’endroit voulu, puis tapez votre légende. Faites-la glisser à sa place ; un double-clic permet ensuite d’en changer les mots. Pour la légende sélectionnée, ou pour la suivante, choisissez :

- la **Police** et sa **Taille** ;
- le gras, l’italique ou le soulignement, et l’alignement ;
- la **Couleur**, et un **Surlignage derrière les mots** ;
- un **Contour sombre** ou une **Ombre douce**, qui gardent des mots clairs lisibles sur une image claire.

### Dessiner

Choisissez un outil sous **Outil**, puis faites glisser sur l’image : **Stylo**, **Surligneur**, **Flèche**, **Ligne droite**, **Cadre** ou **Cercle**. **Sélectionner** revient au mode qui permet de choisir et de déplacer ce qui est déjà tracé. Sous **Style**, réglez la **Couleur du trait**, un **Remplissage** pour un cadre ou un cercle, l’**Épaisseur** et l’**Opacité**. Tout ce qui est dessiné peut ensuite être déplacé et restylé.

### Image : un logo sur la vôtre

Sous **Ajouter une image**, choisissez **Depuis votre ordinateur** (pour un logo, rien ne vaut un PNG à fond transparent) ou **Dans la Bibliothèque de contenus**. Une fois l’image posée, réglez son **Opacité**, puis cliquez sur l’un des neuf carrés de **Position** pour l’envoyer dans un coin, sur un bord ou au centre, de **En haut à gauche** à **En bas à droite**. Un logo discret dans un coin fait office de filigrane.

### Annuler et raccourcis clavier

**Annuler** remonte jusqu’à 60 étapes. Le clavier fonctionne aussi :

| Touches | Effet |
|---|---|
| Ctrl+Z | Annuler |
| Ctrl+Maj+Z ou Ctrl+Y | Rétablir |
| Ctrl+D | Dupliquer l’élément sélectionné |
| Suppr | Supprimer l’élément sélectionné |
| Touches fléchées | Déplacer l’élément sélectionné ; avec Maj, par pas plus grands |
| Entrée | Appliquer le recadrage, ou le format dans le panneau Réseaux sociaux |
| Ctrl+S | Ouvrir le panneau d’enregistrement |
| Échap | Quitter le texte en cours de saisie, fermer le panneau d’enregistrement, abandonner la sélection, puis fermer l’éditeur |

Sur Mac, remplacez Ctrl par Cmd.

### Enregistrer

Cliquez sur **Enregistrer**, en haut à droite. Si un format a été appliqué dans **Réseaux sociaux**, le panneau s’ouvre avec **Conçue pour** LinkedIn et l’emplacement, et un bouton **Vérifications** qui y ramène. Le panneau **Enregistrer l’image** demande :

- **Nom** : le nom d’origine suivi de « (edited) », que vous pouvez modifier. Après **Appliquer le format**, le nom indique plutôt le réseau et la taille.
- **Format** : **PNG** (net et sans perte, conserve la transparence, le fichier le plus lourd), **JPG** (le plus léger pour les photos ; les zones transparentes deviennent blanches) ou **WEBP** (léger et net, conserve la transparence). JPG et WebP ajoutent un curseur **Qualité**. Pour une image conçue pour LinkedIn et enregistrée en WebP, le panneau prévient que LinkedIn ne l’accepte pas.
- **Taille** : la **Largeur** et la **Hauteur**, aux proportions verrouillées, avec des choix rapides à 100 %, 75 %, 50 % et 25 %, et à 2048 px ou 1080 px sur le côté long quand l’image est plus grande. **Renforcer la netteté après redimensionnement** s’active d’un interrupteur.

Choisissez ensuite comment la conserver :

- **Enregistrer une copie dans la Bibliothèque de contenus** : un nouveau fichier, à côté de l’original dans le même dossier, ou à la racine de la bibliothèque si l’image venait d’ailleurs. L’original reste intact.
- **Enregistrer comme nouvelle version** : proposé sur un fichier que vous avez importé. La retouche remplace le fichier dans la bibliothèque, et la version précédente reste accessible sous **Versions**.
- **Télécharger** : enregistre l’image sur votre ordinateur, au format et à la taille indiqués sur le bouton. Rien n’entre dans la bibliothèque.

Une fois l’image enregistrée, le panneau affiche **Enregistré.** et un lien, **L’ouvrir dans la Bibliothèque de contenus**, qui l’ouvre dans un nouvel onglet. Vous pouvez poursuivre vos retouches et enregistrer de nouveau. Une image enregistrée dans la bibliothèque compte dans votre stockage comme n’importe quel fichier importé. **Revenir aux modifications** vous ramène au panneau où vous étiez.

### Fermer l’éditeur

Cliquez sur le ✕ en haut à gauche, ou appuyez sur Échap. S’il reste des modifications non enregistrées, l’éditeur demande **Quitter l’éditeur ?** : cliquez sur **Quitter sans enregistrer** pour les abandonner, ou sur **Continuer les modifications** pour revenir en arrière et enregistrer.

## Modifier une image d’un post

Dans **Posts**, les images d’un post portent un crayon, **Modifier cette image**. Il ouvre l’image dans l’Éditeur d’images, sur le panneau **Réseaux sociaux** : vous choisissez l’emplacement LinkedIn et appliquez son format sans attendre.

Retouchez l’image, puis ouvrez **Enregistrer**. Le bouton principal indique **Enregistrer et l’utiliser dans la publication** : la copie retouchée est enregistrée dans la Bibliothèque de contenus, remplace l’ancienne image dans le post (à la même diapositive dans un carrousel), et l’éditeur se ferme. L’étape affiche alors « L’image modifiée est dans la publication. L’original reste dans la Bibliothèque de contenus. » **Télécharger** reste disponible ; il ne change rien au post.
