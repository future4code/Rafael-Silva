import { Request, Response } from 'express';
import { UserBusiness, SignupInputDTO, LoginInputDTO } from '../business/UserBusiness';
import { UserData } from '../data/UserData';

export class UserController {
    private userBusiness: UserBusiness;

    constructor() {
        this.userBusiness = new UserBusiness(new UserData());
    }

    public signupController = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: SignupInputDTO = { 
                name: req.body.name, 
                email: req.body.email, 
                password: req.body.password 
            };

            const result = await this.userBusiness.signupBusiness(input);
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    public loginController = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }
            
            const result = await this.userBusiness.loginBusiness(input);
            res.status(200).send(result);
        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }

    public getAllUsersController = async (req: Request, res: Response): Promise<void> => {
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

    public deleteUserController = async (req: Request, res: Response): Promise<void> => {
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