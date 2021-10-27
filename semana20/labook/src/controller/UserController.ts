import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { UserData } from '../data/UserData';

export class UserController {
    private userBusiness: UserBusiness;

    constructor() {
        this.userBusiness = new UserBusiness(new UserData());
    }

    async signupController(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;
            const result = await this.userBusiness.signupBusiness({ name, email, password });
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    async loginController(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const result = await this.userBusiness.loginBusiness({ email, password });
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    async getAllUsersController(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.token as string;
            const result = await this.userBusiness.getAllUser(token);
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    async deleteUserController(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.token as string;
            const { id } = req.params;
            const result = await this.userBusiness.deleteUser(token, id);
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

}