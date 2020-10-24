import { Router } from "express";
import { celebrate } from "celebrate";

import usersController from "../controllers/UsersController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import userValidators from "../validators/user.validators";

const usersRoutes = Router();

usersRoutes.get(
  "/",
  celebrate(userValidators.listUsers, { abortEarly: false }),
  ensureAuthenticated,
  usersController.index
);

usersRoutes.get(
  "/:id",
  celebrate(userValidators.showUserDetail, { abortEarly: false }),
  usersController.show
);

usersRoutes.post(
  "/",
  celebrate(userValidators.createUser, { abortEarly: false }),
  usersController.create
);

usersRoutes.delete(
  "/:id",
  celebrate(userValidators.deleteUser, { abortEarly: false }),
  usersController.delete
);

usersRoutes.put(
  "/:id",
  celebrate(userValidators.updateUser, { abortEarly: false }),
  usersController.update
);

export default usersRoutes;
