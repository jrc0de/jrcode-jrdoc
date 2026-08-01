# Paroles

## Structure de base

Pour associer des paroles à une mélodie, chaque `<note>` reçoit un élément `<verse>`
(le couplet, numéroté avec `@n`), qui contient lui-même un élément `<syl>` portant
le texte de la syllabe chantée sur cette note.

```xml
<note pname="c" oct="4" dur="4">
    <verse n="1"> <!-- [!code highlight] -->
        <syl>Do</syl> <!-- [!code highlight] -->
    </verse> <!-- [!code highlight] -->
</note>
<note pname="d" oct="4" dur="4">
    <verse n="1"> <!-- [!code highlight] -->
        <syl>Ré</syl> <!-- [!code highlight] -->
    </verse> <!-- [!code highlight] -->
</note>
<note pname="e" oct="4" dur="4">
    <verse n="1"> <!-- [!code highlight] -->
        <syl>Mi</syl> <!-- [!code highlight] -->
    </verse> <!-- [!code highlight] -->
</note>
```

<ClientOnly>
  <MeiViewer :meiContent="lyric1" />
</ClientOnly>

## Liaison des syllabes

Une syllabe peut être répartie sur plusieurs notes. Plutôt que d'insérer un tiret directement dans le texte, MEI
propose deux attributs dédiés sur `<syl>` :

- **`@wordpos`** : la position de la syllabe dans le mot (`i` initial, `m` médian,
  `t` terminal)

- **`@con`** : le type de connecteur à afficher entre les syllabes (`d` pour un tiret)

```xml
<note pname="a" oct="4" dur="4">
    <verse n="1">
        <syl wordpos="i" con="d">Chan</syl> <!-- [!code highlight] -->
    </verse>
</note>
<note pname="a" oct="4" dur="4">
    <verse n="1">
        <syl wordpos="t">tons</syl> <!-- [!code highlight] -->
    </verse>
</note>
```

<ClientOnly>
  <MeiViewer :meiContent="tiret" />
</ClientOnly>

## Élision

Une élision se produit lorsque deux syllabes de mots différents sont chantées sur une seule note. Elle est mise en oeuvre via l'attribut `@con` sur la première syllabe.

```xml
<note pname="g" oct="4" dur="4">
    <verse n="1">
        <syl con="b">A</syl> <!-- [!code highlight] -->
    </verse>
</note>
<note pname="a" oct="4" dur="4">
    <verse n="1">
        <syl>B</syl>
    </verse>
</note>
```

<ClientOnly>
  <MeiViewer :meiContent="elision" />
</ClientOnly>

## Mélisme

Un mélisme se produit lorsqu'une seule syllabe est chantée sur plusieurs notes. Contrairement à la liaison des
syllabes, aucune nouvelle syllabe n'apparaît sur les notes suivantes : elles prolongent
simplement le même `<syl>`. Ce regroupement se matérialise visuellement par une liaison de phrasé, l'élément
`<slur>`, ancré aux notes concernées via `@startid` et `@endid`.

```xml
<layer>
    <note xml:id="n1" pname="c" oct="4" dur="8">
        <verse n="1">
            <syl>A</syl> <!-- [!code highlight] -->
        </verse>
    </note>
    <note xml:id="n2" pname="d" oct="4" dur="8"/>
    <note xml:id="n3" pname="e" oct="4" dur="4"/>
</layer>
<slur startid="#n1" endid="#n3"/> <!-- [!code highlight] -->
```

<ClientOnly>
  <MeiViewer :meiContent="melisme" />
</ClientOnly>

<script setup>
import lyric1 from './scores/lyric1.mei?raw'
import tiret from './scores/tiret.mei?raw'
import melisme from './scores/melisme.mei?raw'
import elision from './scores/elision.mei?raw'
</script>
