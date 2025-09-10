import express from 'express';
import { getContacts, addContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', addContact);
router.get('/', getContacts);

export default router;
