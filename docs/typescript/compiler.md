# Le compilateur

## Installation

Le compilateur TypeScript (`tsc`) s'installe globalement via Bun, ce qui rend la commande `tsc` disponible directement dans le terminal.

```bash
bun add -g typescript
```

::: tip Astuce
Bun peut exécuter directement des fichiers `.ts` sans compilation préalable (`bun run fichier.ts`), mais il ne fait alors aucune vérification de type : il se contente de retirer les annotations. Pour profiter de la vérification de types, il faut passer par `tsc`.
:::

## Compilation d'un fichier

`tsc` transforme un fichier `.ts` en `.js`, en supprimant les annotations de type au passage.

```bash
tsc file.ts # Génère file.js
```

## Création du `tsconfig.json`

Le fichier `tsconfig.json` centralise la configuration du compilateur pour tout un projet. Il se crée avec la commande `tsc --init`. Une fois ce fichier présent, la commande `tsc` (sans argument) compile tout le projet selon sa configuration.
