# MEI

::: tip Format MEI
MEI signifie _Music Encoding Initiative_. C'est un format XML ouvert et
standardisé pour l'encodage structuré de partitions musicales (hauteurs, durées,
articulations, paroles, structure de la partition...).
:::

::: tip Verovio
Verovio est la solution utilisée pour afficher le MEI
à l'écran : un moteur de gravure musicale qui convertit directement le XML en
représentation graphique.
:::

## Structure de base

```xml
<mei xmlns="http://www.music-encoding.org/ns/mei">
    <meiHead></meiHead>
    <music></music>
</mei>
```

L'élément racine `<mei>` porte l'attribut `@xmlns`, qui déclare l'espace de noms du document et indique aux outils (comme Verovio) que ce document suit le vocabulaire MEI.

L'en-tête `<meiHead>` contient les métadonnées du document (titre, auteur, source...).

L'élément `<music>` contient le contenu musical proprement dit.

## En-tête

```xml
<meiHead>
    <fileDesc>
        <titleStmt>
            <title></title>
        </titleStmt>
        <pubStmt></pubStmt>
    </fileDesc>
</meiHead>
```

La description du fichier `<fileDesc>` permet une description bibliographique complète d'un fichier MEI.

L'élément `<titleStmt>` porte le titre de l'œuvre et les métadonnées de responsabilité. Le titre est donné via le sous-élément obligatoire `<title>` qui peut rester vide.

L'élément `<pubStmt>` porte les informations de publication comme le nom et l'adresse de l'éditeur, la date de publication et d'autres détails pertinents.

## Musique

```xml
<music>
    <body>
        <mdiv>
            <score>
                <scoreDef></scoreDef>
                <section></section>
            </score>
        </mdiv>
    </body>
</music>
```

À l'intérieur de `<music>`, la partition s'imbrique dans `<body>`, puis `<mdiv>` (une division de la partition, utile si le document en contient plusieurs), puis `<score>`.

`<scoreDef>` porte la définition globale des portées (clé, nombre de lignes...).

`<section>` contient le contenu musical, découpé en mesures.
