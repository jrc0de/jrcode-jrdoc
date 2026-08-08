# Bun

## Commandes essentielles

```bash
bun -v # afficher la version
bun upgrade # mettre à jour Bun vers la dernière version
bun init # initialiser un nouveau projet
bun install # installer les dépendances d'un projet
bun i # alias de bun install
```

## Gestion des packages

```bash
bun add [package] # installer un package
bun add [package] --dev # installer en dépendance de développement
bun add [package] -d # alias de --dev
bun remove [package] # désinstaller un package
bun outdated # lister les packages obsolètes
bun update # mettre à jour les packages (dans les limites de package.json)
bun update --latest # mettre à jour en ignorant les contraintes de version
bun add [package]@latest # installer ou forcer la dernière version d'un package
```

## Gestion des packages globaux

```bash
bun add -g [package] # installer un package globalement
bun update -g [package] # mettre à jour un package global
bun remove -g [package] # désinstaller un package global
bun pm ls -g # lister les packages installés globalement avec leur version
bun pm bin -g # afficher le dossier bin global (où sont les exécutables)
ls $(bun pm bin -g) # lister les commandes (binaires) disponibles
```

> **Package vs binaire** : le nom du package installé n'est pas toujours celui de la commande qu'il expose. Par exemple, `bun add -g typescript` installe le package `typescript`, mais crée les commandes `tsc` et `tsserver`.

## Exécution de scripts

```bash
bun [script.js] # exécuter un script
bunx [package] # exécuter un package sans l'installer
```

## Sécurité

```bash
bun audit # scanner les vulnérabilités de sécurité
bun audit fix # corriger les vulnérabilités de sécurité
```
