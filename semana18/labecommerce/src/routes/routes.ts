import { Router } from 'express';

// Controller
import { createUser } from '../app/appController';

const router: Router = Router();

router.post('/user', createUser);

export default router;
