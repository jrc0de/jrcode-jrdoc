# Structure d'un projet

## Schéma de la structure

Voici le schéma de la structure typique d'un projet Vue :

```
my-project/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   │   └── index.js
│   ├── views/
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Fichier `index.html`

C'est le point d'entrée de l'application. Il contient la structure minimale d'une page HTML et une `<div>` vide (conventionnellement nommée `app`) sur laquelle va se greffer toute notre application. La balise `<script>` pointe quant à elle vers `main.js`, dont nous allons voir le rôle.

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

C'est le point d'entrée côté JavaScript. C'est lui qui crée l'instance de l'application Vue, y enregistre les plugins nécessaires, et la connecte à la `<div id="app">` définie dans `index.html`.

```js
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router)

app.mount("#app")
```

- `createApp` est une fonction qui prend en argument le composant racine de l'application. L'instance ainsi créée est d'abord stockée dans la variable `app`, ce qui permet d'y enregistrer des plugins avant le montage.
- `app.use(router)` enregistre _Vue Router_, la librairie officielle de gestion des routes de Vue que nous détaillerons dans une section dédiée.

## Fichier `App.vue`

C'est le composant racine de l'application. Il s'agit du squelette commun à toutes les pages dans lequel _Vue Router_ va afficher le composant correspondant à l'URL courante.

```vue
<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/about">À propos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
```

- `<RouterView />` est un emplacement réservé fourni par _Vue Router_ qui affiche automatiquement le composant associé à la route active.
- `<RouterLink>` remplace quant à lui les liens `<a>` classiques pour naviguer entre les routes sans recharger la page. Le reste du template (ici le `<header>`) reste affiché en permanence, quelle que soit la route active.
