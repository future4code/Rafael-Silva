import { Router } from "express";

// Endpoints
import { createTaskApp, createUserApp, getAllUsersApp, getTaskByIdApp, getUserByIdApp, updateUserApp } from "../App/App";

const router: Router = Router();

// ROUTES
router.get("/user/all", getAllUsersApp);
router.get("/user/:id", getUserByIdApp);
router.get("/task/:id", getTaskByIdApp);

router.post("/user", createUserApp);
router.post("/task", createTaskApp);

router.put("/user/edit/:id", updateUserApp);


export default router