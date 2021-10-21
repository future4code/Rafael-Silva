import { Request, Response } from 'express';
import dotenv from 'dotenv';
import UserDatabase from '../repository/UserDatabase';
import { isEmail, uuid, passwd } from '../services/Helpers';
import Auth from '../models/Auth';
import { User } from "../models/User"

dotenv.config();

const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.statusCode = 422;
            throw new Error('Dados inválidos.');
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

        const newUser = new User(
            id,
            name,
            email,
            passwd(password),
        );

        const result = await UserDatabase.create(newUser);

        const token = Auth.generateToken({ id });

        if (result === false) {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.status(200).send({
                message: 'Usuário cadastrado com sucesso!',
                token,
            });
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

export default signup;
