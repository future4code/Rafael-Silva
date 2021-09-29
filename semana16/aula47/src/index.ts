import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countActors, getActorsById, getActorsByName } from "./App/app";
import { GENDER } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercicio 1:

//a)
// app.get("/actors/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id as string;

//         const actors = await getActorsById(id);

//         if (!id) {
//             res.statusCode = 404;
//             throw new Error("Actor not found");
//         } else {
//             console.log(actors);
//             res.status(200).send(actors);
//         }
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         res.send({ message: error.message });
//     }
// });

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

app.get("/actors/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender as GENDER;

        if (!gender) {
            res.statusCode = 403
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


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
