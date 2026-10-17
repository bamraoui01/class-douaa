# La classe de Douaa

Site statique prêt pour GitLab Pages. Les deux PDF interactifs d’origine sont inclus, sans modification. Les liens des 16 activités pointent vers leur page dans les cahiers. Les documents d’école sont accessibles dans les annexes des PDF.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt `class-douaa` sur GitHub, branche `main`.
2. Déposer tous les fichiers, y compris `.github/workflows/pages.yml` et `public/`.
3. Dans Settings > Pages > Build and deployment, sélectionner GitHub Actions.
4. Lancer le workflow « Publier la classe de Douaa » et vérifier son succès.
5. Utiliser l’adresse fournie par le déploiement.

Les PDF contiennent des travaux et corrections d’élève : vérifier la visibilité souhaitée avant publication. Une publication Pages standard est accessible publiquement, y compris lorsque l’offre permet un dépôt privé. Pour un accès familial uniquement, utiliser un hébergement offrant un véritable contrôle d’accès.

## Utilisation

Ouvrir `public/index.html` pour consulter le site localement. Aucun module externe, aucune police distante, aucun service d’analyse.

Les cases « Fait » sont enregistrées dans le navigateur, sur l’appareil utilisé. Elles ne se synchronisent pas entre appareils. Aucun compte élève ou serveur de réponses n’est fourni. Les réponses aux PDF doivent être enregistrées dans une copie téléchargée, avec une application compatible avec les formulaires PDF. Certains lecteurs mobiles ignorent les liens directs aux pages : aller alors au numéro de page indiqué.

Le coin parents n’est pas un contrôle d’accès : les corrigés font partie des PDF complets. Les documents d’anglais incluent le travail corrigé de l’élève ; conserver l’accès privé au site.

## Ajouter une semaine ou un document

- Déposer les nouveaux PDF dans `public/documents/`, avec des noms simples sans espaces.
- Ajouter les activités dans `public/resources.js` : identifiant **unique**, matière, titre, description, nom du PDF sans extension et page (à partir de 1).
- Ajouter le lien du nouveau cahier dans la section Documents de `public/index.html` et actualiser la période affichée.
- Valider dans GitHub pour lancer la mise à jour. Le site ne propose pas de téléversement de documents depuis son interface.

Les dates du 13–16 octobre 2026 correspondent aux fichiers fournis. Le site ne présente pas ces devoirs comme ceux de la semaine en cours.
