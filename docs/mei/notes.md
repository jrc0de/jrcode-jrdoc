# Notes et durées

## Structure de base

Une note est représentée par l'élément `<note>`, dont les attributs principaux décrivent la hauteur et la durée.

```xml
<layer>
    <note pname="c" oct="4" dur="4"/> <!-- [!code highlight] -->
    <note pname="f" oct="4" accid="s" dur="4"/> <!-- [!code highlight] -->
    <note pname="b" oct="4" dur="2"/> <!-- [!code highlight] -->
</layer>
```

<ClientOnly>
  <MeiViewer :meiContent="notes_1" />
</ClientOnly>

# Attributs de note

| Attribut        | Description                     | Valeurs possibles                                                                    |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| `@accid`        | Altération                      | `s` (dièse), `f` (bémol), `n` (bécarre)                                              |
| `@artic`        | Articulation                    | `acc` (accent), `stacc` (staccato), `ten` (tenuto), `marc` (marcato)                 |
| `@cue`          | Note de petite taille           | `true`, `false`                                                                      |
| `@dots`         | Nombre de points d'augmentation | `0`, `1`, `2`, `3`                                                                   |
| `@dur`          | Durée de la note                | `breve`, `1` (ronde), `2` (blanche), `4` (noire), `8` (croche), `16` (double-croche) |
| `@dur.ges`      | Durée gestuelle (réelle)        | Même syntaxe que `@dur`                                                              |
| `@head.visible` | Affichage de la tête de note    | `true`, `false`                                                                      |
| `@n`            | Numéro de note                  | Texte libre (type `1`, `2`, `3`)                                                     |
| `@oct`          | Octave                          | `0` à `9` (`4` pour l'octave contenant le do central)                                |
| `@pname`        | Nom de la note                  | `c` (do), `d` (ré), `e` (mi), `f` (fa), `g` (sol), `a` (la), `b` (si)                |
| `@stem.dir`     | Direction forcée de la hampe    | `up` (vers le haut), `down` (vers le bas)                                            |
| `@stem.visible` | Affichage de la hampe           | `true`, `false`                                                                      |
| `@visible`      | Visibilité globale de la note   | `true`, `false`                                                                      |
| `@xml:id`       | Identifiant unique de l'élément | Texte libre (type `n1`, `n2`, `n3`)                                                  |

## Groupement de croches

L'élément `<beam>` regroupe visuellement plusieurs notes de courte durée (croches et plus rapides) en les reliant par une ou plusieurs barres horizontales, à la place des crochets individuels. Il suffit d'envelopper les `<note>` concernées dans un `<beam>`.

```xml
<layer>
    <beam> <!-- [!code highlight] -->
        <note pname="e" oct="4" dur="8"/>
        <note pname="f" oct="4" dur="8"/>
    </beam> <!-- [!code highlight] -->
</layer>
```

<ClientOnly>
  <MeiViewer :meiContent="notes_2" />
</ClientOnly>

## Silences

Un silence est représenté par l'élément `<rest>`, qui utilise les mêmes attributs de durée que `<note>` (`@dur`), mais sans hauteur puisqu'il ne produit aucun son.

```xml
<layer>
    <note pname="c" oct="4" dur="4"/>
    <rest dur="4"/> <!-- [!code highlight] -->
    <note pname="e" oct="4" dur="2"/>
</layer>
```

<ClientOnly>
  <MeiViewer :meiContent="notes_4" />
</ClientOnly>

## Espacements

L'élément `<space>` réserve la durée indiquée sans afficher aucun symbole (ni note, ni silence visible). Il utilise la même syntaxe de durée que `<note>` (`@dur`).

```xml
<layer>
    <note pname="c" oct="4" dur="4"/>
    <space dur="4"/> <!-- [!code highlight] -->
    <note pname="e" oct="4" dur="4"/>
</layer>
```

<ClientOnly>
  <MeiViewer :meiContent="notes_3" />
</ClientOnly>

## Directives

Certaines indications textuelles, comme les rubriques identifiant qui chante
(« Verset », « Refrain »...), ne font pas partie du texte chanté. Plutôt que de
les mêler aux paroles, MEI propose l'élément `<dir>` (directive), une indication textuelle indépendante placée
au-dessus ou en dessous de la portée. Cette directive s'ancre à une note précise via `@startid`, et se positionne avec
`@place`

```xml
<measure>
    <staff n="1">
        <layer>
            <note xml:id="n1" pname="a" oct="4" dur="4"> <!-- [!code highlight] -->
                <verse n="1">
                    <syl wordpos="i" con="d">Chan</syl>
                </verse>
            </note>
            <note pname="a" oct="4" dur="4">
                <verse n="1">
                    <syl wordpos="t">tons</syl>
                </verse>
            </note>
        </layer>
    </staff>
    <dir place="above" startid="#n1">Verset :</dir> <!-- [!code highlight] -->
</measure>
```

<ClientOnly>
  <MeiViewer :meiContent="directive" />
</ClientOnly>

## Articulation comme élément

En plus de l'attribut `@artic` porté directement par `<note>`, l'articulation peut s'exprimer sous la forme d'un élément enfant `<artic>`. Cette forme est notamment utile pour contrôler la position de l'articulation via l'attribut `@place` (`above`, `below`).

```xml
<layer>
    <note pname="f" oct="4" dur="4">
        <artic artic="acc" place="above"/> <!-- [!code highlight] -->
    </note>
</layer>
```

<script setup>
import notes_1 from './scores/notes_1.mei?raw'
import notes_2 from './scores/notes_2.mei?raw'
import notes_3 from './scores/notes_3.mei?raw'
import notes_4 from './scores/notes_4.mei?raw'
import directive from './scores/directive.mei?raw'
</script>
