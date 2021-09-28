## Exercicio 1

* a)
    - Altera a tabela Actor excluindo a coluna "salary".

* b)

    - Altera a tabela Actor mudando o nome da coluna gender para sex varchar com no máximo 6 caracteres.

* c)

    - Altera a tabela Actor mudando o tamanho da coluna gender para no máximo 255 caracteres.

* d)

    ```
    ALTER TABLE actors CHANGE gender gender VARCHAR(100);
    ```

---

##  Exercicio 2:

* a)

    ```
    UPDATE actors
    SET  name = "Moacyr Franco", birth_date = "2012-12-27"
    WHERE id = "003";
    ```

* b)

    ```
    UPDATE actors
    SET  name = "JULIANA PAES"
    WHERE name = "Juliana Paes";
    ```

    ```
    UPDATE actors
    SET  name = "Juliana Paes"
    WHERE name = "JULIANA PAES";
    ```

* c)

    ```
    UPDATE actors
    SET  
        name = "Carlos",
        birth_date = "2021-09-28",
        salary = 320000,
        gender = "male"
    WHERE id = "005";
    ``` 

* d)

    - `0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0` -> no meu caso não apresento erro, mas tbm não altero nada pois não foi encontrado o id 007.