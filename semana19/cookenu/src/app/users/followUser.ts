import { Request, Response } from 'express';
import Auth from '../../models/Auth';
import authInterface from '../../models/interfaces/authInterface';
import UserDatabase from '../../repository/users/UserDatabase';

const followUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.token as string;

        const tokenVerify = Auth.getTokenData(token) as authInterface;

        if (!tokenVerify) {
            res.statusCode = 403;
            throw new Error(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
            );
        }

        const { userToFollowId } = req.body;

        if (!userToFollowId) {
            res.statusCode = 422;
            throw new Error("'id' do usuário inválida!");
        }

        const user = await UserDatabase.findById(userToFollowId);

        if (user === false) {
            res.statusCode = 401;
            throw new Error("Oops! Usuário não encontrado.");
        }

        if (user.id === tokenVerify.id) {
            res.statusCode = 404;
            throw new Error("Você não pode seguir você mesmo!");
        }

        const result = await UserDatabase.follow(tokenVerify.id, user.id);

        if (result === false) {
            res.statusCode = 400;
            throw new Error('Oops! Ocorreu um error inesperado. Tente novamente mais tarde');
        } else {
            res.status(200).send({ message: 'Followed successfully!' });
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

export default followUser;
