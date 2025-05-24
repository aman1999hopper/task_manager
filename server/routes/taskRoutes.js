import express from 'express';
import { createTask, getTasks } from '../controllers/taskController.js';
import auth, { isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, isAdmin, createTask); // POST /api/tasks
router.get('/', auth, getTasks);    // GET /api/tasks

export default router;