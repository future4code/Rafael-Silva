import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {
    averageSalaryByGender,
    countActors,
    createActor,
    deleteActor,
    getActorsById,
    getActorsByName,
    getAllActors,
    updateActorSalary
} from "./App/app";
import { GENDER } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/actors", async (req: Request, res: Response) => {
    try {
        const actors = await getAllActors();
        if (actors) {
            res.status(200).send(actors);
        } else {
            res.statusCode = 404;
            throw new Error("Actor not found");
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

// Exercicio 1:

// a)
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

//b)

// app.get("/actors/:name", async (req: Request, res: Response) => {
//     try {
//         const name = req.params.name as string;

//         const actorsName = await getActorsByName(name);

//         if (!name) {
//             res.statusCode = 404;
//             throw new Error("Actor not found");
//         } else {
//             console.log(actorsName);
//             res.status(200).send(actorsName);
//         }
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         res.send({ message: error.message });
//     }
// });

//c)

// app.get("/actors/:gender", async (req: Request, res: Response) => {
//     try {
//         const gender = req.params.gender as GENDER;

//         if (!gender) {
//             res.statusCode = 403
//             throw new Error("Gender not accepted. Accepteble 'male' or 'female'");
//         }

//         const actorsGender = await countActors(gender);

//         if (!actorsGender) {
//             res.statusCode = 404;
//             throw new Error("Actor not found");
//         } else {
//             console.log(actorsGender);
//             res.status(200).send(actorsGender);
//         }
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         res.send({ message: error.message });
//     }
// });

// Exercicio 2:

app.get("/actors/salary/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender as GENDER;

        if (!gender) {
            res.statusCode = 403;
            throw new Error("Not Accepteble");
        }

        const salary = await averageSalaryByGender(gender);

        if (salary.averageSalary !== null) {
            res.status(200).send(salary);
        } else {
            res.statusCode = 404;
            throw new Error("Actor not found");
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

app.post("/actors/create", async (req: Request, res: Response) => {
    try {
        const { id, name, salary, dateOfBirth, gender } = req.body;

        if (!id || !name || !salary || !dateOfBirth || !gender) {
            res.statusCode = 403;
            throw new Error("Not Accepteble");
        }

        createActor(id, name, salary, dateOfBirth, gender);

        res.status(201).send({ message: "Actor created successfully!" });
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

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

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
