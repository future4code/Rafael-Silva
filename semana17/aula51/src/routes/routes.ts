import { Router } from "express";
import { createUserApp } from "../endpoints/createUser";
import { getAddressApp } from '../endpoints/getAddress';

const router: Router = Router();

router.get("/users/address/:cep", getAddressApp)

router.post("/users/signup", createUserApp);


export default router;
