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

## Opérateur de décomposition

L'opérateur de décomposition (_spread operator_) permet de **copier**, **fusionner** ou **étendre** des tableaux et des objets en JavaScript. Il s’écrit avec trois points : `...`

```js
const a = [1, 2, 3]
const copie = [0, ...a, 4] // [0, 1, 2, 3, 4]

const b = { x: 1, y: 2 }
const c = { y: 99, z: 3 }
const fusion = { ...b, ...c } // { x: 1, y: 99, z: 3 }
```
