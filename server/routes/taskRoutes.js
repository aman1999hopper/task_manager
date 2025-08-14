import express from 'express';
import { createTask, getTasks, getTaskStats } from '../controllers/taskController.js';
import auth, { isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, isAdmin, createTask); // POST /api/tasks
router.get('/', auth, getTasks);    // GET /api/tasks
router.get('/stats', auth, getTaskStats); // GET /api/tasks/stats

export default router;