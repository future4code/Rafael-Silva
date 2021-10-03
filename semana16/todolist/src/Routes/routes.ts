import { Router } from "express";

// Endpoints
import {
    createTaskApp,
    createUserApp,
    getAllUsersApp,
    getTaskByIdApp,
    getTaskCreatedByUserApp,
    getUserByIdApp,
    searchUserApp,
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

router.post("/task", createTaskApp);

export default router;
