import { Request, Response } from 'express';
import { create_uuid } from '../config/helpers';
import { User } from '../models/User';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        // const {name, email, password} = req.body

        // const id = create_uuid()
        // const user = new User(id, "Rafael", "rafa@email.com", "123456")

        // console.log(user)

        
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
