import { Router } from 'express';

import productsController from '../controllers/products.controller';
import authMiddleware from '../middlewares/auth.middleware';
const router = Router();

router.get('/', productsController.index);

router.get('/:id', productsController.show);

router.post('/', productsController.create);

router.patch('/:id', productsController.update);

export default router;