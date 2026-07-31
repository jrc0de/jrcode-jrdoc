# Structure de base d'un projet

## Fichier `index.html`

À la racine du projet se trouve le fichier `index.html` qui sert de point d'entrée de l'application. Il contient la structure minimale d'une page HTML et une `<div>` vide (conventionnellement nommée `app`) sur laquelle va se greffer toute notre application. La balise `<script>` pointe quant à elle vers `main.js`, dont nous allons voir le rôle.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My project</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

## Fichier `main.js`

Le fichier `main.js`, situé dans le dossier `src`, est le point d'entrée côté JavaScript. C'est lui qui crée l'instance de l'application Vue, y enregistre les plugins nécessaires, et la connecte à la `<div id="app">` définie dans `index.html`.

```js
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router)

app.mount("#app")
```

La fonction `createApp` prend en argument le composant racine de l'application (ici `App`, importé depuis `App.vue`). L'instance ainsi créée est d'abord stockée dans la variable `app`, ce qui permet d'y enregistrer des plugins avant le montage. C'est le cas ici avec `app.use(router)`, qui enregistre _Vue Router_, la librairie officielle de gestion des routes de Vue que nous détaillerons dans une section dédiée.
