---
title: "Dépannage"
slug: "depannage"
lang: "fr"
seoTitle: "Dépannage et messages d’erreur | Aide Nuvora"
description: "Ce que signifient les messages de Nuvora et comment réagir : un solde vide, un code promotionnel refusé, un fichier trop volumineux, la Bibliothèque de contenus et l’Éditeur d’images, l’inscription et la connexion, les invitations, les clients, la validation, les posts et connexions LinkedIn, LinkedIn Ads, Interroger et les agents."
excerpt: "Les messages que Nuvora affiche quand quelque chose bloque, ce que chacun signifie et comment repartir."
section: "troubleshooting"
order: 16
updated: 2026-10-04
appPaths: ["/billing", "/files", "/files/tools/image-editor", "/signup", "/login", "/invite", "/team", "/client", "/validation", "/social/linkedin/posts", "/my-connections", "/ads/linkedin", "/ads/linkedin/library", "/ask", "/agents"]
audience: "Tout le monde"
related: ["balance-and-payments", "assets-library", "account-and-sign-in", "your-team", "client-space", "validation", "linkedin-posts", "my-connections", "linkedin-ads", "ask", "agents"]
shots: []
sources: ["src/lib/credits.ts", "src/scripts/creditsPanel.ts", "src/scripts/creditChip.ts", "src/pages/api/billing/checkout.ts", "src/lib/promo.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/pages/api/files/folders/[id].ts", "src/pages/files/tools/image-editor.astro", "src/scripts/imageEditor.ts", "src/scripts/clientSpace.ts", "src/lib/signup.ts", "src/pages/signup.astro", "src/pages/api/signup/verify.ts", "src/pages/api/login.ts", "src/lib/mfa.ts", "src/pages/reset-password.astro", "src/lib/invitations.ts", "src/pages/invite/[token].astro", "src/pages/api/team.ts", "src/lib/team-clients.ts", "src/pages/api/client/index.ts", "src/pages/api/social-content/[id].ts", "src/lib/validation-http.ts", "src/lib/validation-lock.ts", "src/pages/api/validation/[id]/comments.ts", "src/middleware.ts", "src/scripts/socialContent.ts", "src/pages/api/social-content/draft.ts", "src/scripts/socialAccounts.ts", "src/pages/api/social/callback/[platform].ts", "src/pages/api/social/accounts/[id].ts", "src/scripts/connectionCheckNotice.ts", "src/scripts/personalConnections.ts", "src/lib/user-linkedin-ads.ts", "src/pages/api/linkedin-ads/manage.ts", "src/pages/api/linkedin-ads/search.ts", "src/scripts/linkedinAds.ts", "src/pages/api/intelligence/ask.ts", "src/scripts/askIntelligence.ts", "src/pages/api/agents/custom.ts", "public/apps/nuvora/vocabulary.js"]
---

Repérez dans la première colonne le message qui s’affiche. Dans les messages ci-dessous, un mot entre crochets remplace votre propre fichier, montant ou compte.

