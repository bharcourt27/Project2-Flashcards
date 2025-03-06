import { Router } from 'express';
import { cardRouter } from './card-routes.js';
import { userRouter } from './user-routes.js';

const router = Router();

router.use('/cards', cardRouter);
router.use('/users', userRouter);

export default router;
