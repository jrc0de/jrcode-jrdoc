# Les variables

## Déclaration de variables

Les variables pointent vers une valeur. Pour assigner une valeur à une variable on utilise le mot clé **let** ou **const** et la syntaxe _camel case_ pour le nom de la variable. Leur portée est limitée au bloc de code dans lequel elles sont déclarées.

Avec **let**, la variable peut être réassignée :

```js
let cityName = "Paris"
cityName = "Lyon"
```

Avec **const**, la variable ne peut pas être réassignée :

```js
const year = 1990
year = 2000 // ERROR !
```

Par convention, les constantes pour les valeurs fixes connues à l'avance s'écrivent en majuscules :

```js
const PI = 3.14159
const MAX_SIZE = 100
```

## Variables de type primitif

Les types primitifs sont **immuables** : on ne peut pas modifier la valeur elle-même, seulement réassigner la variable vers une nouvelle valeur.

### Number

Nombre entier ou décimal.

```js
let age = 22
const PI = 3.14159
```

### String

Pour les chaînes de caractères.

```js
let firstname = "John"
let lastname = "O'Conor"
let fullname = `${firstname} ${lastname}`
```

### Boolean

Ils ne peuvent prendre que deux valeurs : `true` ou `false`

```js
let test = false
```

### Undefined

Variable déclarée mais sans valeur assignée :

```js
let x // undefined
let y = undefined
```

### Null

Absence intentionnelle de valeur :

```js
let z = null
```

### Symbol

Valeur unique et immuable :

```js
const id = Symbol("id")
```

### BigInt

Entier de très grande taille dépassant la limite de Number.

```js
const big = 9007199254740991n
```

## Variables de type non-primitif

Les types non-primitifs sont **mutables** : on peut modifier leur contenu sans réassigner la variable.

### Object

Collection de paires clé/valeur. Les tableaux, fonctions, et dates sont aussi des objets en JavaScript.

```js
const user = { name: "John", age: 30 }
user.name // "John"
user["age"] // 30
```

### Array

Les tableaux sont des listes ordonnées de valeurs accessibles par index (commence à 0).
En JavaScript, un tableau est un **objet** spécial.

```js
const items = ["a", "b", "c"]

items[0] // "a"
items[2] = "d" // ["a", "b", "d"]
items.length // 3
```