## Solde

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **You are out of AI credits ([montant] left).** | Votre solde est vide : les exécutions payantes sont donc refusées. La barre supérieure affiche **Acheter des crédits**. | Rechargez sur **Crédits** > **Acheter des crédits**. Voir [Solde et paiements](/fr/aide/solde-et-paiements). |
| **Vous n’avez plus de crédits IA. Toutes les fonctions IA sont coupées jusqu’à votre prochain achat. Le reste du produit n’est pas concerné.** | Affiché sur **Acheter des crédits** quand votre solde est vide. Tout ce qui n’est pas une exécution IA continue de fonctionner. | Achetez des crédits, ou demandez à un administrateur de recharger l’équipe. |
| **Votre équipe n’a plus de crédits IA ([montant] restants) et vous n’avez aucun crédit personnel.** | Le solde de l’équipe est vide, et le vôtre aussi. | Demandez à un administrateur de recharger le solde de l’équipe, ou rechargez le vôtre. |
| **Vous avez épuisé votre quota du jour sur les crédits de votre équipe** | Vous avez atteint la limite quotidienne qu’un administrateur vous a fixée sur le solde de l’équipe. Elle repart de zéro à minuit UTC. | Attendez la remise à zéro, rechargez votre propre solde, ou demandez à un administrateur de relever votre limite. Voir [Votre équipe](/fr/aide/votre-equipe). |
| **Vous n’avez pas encore de quota sur les crédits de votre équipe** | Un administrateur a fixé votre limite quotidienne à zéro. | Demandez à un administrateur de fixer une limite sur la page Équipe, ou rechargez votre propre solde. |
| **Seul un administrateur peut acheter des crédits pour [équipe].** | Seuls les administrateurs rechargent le solde de l’équipe. | Choisissez **Votre compte** pour acheter à titre personnel, ou adressez-vous à un administrateur. |
| **Le rechargement automatique est en pause.** | La carte enregistrée a été refusée. | Vérifiez la carte, puis cliquez sur **Réessayer**, ou sur **Remplacer la carte**. |
| **Veuillez accepter les conditions d’utilisation pour continuer.** | La case à cocher avant votre premier achat ne l’est pas. | Cochez-la, puis payez. |

## Codes promotionnels

| Message | Que faire |
|---|---|
| **That promotional code does not exist.** | Vérifiez l’orthographe du code. |
| **That promotional code has expired.** ou **That promotional code is no longer available.** | L’offre est terminée. |
| **That promotional code is not open yet.** | L’offre n’a pas encore commencé. Réessayez à son ouverture. |
| **This code applies from $[montant] of credits.** | Portez le montant au moins au niveau indiqué. |
| **You have already used that promotional code.** ou **That promotional code has been fully used.** | Le code ne peut plus servir. |
| **That promotional code is not available on this account.** | Le code est réservé à un autre compte. Essayez l’autre onglet (votre équipe ou **Votre compte**). |

## Fichiers trop volumineux ou refusés

| Message | Que faire |
|---|---|
| **That file is too large (limit [n] MB).** | La Bibliothèque de contenus accepte les fichiers jusqu’à la taille indiquée en haut de la bibliothèque. Utilisez un fichier plus léger. |
| **Ce fichier n’est pas une image que l’éditeur peut ouvrir. Essayez un fichier JPG, PNG ou WebP.** | Le fichier déposé dans l’Éditeur d’images n’est pas une image qu’il sait lire. Convertissez-le. |
| **Votre navigateur ne peut pas ouvrir cette image. Essayez un fichier JPG, PNG ou WebP.** | Votre navigateur ne sait pas lire ce type d’image. Convertissez-la. |

## Bibliothèque de contenus et Éditeur d’images

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **Only the person who added this asset can delete it.** | Seule la personne qui a ajouté un fichier peut le supprimer. | Demandez-lui de le supprimer. |
| **This folder holds assets added by other people. Only the person who added an asset can delete it.** | Un dossier ne peut être supprimé que si tous les fichiers qu’il contient sont les vôtres. | Demandez aux personnes qui ont ajouté les autres fichiers de les déplacer ou de les supprimer, puis supprimez le dossier. |
| **Impossible d’ouvrir cette image pour la modifier.** | L’image n’a pas pu être lue depuis la bibliothèque. | Fermez l’éditeur et réessayez dans un instant. |
| **Impossible d’ajouter cette image.** | Le logo ou l’image que vous avez placé par-dessus la vôtre n’a pas pu être lu. | Essayez un autre fichier, en PNG ou en JPG. |
| **L’image n’a pas pu être générée. Essayez une taille plus petite.** | L’image est trop grande pour que votre navigateur l’enregistre à cette taille. | Réduisez la **Largeur**, puis enregistrez de nouveau. |
| **Quitter l’éditeur ?** | Vous fermez l’éditeur alors que des modifications ne sont pas enregistrées. | **Continuer les modifications**, puis enregistrez ; ou **Quitter sans enregistrer** pour les abandonner. |
| **Impossible de créer le lien de téléchargement.** | Un téléchargement depuis l’Espace client n’a pas pu démarrer. | Réessayez dans un instant. |

