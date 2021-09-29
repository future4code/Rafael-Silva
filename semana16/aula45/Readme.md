### Exercício 1:

```
CREATE TABLE actors (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
```

* a)
     - `CREATE TABLE` -> cria uma tabela.

     - `VARCHAR(255)` -> indica o tipo do dado como uma string com no máximo 255 caracteres.

     - `DATE` -> indica o tipo do dado como uma data

* b) 

    ```
    SHOW DATABASES;

    SHOW TABLES;
    ```

    - `SHOW DATABASES;` -> mostra os bancos de dados da maquina.

    - `SHOW TABLES;` -> mostra as tabelas desse bancos de dados.

* c) 

    ```
    DESCRIBE actors
    ```

    - Mostra a estrutura dessa tabela com id, name, salary, birth_date, gender e seus tipos.


---

### Exercício 2:

* a)

    ```
    INSERT INTO actors (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "female"
    );
    ```
* b)

    ```
    INSERT INTO actors (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Edy",
        1200000,
        "1988-08-21", 
        "male"
    );
    ```

    - `Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'` -> significa que já existi um id 002.

* c)

     ```
    INSERT INTO actors (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
    ```

    - `Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1` -> significa que faltam informações para guarda esse dado no banco.

    ```
    INSERT INTO actors (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
    ```

* d) 

    ```
    INSERT INTO actors (id, salary, birth_date, gender)
    VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
    );
    ```

    - `Código de erro: 1364. O campo 'nome' não tem um valor padrão` -> significa que o campo nome não pode ser null;


    ```
    INSERT INTO actors (id, name, salary, birth_date, gender)
    VALUES(
        "004",
        "Opa",
        400000,
        "1949-04-18", 
        "male"
    );
    ```

* e)

    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        1979-03-26, 
        "female"
    );
    ```

    - `Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1` -> significa que a data foi passada errada, e tem que ser passada dentro de aspas.

    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );
    ```

---

### Exercício 3:

* a)

    ```
    SELECT * FROM actors;
    ```

* b)

    ```
    SELECT salary FROM actors WHERE name="Tony Ramos";
    ```

* c)

    ```
    SELECT * FROM actors WHERE gender="invalid";
    ```
    
    - Não retornou nada pois não existe nenhum gender com o valor "invalid"

* d)

    ```
    SELECT id, name, salary FROM actors WHERE salary<=500000;
    ```

* e)

    ```
    SELECT id, nome from actors WHERE id = "002";
    ```

    - `Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'` -> siginifica que ele não encontrou uma coluna chamada "nome".

    ```
    SELECT id, name from actors WHERE id = "002";
    ```
---

### Exercício 4:

* a)

    - A query retornara apenas dados que começem com a letra "A" ou a letra "J", e com salario acima de 300.000

* b) 

    ```
    SELECT * FROM actors
    WHERE (name NOT LIKE "A%" ) AND salary > 350000
    ```

* c) 

    ```
    SELECT * FROM actors
    WHERE name LIKE "%G%" OR name LIKE "%g%";
    ```

* d)

    ```
    SELECT * FROM actors
    WHERE (name LIKE "A%" OR name LIKE "J%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary > 350000 AND salary < 900000;
    ```

---

### Exercício 5:

* a) 

    ```
    CREATE TABLE movies (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        synopsis TEXT NOT NULL,
        date DATE NOT NULL,
        feedback INT NOT NULL
    );
    ```

* b) 

    ```
    INSERT INTO movies (id, title, synopsis, date, feedback)
    VALUES(
        "001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06", 
        7
    );
    ```

* c)

    ```
    INSERT INTO movies (id, title, synopsis, date, feedback)
    VALUES(
        "002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27", 
        10
    );
    ```

* d)

    ```
    INSERT INTO movies (id, title, synopsis, date, feedback)
    VALUES(
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02", 
        8
    );
    ```

* e)

    ```
    INSERT INTO movies (id, title, synopsis, date, feedback)
    VALUES(
        "004",
        "Bacurau",
        "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. ",
        "2019-08-23", 
        10
    );
    ```

---

### Exercício 6:

* a)

    ```
    SELECT id, title, feedback from movies WHERE id="002";
    ```

* b)

    ```
    SELECT * from movies WHERE title="Bacurau";
    ```

* c)

    ```
    SELECT id, title, synopsis from movies WHERE feedback <= 7;

    ```

---

### Exercício 7:

* a)

    ```
    SELECT * FROM movies
    WHERE title LIKE "%vida%";
    ```

* b)

    ```
    SELECT * FROM movies
    WHERE title LIKE "%Ba%" OR synopsis LIKE "%ba%";
    ```

* c)

    ```
    SELECT * from movies WHERE date <= "2021-09-27"
    ```

* d)

    ```
    SELECT * FROM movies
    WHERE (title LIKE "%Ba%" OR synopsis LIKE "%ba%") AND feedback > 7;
    ```