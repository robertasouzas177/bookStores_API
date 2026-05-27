import { Router } from 'express';

import clientsController from '../controllers/clients.controller';

import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.get('/', clientsController.index);

router.get('/:id', clientsController.show);

router.post('/', clientsController.create);

export default router;