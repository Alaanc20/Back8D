import { Router } from 'express';
import { getAll, createStudent } from '../controllers/students.controller.js';

const router = Router();


router.get('/', getAll);

router.post('/', createStudent);

export default router;