# Basiques du langage

## Créer une nouvelle table

On peut créer une nouvelle table avec l'instruction `CREATE TABLE`, en spécifiant le nom de la table, suivi du nom de toutes les colonnes et de leur type :

```sql
CREATE TABLE weather (
    city varchar(80),
    temp_lo integer,
    temp_hi integer,
    prcp real,
    observed_on date
);
```

::: tip
En SQL, chaque instruction doit se terminer par un point-virgule `;` pour être exécutée.
:::

## Remplir une table avec des lignes

L'instruction `INSERT` est utilisée pour remplir une table avec des lignes. Les constantes qui ne sont pas des valeurs numériques simples doivent être habituellement entourées par des guillemets simples.

```sql
INSERT INTO weather VALUES ('Paris', 21, 32, 0.25, '2020-07-22');
```

Une syntaxe alternative permet de lister les colonnes dans un ordre différent si on le souhaite, et d'en omettre certaines :

```sql
INSERT INTO weather (date, city, temp_hi, temp_lo)
    VALUES ('2021-04-26', 'Lyon', 14, 8);
```

On peut aussi utiliser `COPY` pour charger de grandes quantités de données depuis un fichier texte, avec les valeurs séparées par des tabulations :

```sql
COPY weather FROM '/home/user/weather.txt';
```

```txt
Paris   21  32  0.25    2020-07-22
Lyon    8   14  \N      2021-04-26
```

## Supprimer une table

Pour supprimer une table on utilise l'instruction `DROP TABLE`.

```sql
DROP TABLE table_name;
```

## Les commentaires

Pour rédiger un commentaire on emploie `--` :

```sql
-- ceci est un commentaire
SELECT * FROM weather; -- commentaire en fin de ligne
```
