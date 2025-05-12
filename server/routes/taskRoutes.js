import express from 'express';
import { createTask, getTasks } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask); // POST /api/tasks
router.get('/', getTasks);    // GET /api/tasks

export default router;