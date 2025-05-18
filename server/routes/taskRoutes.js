import express from 'express';
import { createTask, getTasks } from '../controllers/taskController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createTask); // POST /api/tasks
router.get('/', auth, getTasks);    // GET /api/tasks

export default router;