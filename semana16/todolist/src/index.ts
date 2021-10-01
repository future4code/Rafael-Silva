import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { uuid } from "./Config/Helpers";
import { createUser } from "./App/app";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Endpoint: Criar usuário

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body;

        if (!name || !nickname || !email) {
            res.statusCode = 403;
            throw new Error("Invalid Fields!");
        }

        const id = uuid();

        await createUser(id, name, nickname, email);

        res.status(201).send({ message: "User created successfully!" });
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app;
