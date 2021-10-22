import { Router } from 'express';
import createRecipe from '../app/recipe/createRecipe';
import getRecipeById from '../app/recipe/getRecipeById';
import { followUser } from '../app/users/followUser';
import getUserById from '../app/users/getUserById';
import login from '../app/users/login';
import profile from '../app/users/profile';
import signup from '../app/users/signup';

const router: Router = Router();

router.get('/user/profile', profile);
router.get('/user/:id', getUserById);
router.get('/recipe/:id', getRecipeById);

router.post('/user/login', login);
router.post('/user/signup', signup);
router.post('/user/follow', followUser);
router.post('/recipe', createRecipe);


export default router;
