import { Router } from "express";
import { CreateController } from '../controller/CreateController';

const router: Router = Router();

const createController = new CreateController();

router.post('/create', createController.createCompetitionController);





export default router;
