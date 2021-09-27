import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./database/users";
import { user } from "./database/users";
import { UsersType } from "./database/users";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1:

//a) utilizamos o metodo get para pegar a lista de usuarios
//b) indicaria a Entidade como users
app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        if (users.length > 0) {
            res.status(200).send(users);
        } else {
            errorCode = 404;
            throw new Error("Users not found!");
        }
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
    }
});

//----------------------------------------------------------------------

// Exercício 3:
//a) costuma ser utilizado o query parameters
//b)

app.get("/users/search", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        if (req.query.name) {
            const search: user[] = users.filter((user) => {
                const name: string = req.query.name as string;
                return user.name.toLowerCase() === name.toLowerCase();
            });

            if (search.length > 0) {
                res.status(200).send(search);
            } else {
                errorCode = 404;
                throw new Error("User not found!");
            }
        } else {
            errorCode = 422;
            throw new Error("Invalid query parameter");
        }
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
    }
});

//----------------------------------------------------------------------

// Exercício 2:

/*
a) Eu passei os parâmetros para a requisição como /users/admin. 
Por que o endpoint recebe como users/:type atraves da req.params.types.
/*
b) Eu criei uma enum UsersTypes com ADMIN e NORMAL e quando recebo a requisição, 
eu tipo a minha váriavel com esse enum e transformo essa string em maiuscula, 
para recebe tanto strings minusculas e maiusculas.
 */
app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const type: string = req.params.type.toUpperCase() as UsersType;

        const usersTypes = users.filter((user) => type === user.type);

        if (usersTypes.length > 0) {
            res.status(200).send(usersTypes);
        } else {
            errorCode = 422;
            throw new Error("Please send a type: ADMIN or NORMAL");
        }
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
    }
});

//----------------------------------------------------------------------

// Exercício 4:
//a) o metodo put atualiza os dados
//b) o metodo put serve mais para atualizar os dados que já existem, 
//é uma boa pratica utilizar o post quando for criar um recurso novo.
app.put("/users", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const { id, name, email, type, age } = req.body;

        if (!id || !name || !email || !type || !age) {
            let errorCode = 422;
            throw new Error("Ooops! Preencha todos os campos");
        }

        const newUser: user = { id, name, email, type, age };

        users.push(newUser);

        res.status(201).send({ message: "Usuário Cadastrado com sucesso!" });
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
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
