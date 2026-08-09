# Varaibles simples

## Assignation de type

On peut déclarer une variable en précisant explicitement son type avec la syntaxe `variable: type`.

```ts
let age: number = 25
let name: string = "Alice"
let isActive: boolean = true
let year: number
let city: string
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

## Type _any_

Le type `any` permet de désactiver la vérification de type sur une variable. Elle peut alors recevoir n'importe quelle valeur, de n'importe quel type, sans jamais générer d'erreur.

```ts
let data: any = 25
data = "twenty" // OK, aucune erreur
data = true // OK aussi
data = { name: "Alice" } // OK aussi
```

::: warning À éviter
Le type `any` désactive la vérification de type de TypeScript. Cela annule l'intérêt même du langage : les erreurs qu'il devrait détecter à l'écriture du code ne le seront plus. À n'utiliser qu'en dernier recours.
:::

## Type _union_

Le type union, avec le symbole `|`, permet à une variable d'accepter plusieurs types précis. Contrairement à `any`, TypeScript continue de vérifier que la valeur correspond bien à l'un des types autorisés.

```ts
let id: string | number

id = 42 // OK
id = "abc123" // OK
id = true // Error [!code error]
```
