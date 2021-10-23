import { Router } from 'express';

// ENDPOINTS
import createRecipe from '../app/recipe/createRecipe';
import deleteRecipe from '../app/recipe/deleteRecipe';
import editRecipe from '../app/recipe/editRecipe';
import getFeed from '../app/recipe/getFeed';
import getRecipeById from '../app/recipe/getRecipeById';
import followUser from '../app/users/followUser';
import getUserById from '../app/users/getUserById';
import login from '../app/users/login';
import profile from '../app/users/profile';
import signup from '../app/users/signup';
import unfollowUser from '../app/users/unfollowUser';

const router: Router = Router();

router.get('/user/profile', profile);
router.get('/user/feed', getFeed);
router.get('/user/:id', getUserById);
router.get('/recipe/:id', getRecipeById);

router.post('/user/login', login);
router.post('/user/signup', signup);
router.post('/user/follow', followUser);
router.post('/user/unfollow', unfollowUser);
router.post('/recipe', createRecipe);

router.put('/recipe/:id', editRecipe);

router.delete('/recipe/:id', deleteRecipe)


export default router;
