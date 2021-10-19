import { Request, Response } from 'express';
import dotenv from 'dotenv';
import userInterface from '../models/interfaces/userInterface';
import UserDatabase from '../repository/UserDatabase';
import { isEmail, uuid, passwd } from '../services/Helpers';
import Auth from '../models/Auth';
import UserRoles from '../models/enums/UserRoles';

dotenv.config();

const signup = async (req: Request, res: Response) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            res.statusCode = 422;
            throw new Error('Dados inválidos.');
        }

        if (!(role in UserRoles)) {
            res.statusCode = 422;
            throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'");
        }

        if (!isEmail(email)) {
            res.statusCode = 406;
            throw new Error('`email` Inválido.');
        }

        if (
            password.toString().length < Number(process.env.PASSWD_MIN) ||
            password.toString().length > Number(process.env.PASSWD_MAX)
        ) {
            res.statusCode = 406;
            throw new Error(
                'É necessário um `password` entre 8 e 40 caracteres.',
            );
        }

        const user = await UserDatabase.findByEmail(email);

        if (user) {
            res.statusCode = 401;
            throw new Error('Email já cadastrado.');
        }

        const id = uuid();

        const newUser: userInterface = {
            id,
            email,
            password: passwd(password),
            role,
        };

        const result = await UserDatabase.create(newUser);

        const token = Auth.generateToken({ id, role });

        if (result === false) {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.status(200).send({
                message: 'Usuário criado com sucesso!',
                token,
            });
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

export default signup;
