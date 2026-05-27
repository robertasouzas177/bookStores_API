import { Router } from 'express';

import usersController from '../controllers/users.controller';

import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/', usersController.index);

router.post('/', usersController.create);

router.patch('/:id', usersController.update);

export default router;