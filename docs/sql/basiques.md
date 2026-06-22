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

## Les commentaires

Pour rédiger un commentaire on emploie `--` :

```sql
-- ceci est un commentaire
SELECT * FROM weather; -- commentaire en fin de ligne
```
