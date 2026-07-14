# Portées et clés

## Structure de base

<ClientOnly>
  <MeiViewer :meiContent="staves_1" />
</ClientOnly>

```xml
<scoreDef>
    <staffGrp>
        <staffDef n="1" lines="5" clef.shape="G" clef.line="2" />
        <staffDef n="2" lines="5" clef.shape="F" clef.line="4" />
    </staffGrp>
</scoreDef>
```

La définition des portées se fait dans `<scoreDef>`, via les éléments :

- `<staffGrp>` qui regroupe les portées d'une partition (par exemple les deux portées d'un piano, ou l'ensemble des pupitres d'un orchestre).

- `<staffDef>` qui définit une portée individuelle : son numéro, son nombre de lignes et sa clé. C'est l'attribut `@n` qui permet de faire le lien entre une portée et le contenu musical qui lui correspond (via l'attribut `@staff` sur les éléments comme `<layer>` ou `<note>` comme nous verrons par la suite).

## Afficher les voix

<ClientOnly>
  <MeiViewer :meiContent="staves_2" />
</ClientOnly>

```xml
<scoreDef>
    <staffGrp symbol="bracket" bar.thru="true">
        <staffDef n="1" lines="5" clef.shape="G" clef.line="2">
            <label>Soprano</label>
            <labelAbbr>S.</labelAbbr>
        </staffDef>
        <staffDef n="2" lines="5" clef.shape="G" clef.line="2">
            <label>Ténor</label>
            <labelAbbr>T.</labelAbbr>
        </staffDef>
        <staffDef n="3" lines="5" clef.shape="F" clef.line="4">
            <label>Basse</label>
            <labelAbbr>B.</labelAbbr>
        </staffDef>
    </staffGrp>
</scoreDef>
```

Le nom d'une portée passe par le sous-élément `<label>`, à ne pas confondre avec un attribut. Il s'affiche à gauche de la portée, sur le premier système de la partition. Pour les systèmes suivants, on peut fournir une version abrégée avec `<labelAbbr>` : Verovio affiche alors `<label>` sur le premier système et `<labelAbbr>` sur les suivants — pratique pour une partition à plusieurs pages où répéter le nom complet à chaque ligne prendrait trop de place.

## Attributs de `<staffGrp>`

| Attribut   | Description                                                                             | Valeurs possibles                                                                                           |
| ---------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `symbol`   | Symbole visuel reliant les portées du groupe                                            | `brace` (accolade), `bracket` (crochet arrondi), `bracketsq` (crochet droit), `line` (simple trait), `none` |
| `bar.thru` | Indique si les barres de mesure traversent tout le groupe ou s'arrêtent à chaque portée | `true` (barres continues), `false` (barres indépendantes par portée)                                        |

Pour un chœur, on utilise généralement `symbol="bracket"` et `bar.thru="true"`, comme dans l'exemple ci-dessus.

## Attributs de `<staffDef>`

| Attribut     | Description                        | Valeurs possibles                                         |
| ------------ | ---------------------------------- | --------------------------------------------------------- |
| `n`          | Numéro de la portée                | entier (`1`, `2`...), utilisé pour référencer la portée   |
| `lines`      | Nombre de lignes de la portée      | `5` par défaut, `1` pour une portée rythmique par exemple |
| `clef.shape` | Forme de la clé                    | `G` (clé de sol), `F` (clé de fa), `C` (clé d'ut)         |
| `clef.line`  | Ligne sur laquelle se place la clé | `1` à `5`, selon la position de référence de la clé       |

<script setup>
import staves_1 from './scores/staves_1.mei?raw'
import staves_2 from './scores/staves_2.mei?raw'
</script>
