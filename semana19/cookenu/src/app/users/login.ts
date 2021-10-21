import { Request, Response } from 'express';
import UserDatabase from '../../repository/users/UserDatabase';
import { isEmail, isPasswd } from '../../services/Helpers';
import Auth from '../../models/Auth';


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

        const user = await UserDatabase.findByEmail(email);

        if (user === false) {
            res.statusCode = 401;
            throw new Error('`email` ou `senha` Inválidos.');
        }

        if (!isPasswd(password, user.password)) {
            res.statusCode = 401;
            throw new Error('`email` ou `senha` Inválidos.');
        }

        const token = Auth.generateToken({
            id: user.id,
        });

        res.status(200).send({ token });
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

export default signup;
