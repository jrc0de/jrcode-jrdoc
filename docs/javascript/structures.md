# Structures de contrôle

## Bloc conditionnel if...else

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

## Bloc conditionnel switch

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

## Opérateur ternaire

```js
/* condition (Boolean) */ ? /* valeur si vrai */ : /* valeur si faux */
```

## Boucle for

La boucle `for` répète un bloc de code un nombre défini de fois. Elle se compose de trois parties : l'**initialisation** (exécutée une seule fois au départ), la **condition** (vérifiée avant chaque itération), et l'**incrément** (exécuté après chaque itération) :

```js
for (let i = 0; i < 10; i++) {
  // code à répéter
}
```
 
`continue` interrompt l'itération en cours et passe directement à la suivante. `break` sort complètement de la boucle :
 
```js
for (let i = 0; i < 10; i++) {
  if (i === 3) continue // saute le i === 3, passe à i === 4
  if (i === 7) break    // arrête la boucle, i === 8, 9 ne sont jamais atteints
  console.log(i) // 0, 1, 2, 4, 5, 6
}
```