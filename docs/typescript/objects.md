# Objets

## Assignation de type

Pour typer un objet, on précise le type de chacune de ses propriétés entre accolades.

```ts
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
}

user.age = "twenty" // Error [!code error]
```

## Inférence de type

Comme pour les variables simples, TypeScript est capable de déduire le type d'un objet à partir des valeurs qu'il contient au moment de sa déclaration.

```ts
let user = {
  name: "Alice",
  age: 25,
} // TypeScript déduit : { name: string; age: number }

user.age = "twenty" // Error [!code error]
```

## Propriétés optionnelles

On peut rendre une propriété optionnelle avec `?`. Elle peut alors être omise lors de la création de l'objet.

```ts
let user: { name: string; age?: number } = {
  name: "Alice",
}
```
