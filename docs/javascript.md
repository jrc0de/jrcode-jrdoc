# JavaScript

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

## Types de variables

### Variables de type primitif

- **Number** — nombre entier ou décimal :

```js
let age = 22
const PI = 3.14159
```

- **String** — chaîne de caractères :

```js
let firstname = "John"
let lastname = "O'Conor"
let fullname = `${firstname} ${lastname}`
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

## Les opérateurs

### Opérateurs mathématiques

- `+` pour additionner des nombres ou concaténer des chaînes de caractères
- `-` pour soustraire une valeur
- `/` pour diviser une valeur
- `*` pour multiplier une valeur
- `**` pour élever un nombre à une puissance
- `%` pour obtenir le reste d'une division (modulo)

### Opérateurs d'assignement

- `=` pour assigner une valeur à une variable
- `+=`, `-=`, `*=`, `/=` pour modifier et réassigner une variable
- `++` pour incrémenter de 1 (raccourci de `+= 1`)
- `--` pour décrémenter de 1 (raccourci de `-= 1`)

### Opérateurs de comparaison

- `==` pour vérifier l'égalité de valeur
- `===` pour vérifier l'égalité de valeur **et** de type (recommandé)
- `!=` pour vérifier l'inégalité de valeur
- `!==` pour vérifier l'inégalité de valeur **et** de type (recommandé)
- `<`, `>` pour inférieur / supérieur
- `<=`, `>=` pour inférieur ou égal / supérieur ou égal

### Opérateurs logiques

- `!` pour inverser un Boolean
- `&&` pour vérifier que deux conditions sont vraies (ET)
- `||` pour vérifier qu'au moins une condition est vraie (OU)

## Structures de contrôle

### Bloc conditionnel if...else

```js
if (/* condition 1 (Boolean) */) {
    // code à exécuter si condition 1 vraie
} else if (/* condition 2 (Boolean) */) {
    // code à exécuter si condition 2 vraie
} else {
    // code à exécuter dans tous les autres cas
}

// Si le code à exécuter tient sur une ligne on peut omettre les accolades
if (/* Boolean */) console.log(text)
```

### Bloc conditionnel switch

```js
switch (/* valeur à tester */) {
    case /* valeur 1 */:
        // code à exécuter si valeur === valeur 1
        break
    case /* valeur 2 */:
        // code à exécuter si valeur === valeur 2
        break
    default:
        // code à exécuter dans tous les autres cas
}
```

### Opérateur ternaire

```js
/* condition (Boolean) */ ? /* valeur si vrai */ : /* valeur si faux */
```
