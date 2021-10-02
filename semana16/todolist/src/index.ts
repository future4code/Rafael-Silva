import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { date_fmt_back, uuid } from "./Config/Helpers";
import { createTask, createUser, findUserById, getTaskById, getUserById, updateUser } from "./App/app";
import { Task, User } from "./Config/Types";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Endpoint: Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (!id) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        const user = await getUserById(id);

        if (user === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(200).send(user);
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

// Endpoint: Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (!id) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        const task = await getTaskById(id);

        if (task === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(200).send(task);
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});




// Endpoint: Criar usuário
app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body;

        if (!name || !nickname || !email) {
            res.statusCode = 403;
            throw new Error("Campos Inválidos!");
        }

        const id = uuid();

        await createUser(id, name, nickname, email);

        res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

// Endpoint: Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;

        if (!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 403;
            throw new Error("Campos Inválidos!");
        }
        const id = uuid();

        const date = await date_fmt_back(limitDate);

        const newTask: Task = {
            id: id,
            title: title,
            description: description,
            limit_date: date,
            creator_user_id: creatorUserId
        };

        const result = await createTask(newTask);

        if (result === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(201).send({ message: "Tarefa criada com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

// Endpoint: Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { name, nickname, email } = req.body;

        if (!id) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        const findUser = await findUserById(id);

        if (findUser === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        if (!name || !nickname) {
            res.statusCode = 403;
            throw new Error("Campos Inválidos!");
        }

        const newUser: User = {
            id,
            name,
            nickname,
            email
        };

        const user = await updateUser(newUser);

        if (user === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(200).send({ message: "Usuário atualizado com sucesso!" });
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
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app;
