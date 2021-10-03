import { Router } from "express";

// Endpoints
import {
    createTaskApp,
    createUserApp,
    getAllUsersApp,
    getTaskByIdApp,
    getTaskCreatedByUserApp,
    getTaskResponsibleApp,
    getUserByIdApp,
    searchUserApp,
    taskResponsible,
    updateUserApp
} from "../App/App";

const router: Router = Router();

//USERS ROUTES
router.get("/user", searchUserApp);
router.get("/user/all", getAllUsersApp);
router.get("/user/:id", getUserByIdApp);

router.post("/user", createUserApp);

router.put("/user/edit/:id", updateUserApp);

// TASKS ROUTES
router.get("/task", getTaskCreatedByUserApp);
router.get("/task/:id", getTaskByIdApp);
router.get("/task/:id/responsible", getTaskResponsibleApp);

router.post("/task", createTaskApp);
router.post("/task/responsible", taskResponsible);

export default router;
