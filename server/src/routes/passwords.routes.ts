import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import passwordController from '../controllers/PasswordController'

const passwordsRoutes = Router();

passwordsRoutes.put('/:userId', passwordController.update);

export default passwordsRoutes;
