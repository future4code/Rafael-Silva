
import ErrorMessage from '../error/ErrorMessage';
import UserModel, { USER_ROLES } from '../models/CompetitionModel';
import { isEmail, passwdLength } from '../utils/helpers';
import TokenManager from '../services/TokenManager';
import IdGenerator from '../services/IdGenerator';
import HashManager from '../services/HashManager';
import UserData from '../data/UserData';
import { CreateCompetitionDTORequest } from '../controller/CreateController';

export class CreateBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private tokenManager: TokenManager,
        private userData: UserData
    ) { }

    public competitionBusiness = async (input: CreateCompetitionDTORequest): Promise<object> => {
        const { competition, athlete, value, unit } = input;

        if (!competition || !athlete || !value || !unit) {
            throw new ErrorMessage("Todos os campos são obrigatórios", 422);
        }

        const id = this.idGenerator.generate();

      

        const result = await this.userData.create(newUser);

        const token = this.tokenManager.generate({ id, role });

        if (result === false) {
            throw new ErrorMessage(
                400,
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde'
            );
        } else {
            return {
                message: 'Usuário cadastrado com sucesso!',
                token,
            };
        }
    };

    // public loginBusiness = async (input: any): Promise<object> => {
    //     const { email, password } = input;

    //     if (!email || !password) {
    //         throw new ErrorMessage('Todos os campos são obrigatórios', 400);
    //     }

    //     if (!isEmail(email)) {
    //         throw new ErrorMessage('`email` Inválido.', 400);
    //     }

    //     const user = await UserData.findByEmail(email) as UserInterface;

    //     if (!user) {
    //         throw new ErrorMessage('Usuário não encontrado.', 401);
    //     }

    //     if (!isPasswd(password, user.password)) {
    //         throw new ErrorMessage('`email` ou `senha` Inválidos.', 401);
    //     }

    //     const token = Auth.generateToken({ id: user.id, role: user.role });

    //     return {
    //         token
    //     };
    // };

    // public getAllUser = async (token: string): Promise<UserInterface[] | boolean> => {
    //     const tokenVerify = Auth.getTokenData(token) as AuthInterface;

    //     if (!tokenVerify) {
    //         throw new ErrorMessage(
    //             "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
    //             403
    //         );
    //     }

    //     const user = await UserData.findAll();

    //     if (!user) {
    //         throw new ErrorMessage('Usuário não encontrado.', 401);
    //     }

    //     return user;
    // };

    // public deleteUser = async (token: string, id: string): Promise<object> => {
    //     const tokenVerify = Auth.getTokenData(token) as AuthInterface;

    //     if (!tokenVerify) {
    //         throw new ErrorMessage(
    //             "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
    //             403
    //         );
    //     }

    //     if (tokenVerify.role !== USER_ROLES.ADMIN) {
    //         throw new ErrorMessage('Apenas usuários `ADMIN` podem deletar usuários.', 403);
    //     }

    //     const user = await UserData.findById(id);

    //     if (!user) {
    //         throw new ErrorMessage('Usuário não encontrado.', 401);
    //     }

    //     const result = await UserData.delete(id);

    //     if (result === false) {
    //         throw new ErrorMessage(
    //             'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
    //             400
    //         );
    //     } else {
    //         return {
    //             message: 'Usuário deletado com sucesso!',
    //         };
    //     }
    // };

}