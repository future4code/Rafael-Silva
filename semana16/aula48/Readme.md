## Exercício 1:

-   a)

    -   Chave estrangeira se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados

-   b)

    ```
    INSERT INTO rating (id, comment, rate, movie_id)
    VALUES ("01", "Interessante", 7.5, "004");
    ```

-   c)

    -   `SQL Error [1452] [23000]: Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147692-rafael-silva`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))` -> significa que não foi encontrado o id do filme na tabela referenciada, retornando esse erro.

-   d)

    ```
    ALTER TABLE movies
    DROP COLUMN feedback;
    ```

-   e)

    - `SQL Error [1451] [23000]: Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147692-rafael-silva`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))` -> significa que não foi possível deletar esse dado pois ele esta relacionado com outra tabela,
    é necessario deletar o dado referente na outra tabela, e depois deletar esse dado.

---

## Exercício 2:

* a)

    - Uma tabela simples que possui uma coluna movie_id que esta relacionado ao id da tabela movies, e uma coluna actor_id que esta relacionado ao id da tabela actor.

* b)

    ```
    INSERT INTO movieCast(movie_id, actor_id)
    VALUES(
        "003",
        "002"
    );
    ```

* c)

    - `SQL Error [1452] [23000]: Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147692-rafael-silva`.`movieCast`, CONSTRAINT `movieCast_FK` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`))` -> significa que foi possível encontrar o id do ator passado.

* d)

    - `DELETE FROM movieCast WHERE actor_id = "001";` -> no meu caso foi possível deletar, não retornou erro.

---

## Exercício 3:

* a)

    - ON é a condicional que retorna o dado que esta relacionado com as duas tabelas.

* b)

    ```
    SELECT movies.id, movies.title, rating.rate   FROM movies 
    INNER JOIN rating ON movies.id = rating.movie_id;
    ```