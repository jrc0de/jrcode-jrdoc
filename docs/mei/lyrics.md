# Paroles

## Liaison des syllabes

Une syllabe peut être répartie sur plusieurs notes. Plutôt que d'insérer un tiret directement dans le texte, MEI
propose deux attributs dédiés sur `<syl>` :

- **`@wordpos`** : la position de la syllabe dans le mot (`i` initial, `m` médian,
  `t` terminal)
- **`@con`** : le type de connecteur à afficher entre les syllabes (`d` pour un tiret)

```xml
<note pname="a" oct="4" dur="4">
    <verse n="1">
        <syl wordpos="i" con="d">Chan</syl>
    </verse>
</note>
<note pname="a" oct="4" dur="4">
    <verse n="1">
        <syl wordpos="t">tons</syl>
    </verse>
</note>
```

<ClientOnly>
  <MeiViewer :meiContent="tiret" />
</ClientOnly>

## Directives

Certaines indications textuelles, comme les rubriques identifiant qui chante
(« Verset », « Refrain »...), ne font pas partie du texte chanté. Plutôt que de
les mêler aux paroles, MEI propose l'élément `<dir>` (directive), une indication textuelle indépendante placée
au-dessus ou en dessous de la portée.

`<dir>` s'ancre à une note précise via `@startid`, et se positionne avec
`@place` :

```xml
<measure>
    <staff n="1">
        <layer>
            <note xml:id="n1" pname="a" oct="4" dur="4">
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
    <dir place="above" startid="#n1">Verset :</dir>
</measure>
```

<ClientOnly>
  <MeiViewer :meiContent="directive" />
</ClientOnly>

<script setup>
import tiret from './scores/tiret.mei?raw'
import directive from './scores/directive.mei?raw'
</script>
