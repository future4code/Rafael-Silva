import { Request, Response } from 'express';
import Auth from '../../models/Auth';
import authInterface from '../../models/interfaces/authInterface';
import UserDatabase from '../../repository/users/UserDatabase';

const unfollowUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.token as string;

        const tokenVerify = Auth.getTokenData(token) as authInterface;

        if (!tokenVerify) {
            res.statusCode = 403;
            throw new Error(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
            );
        }

        const { userToUnfollowId } = req.body;

        if (!userToUnfollowId) {
            res.statusCode = 422;
            throw new Error("'id' do usuário inválida!");
        }

        const user = await UserDatabase.findById(userToUnfollowId);

        if (user === false) {
            res.statusCode = 401;
            throw new Error("Oops! Usuário não encontrado.");
        }

        if (user.id === tokenVerify.id) {
            res.statusCode = 404;
            throw new Error("Você não pode seguir você mesmo!");
        }

        const result = await UserDatabase.unfollow(tokenVerify.id, user.id);

        if (result === false) {
            res.statusCode = 401;
            throw new Error("Você não segue esse usuário!");
        } else {
            res.status(200).send({ message: "Unfollowed successfully!" });
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

export default unfollowUser;
