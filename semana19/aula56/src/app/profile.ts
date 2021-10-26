import { Request, Response } from 'express';
import Auth from '../models/Auth';
import authInterface from '../models/interfaces/authInterface';
import userInterface from '../models/interfaces/userInterface';
import UserRoles from '../models/enums/UserRoles';
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

        if (tokenVerify.role !== UserRoles.NORMAL) {
            res.statusCode = 401;
            throw new Error('Acesso não autorizado');
        }

        // prettier-ignore
        const user = (await UserDatabase.findById(tokenVerify.id)) as userInterface;

        if (user) {
            res.status(200).send({ id: user.id, email: user.email });
        } else {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
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

export default profile;
