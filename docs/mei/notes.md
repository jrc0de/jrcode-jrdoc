# Notes et durées

<ClientOnly>
  <MeiViewer :meiContent="notes_1" />
</ClientOnly>

```xml
<layer>
    <note pname="c" oct="4" dur="4"/>
    <note pname="f" oct="4" accid="s" dur="4"/>
    <note pname="b" oct="4" dur="2"/>
</layer>
```

Une note est représentée par l'élément `<note>`, dont les attributs principaux décrivent la hauteur et la durée.

## Attributs de hauteur

| Attribut | Description | Valeurs possibles                                                     |
| -------- | ----------- | --------------------------------------------------------------------- |
| `@pname` | Nom         | `c` (do), `d` (ré), `e` (mi), `f` (fa), `g` (sol), `a` (la), `b` (si) |
| `@oct`   | Octave      | `0` à `9` (avec `4` pour l'octave du do central)                      |
| `@accid` | Altération  | `s` (dièse), `f` (bémol), `n` (bécarre)                               |

## Attributs de durée

| Attribut   | Description                     | Valeurs possibles                                                                    |
| ---------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| `@dur`     | Durée de la note                | `breve`, `1` (ronde), `2` (blanche), `4` (noire), `8` (croche), `16` (double-croche) |
| `@dots`    | Nombre de points d'augmentation | `0`, `1`, `2`, `3`                                                                   |
| `@dur.ges` | Durée gestuelle (réelle)        | même syntaxe que `@dur`                                                              |

## Attributs de hampe

| Attribut        | Description                  | Valeurs possibles                         |
| --------------- | ---------------------------- | ----------------------------------------- |
| `@stem.dir`     | Direction de la hampe forcée | `up` (vers le haut), `down` (vers le bas) |
| `@stem.visible` | Affichage de la hampe        | `true`, `false`                           |

## Groupement de croches

<ClientOnly>
  <MeiViewer :meiContent="notes_2" />
</ClientOnly>

```xml
<layer>
    <beam>
        <note pname="e" oct="4" dur="8"/>
        <note pname="f" oct="4" dur="8"/>
    </beam>
</layer>
```

L'élément `<beam>` regroupe visuellement plusieurs notes de courte durée (croches et plus rapides) en les reliant par une ou plusieurs barres horizontales, à la place des crochets individuels. Il suffit d'envelopper les `<note>` concernées dans un `<beam>`.

## Silences

<ClientOnly>
  <MeiViewer :meiContent="notes_4" />
</ClientOnly>

```xml
<layer>
    <note pname="c" oct="4" dur="4"/>
    <rest dur="4"/>
    <note pname="e" oct="4" dur="2"/>
</layer>
```

Un silence est représenté par l'élément `<rest>`, qui utilise les mêmes attributs de durée que `<note>` (`@dur`, `@dots`, `@dur.ges`), mais sans hauteur puisqu'il ne produit aucun son.

## Espacement invisible

<ClientOnly>
  <MeiViewer :meiContent="notes_3" />
</ClientOnly>

```xml
<layer>
    <note pname="c" oct="4" dur="4"/>
    <space dur="4"/>
    <note pname="e" oct="4" dur="4"/>
</layer>
```

L'élément `<space>` réserve la durée indiquée sans afficher aucun symbole (ni note, ni silence visible). Il utilise la même syntaxe de durée que `<note>` (`@dur`, `@dots`...). On l'emploie typiquement pour aligner des voix entre elles sans ajouter un silence visuellement superflu.

<script setup>
import notes_1 from './scores/notes_1.mei?raw'
import notes_2 from './scores/notes_2.mei?raw'
import notes_3 from './scores/notes_3.mei?raw'
import notes_4 from './scores/notes_4.mei?raw'
</script>
