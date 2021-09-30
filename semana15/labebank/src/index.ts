import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

//Database
import { accounts } from "./database/accounts";
import { account } from "./database/types";

//Helpers
import { ageFromDateOfBirthday, dateInformedByUser } from "./utils/Helpers";

const app: Express = express();
app.use(express.json());
app.use(cors());

//Endpoint: Retorna todos os usuarios
app.get("/users", (req: Request, res: Response) => {
    try {
        if (accounts.length > 0) {
            res.status(200).send(accounts);
        } else {
            res.statusCode = 404;
            throw new Error("Users not found!");
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

// Endpoint: Pegar saldo
app.get("/users/balance", (req: Request, res: Response) => {
    try {
        if (req.query.name && req.query.document) {
            const search: {}[] = accounts
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
                res.statusCode = 404;
                throw new Error("Usuário não encontrado");
            }
        } else {
            res.statusCode = 422;
            throw new Error("Ooops! Dados incompletos!");
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

//Endpoint: Criar Conta
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, birthDate, document } = req.body;
        if (!name || !birthDate || !document) {
            res.statusCode = 422;
            throw new Error("Preencha todos os campos");
        }

        const age = ageFromDateOfBirthday(birthDate);
        if (age < 18) {
            res.statusCode = 406;
            throw new Error("Somente maiores de 18 anos podem cadastrar uma nova conta.");
        }

        const sameDocument = accounts.find((user) => user.document === document);

        if (sameDocument) {
            res.statusCode = 406;
            throw new Error("O CPF informado já existe");
        }

        const newUser: account = {
            name,
            birthDate,
            document,
            balance: 0,
            statement: []
        };

        accounts.push(newUser);

        res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

//Endpoint: Pagar Conta
app.post("/users/payment", (req: Request, res: Response) => {
    try {
        const document = Number(req.query.document);

        if (!document) {
            res.statusCode = 406;
            throw new Error("Informe seu CPF para fazer um pagamento!");
        }

        let { value, date, description } = req.body;

        if (!value || !description) {
            res.statusCode = 422;
            throw new Error("Ooops! Dados incompletos!");
        }

        if (!date) {
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, "0");
            const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            const yyyy = today.getFullYear();

            date = `${dd}/${mm}/${yyyy}`;
        }

        const dateInformed = dateInformedByUser(date);

        if (dateInformed === false) {
            res.statusCode = 406;
            throw new Error(`Ooops! Você não pode efetuar um pagamento anterior a essa data.`);
        }

        const newStatement = {
            value,
            date,
            description
        };

        const user = accounts.filter((user) => {
            if (user.document === document) {
                user.balance = user.balance - value;
                user.statement.push(newStatement);
                return true;
            } else {
                return false;
            }
        });

        if (user) {
            res.status(200).send({ message: "Pagamento efetuado com sucesso!" });
        } else {
            res.statusCode = 404;
            throw new Error(`Usuário não encontrado`);
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

app.post("/users/transference", (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const document = Number(req.query.document);
        const recipientName = req.query.recipientName as string;
        const recipientDocument = Number(req.query.recipientDocument);
        const value = Number(req.query.value);

        if (!name || !document || !recipientName || !recipientDocument || !value) {
            res.statusCode = 422;
            throw new Error("Faltam dados para completar a transação.");
        }

        const user: account[] = accounts.filter((user) => {
            if (user.document === document) {
                if (user.balance < value) {
                    res.statusCode = 406;
                    throw new Error("Saldo insuficiente para completar a transação.");
                }

                const today = new Date();
                const actualDay = today.getDate();
                const actualMonth = today.getMonth() + 1;
                const actualYear = today.getFullYear();

                const newStatement = {
                    value,
                    date: `${actualDay}/${actualMonth}/${actualYear}`,
                    description: `Transação realizada no valor de ${value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })} para ${recipientName}(${recipientDocument}).`
                };

                user.balance = user.balance - value;
                user.statement.push(newStatement);

                return true;
            } else {
                return false;
            }
        });

        const recipient: account[] = accounts.filter((user) => {
            if (user.document === recipientDocument) {
                const today = new Date();
                const actualDay = today.getDate();
                const actualMonth = today.getMonth() + 1;
                const actualYear = today.getFullYear();

                const newStatement = {
                    value,
                    date: `${actualDay}/${actualMonth}/${actualYear}`,
                    description: `Transação recebida de ${name}(${document}) no valor de ${value.toLocaleString(
                        "pt-BR",
                        {
                            style: "currency",
                            currency: "BRL"
                        }
                    )}.`
                };

                user.balance = user.balance + value;
                user.statement.push(newStatement);

                return true;
            } else {
                return false;
            }
        });

        if (user || recipient) {
            res.status(200).send({ message: "Transação realizada com sucesso!" });
        } else {
            res.statusCode = 404;
            throw new Error(`Usuários não encontrado`);
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
});

// Endpoint: Adicionar saldo
app.put("/users/balance", (req: Request, res: Response) => {
    try {
        if (req.query.name && req.query.document && req.query.balance) {
            const name: string = req.query.name as string;
            const document: number = Number(req.query.document);
            const balance: number = Number(req.query.balance);

            const userIndex: number = accounts.findIndex((user) => user.document === document && user.name === name);

            if (userIndex !== -1) {
                const user = accounts[userIndex];

                const newUser: account = {
                    ...user,
                    balance: (user.balance += balance)
                };

                const today = new Date();
                const actualDay = today.getDate();
                const actualMonth = today.getMonth() + 1;
                const actualYear = today.getFullYear();

                const newStatement = {
                    value: balance,
                    date: `${actualDay}/${actualMonth}/${actualYear}`,
                    description: "Depósito de dinheiro"
                };

                newUser.statement.push(newStatement);

                accounts[userIndex] = newUser;
            } else {
                res.statusCode = 404;
                throw new Error("Usuário não encontrado");
            }
            res.status(200).send({ message: "Saldo adicionado com sucesso!" });
        } else {
            res.statusCode = 422;
            throw new Error("Ooops! Dados incompletos!");
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
