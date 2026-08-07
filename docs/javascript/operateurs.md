# Les opérateurs

## Opérateurs mathématiques

- `+` pour additionner des nombres ou concaténer des chaînes de caractères
- `-` pour soustraire une valeur
- `/` pour diviser une valeur
- `*` pour multiplier une valeur
- `**` pour élever un nombre à une puissance
- `%` pour obtenir le reste d'une division (modulo)

## Opérateurs d'assignement

- `=` pour assigner une valeur à une variable
- `+=`, `-=`, `*=`, `/=` pour modifier et réassigner une variable
- `++` pour incrémenter de 1 (raccourci de `+= 1`)
- `--` pour décrémenter de 1 (raccourci de `-= 1`)

## Opérateurs de comparaison

- `==` pour vérifier l'égalité de valeur
- `===` pour vérifier l'égalité de valeur **et** de type (recommandé)
- `!=` pour vérifier l'inégalité de valeur
- `!==` pour vérifier l'inégalité de valeur **et** de type (recommandé)
- `<`, `>` pour inférieur / supérieur
- `<=`, `>=` pour inférieur ou égal / supérieur ou égal

## Opérateurs logiques

- `!` pour inverser un Boolean
- `&&` pour vérifier que deux conditions sont vraies (ET)
- `||` pour vérifier qu'au moins une condition est vraie (OU)

## Le _short-circuiting_

Les opérateurs `&&` et `||` n'évaluent pas forcément les deux membres de l'expression : dès que le résultat final est connu, JavaScript s'arrête et renvoie la valeur correspondante (et non forcément `true` ou `false`).

```js
// || renvoie la première valeur "truthy" rencontrée,
// sinon la dernière valeur
console.log(false || "salut") // 'salut'
console.log("hello" || "salut") // 'hello' (jamais évalué "salut")
console.log(0 || "") // '' (les deux sont falsy)

// && renvoie la première valeur "falsy" rencontrée,
// sinon la dernière valeur
console.log(true && "salut") // 'salut'
console.log(false && "salut") // false (jamais évalué "salut")
console.log(0 && "salut") // 0
```

Ce comportement est très utilisé en pratique :

```js
// Définir une valeur par défaut
const pseudo = user.pseudo || "Anonyme"

// N'exécuter une fonction que si une condition est vraie
isConnected && afficherMenu()
```

## Opérateur _spread_

L'opérateur de décomposition (_spread operator_) permet de **copier**, **fusionner** ou **étendre** des tableaux et des objets en JavaScript. Il s’écrit avec trois points : `...`.

```js
const a = [1, 2, 3]
const copie = [0, ...a, 4] // [0, 1, 2, 3, 4]

const b = { x: 1, y: 2 }
const c = { y: 99, z: 3 }
const fusion = { ...b, ...c } // { x: 1, y: 99, z: 3 }
```

## Syntaxe _rest_

Cette syntaxe (_rest pattern_) utilise la même syntaxe que le _spread_ (`...`), mais fait l'inverse. Au lieu d'étendre un tableau ou un objet, il regroupe plusieurs valeurs dans un seul tableau ou objet.

```js
const [first, ...rest] = ["bread", "milk", "eggs", "butter"]
// first = 'bread'
// rest = ['milk', 'eggs', 'butter']

function showItems(...items) {
  console.log(items) // ['bread', 'milk', 'eggs']
}

showItems("bread", "milk", "eggs")
```

:::tip Astuce
Le _spread_ **éclate** une collection (à droite d'une assignation ou dans un appel de fonction), le _rest_ **rassemble** des valeurs (à gauche d'une assignation ou dans une déclaration de paramètres).
:::
