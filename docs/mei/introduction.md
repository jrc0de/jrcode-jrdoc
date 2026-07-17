# MEI

::: tip Format MEI
MEI signifie _Music Encoding Initiative_. C'est un format XML ouvert et
standardisé pour l'encodage structuré de partitions musicales (hauteurs, durées,
articulations, paroles...).
:::

## Structure de base

```xml
<mei xmlns="http://www.music-encoding.org/ns/mei">
    <meiHead></meiHead>
    <music></music>
</mei>
```

L'élément racine `<mei>` porte l'attribut `@xmlns`, qui déclare l'espace de noms du document et indique aux outils (comme Verovio) que ce document suit le vocabulaire MEI.

Le bloc d'en-tête `<meiHead>` contient les métadonnées du document (titre, auteur, source...).

Le bloc musique `<music>` contient le contenu musical proprement dit.

## Bloc d'en-tête

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

L'élément de description du fichier `<fileDesc>` est le seul élément obligatoire du bloc d'en-tête. Il permet une description bibliographique complète d'un fichier MEI et doit contenir à minima :

- `<titleStmt>` pour le titre de l'œuvre (via `<title>` qui peut rester vide mais est obligatoire également) et les métadonnées de responsabilité.
- `<pubStmt>` pour les informations de publication comme le nom et l'adresse de l'éditeur, la date de publication et d'autres détails pertinents. Sa présence est obligatoire mais il peut rester vide.

## Bloc musique

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

L'élément `<body>` est unique et obligatoire. Il sert de conteneur racine pour l'ensemble du contenu musical.

L'élément `<mdiv>` représente une division de la partition (mouvement, acte, scène...). Il est obligatoire et peut être répété ou imbriqué pour représenter les subdivisions de l'œuvre.

L'élément `<score>` contient la partition complète. Il est obligatoire et se compose de deux parties :

- `<scoreDef>` pour la définition globale des portées et des clés. Sa présence est obligatoire.
- `<section>` pour le contenu musical constitué des différentes mesures et leurs notes. Sa présence est obligatoire.
