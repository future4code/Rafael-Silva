## Exercício 1:

* a) 

    - Com o método `raw` podemos passar comandos SQL como o SELECT, através de uma template string, mesclando typescript e SQL.
    - Então passando o id 002, o retorno é:

    ```
    {
        "id": "002",
        "name": "Glória Pires",
        "salary": 1200000,
        "birth_date": "1963-08-23T03:00:00.000Z",
        "gender": "female",
        "favorite_ice_cream_flavor": null,
        "type": "NotDirector"
    }
    ```

* b)

    ```
    export const getActorsByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT * FROM actors WHERE name = "${name}"
        `)

        return result[0][0]
    }
    ```

* c)

    ```
    export const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT COUNT(*) as actors FROM actors WHERE gender = "${gender}"
        `)

        return result[0][0];
    }
    ```


    