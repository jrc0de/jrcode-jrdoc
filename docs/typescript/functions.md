# Fonctions

## Assignation de type

On peut typer les paramètres d'une fonction avec la même syntaxe que pour les variables simples.

```ts
function add(a: number, b = 5) {
  return a + b
}
```

## Type _union_

```ts
function afficherId(id: string | number) {
  console.log("Votre ID est : " + id)
}

afficherId(101) // OK
afficherId("101") // OK
afficherId(true) // Error [!code error]
```
