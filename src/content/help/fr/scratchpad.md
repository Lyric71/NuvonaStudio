---
title: "Bloc-notes"
slug: "bloc-notes"
lang: "fr"
seoTitle: "Le Bloc-notes : vos notes, fichiers et enregistrements sur chaque page | Aide Nuvora"
description: "Le volet Bloc-notes : l’ouvrir depuis n’importe quelle page avec Alt+N, l’ancrer à côté de la page, les feuilles, le texte mis en forme, la dictée, copier ou insérer une note dans un post, joindre des fichiers, enregistrer un appel ou votre voix, conserver une copie dans la Bibliothèque de contenus, qui y a accès et ce que cela coûte."
excerpt: "Un volet qui s’ouvre sur n’importe quelle page pour vos notes personnelles : des feuilles de texte, des fichiers et des enregistrements que personne d’autre ne voit jamais."
section: "library"
order: 8.7
updated: 2026-10-16
appPaths: []
audience: "Tous les membres de l’équipe, sauf les accès client"
related: ["assets-library", "linkedin-posts", "account-and-sign-in", "your-team", "balance-and-payments"]
shots:
  - file: "/images/help/scratchpad-drawer.fr.webp"
    route: "/social/linkedin/posts"
    alt: "Le Bloc-notes ouvert par-dessus la page Posts : le bandeau Bloc-notes avec Toutes les feuilles, Ancrer à côté de la page et Fermer, les onglets Semaine de lancement et Appel avec Julie, la barre de mise en forme, une feuille avec un titre, une liste à puces et une liste de cases à cocher, et en bas Joindre et Enregistrer"
    captured: 2026-10-16
  - file: "/images/help/scratchpad-record.fr.webp"
    route: "/social/linkedin/posts"
    clip: "#scratchpad"
    alt: "Le Bloc-notes avec le menu Source à enregistrer ouvert au-dessus d’Enregistrer : Micro, Son d’un onglet, et Micro et onglet, chacun avec une courte explication"
    captured: 2026-10-16
sources: ["src/layouts/Layout.astro", "src/scripts/scratchpad.ts", "src/scripts/richNote.ts", "src/scripts/dictation.ts", "src/lib/scratchpad.ts", "src/pages/api/scratchpad/index.ts", "src/pages/api/scratchpad/[id].ts", "src/pages/api/scratchpad/[id]/files.ts", "src/pages/api/scratchpad/files/[id].ts", "src/styles/scratchpad.css", "src/lib/storage-billing.ts", "src/pages/api/files/index.ts", "src/lib/features.ts", "src/lib/app.ts"]
---

Le **Bloc-notes** est un carnet qui vous suit sur toutes les pages de Nuvora. Il glisse depuis la droite, par-dessus ce que vous êtes en train de faire, et range vos notes personnelles dans des **feuilles** : du texte, des fichiers et des enregistrements. Personne d’autre ne voit vos feuilles, pas même un administrateur.

## L’ouvrir et le fermer

Cliquez sur le bouton en forme de bloc-notes en haut de l’écran, à côté du bouton d’accueil, ou appuyez sur **Alt+N** depuis n’importe quelle page. **Alt+N** ou le bouton **Fermer (Alt+N)** le referment, tout comme la touche **Échap**.

Le volet reste ouvert d’une page à l’autre, sur la feuille que vous aviez laissée au premier plan : vous continuez à lire une note en passant des Posts au Calendrier.

![Le Bloc-notes ouvert par-dessus la page Posts : le bandeau Bloc-notes avec Toutes les feuilles, Ancrer à côté de la page et Fermer, les onglets Semaine de lancement et Appel avec Julie, la barre de mise en forme, une feuille avec un titre, une liste à puces et une liste de cases à cocher, et en bas Joindre et Enregistrer](/images/help/scratchpad-drawer.fr.webp)

Le bandeau en haut du volet réunit trois boutons :

- **Toutes les feuilles** : la liste de toutes vos feuilles, avec **Rechercher dans vos feuilles**.
- **Ancrer à côté de la page** : la page se décale pour faire place au volet au lieu de passer dessous, et les deux restent lisibles côte à côte. Cliquez de nouveau (**Afficher par-dessus la page**) pour revenir en arrière. Sur un écran étroit, le volet passe toujours par-dessus la page.
- **Fermer (Alt+N)**.

Pour élargir ou rétrécir le volet, faites glisser son bord gauche. Nuvora retient la largeur choisie, et le fait que le volet soit ancré ou non, dans ce navigateur.

## Les feuilles

Chaque feuille est un onglet en haut du volet. L’onglet porte le titre de la feuille ou, à défaut, sa première ligne.

- **Nouvelle feuille** (le bouton **+**) ouvre une feuille vierge. Une feuille est conservée dès que vous y mettez quelque chose.
- Saisissez un titre dans **Feuille sans titre**, en haut de la feuille.
- Faites glisser un onglet pour changer l’ordre de vos feuilles.
- **Toutes les feuilles** les liste toutes, dans votre ordre, chacune avec le début de son texte, la date de sa dernière modification et le nombre de fichiers qu’elle contient. **Rechercher dans vos feuilles** parcourt les titres et le texte. Cliquez sur une feuille pour l’ouvrir.
- **Supprimer cette feuille**, la corbeille à côté du titre, efface la feuille avec son texte, ses fichiers et ses enregistrements, après confirmation. Une feuille vide disparaît sans question.

Vous pouvez garder jusqu’à 100 feuilles, et une feuille contient jusqu’à 200 000 caractères.

## Écrire dans une feuille

