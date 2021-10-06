## Exercício 1:

-   a)

    -   Com o método `raw` podemos passar comandos SQL como o SELECT, através de uma template string, mesclando typescript e SQL.
    -   Então passando o id 002, o retorno é:

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

-   b)

    ```
    export const getActorsByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT * FROM actors WHERE name = "${name}"
        `)

        return result[0][0]
    }
    ```

-   c)

    ```
    export const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT COUNT(*) as actors FROM actors WHERE gender = "${gender}"
        `)

        return result[0][0];
    }
    ```

---

## Exercício 2:

-   a)

    ```
    export const updateActorSalary = async (id: string, salary: number) : Promise<boolean> => {
        const result = await connection("actors").update({
            salary: salary,
        })
        .where({id: id})

        return result ? true : false;
    }
    ```

-   b)

    ```
    export const deleteActor = async (id: string): Promise<boolean> => {
        const result = await connection("actors").delete().where({ id: id });
        return result ? true : false;
    };
    ```

-   c)

    ```
    export const averageSalaryByGender = async (gender: string): Promise<any> => {
        const result = await connection("actors").avg({ averageSalary: `salary` }).where({ gender: gender });

        return result[0]
    };

    ```

---

## Exercício 3:

-   a)

    ```
    app.get("/actors/:id", async (req: Request, res: Response) => {
        try {
            const id = req.params.id as string;

            const actors = await getActorsById(id);

            if (!id) {
                res.statusCode = 404;
                throw new Error("Actor not found");
            } else {
                console.log(actors);
                res.status(200).send(actors);
            }
        } catch (e) {
            const error = e as Error;
            console.log(error);
            res.send({ message: error.message });
        }
    });
    ```

*   b)

    ```
    app.get("/actors", async (req: Request, res: Response) => {
        try {
            const gender = req.query.gender as string;

            if (gender !== "male" && gender !== "female") {
                res.statusCode = 403;
                throw new Error("Gender not accepted. Accepteble 'male' or 'female'");
            }

            const actorsGender = await countActors(gender);

            if (!actorsGender) {
                res.statusCode = 404;
                throw new Error("Actor not found");
            } else {
                console.log(actorsGender);
                res.status(200).send(actorsGender);
            }
        } catch (e) {
            const error = e as Error;
            console.log(error);
            res.send({ message: error.message });
        }
    });
    ```

---

## Exercício 4:

-   a)

    ```
    app.put("/actors", async (req: Request, res: Response) => {
        try {
            const id = req.query.id as string;
            const salary = Number(req.query.salary);

            if (!id || !salary) {
                res.statusCode = 403;
                throw new Error("Not Accepteble");
            }

            const actorUpdate = await updateActorSalary(id, salary);

            if (actorUpdate) {
                res.status(201).send({ message: "Actor salary update successfully!" });
            } else {
                res.statusCode = 404;
                throw new Error("Actor Not Found");
            }
        } catch (e) {
            const error = e as Error;
            console.log(error);
            res.send({ message: error.message });
        }
    });
    ```

-   b)

    ```
    app.delete("/actors/:id", async (req: Request, res: Response) => {
        try {
            const id = req.params.id as string;

            if (!id) {
                res.statusCode = 403;
                throw new Error("Not Accepteble");
            }

            const result = await deleteActor(id);

            if (result) {
                res.status(201).send({ message: "Actor delete successfully!" });
            } else {
                res.statusCode = 404;
                throw new Error("Actor Not Found");
            }
        } catch (e) {
            const error = e as Error;
            console.log(error);
            res.send({ message: error.message });
        }
    });
    ```
