# Syntaxe de template

## Interpolation de texte

La forme la plus élémentaire de liaison de données est l'interpolation de texte à l'aide de la syntaxe _Moustache_ (doubles accolades). Pour qu'une variable soit réactive, on l'enveloppe avec la fonction `ref` qui retourne un objet contenant une propriété `.value`, qui stocke la valeur réelle.

```vue
<template>
  <span>Message : {{ msg }}</span>
</template>

<script setup>
import { ref } from "vue"
const msg = ref("Bonjour !")
</script>
```

::: tip Astuce
Dans le `<script>`, un `ref` s'utilise toujours avec `.value` (`msg.value`).
Dans le `<template>`, Vue déballe automatiquement la valeur : pas besoin d'écrire `msg.value`, `msg` suffit.
:::

## HTML brut

La syntaxe _Moustache_ interprète les données comme du texte brut et non comme du HTML. Afin de produire du vrai HTML, on doit utiliser la directive `v-html` :

```vue
<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>
```

::: warning Avertissement
L'affichage dynamique de code HTML arbitraire peut être très dangereux, car il peut facilement entraîner des vulnérabilités XSS. N'utiliser `v-html` que sur le contenu de confiance et jamais sur le contenu fourni par l'utilisateur.
:::

## Liaisons d'attributs

La syntaxe _Moustache_ ne peut pas être utilisée dans les attributs HTML. À la place, il faut utiliser une directive `v-bind`. La directive `v-bind` demande à Vue de garder l'attribut _id_ de l'élément synchronisé avec la propriété _dynamicId_ du composant. Si la valeur liée est _null_ ou _undefined_, alors l'attribut sera supprimé de l'élément rendu.

```vue
<template>
  <div v-bind:id="dynamicId"></div>
</template>
```

### Syntaxe raccourcie

```vue
<template>
  <!-- Syntaxe raccourcie -->
  <div :id="dynamicId"></div>
</template>
```

### Raccourci de même nom

```vue
<template>
  <!-- Si l'attribut et la variable à lier on le même nom -->
  <div :id></div>
</template>
```

### Attributs booléens

L'attribut _disabled_ sera inclus si _isButtonDisabled_ a une valeur évaluée à _true_. Il sera également inclus si la valeur est une chaîne vide. Pour les valeurs évaluées à _false_, l'attribut sera omis.

```vue
<template>
  <button :disabled="isButtonDisabled">Button</button>
</template>
```
