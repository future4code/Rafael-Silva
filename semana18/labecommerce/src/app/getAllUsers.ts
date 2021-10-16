import { Request, Response } from 'express';

import UserDatabase from '../core/UserDatabase';

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await new UserDatabase().getAllUsers();
        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        // eslint-disable-next-line no-console
        console.log(error);
        res.send({ message: error.message });
    }
};

export default getAllUsers;
