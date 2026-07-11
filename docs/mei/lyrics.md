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
        <syl wordpos="i" con="d">chan</syl>
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

<script setup>
import tiret from './scores/tiret.mei?raw'
</script>
