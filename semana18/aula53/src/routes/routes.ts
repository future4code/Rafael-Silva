import { Router } from "express";
import { createUser } from '../app/app';


const router: Router = Router();

router.post("/user", createUser)

export default router;
