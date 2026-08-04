# Markdown

## Syntaxe de base

### Paragraphes

Séparer deux paragraphes par une **ligne vide**.

```markdown
Mon premier paragraphe.

Mon second paragraphe, séparé par une ligne vide.
```

### Titres

```markdown
# Titre niveau 1

## Titre niveau 2

### Titre niveau 3

#### Titre niveau 4

##### Titre niveau 5

###### Titre niveau 6
```

### Emphase

```markdown
*italique* ou _italique_
**gras**
**_gras et italique_**
```

### Listes non-ordonnées :

```markdown
- Item 1
- Item 2
  - Sous-élément
```

### Listes ordonnées :

```markdown
1. Premier point
2. Deuxième point
```

### Citations

```markdown
> Ceci est une citation
> qui peut s'étendre sur plusieurs lignes.
```

### Séparateur horizontal

```markdown
---
```

### Code inline :

```markdown
`maVariable`
```

### Bloc de code avec coloration syntaxique :

````markdown
```javascript
const hello = "Hello World"
console.log(hello)
```
````

### Liens simples :

```markdown
[Texte du lien](https://example.com)
```

### Lien par référence (style notes de bas de page) :

```markdown
Visiter mon [site][1]

[1]: https://monsite.fr
```

### Images

```markdown
![Texte alternatif](chemin/vers/image.png)
```

## Syntaxe avancée

::: tip GitHub Flavored Markdown (GFM)
Ces fonctionnalités ne sont pas disponibles dans tous les parseurs.
Utiliser un outil supportant GFM (GitHub, Marked, Markdown-it...).
:::

### Liens automatiques

Coller une URL directement dans le texte la rend cliquable automatiquement.

```markdown
https://example.com
```

### Texte barré

```markdown
~~texte barré~~
```

### Tableaux

```markdown
| Colonne 1 | Colonne 2 |
| --------- | --------- |
| Valeur 1  | Valeur 2  |
```
