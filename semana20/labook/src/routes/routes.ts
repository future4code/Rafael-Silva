import { Router } from "express";
import { PostController } from '../controller/PostController';
import { UserController } from '../controller/UserController';


const router: Router = Router();

const userController = new UserController();
const postController = new PostController();


router.get('/user/all', userController.getAllUsersController);

router.post('/user/signup', userController.signupController);
router.post('/user/login', userController.loginController);

router.post('/post/create', postController.createPostController);

router.delete('/user/delete/:id', userController.deleteUserController);



export default router;
