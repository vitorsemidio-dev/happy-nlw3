import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import usersController from "../controllers/UsersController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

usersRoutes.get(
  "/",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ensureAuthenticated,
  usersController.index
);

usersRoutes.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  usersController.show
);

usersRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required().valid(Joi.ref("password")),
    },
  }),
  usersController.create
);

usersRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  usersController.delete
);

usersRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  usersController.update
);

export default usersRoutes;
