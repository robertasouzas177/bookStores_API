import { Router } from 'express';

import usersController from '../controllers/users.controller';

const router = Router();

router.get('/', usersController.index);

router.post('/', usersController.create);

router.patch('/:id', usersController.update);

export default router;