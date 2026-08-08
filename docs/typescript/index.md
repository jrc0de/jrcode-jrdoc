# Introduction

::: tip TypeScript
TypeScript est un sur-ensemble de JavaScript qui ajoute un système de types statique. Il permet de détecter des erreurs dès l'écriture du code, avant même de l'exécuter.
:::

## Assignation simple

On peut déclarer une variable en précisant explicitement son type avec la syntaxe `variable: type`.

```ts
let age: number = 25
let year: number = 2012
let name: string = "Alice"
let isActive: boolean = true
```

L'annotation de type garantit que la variable ne pourra jamais recevoir une autre valeur que celle du type déclaré :

```ts
let age: number = 25
age = "twenty" // Error [!code error]
```

## Inférence de type

TypeScript est capable de déduire le type d'une variable tout seul, à partir de la valeur assignée. Il n'est donc pas toujours nécessaire de le préciser.

```ts
let age = 25 // TypeScript déduit : number
let prenom = "Alice" // TypeScript déduit : string

// Le type est "verrouillé" ensuite même sans annotation explicite
age = "twenty" // Error [!code error]
```
