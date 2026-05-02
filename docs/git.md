# Git

## Initialisation

```bash
git init # Commencer un nouveau dépôt
git clone <url> # Cloner un dépôt distant
```

## Synchronisation

```bash
git fetch # Récupérer les modifications du dépôt distant
git pull # Récupérer et fusionner les modifications du dépôt distant
```

## Annuler des commits

```bash
git reset HEAD~x # Annuler les x derniers commits (garde les modifications)
git reset --hard HEAD~x # Annuler les x derniers commits (supprime les modifications)
git push --force # Forcer le push (écrase l'historique distant)
```

## Branches

```bash
git branch # Afficher les branches locales
git branch <name> # Créer une branche
git checkout <name> # Changer de branche
git merge <name> # Fusionner une branche (commit de fusion)
git rebase <name> # Fusionner une branche (historique linéaire)
git branch -d <name> # Supprimer une branche locale
```
