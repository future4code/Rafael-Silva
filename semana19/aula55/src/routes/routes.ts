import { Router } from "express";
import createUser from '../app/createUser';

const router: Router = Router();

router.post('/user', createUser);

export default router;
