import { Request, Response } from 'express';

import UserDatabase from '../core/UserDatabase';
import Message from '../support/Message';

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await new UserDatabase().getAllUsers();
        if (users === false) {
            throw new Message(
                'Ooops! Ocorreu um erro inesperado. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(200).send(users);
        }
    } catch (e) {
        const error = e as Error;
        // eslint-disable-next-line no-console
        console.log(error);
        res.send({ message: error.message });
    }
};

export default getAllUsers;
