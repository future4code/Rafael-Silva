import { Router } from "express";
import { UserController } from '../controller/UserController';


const router: Router = Router();

const userController = new UserController();

router.get('/user/all', userController.getAllUsersController);

router.post('/user/signup', userController.signupController);
router.post('/user/login', userController.loginController);

router.delete('/user/delete/:id', userController.deleteUserController);



export default router;
