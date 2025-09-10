import express from 'express';
import { getMessages, sendMessage } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', sendMessage);
router.get('/', getMessages);

export default router;