## Inscription et connexion

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **This code is not valid, or it has expired. Request a new one.** | Le code d’inscription est erroné ou date de plus de 20 minutes, ou il a été mal saisi trop de fois. | Cliquez sur **recommencez** et demandez un nouveau code. |
| **Temporary mailboxes cannot open an account. Please use your work or personal address.** | Les adresses jetables sont refusées. | Utilisez une véritable adresse. |
| **This address already has an account. Sign in instead.** | L’adresse dispose déjà d’un accès. | Connectez-vous, ou cliquez sur **Mot de passe oublié ?** |
| **Identifiant ou mot de passe invalide.** | L’adresse e-mail ou le mot de passe est erroné. | Vérifiez les deux, ou cliquez sur **Mot de passe oublié ?** |
| **Ce compte a été suspendu. Adressez-vous à votre administrateur.** | Un administrateur a suspendu votre accès. | Adressez-vous à un administrateur de votre équipe. |
| **Ce code n’est pas le bon. Il reste [n] essais.** | Le code de connexion a été mal saisi. | Vérifiez l’e-mail et saisissez-le de nouveau. |
| **Ce code n’est pas valable, ou il a expiré. Reconnectez-vous pour en recevoir un nouveau.** | Le code de connexion est erroné ou date de plus de 10 minutes. | Reconnectez-vous, ou cliquez sur **Envoyer un autre code**. |
| **Trop de codes erronés. Reconnectez-vous pour en recevoir un nouveau.** | Le code de connexion a été mal saisi trop de fois. | Reconnectez-vous. |
| **Un code a déjà été envoyé trois fois. Veuillez vous reconnecter dans quelques minutes.** | Trop de codes ont été demandés. | Patientez quelques minutes, puis reconnectez-vous. |
| **Patientez [n] secondes avant de demander un autre code.** | Un nouveau code a été demandé trop tôt. | Patientez, puis cliquez sur **Envoyer un autre code**. |
| **Ce lien est invalide ou a expiré** | Un lien de réinitialisation du mot de passe ne sert qu’une fois, pendant une heure environ. | Cliquez sur **Demander un nouveau lien**. |

## Invitations et équipes

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **Cette invitation a expiré** | Une invitation reste valable une semaine. | Demandez à la personne qui vous a invité de vous en envoyer une nouvelle. |
| **Cette invitation a déjà été utilisée** | Le compte qu’elle ouvrait existe déjà. | Connectez-vous avec l’adresse invitée. |
| **Cette invitation n’existe pas** | Le lien est incomplet ou l’invitation a été annulée. | Demandez une nouvelle invitation. |
| **This invitation is not valid any more. Ask for a new one.** | Le lien a expiré ou a été annulé pendant que vous étiez sur la page. | Demandez une nouvelle invitation. |
| **This person already belongs to another team. Ask a super admin to move them.** | Une adresse ne peut appartenir qu’à une seule équipe. | Écrivez-nous via **Nous contacter**, en pied de page. |
| **This person is already a member of the team.** | Cette personne fait déjà partie de votre équipe. | Rien à faire. |
| **Give the team a name of at least 2 characters.** | Le nom de l’équipe est trop court. | Saisissez un nom plus long. |

## Clients et Conçue pour

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **Give the client a name.** | Le nom d’un client nouveau ou renommé est vide. | Saisissez le nom de l’entreprise. |
| **Your team already has a client called [nom].** | Deux clients d’une même équipe ne peuvent pas porter le même nom. | Choisissez un autre nom, ou utilisez le client existant. |
| **Only a team administrator manages the clients.** | Les créateurs et les lecteurs ne peuvent ni ajouter, ni renommer, ni supprimer un client. | Adressez-vous à un administrateur. |
| **Choose the client this person works for.** | Un accès client doit être rattaché à l’un de vos clients, et celui-ci est introuvable, souvent parce qu’il vient d’être supprimé. | Rechargez la page et utilisez le formulaire placé sous le bon client, dans la carte **Clients**. |
| **Only a creator or an administrator says who a piece was made for.** | Les lecteurs ne peuvent pas modifier **Conçue pour**. | Adressez-vous à un créateur ou à un administrateur. |
| **This client is not one of your team.** | Le client a été supprimé entre-temps. | Rechargez la page et choisissez de nouveau. |
| **Your login is not attached to a client any more. Ask the team that invited you.** | Ce message s’affiche pour un accès client dont le client a été retiré. | Contactez l’équipe qui vous a invité. |

