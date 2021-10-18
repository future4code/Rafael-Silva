import { Router } from "express";
import login from '../app/login';
import signup from '../app/signup';

const router: Router = Router();

router.post('/user/login', login);
router.post('/user/signup', signup);

export default router;
