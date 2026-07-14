# Notes et durées

<ClientOnly>
  <MeiViewer :meiContent="notes_1" />
</ClientOnly>

```xml
<layer>
    <note pname="e" oct="4" dur="4"/>
</layer>
```

Une note est représentée par l'élément `<note>`, dont les attributs principaux décrivent la hauteur et la durée.

## Attributs de hauteur

| Attribut | Description | Valeurs possibles                                                     |
| -------- | ----------- | --------------------------------------------------------------------- |
| `pname`  | Nom         | `c` (do), `d` (ré), `e` (mi), `f` (fa), `g` (sol), `a` (la), `b` (si) |
| `oct`    | Octave      | `0` à `9` (avec `4` pour l'octave du do central)                      |
| `accid`  | Altération  | `s` (dièse), `f` (bémol), `n` (bécarre)                               |

## Attributs de durée

| Attribut  | Description                     | Valeurs possibles                                                                    |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| `dur`     | Durée de la note                | `breve`, `1` (ronde), `2` (blanche), `4` (noire), `8` (croche), `16` (double-croche) |
| `dots`    | Nombre de points d'augmentation | `0`, `1`, `2`, `3`                                                                   |
| `dur.ges` | Durée gestuelle (réelle)        | même syntaxe que `dur`                                                               |

<script setup>
import notes_1 from './scores/notes_1.mei?raw'
</script>
