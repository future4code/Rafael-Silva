import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export class UserController {
    public async signupController(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password, role } = req.body;
            const result = await new UserBusiness().signupBusiness({ name, email, password, role});
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    public async loginController(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const result = await new UserBusiness().loginBusiness({ email, password });
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    public async getAllUsersController(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.token as string;
            const result = await new UserBusiness().getAllUser(token);
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    public async deleteUserController(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.token as string;
            const { id } = req.params;
            const result = await new UserBusiness().deleteUser(token, id);
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }
    
}