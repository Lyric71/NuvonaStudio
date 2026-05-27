# -*- coding: utf-8 -*-
import os
def patch(path, pairs):
    with open(path, 'rb') as f:
        s = f.read().decode('utf-8')
    changes = 0
    misses = []
    for old, new in pairs:
        if old in s:
            s = s.replace(old, new, 1)
            changes += 1
        else:
            misses.append(old[:70])
    with open(path, 'wb') as f:
        f.write(s.encode('utf-8'))
    print(f"{os.path.basename(path)}: {changes}/{len(pairs)}")
    for m in misses:
        print("  MISS:", m)

# accroche-linkedin-coute-opportunites
patch(r'c:/Users/cyril/Project/NuvoraStudioWeb/src/pages/fr/publications/accroche-linkedin-coute-opportunites.astro', [
    ("title=\"Votre accroche LinkedIn vous fait perdre des opportunités. On vous explique comment la corriger. | Nuvora Studio\"",
     "title=\"Votre accroche LinkedIn vous coûte des opportunités. Voici comment la rattraper. | Nuvora Studio\""),
    ("description=\"Votre accroche LinkedIn apparaît partout : publications, commentaires, résultats de recherche, demandes de connexion. La plupart des utilisateurs n'exploitent que 40 % des caractères disponibles. On vous explique comment y remédier.\"",
     "description=\"Votre accroche LinkedIn s'affiche partout : publications, commentaires, résultats de recherche, demandes de connexion. La majorité des gens n'exploitent que 40 % des caractères disponibles. Voici comment rectifier le tir.\""),
    ("abstract=\"Votre accroche LinkedIn s'affiche partout où vous apparaissez sur la plateforme. La majorité des gens la gaspillent avec un simple intitulé de poste. Il existe une meilleure formule.\"",
     "abstract=\"Votre accroche LinkedIn s'affiche partout où l'on vous croise sur la plateforme. La plupart la gâchent avec un simple intitulé de poste. Il existe une bien meilleure formule.\""),
    ("Votre accroche LinkedIn vous fait<br />perdre des opportunités.<br /><em>On vous explique comment la corriger.</em>",
     "Votre accroche LinkedIn vous coûte<br />des opportunités.<br /><em>Voici comment la rattraper.</em>"),
    ("Votre accroche LinkedIn apparaît partout : publications, commentaires, résultats de recherche, demandes de connexion.\n            La plupart des utilisateurs n'exploitent que 40 % des caractères disponibles. On vous explique comment y remédier.",
     "Votre accroche LinkedIn s'affiche partout : publications, commentaires, résultats de recherche, demandes de connexion.\n            La majorité des gens n'exploitent que 40 % des caractères disponibles. Voici comment rectifier le tir."),
    ("LinkedIn vous accorde 220 caractères pour votre accroche. La plupart des gens en utilisent moins de 80. Ils écrivent leur intitulé de poste, parfois le nom de leur entreprise, et s'arrêtent là. Cela signifie que chaque vue qu'ils génèrent sur la plateforme repose sur une ligne qui ne dit presque rien de la valeur qu'ils apportent.",
     "LinkedIn vous accorde 220 caractères pour votre accroche. La plupart en utilisent moins de 80. Ils écrivent leur intitulé de poste, parfois le nom de leur entreprise, et s'arrêtent là. Conséquence : chaque vue générée sur la plateforme repose sur une ligne qui ne dit presque rien de la valeur qu'ils apportent."),
    ("Votre accroche n'est pas une étiquette. C'est un argumentaire qui tourne 24 heures sur 24, sept jours sur sept, que vous soyez en ligne ou non.",
     "Votre accroche n'est pas une étiquette. C'est un argumentaire qui tourne 24 h sur 24, 7 jours sur 7, que vous soyez en ligne ou pas."),
    ("« Votre accroche n'est pas votre intitulé de poste. C'est la seule ligne qui décide si quelqu'un clique ou passe son chemin. »",
     "« Votre accroche n'est pas votre intitulé de poste. C'est la seule ligne qui décide si quelqu'un clique ou passe son chemin. »"),
    ("La plupart des gens traitent leur accroche LinkedIn comme une formalité. Quelque chose qu'on définit une fois à la création du profil et qu'on ne retouche jamais. Pourtant, l'accroche est le texte le plus visible de l'ensemble de votre profil.",
     "La plupart des gens traitent leur accroche LinkedIn comme une formalité. Un truc qu'on règle une fois à la création du profil et qu'on ne retouche jamais. Pourtant, l'accroche est le texte le plus visible de tout votre profil."),
    ("Elle apparaît dans les résultats de recherche avant que quiconque ne visite votre profil. Elle s'affiche sous votre nom dans chaque commentaire que vous laissez. Elle figure dans les demandes de connexion, dans les encarts « Profils similaires » et dans chaque notification que vous déclenchez. Si quelqu'un voit votre nom sur LinkedIn, il voit votre accroche. On ne peut pas y échapper.",
     "Elle apparaît dans les résultats de recherche avant même que quiconque ne visite votre profil. Elle s'affiche sous votre nom à chaque commentaire que vous laissez. Elle figure dans les demandes de connexion, dans les encarts « Profils similaires » et dans chaque notification que vous déclenchez. Si quelqu'un voit votre nom sur LinkedIn, il voit votre accroche. Impossible d'y échapper."),
    ("Cela signifie que votre accroche travaille pour vous ou contre vous des centaines de fois par jour. Une accroche faible ne se contente pas de ne pas attirer l'attention. Elle dit activement aux prospects que vous ne valez pas le clic.",
     "Conséquence : votre accroche travaille pour vous ou contre vous, des centaines de fois par jour. Une accroche faible ne se contente pas de ne pas attirer l'attention. Elle dit activement aux prospects que vous ne valez pas le clic."),
    ("« Une accroche qui dit \"Directeur commercial chez Entreprise X\" n'indique rien au lecteur sur les raisons de s'y intéresser. »",
     "« Une accroche qui dit \"Directeur commercial chez Entreprise X\" n'indique rien au lecteur sur les raisons de s'y arrêter. »"),
    ("Les mauvaises accroches partagent toutes le même problème : elles décrivent la personne mais pas la valeur. Elles répondent à « Que faites-vous ? » au lieu de « Que faites-vous pour moi ? »",
     "Les mauvaises accroches ont toutes le même défaut : elles décrivent la personne, jamais la valeur. Elles répondent à « Que faites-vous ? » au lieu de « Que faites-vous pour moi ? »"),
    ("<strong>« Directrice marketing chez Acme Corp. »</strong> Cela indique au lecteur votre poste et votre employeur. Cela ne lui dit pas quels problèmes vous résolvez, qui vous aidez ni pourquoi il devrait se connecter avec vous. C'est une carte de visite, pas une raison de cliquer.",
     "<strong>« Directrice marketing chez Acme Corp. »</strong> Cela donne au lecteur votre poste et votre employeur. Pas un mot sur les problèmes que vous résolvez, ni sur qui vous aidez, ni sur ce qui justifie une mise en relation. Une carte de visite, pas une raison de cliquer."),
    ("<strong>« Passionnée par l'accompagnement des entreprises dans leur croissance. »</strong> C'est vague au point d'être insignifiant. Tout le monde est passionné par quelque chose. Le mot « entreprises » peut désigner n'importe quoi. Aucune spécificité, aucune preuve et aucune raison d'y croire.",
     "<strong>« Passionnée par l'accompagnement des entreprises dans leur croissance. »</strong> C'est vague au point d'en être vide. Tout le monde est passionné par quelque chose. « Entreprises » peut tout vouloir dire. Aucune spécificité, aucune preuve, aucune raison d'y croire."),
    ("<strong>« PDG | Conférencier | Auteur | Investisseur | Conseiller. »</strong> C'est une liste de titres, pas une proposition de valeur. Empiler des références ne dit à personne ce que vous faites concrètement pour les personnes avec qui vous travaillez. Ça ressemble à une vitrine de trophées, pas à une raison d'engager la conversation.",
     "<strong>« PDG | Conférencier | Auteur | Investisseur | Conseiller. »</strong> Une liste de titres, pas une proposition de valeur. Empiler des références ne dit à personne ce que vous faites concrètement pour vos interlocuteurs. Ça ressemble à une vitrine de trophées, pas à une raison d'engager la conversation."),
    ("<strong>« Ouvert aux nouvelles opportunités. »</strong> Cela signale un besoin, pas une valeur. Si vous cherchez un emploi, votre accroche devrait quand même commencer par ce que vous apportez, pas par ce que vous attendez.",
     "<strong>« Ouvert aux nouvelles opportunités. »</strong> Ça signale un besoin, pas une valeur. Même quand on cherche un emploi, l'accroche devrait commencer par ce que l'on apporte, pas par ce que l'on attend."),
    ("« Si votre accroche pourrait appartenir à mille autres personnes, elle ne remplit pas sa fonction. »",
     "« Si votre accroche pourrait coller à mille autres personnes, c'est qu'elle ne remplit pas sa fonction. »"),
    ("Pas besoin d'être original. Il faut être clair. Une accroche qui communique à qui vous vous adressez, comment vous les aidez et quel résultat vous livrez surpassera n'importe quelle formulation créative mais floue.",
     "Pas besoin d'être original. Il faut être clair. Une accroche qui dit à qui vous vous adressez, comment vous les aidez et quel résultat vous délivrez battra n'importe quelle formulation créative mais floue."),
    ("La formule est simple : j'aide [public précis] à atteindre [résultat précis] grâce à [méthode ou expertise précise]. C'est tout. On peut ajuster le langage pour qu'il sonne naturel, mais la structure doit rester la même.",
     "La formule est simple : « J'aide [public précis] à atteindre [résultat précis] grâce à [méthode ou expertise précise]. » C'est tout. On peut ajuster les mots pour que ça sonne naturel, mais la structure ne bouge pas."),
    ("Par exemple : « J'aide les entreprises SaaS B2B à générer des prospects qualifiés grâce à une stratégie de contenu LinkedIn. » Cette accroche dit au lecteur exactement qui vous servez, ce que vous livrez et comment vous le faites. Il faut trois secondes pour la lire et elle qualifie ou disqualifie immédiatement le lecteur. C'est précisément l'objectif.",
     "Exemple : « J'aide les SaaS B2B à générer des prospects qualifiés grâce à une stratégie de contenu LinkedIn. » Cette accroche dit au lecteur, en trois secondes, qui vous servez, ce que vous délivrez et comment. Elle qualifie ou disqualifie immédiatement. C'est précisément l'objectif."),
    ("Vous disposez de 220 caractères. Utilisez-les. Ajoutez un bénéfice secondaire, une référence pertinente ou une touche de personnalité. Mais le noyau de la structure doit toujours répondre à la seule vraie question du lecteur : « Est-ce que cette personne est pertinente pour moi ? »",
     "Vous avez 220 caractères. Utilisez-les. Glissez un bénéfice secondaire, une référence pertinente ou une touche de personnalité. Mais le cœur de la structure doit toujours répondre à la seule vraie question du lecteur : « Cette personne est-elle pertinente pour moi ? »"),
    ("« La clarté l'emporte sur l'originalité sur LinkedIn. À chaque fois. »",
     "« Sur LinkedIn, la clarté l'emporte sur l'originalité. À chaque fois. »"),
    ("Le test le plus simple pour toute accroche LinkedIn : lisez-la sans votre nom, votre photo ni votre profil. Juste l'accroche, seule. Est-ce qu'elle a du sens ? Est-ce qu'elle communique de la valeur ? Est-ce que vous cliqueriez dessus si vous la voyiez sous le nom de quelqu'un d'autre ?",
     "Le test le plus simple pour une accroche LinkedIn : lisez-la sans votre nom, ni votre photo, ni votre profil. Juste l'accroche, seule. Est-ce qu'elle a du sens ? Est-ce qu'elle communique de la valeur ? Est-ce que vous cliqueriez dessus si vous la voyiez sous le nom de quelqu'un d'autre ?"),
    ("La plupart des accroches échouent immédiatement à ce test. Elles s'appuient sur un contexte qui n'est pas là. Elles supposent que le lecteur sait déjà qui vous êtes, ce que fait votre entreprise ou pourquoi votre titre a de l'importance. Mais dans le fil d'actualité, dans les résultats de recherche et dans les demandes de connexion, il n'y a pas de contexte. Il n'y a que l'accroche.",
     "La plupart des accroches calent immédiatement sur ce test. Elles s'appuient sur un contexte qui n'est pas là. Elles supposent que le lecteur sait déjà qui vous êtes, ce que fait votre entreprise ou pourquoi votre titre compte. Mais dans le fil, dans les résultats de recherche et dans les demandes de connexion, il n'y a pas de contexte. Il n'y a que l'accroche."),
    ("Essayez de coller votre accroche dans un document vierge. Montrez-la à un collègue qui ne travaille pas dans votre secteur. Demandez-lui : « Sur la base de cette seule ligne, qu'est-ce que je fais et qui est-ce que j'aide ? » S'il ne peut pas répondre aux deux questions instantanément, votre accroche a besoin d'être retravaillée.",
     "Essayez : collez votre accroche dans un document vierge. Montrez-la à un collègue d'un autre secteur. Demandez-lui : « Avec cette seule ligne, qu'est-ce que je fais et qui est-ce que j'aide ? » S'il ne peut pas répondre aux deux questions sur-le-champ, votre accroche a besoin d'être retravaillée."),
    ("« Votre accroche doit fonctionner sans votre profil. Parce que la plupart du temps, c'est exactement comme ça que les gens la voient. »",
     "« Votre accroche doit tenir sans votre profil. Parce que la plupart du temps, c'est exactement comme ça que les gens la voient. »"),
    ("Pas besoin d'un rédacteur. Pas besoin d'un atelier de marque personnelle. Il faut 15 minutes et la volonté d'être précis.",
     "Pas besoin de rédacteur. Pas besoin d'atelier de personal branding. Il faut 15 minutes et la volonté d'être précis."),
    ("<strong>Étape un : notez les trois plus gros problèmes que vos clients vous soumettent.</strong> Pas les problèmes que vous pensez résoudre. Les mots exacts que vos clients utilisent quand ils vous contactent pour la première fois. Ces mots sont la matière première de votre accroche.",
     "<strong>Étape un : notez les trois plus gros problèmes que vos clients vous apportent.</strong> Pas ceux que vous pensez résoudre. Les mots exacts que vos clients emploient quand ils vous contactent pour la première fois. Ces mots sont la matière première de votre accroche."),
    ("<strong>Étape deux : identifiez le résultat le plus fréquent que vous livrez.</strong> Croissance du chiffre d'affaires, génération de prospection, efficacité opérationnelle, réduction de l'attrition. Choisissez celui qui compte le plus pour les personnes que vous souhaitez attirer.",
     "<strong>Étape deux : identifiez le résultat le plus fréquent que vous délivrez.</strong> Croissance du chiffre d'affaires, génération de prospects, efficacité opérationnelle, baisse du churn. Choisissez celui qui compte le plus pour les gens que vous voulez attirer."),
    ("<strong>Étape trois : combinez le public cible, le résultat et votre méthode en une seule ligne.</strong> Restez sous les 220 caractères. Lisez-la à voix haute. Si ça sonne comme quelque chose qu'une vraie personne dirait dans une conversation, vous êtes sur la bonne voie.",
     "<strong>Étape trois : combinez le public cible, le résultat et votre méthode en une seule ligne.</strong> Restez sous les 220 caractères. Lisez à voix haute. Si ça sonne comme quelque chose qu'une vraie personne dirait dans une conversation, vous êtes sur la bonne voie."),
    ("<strong>Étape quatre : supprimez chaque mot qui ne mérite pas sa place.</strong> Éliminez « passionné ». Éliminez « orienté résultats ». Éliminez « leader d'opinion ». Ces mots sont du remplissage. Remplacez-les par des éléments concrets. Des chiffres, des secteurs, des méthodes, des résultats.",
     "<strong>Étape quatre : virez chaque mot qui ne mérite pas sa place.</strong> Éliminez « passionné », « orienté résultats », « leader d'opinion ». Ce sont du remplissage. Remplacez-les par du concret : des chiffres, des secteurs, des méthodes, des résultats."),
    ("<strong>Étape cinq : mettez à jour votre accroche et observez ce qui se passe dans les deux semaines suivantes.</strong> Surveillez les vues de profil, les taux d'acceptation de demandes de connexion et les messages entrants. Une bonne accroche change les trois.",
     "<strong>Étape cinq : mettez à jour votre accroche et observez ce qui se passe dans les deux semaines qui suivent.</strong> Surveillez les vues de profil, les taux d'acceptation des demandes de connexion et les messages entrants. Une bonne accroche fait bouger les trois."),
    ("« La meilleure accroche que vous puissiez écrire est celle qui fait s'arrêter les bonnes personnes et cliquer. »",
     "« La meilleure accroche que vous puissiez écrire, c'est celle qui fait s'arrêter les bonnes personnes et les fait cliquer. »"),
    ("Votre section À propos compte. Votre section Expérience compte. Votre section Sélection compte. Mais aucune d'entre elles n'est vue si personne ne clique d'abord sur votre profil. Et c'est l'accroche qui génère ce clic.",
     "Votre section À propos compte. Votre section Expérience compte. Votre section Sélection compte. Mais aucune n'est lue tant que personne ne clique d'abord sur votre profil. Et c'est l'accroche qui déclenche ce clic."),
    ("Voyez les choses ainsi : votre accroche est la porte d'entrée. Tout le reste est la salle d'exposition. Si la porte d'entrée n'invite pas les gens à entrer, la salle d'exposition n'a aucune importance.",
     "Voyez les choses ainsi : votre accroche, c'est la porte d'entrée. Tout le reste, c'est la salle d'exposition. Si la porte d'entrée n'invite personne à entrer, la salle d'exposition ne sert à rien."),
    ("La plupart des profils LinkedIn ont une salle d'exposition tout à fait correcte derrière une porte qui ne dit rien. Corrigez la porte. Le reste du profil commence à travailler plus dur dès que vous le faites.",
     "La plupart des profils LinkedIn ont une salle d'exposition tout à fait correcte derrière une porte qui ne dit rien. Refaites la porte. Le reste du profil se met à travailler plus dur dès que vous l'avez fait."),
    ("« Un excellent profil derrière une accroche faible, c'est un magasin sans enseigne. Personne n'entre. »",
     "« Un excellent profil derrière une accroche faible, c'est un magasin sans enseigne. Personne ne pousse la porte. »"),
    ("Chez Nuvora Studio, nous aidons les professionnels B2B à rédiger des accroches LinkedIn qui génèrent des prospects au lieu de prendre la poussière. Quinze minutes de travail qui rapportent chaque jour.",
     "Chez Nuvora Studio, on aide les pros B2B à rédiger des accroches LinkedIn qui ramènent des prospects, au lieu de prendre la poussière. Quinze minutes de travail qui rapportent tous les jours."),
])
