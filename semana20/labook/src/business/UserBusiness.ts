
// repository
import UserRepository from './repository/UserRepository';

// models
import AuthInterface from '../models/interfaces/AuthInterface';
import { User } from '../models/User';

// services
import Auth from '../services/Auth';
import ErrorMessage from '../error/ErrorMessage';


// utils
import { isEmail, uuid, passwd, isPasswd } from '../utils/helpers';


export interface SignupInputDTO{
    name: string;
    email: string;
    password: string;
}


export class UserBusiness {
    private userData: UserRepository;

    constructor(
        userDatabaseImp: UserRepository
    ) { 
        this.userData = userDatabaseImp;
    }

    async signupBusiness (input: SignupInputDTO): Promise<object> {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new ErrorMessage("Todos os campos são obrigatórios", 400);
        }
        if (!isEmail(email)) {
            throw new ErrorMessage('`email` Inválido.', 400);
        }

        if (
            password.toString().length < Number(process.env.PASSWD_MIN) ||
            password.toString().length > Number(process.env.PASSWD_MAX)
        ) {
            throw new ErrorMessage(
                'É necessário um `password` entre 8 e 40 caracteres.',
                400
            );
        }

        const user = await this.userData.findByEmail(email);

        if (user) {
            throw new ErrorMessage('Email já cadastrado.', 401);
        }

        const id = uuid();

        const newUser = new User(id, name, email, passwd(password));
        const result = await this.userData.create(newUser);

        const token = Auth.generateToken({ id });

        if (result === false) {
            throw new ErrorMessage(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
                400
            );
        } else {
            return {
                message: 'Usuário cadastrado com sucesso!',
                token,
            };
        }
    };

   async loginBusiness (input: any): Promise<object> {
        const { email, password } = input;

        if (!email || !password) {
            throw new ErrorMessage('Todos os campos são obrigatórios', 400);
        }

        if (!isEmail(email)) {
            throw new ErrorMessage('`email` Inválido.', 400);
        }

       const user = await this.userData.findByEmail(email) as User;

        if (!user) {
            throw new ErrorMessage('Usuário não encontrado.', 401);
        }

        if (!isPasswd(password, user.getPassword())) {
            throw new ErrorMessage('`email` ou `senha` Inválidos.', 401);
        }

        const token = Auth.generateToken({ id: user.getId() });

        return {
            token
        };
    };

    async getAllUser (token: string): Promise<User[] | boolean> {
        const tokenVerify = Auth.getTokenData(token) as AuthInterface;

        if (!tokenVerify) {
            throw new ErrorMessage(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
                403
            );
        }

        const user = await this.userData.findAll();

        if (!user) {
            throw new ErrorMessage('Usuário não encontrado.', 401);
        }

        return user;
    };

    async deleteUser (token: string, id: string): Promise<object> {
        const tokenVerify = Auth.getTokenData(token) as AuthInterface;

        if (!tokenVerify) {
            throw new ErrorMessage(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
                403
            );
        }

        const user = await this.userData.findById(id);

        if (!user) {
            throw new ErrorMessage('Usuário não encontrado.', 401);
        }

        const result = await this.userData.delete(id);

        if (result === false) {
            throw new ErrorMessage(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
                400
            );
        } else {
            return {
                message: 'Usuário deletado com sucesso!',
            };
        }
    };

}