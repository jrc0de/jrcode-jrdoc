# Syntaxe de template

## Interpolation de texte

La forme la plus élémentaire de liaison de données est l'interpolation de texte à l'aide de la syntaxe _Moustache_ (doubles accolades) :

```vue
<template>
  <span>Message : {{ msg }}</span>
</template>

<script setup>
import { ref } from "vue"
const msg = ref("Bonjour !")
</script>
```

Pour qu'une variable soit réactive, on l'enveloppe avec la fonction `ref` qui retourne un objet contenant une propriété `.value`, qui stocke la valeur réelle.

::: tip
Dans le `<script>`, un `ref` s'utilise toujours avec `.value` (`msg.value`).
Dans le `<template>`, Vue déballe automatiquement la valeur : pas besoin d'écrire `msg.value`, `msg` suffit.
:::
