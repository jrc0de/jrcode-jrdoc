# JavaScript

## Déclaration de variables

Les variables pointent vers une valeur. Pour assigner une valeur à une variable on utilise le mot clé **let** et la syntaxe _camel case_ pour le nom de la variable :

```js
let variable = "Bonjour"
let otherVariable = 3
```

Les constantes peuvent être écrites en majuscules :

```js
const PI = 3.14159
```

## Types de variables

### Variables de type primitif

- **Number** — nombre entier ou décimal :

```js
let age = 22
const PI = 3.14159
```

- **String** — chaîne de caractères (texte) :

```js
let name = "John"
let person = "James"
```

- **Boolean** — valeur vraie ou fausse :

```js
let check = true
let test = false
```

- **Undefined** — variable déclarée mais sans valeur assignée :

```js
let x // undefined
let y = undefined
```

- **Null** — absence intentionnelle de valeur :

```js
let z = null
```

- **Symbol** — valeur unique et immuable :

```js
const id = Symbol("id")
```

- **BigInt** — entier de très grande taille dépassant la limite de Number :

```js
const big = 9007199254740991n
```

### Variables de type objet

## Commentaires

Il est possible d'utiliser des commentaires au sein d'un fichier de code JavaScript :

```js
// Ceci est un commentaire sur une seule ligne

/* Ceci est
un commentaire
multiligne */
```
