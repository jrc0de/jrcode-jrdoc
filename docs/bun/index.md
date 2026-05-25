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
