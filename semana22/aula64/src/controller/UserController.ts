import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import  UserData  from '../data/UserData';
import HashManager from '../services/HashManager';
import IdGenerator from '../services/IdGenerator';
import TokenManager from '../services/TokenManager';

export class UserController {
    public async signupController(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password, role } = req.body;
            const result = await new UserBusiness(
                new IdGenerator(),
                new HashManager(),
                new TokenManager(),
                new UserData(),
            ).signupBusiness({ name, email, password, role});

            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    // public async loginController(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { email, password } = req.body;
    //         const result = await new UserBusiness(
    //             new IdGenerator(),
    //             new HashManager(),
    //             new TokenGenerator(),
    //             new UserData(),
    //         ).loginBusiness({ email, password });

    //         res.status(200).send(result);
    //     } catch (e) {
    //         const error = e as Error;

    //         console.log(error);

    //         res.send({ message: error.message });
    //     }
    // }

    // public async getAllUsersController(req: Request, res: Response): Promise<void> {
    //     try {
    //         const token = req.headers.token as string;
    //         const result = await new UserBusiness(
    //             new IdGenerator(),
    //             new HashManager(),
    //             new TokenGenerator(),
    //             new UserData(),
    //         ).getAllUser(token);

    //         res.status(200).send(result);
    //     } catch (e) {
    //         const error = e as Error;

    //         console.log(error);

    //         res.send({ message: error.message });
    //     }
    // }

    // public async deleteUserController(req: Request, res: Response): Promise<void> {
    //     try {
    //         const token = req.headers.token as string;
    //         const { id } = req.params;
    //         const result = await new UserBusiness(
    //             new IdGenerator(),
    //             new HashManager(),
    //             new TokenGenerator(),
    //             new UserData(),
    //         ).deleteUser(token, id);
            
    //         res.status(200).send(result);
    //     } catch (e) {
    //         const error = e as Error;

    //         console.log(error);

    //         res.send({ message: error.message });
    //     }
    // }
    
}