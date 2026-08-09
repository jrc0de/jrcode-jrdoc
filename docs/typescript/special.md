# Types particuliers

## Type _any_

Le type `any` permet de désactiver la vérification de type sur une variable. Elle peut alors recevoir n'importe quelle valeur, de n'importe quel type, sans jamais générer d'erreur.

```ts
let data: any = 25
data = "twenty" // OK, aucune erreur
data = true // OK aussi
data = { name: "Alice" } // OK aussi
```

::: warning Avertissement
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

## Type _empty object_

Le type `{}`, malgré son nom informel "objet vide", n'est pas propre aux objets : c'est un type à part entière, utilisable partout (variable, paramètre de fonction, etc.), qui signifie "n'importe quelle valeur sauf `null` et `undefined`".

```ts
let obj: {} = { name: "Alice" }

obj = "hello" // OK ?!
obj = 42 // OK ?!
obj = null // Error [!code error]
obj = undefined // Error [!code error]
```

## Type _enum_

Un `enum` permet de définir un ensemble fixe de valeurs nommées, quand on veut représenter un choix parmi une liste connue à l'avance.

```ts
enum State {
  Active,
  Inactive,
  Waiting,
}

// `State` est un nouveau type, utilisable comme n'importe quel autre type
let s: State
s = State.Active // OK
s = "active" // Error [!code error] — il faut passer par State.Active
```

Par défaut, chaque membre reçoit une valeur numérique automatique (0, 1, 2...), mais on peut aussi assigner des valeurs explicites, notamment des chaînes :

```ts
enum Color {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}
```

::: tip Astuce
Pour la plupart des cas simples, un type union de chaînes littérales (`"active" | "inactive" | "waiting"`) est souvent préféré aux `enum` en TypeScript moderne : plus léger, plus facile à inspecter, et sans le comportement particulier des enums numériques. Les `enum` restent utiles quand on veut regrouper les valeurs sous un même espace de noms (`State.Active`).
:::
