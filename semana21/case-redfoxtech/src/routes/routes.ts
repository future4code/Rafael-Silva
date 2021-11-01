import { Router } from "express";
import { UserController } from '../controller/UserController';


const router: Router = Router();

const userController = new UserController();

router.get('/all', userController.getAllUsersController);




export default router;
