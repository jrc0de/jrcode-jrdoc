# Mesures et barres de mesure

## Structure de base

<ClientOnly>
  <MeiViewer :meiContent="measures_1" />
</ClientOnly>

```xml
<section>
    <measure n="1">
        ...
    </measure>
    <measure n="2" right="dbl">
        ...
    </measure>
    <measure n="3" right="end">
        ...
    </measure>
</section>
```

Chaque mesure est enfant de `<section>` et est représentée par l'élément `<measure>`. Ses attributs `@right` et `@left` définissent le type de barre affichée respectivement après et avant la mesure. L'attribut `@n` est optionnel, mais recommandé.

## Attributs de mesure

| Attribut | Description                   | Valeurs possibles                                                                                                                                       |
| -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@n`     | Numéro de la mesure           | entier (`1`, `2`...)                                                                                                                                    |
| `@right` | Type de barre après la mesure | `dbl` (double), `end` (finale), `rptstart` (début de reprise), `rptend` (fin de reprise), `dashed` (tirets), `dotted` (pointillés), `invis` (invisible) |
| `@left`  | Type de barre avant la mesure | même valeurs que `@right`                                                                                                                               |

<script setup>
import measures_1 from './scores/measures_1.mei?raw'
</script>
