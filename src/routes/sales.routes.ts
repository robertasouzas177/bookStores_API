import { Router } from 'express';

import salesController from '../controllers/sales.controller';
import authMiddleware from '../middlewares/auth.middleware';
const router = Router();

router.get('/', salesController.index);
router.get('/client/:clientId', salesController.findByClient);
router.get('/:id', salesController.show);

router.post('/', salesController.create);



export default router;
