import { Router } from 'express';

import { getAll, save } from '../controllers/courses.controller.js'
import { addLogger } from '../config/logger.js';

const router = Router();

router.get('/', addLogger, getAll);

router.post('/', save);


export default router;