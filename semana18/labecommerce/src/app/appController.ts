import { Request, Response } from 'express';

// Helpers
import { v4 as uuid } from 'uuid';

// Support
import Message from '../Support/Message';

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

        

        console.log(name);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
