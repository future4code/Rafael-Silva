import { Request, Response } from 'express';
import Auth from '../models/Auth';
import authInterface from '../models/interfaces/authInterface';
import UserDatabase from '../repository/UserDatabase';

const profile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.token as string;

        const tokenVerify = Auth.getTokenData(token) as authInterface;

        if (!tokenVerify) {
            res.statusCode = 403;
            throw new Error(
                'Token inválido, expirado ou ausente da chave `Authorization` do cabeçalho',
            );
        }

        const user = await UserDatabase.findById(tokenVerify.id);


        if (user) {
            res.status(200).send({ id: user.id, name: user.name, email: user.email });
        } else {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        }
    } catch (e) {
        const error = e as Error;

        console.log(error);

        if (res.statusCode === 200) {
            res.status(500).send({ message: 'Internal Server Error.' });
        } else {
            res.send({ message: error.message });
        }
    }
};

export default profile;
