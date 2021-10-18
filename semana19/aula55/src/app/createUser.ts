import { Request, Response } from 'express';
import userInterface from '../models/interfaces/userInterface';
import UserDatabase from '../repository/UserDatabase';
import { uuid } from '../services/Helpers';

const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.statusCode = 406;
            throw new Error('Campos Inválidos.');
        }

        const id = uuid();
        const newUser: userInterface = { id, email, password };

        const result = await UserDatabase.create(newUser);

        if (result === false) {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.status(200).send({ message: 'Usuário criado com sucesso!' });
        }
    } catch (e) {
        const error = e as Error;

        // eslint-disable-next-line no-console
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500).send({ message: 'Internal Server Error.' });
        } else {
            res.send({ message: error.message });
        }
    }
};

export default createUser;
