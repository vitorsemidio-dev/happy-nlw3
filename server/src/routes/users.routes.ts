import { Router } from "express";
import { celebrate } from "celebrate";

import usersController from "../controllers/UsersController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import userValidators from "../validators/user.validators";

const usersRoutes = Router();

usersRoutes.get(
  "/",
  celebrate(userValidators.index, { abortEarly: false }),
  ensureAuthenticated,
  usersController.index
);

usersRoutes.get(
  "/:id",
  celebrate(userValidators.show, { abortEarly: false }),
  usersController.show
);

usersRoutes.post(
  "/",
  celebrate(userValidators.create, { abortEarly: false }),
  usersController.create
);

usersRoutes.delete(
  "/:id",
  celebrate(userValidators.delete, { abortEarly: false }),
  usersController.delete
);

usersRoutes.put(
  "/:id",
  celebrate(userValidators.put, { abortEarly: false }),
  usersController.update
);

export default usersRoutes;
