import { Router } from "express";

// Endpoints
import {
    createTaskApp,
    createUserApp,
    getAllUsersApp,
    getTaskByIdApp,
    getTaskByStatusApp,
    getTaskCreatedByUserApp,
    getTaskDelayedApp,
    getTaskResponsibleApp,
    getUserByIdApp,
    removeResponsibleApp,
    searchUserApp,
    taskResponsible,
    updateStatusTaskApp,
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
router.get("/task/status", getTaskByStatusApp);
router.get("/task/delayed", getTaskDelayedApp);

router.get("/task/:id", getTaskByIdApp);
router.get("/task/:id/responsible", getTaskResponsibleApp);

router.post("/task", createTaskApp);
router.post("/task/responsible", taskResponsible);

router.put("/task/status/:id", updateStatusTaskApp);

router.delete("/task/:taskId/responsible/:responsibleUserId", removeResponsibleApp);

export default router;
