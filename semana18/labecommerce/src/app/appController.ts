import { Request, Response } from 'express';

// Helpers
import { v4 as uuid } from 'uuid';

// Interfaces
import UserInterface from '../models/Interfaces/UserInterface';

// Support
import Message from '../support/Message';

// Database
import UserDatabase from '../core/UserDatabase';

/* eslint-disable import/prefer-default-export */
export const createUser = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            throw new Message('Campos Inválidos!', 406);
        }

        if (Number.isNaN(age)) {
            throw new Message('Campo "age" inválido!', 406);
        }

        const id = uuid();
        const newUser: UserInterface = {
            id,
            name,
            email,
            age,
        };

        const result = await new UserDatabase().create(newUser);

        if (result === false) {
            throw new Message(
                'Oops! Ocorreu um erro. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(201).send({message: "Usuário criado com sucesso!"})
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