## Validation

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **This piece was made for another client. Ask one of that client’s people, or a colleague.** | Un contenu conçu pour un client ne peut être approuvé que par les personnes de ce client ou par un membre de l’équipe. | Choisissez une personne du bon client, ou un membre de l’équipe. |
| **The validator must be a member of your team.** | La personne choisie ne fait pas, ou plus, partie de votre équipe. | Choisissez un autre validateur. |
| **Ce contenu est en attente de validation. Il ne peut être ni modifié ni supprimé tant que le validateur n’a pas tranché.** | Le post ou le fichier est verrouillé pendant l’attente. | Demandez au validateur, ou à un administrateur, de trancher. |
| **Votre rôle (lecteur) est en lecture seule.** | Les lecteurs ne peuvent ni soumettre, ni commenter, ni trancher. | Demandez à un administrateur de vous passer créateur, ou désignez un autre validateur. |
| **Write the comment first.** | La zone de commentaire est vide. | Rédigez le commentaire, puis envoyez-le. |

## Posts et connexions LinkedIn

| Ce que vous voyez | Ce que cela signifie | Que faire |
|---|---|---|
| **Not saved:** à côté d’**Enregistrer**, avec un motif | Le post n’a pas pu s’enregistrer de lui-même. Votre texte est toujours à l’écran, et la prochaine frappe relance l’enregistrement. | Si l’échec persiste, copiez votre texte en lieu sûr et rechargez la page. |
| **Aucun brouillon généré. Reformulez le brief et réessayez.** | Le modèle n’a rien renvoyé d’exploitable. | Reformulez le brief et réessayez. |
| **Le brouillon a dépassé la longueur que le modèle peut produire d’un seul tenant : il est revenu tronqué.** | La réponse a été coupée avant d’être complète. | Raccourcissez le brief, ou demandez un post plus court, puis réessayez. |
| **Programmer** et **Publier maintenant** restent verrouillés | Aucun compte n’est coché sous **Sous quelle identité il part**. | Cochez votre profil ou une page. |
| **No account is connected on LinkedIn yet.** | L’onglet **Publier automatiquement** exige un compte LinkedIn connecté. | Cliquez sur le bouton situé sous le message pour ouvrir Mes connexions, ou passez par **Publier manuellement**. Voir [Mes connexions](/fr/aide/mes-connexions#connecter-linkedin). |
| **Your account has stopped working and is waiting to be reconnected.**, ou **Reconnecter** sur la vignette d’un compte | La connexion a expiré ou a été retirée. | Cliquez sur **Reconnecter** sur sa ligne, dans Mes connexions. |
| Une page entreprise manque après la connexion | LinkedIn ne vous compte pas parmi les administrateurs de cette page. | Demandez au propriétaire de la page de vous ajouter, puis connectez-vous de nouveau. |
| **The network authorized us but returned no account to publish on.** | LinkedIn a laissé entrer Nuvora mais n’a renvoyé ni profil ni page. | Vérifiez que vous vous êtes connecté avec le bon identifiant LinkedIn, puis réessayez. |
| **This connect link has expired or was already used. Start again from the card.** | Le lien de connexion de Nuvora vers LinkedIn a déjà servi, ou il est trop ancien. | Cliquez de nouveau sur **Connecter un compte**. |
| **[n] post is still scheduled on this account. Cancel it first, or switch the account off instead of removing it.** | Un compte ne peut pas être retiré tant que quelque chose l’attend dans la file. | Annulez les posts programmés, ou cliquez sur **Désactiver**. |
| **Certaines connexions demandent votre attention** dans une notification en bas à droite de l’écran | La vérification lancée à la connexion a trouvé une connexion qui ne laisse plus entrer Nuvora. | Cliquez sur **Reconnecter**, reconnectez-vous dans la carte qui s’ouvre, puis cliquez sur **Vérifier à nouveau** dans la notification. Voir [Mes connexions](/fr/aide/mes-connexions#la-vérification-des-connexions-à-louverture-de-session). |

## LinkedIn Ads

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **LinkedIn Ads n’est pas connecté. Connectez votre propre accès LinkedIn dans Mes connexions.** | Vous n’avez pas connecté d’identifiant LinkedIn pour le compte publicitaire. | Cliquez sur **Ouvrir Mes connexions**, puis sur **Connecter LinkedIn Ads**. Voir [Mes connexions](/fr/aide/mes-connexions#vos-comptes-publicitaires-linkedin). |
| **Aucun compte publicitaire LinkedIn n’est choisi. Cochez les comptes que vous gérez dans Mes connexions.** | Votre identifiant LinkedIn est connecté, mais aucun compte publicitaire n’est coché. | Cochez au moins un compte publicitaire dans sa carte. |
| **Cet identifiant LinkedIn n’ouvre aucun compte publicitaire** | L’identifiant connecté n’a de rôle sur aucun compte publicitaire. | Connectez l’identifiant LinkedIn qui détient un rôle sur le compte dans Campaign Manager. |
| **Ce compte publicitaire LinkedIn ne fait pas partie des comptes que vous gérez. Cochez-le d’abord dans Mes connexions.** | Le compte choisi n’est pas coché dans Mes connexions. | Cochez-le, puis revenez. |
| **Votre rôle LinkedIn sur ce compte publicitaire permet de consulter les campagnes, pas de les modifier. Un gestionnaire du compte peut l’élever dans Campaign Manager.** | Votre rôle côté LinkedIn est en lecture seule. | Demandez à un gestionnaire du compte publicitaire d’élever votre rôle dans Campaign Manager. |
| **Vous pouvez consulter LinkedIn Ads, mais pas le modifier. Adressez-vous à votre administrateur.** | Vos droits dans Nuvora ne vous permettent que de consulter le compte publicitaire. | Adressez-vous à un administrateur de votre équipe. |
| **Saisissez un mot-clé ou un annonceur pour lancer la recherche.** | Une recherche dans la bibliothèque publicitaire exige un mot-clé ou un annonceur. | Saisissez-en un, puis cliquez sur **Rechercher des annonces**. |

## Interroger et agents

| Message | Ce que cela signifie | Que faire |
|---|---|---|
| **Cette question est trop longue. Raccourcissez-la.** | Une question compte au maximum 1 000 caractères. | Raccourcissez-la, et posez la suite dans une question complémentaire. |
| **Aucune réponse reçue. Reformulez votre question.** | Le modèle n’a rien renvoyé d’exploitable. | Reformulez la question et posez-la de nouveau. |
| **Recherche web** reste sur **OFF** | La recherche web est désactivée pour votre équipe, ou le modèle ne sait pas chercher sur le web. | Adressez-vous à un administrateur, ou choisissez un modèle capable de chercher sur le web. |
| **Donnez un nom à l’agent.** | Un nouvel agent doit porter un nom. | Saisissez-en un. |
| **Write the agent’s instructions (at least 20 characters).** | Les instructions sont vides ou trop courtes. | Précisez ce que l’agent doit surveiller et rapporter. |
| **Choisissez au moins une source de données pour l’agent.** | Un agent a besoin de quelque chose à lire. | Choisissez une source de données dans le formulaire de l’agent. |
| **Votre rôle est en lecture seule.** | Les lecteurs ne peuvent ni créer ni modifier un agent. | Demandez à un administrateur de vous passer créateur. |

## Toujours bloqué ?

Utilisez **Signaler un bug** ou **Nous contacter**, en pied de page de chaque page. Dites-nous sur quoi vous avez cliqué, ce que vous attendiez, et le message exact qui s’est affiché.
