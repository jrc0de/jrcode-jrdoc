# Portées et clés

La définition des portées se fait dans `<scoreDef>`, via l'élément `<staffGrp>` qui regroupe une ou plusieurs `<staffDef>`.

```xml
<scoreDef>
    <staffGrp>
        <staffDef n="1" lines="5" clef.shape="G" clef.line="2" />
        <staffDef n="2" lines="5" clef.shape="F" clef.line="4" />
    </staffGrp>
</scoreDef>
```

<ClientOnly>
  <MeiViewer :meiContent="clefs" />
</ClientOnly>

`<staffGrp>` regroupe les portées d'une partition (par exemple les deux portées d'un piano, ou l'ensemble des pupitres d'un orchestre).

`<staffDef>` définit une portée individuelle : son numéro, son nombre de lignes et sa clé. C'est l'attribut `@n` qui permet de faire le lien entre une portée et le contenu musical qui lui correspond (via l'attribut `@staff` sur les éléments comme `<layer>` ou `<note>`).

## Attributs de `<staffDef>`

| Attribut     | Description                        | Valeurs possibles                                         |
| ------------ | ---------------------------------- | --------------------------------------------------------- |
| `n`          | Numéro de la portée                | entier (`1`, `2`...), utilisé pour référencer la portée   |
| `lines`      | Nombre de lignes de la portée      | `5` par défaut, `1` pour une portée rythmique par exemple |
| `clef.shape` | Forme de la clé                    | `G` (clé de sol), `F` (clé de fa), `C` (clé d'ut)         |
| `clef.line`  | Ligne sur laquelle se place la clé | `1` à `5`, selon la position de référence de la clé       |

<script setup>
import clefs from './scores/clefs.mei?raw'
</script>
