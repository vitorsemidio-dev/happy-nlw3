import { Router } from 'express';
import celebrate, { Joi } from 'celebrate';

import usersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.get('/', usersController.index);
usersRoutes.get('/:id', usersController.show);
usersRoutes.post('/', usersController.create);
usersRoutes.delete('/:id', usersController.delete);
usersRoutes.put('/:id', usersController.update);

export default usersRoutes;
