import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import passwordController from '../controllers/PasswordController';
import recoverPasswordController from '../controllers/RecoverPasswordController';

const passwordsRoutes = Router();

passwordsRoutes.put('/:userId', passwordController.update);

passwordsRoutes.post('/reset', recoverPasswordController.update);
passwordsRoutes.post('/forgot', recoverPasswordController.create);

export default passwordsRoutes;
