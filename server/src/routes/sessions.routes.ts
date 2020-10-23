import { Router } from "express";
import { celebrate } from "celebrate";

import sessionsController from "../controllers/SessionsController";
import sessionValidators from "../validators/session.validators";

const sessionsRoutes = Router();

sessionsRoutes.post(
  "",
  celebrate(sessionValidators.login),
  sessionsController.create
);

export default sessionsRoutes;
