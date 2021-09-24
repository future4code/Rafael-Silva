import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

//Database
import { users } from "./database/users";
import { user } from "./database/types";

//Helpers
const { ageFromDateOfBirthday } = require("./utils/Helpers");

const app: Express = express();
app.use(express.json());
app.use(cors());

//Endpoint: Retorna todos os usuarios
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

//Endpoint: Pegar saldo
app.get("/users/balance", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        if (req.query.name && req.query.document) {
            const search: {}[] = users
                .filter((user) => {
                    const name: string = req.query.name as string;
                    const document: number = Number(req.query.document);

                    if (user.name.toLowerCase() === name.toLowerCase() && user.document === document) {
                        return user;
                    }
                })
                .map((user) => {
                    const balance: {} = {
                        balance: user.balance
                    };

                    return balance;
                });

            if (search.length > 0) {
                res.status(200).send(search);
            } else {
                errorCode = 404;
                throw new Error("Usuário não encontrado");
            }
        } else {
            errorCode = 422;
            throw new Error("Ooops! Dados incompletos!");
        }
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
    }
});

//Endpoint: Criar Conta
app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const { name, birthDate, document } = req.body;

        if (!name || !birthDate || !document) {
            errorCode = 422;
            throw new Error("Preencha todos os campos");
        }

        const age = ageFromDateOfBirthday(birthDate);

        if (age < 18) {
            errorCode = 422;
            throw new Error("Somente maiores de 18 anos podem cadastrar uma nova conta.");
        }

        const sameDocument = users.find((user) => user.document === document);

        if (sameDocument) {
            errorCode = 422;
            throw new Error("CPF já existe");
        }

        const newUser: user[] = [
            ...users,
            {
                name,
                birthDate,
                document,
                balance: 0
            }
        ];

        users.splice(0, users.length, ...newUser);

        res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
    }
});

//Endpoint: Pagar Conta
app.post("/users/pay", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        if (!req.query.document) {
            errorCode = 422;
            throw new Error("Informe seu CPF para fazer um pagamento!");
        }

        const { value, date, description } = req.body;

        if (!value || !description) {
            errorCode = 422;
            throw new Error("Ooops! Dados incompletos!");
        }

        if (!date){
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, "0");
            const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            const yyyy = today.getFullYear();
    
            const date:string = `"${dd}/${mm}/${yyyy}"`;    
        }
        
    } catch (e) {
        const error = e as Error;
        res.status(errorCode).send({ message: error.message });
    }
})

//Endpoint: Adicionar saldo
app.put("/users/balance", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        if (req.query.name && req.query.document && req.query.balance) {
            const name: string = req.query.name as string;
            const document: number = Number(req.query.document);
            const balance: number = Number(req.query.balance);

            const userIndex: number = users.findIndex((user) => user.document === document);

            if (userIndex !== -1) {
                const user = users[userIndex];

                const newUser: user = {
                    ...user,
                    balance: (user.balance += balance)
                };

                users[userIndex] = newUser;
            } else {
                errorCode = 404;
                throw new Error("Usuário não encontrado");
            }
            res.status(200).send({ message: "Saldo adicionado com sucesso!" });
        } else {
            errorCode = 422;
            throw new Error("Ooops! Dados incompletos!");
        }
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
