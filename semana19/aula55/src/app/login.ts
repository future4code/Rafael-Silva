import { Request, Response } from 'express';
import dotenv from 'dotenv';
import userInterface from '../models/interfaces/userInterface';
import UserDatabase from '../repository/UserDatabase';
import { isEmail } from '../services/Helpers';
import Auth from '../models/Auth';

dotenv.config();

const signup = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.statusCode = 406;
            throw new Error('Dados inválidos.');
        }

        if (!isEmail(email)) {
            res.statusCode = 401;
            throw new Error('`email` ou `senha` Inválidos.');
        }

        if (
            password.toString().length < Number(process.env.PASSWD_MIN) ||
            password.toString().length > Number(process.env.PASSWD_MAX)
        ) {
            res.statusCode = 401;
            throw new Error('`email` ou `senha` Inválidos.');
        }

        const user = (await UserDatabase.findByEmail(email)) as userInterface;

        if (!user || user.password !== password) {
            res.statusCode = 401;
            throw new Error('`email` ou `senha` Inválidos.');
        }

        const token = Auth.generateToken({ id: user.id });

        res.status(200).send({ token });
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

export default signup;
