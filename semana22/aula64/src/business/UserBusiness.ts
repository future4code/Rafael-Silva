import { UserData } from '../data/UserData';
import Auth from '../services/Auth';
import { isEmail, uuid, passwd, isPasswd } from '../utils/helpers';
import ErrorMessage from '../error/ErrorMessage';
import AuthInterface, { USER_ROLES } from '../models/interfaces/AuthInterface';
import { UserInterface } from '../models/interfaces/UserInterface';

export class UserBusiness {

    public signupBusiness = async (input: any): Promise<object> => {
        const { name, email, password } = input;
        let { role } = input;

        if (!name || !email || !password) {
            throw new ErrorMessage("Todos os campos são obrigatórios", 400);
        }

        if (!role) {
            role = USER_ROLES.NORMAL;
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

        role = role.toUpperCase();
        if (!(role in USER_ROLES)) {
            throw new ErrorMessage('`role` Inválido. É possível criar somente users `ADMIN` e `NORMAL`.', 400);
        }

        const user = await UserData.findByEmail(email);

        if (user) {
            throw new ErrorMessage('Email já cadastrado.', 401);
        }

        const id = uuid();

        const newUser: UserInterface = {
            id,
            name,
            email,
            password: passwd(password),
            role,
        };

        const result = await UserData.create(newUser);

        const token = Auth.generateToken({ id, role });

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

    public loginBusiness = async (input: any): Promise<object> => {
        const { email, password } = input;

        if (!email || !password) {
            throw new ErrorMessage('Todos os campos são obrigatórios', 400);
        }

        if (!isEmail(email)) {
            throw new ErrorMessage('`email` Inválido.', 400);
        }

        const user = await UserData.findByEmail(email) as UserInterface;

        if (!user) {
            throw new ErrorMessage('Usuário não encontrado.', 401);
        }

        if (!isPasswd(password, user.password)) {
            throw new ErrorMessage('`email` ou `senha` Inválidos.', 401);
        }

        const token = Auth.generateToken({ id: user.id, role: user.role });

        return {
            token
        };
    };

    public getAllUser = async (token: string): Promise<UserInterface[] | boolean> => {
        const tokenVerify = Auth.getTokenData(token) as AuthInterface;

        if (!tokenVerify) {
            throw new ErrorMessage(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
                403
            );
        }

        const user = await UserData.findAll();

        if (!user) {
            throw new ErrorMessage('Usuário não encontrado.', 401);
        }

        return user;
    };

    public deleteUser = async (token: string, id: string): Promise<object> => {
        const tokenVerify = Auth.getTokenData(token) as AuthInterface;

        if (!tokenVerify) {
            throw new ErrorMessage(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
                403
            );
        }

        if (tokenVerify.role !== USER_ROLES.ADMIN) {
            throw new ErrorMessage('Apenas usuários `ADMIN` podem deletar usuários.', 403);
        }

        const user = await UserData.findById(id);

        if (!user) {
            throw new ErrorMessage('Usuário não encontrado.', 401);
        }

        const result = await UserData.delete(id);

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
    }

}