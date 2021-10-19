import { Router } from 'express';
import login from '../app/login';
import profile from '../app/profile';
import signup from '../app/signup';

const router: Router = Router();

router.get('/user/profile', profile);

router.post('/user/login', login);
router.post('/user/signup', signup);

export default router;
