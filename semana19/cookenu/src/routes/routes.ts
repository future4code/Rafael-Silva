import { Router } from 'express';
import getUserById from '../app/getUserById';
import login from '../app/login';
import profile from '../app/profile';
import signup from '../app/signup';

const router: Router = Router();

router.get('/user/profile', profile);
router.get('/user/:id', getUserById)

router.post('/user/login', login);
router.post('/user/signup', signup);

export default router;
