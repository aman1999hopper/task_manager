import express from 'express';
import { createTask, deleteTask, getTasks, getTaskStats } from '../controllers/taskController.js';
import auth, { isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, isAdmin, createTask); // POST /api/tasks
router.get('/', auth, getTasks);    // GET /api/tasks
router.delete('/:id', auth, deleteTask); // DELETE /api/tasks/:id
router.get('/stats', auth, getTaskStats); // GET /api/tasks/stats

export default router;