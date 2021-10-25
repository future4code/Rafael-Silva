import { Router } from "express";
import { UserController } from '../controller/UserController';


const router: Router = Router();

const userController = new UserController();

router.get('/all', userController.getAllUsersController);

router.post('/signup', userController.signupController);
router.post('/login', userController.loginController);

router.delete('/delete/:id', userController.deleteUserController);



export default router;