Écrivez librement : la feuille s’enregistre d’elle-même environ une seconde après votre dernière frappe, puis de nouveau quand vous cliquez ailleurs ou fermez l’onglet. Le bas du volet affiche **Enregistrement…**, puis **Enregistré**. Ouvrez le volet dans un autre onglet : vous y retrouvez le même texte.

La barre de mise en forme, au-dessus du texte, propose **Gras** (Ctrl+B), **Italique** (Ctrl+I), **Souligné** (Ctrl+U), **Barré**, **Titre**, **Liste à puces**, **Liste numérotée**, **Liste de cases à cocher**, **Lien** (Ctrl+K) et **Effacer la mise en forme**. Dans une liste de cases à cocher, cliquez sur une case pour la cocher : la ligne est alors barrée. Un texte collé garde sa mise en forme de base, et rien d’autre.

**Dictez plutôt que de taper.** Comme toutes les grandes zones de texte, la feuille porte dans son coin le micro de la saisie vocale : cliquez dessus et parlez, vos mots s’inscrivent à l’emplacement du curseur. Voir [Compte et connexion](/fr/aide/compte-et-connexion#saisie-vocale).

## Se servir d’une note ailleurs

Deux boutons, en bas à droite, mettent une note au travail :

- **Copier le texte de la feuille** copie la partie sélectionnée dans la feuille, ou la feuille entière, prête à être collée où vous voulez.
- **Insérer dans le champ où vous écriviez** place ce même texte à l’endroit où se trouvait votre curseur dans la page : le brief d’un post, un commentaire, un champ de recherche. Cliquez d’abord dans un champ de la page, puis dans le volet.

## Fichiers et enregistrements

### Joindre des fichiers

Cliquez sur **Joindre**, déposez des fichiers n’importe où sur le volet, ou collez une image dans le texte : chaque fichier se charge avec sa barre de progression et rejoint la feuille sous **Fichiers et enregistrements**. Les images, les sons et les clips s’affichent et se lisent directement dans la feuille. Un fichier peut peser autant que votre équipe l’autorise pour un envoi dans la Bibliothèque de contenus.

Pour chaque fichier :

- double-cliquez sur son nom pour le renommer (Entrée valide, Échap annule) ;
- cliquez sur une image pour l’agrandir ;
- **Télécharger** l’enregistre sur votre ordinateur ;
- **Conserver une copie dans la Bibliothèque de contenus** en ajoute une copie à la [Bibliothèque de contenus](/fr/aide/bibliotheque-de-contenus) de votre équipe. Cette copie n’y est visible que de vous (**Moi seulement**) tant que vous ne la partagez pas depuis la bibliothèque avec **Toute l’équipe**. La feuille garde son propre exemplaire. Il faut avoir le droit d’ajouter des fichiers à la bibliothèque ;
- **Supprimer** retire le fichier de la feuille.

### Enregistrer un son

**Enregistrer** enregistre directement dans la feuille. La flèche voisine, **Source à enregistrer**, choisit ce que vous captez :

![Le Bloc-notes avec le menu Source à enregistrer ouvert au-dessus d’Enregistrer : Micro, Son d’un onglet, et Micro et onglet, chacun avec une courte explication](/images/help/scratchpad-record.fr.webp)

| Source | Ce qu’elle enregistre |
|---|---|
| **Micro** | Votre voix, ou n’importe quel son de la pièce. |
| **Son d’un onglet** | Un appel, une vidéo ou un webinaire diffusé dans un autre onglet. Le navigateur vous demande quel onglet partager : choisissez-le et cochez **Partager l’audio de l’onglet**. |
| **Micro et onglet** | Les deux côtés d’un appel, réunis dans un seul enregistrement. |

Pendant l’enregistrement, le volet affiche la durée et le niveau sonore, avec **Suspendre**, **Arrêter et conserver** et **Jeter** (après confirmation). Un enregistrement conservé rejoint les fichiers de la feuille. S’il ne peut pas être stocké, il est sauvegardé sur votre ordinateur : il n’est jamais perdu. Quitter la page met fin à l’enregistrement.

La première fois, le navigateur vous demande l’accès au micro ou l’onglet à partager. Si vous refusez, Nuvora vous le signale et n’enregistre rien.

## Qui y a accès

Vos feuilles n’appartiennent qu’à vous : personne d’autre dans l’équipe ne peut les ouvrir, administrateurs compris, et rien n’en est jamais partagé. Une copie conservée dans la Bibliothèque de contenus reste elle aussi la vôtre, jusqu’à ce que vous la partagiez depuis la bibliothèque.

Le Bloc-notes est proposé à tous les rôles, lecteurs compris : chacun écrit dans ses propres feuilles. Un administrateur peut toutefois le désactiver pour quelqu’un, ou le limiter à la lecture, sur la ligne **Bloc-notes** de ses droits. Voir [Votre équipe](/fr/aide/votre-equipe#modules-et-droits-par-personne). Les accès client n’ont pas de Bloc-notes.

## Ce que cela coûte

Écrire ne coûte rien. Les fichiers et les enregistrements comptent dans le stockage de votre équipe, comme ceux de la Bibliothèque de contenus : un petit montant quotidien de stockage, prélevé sur les crédits de l’équipe, et de légers frais de transfert quand vous en téléchargez un. Afficher une image ou écouter un enregistrement dans la feuille est gratuit. Supprimez un fichier, ou la feuille qui le contient, et le coût de stockage baisse dès le lendemain. Quand les crédits sont épuisés, aucun nouveau fichier ne peut être envoyé avant une recharge. Voir [Solde et paiements](/fr/aide/solde-et-paiements).
