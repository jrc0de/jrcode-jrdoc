---
outline: deep
---

# TypeScript

## Les primitives JavaScript

TypeScript permet d'annoter explicitement les types primitifs de JavaScript. Chaque variable peut être typée pour garantir la cohérence des données.

```ts
const a: string = "Bonjour"; // Chaîne de caractères
const b: number = 3; // Nombre entier ou décimal
const c: boolean = true; // Booléen (true ou false)
const d: null = null; // Absence intentionnelle de valeur
const e: undefined = undefined; // Variable déclarée sans valeur assignée
```

## Tableaux

Les tableaux se typent en suffixant le type des éléments par []. Cela garantit que tous les éléments respectent le type déclaré.

```ts
const table1: number[] = [1, 2, 3]; // Tableau de nombres
const table2: string[] = ["toto", "titi", "tata"]; // Tableau de chaînes
```

## Types spécifiques à TypeScript

`any` désactive la vérification de type : à éviter. Préférer unknown qui accepte n'importe quel type mais oblige à vérifier le type avant toute utilisation.

```ts
const f: any = "toto"; // Désactive la vérification de type

const g: unknown = "titi"; // Accepte tout, mais oblige à vérifier avant usage
if (typeof g === "string") {
  console.log(g.toUpperCase()); // TypeScript sait que g est un string ici
}
```
