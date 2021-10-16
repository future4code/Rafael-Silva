import { Router } from 'express';

// Controller
import createUser from '../app/createUser';

const router: Router = Router();

router.post('/user', createUser);

export default router;
