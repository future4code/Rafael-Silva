import { Request, Response } from 'express';

// Helpers
import { v4 as uuid } from 'uuid';

// Support
import Message from '../support/Message';

// Models
import User from '../models/User';

// Database
import UserDatabase from '../repository/UserDatabase';

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            throw new Message('Campos Inválidos!', 406);
        }

        if (Number.isNaN(age)) {
            throw new Message('Campo "age" inválido!', 406);
        }

        const id = uuid();
        const newUser = new User(id, name, age, email);

        const result = await new UserDatabase().create(newUser);

        if (result === false) {
            throw new Message(
                'Oops! Ocorreu um erro. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(201).send({ message: 'Usuário criado com sucesso!' });
        }
    } catch (e) {
        const error = e as Error;
        // eslint-disable-next-line no-console
        console.log(error);
        res.send({ message: error.message });
    }
};

export default createUser;
