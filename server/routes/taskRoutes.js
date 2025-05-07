import express from "express";
import { getAllTasks, seedTasks } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/seed", seedTasks);

export default router;
