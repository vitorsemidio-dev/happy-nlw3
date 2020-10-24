import { celebrate } from "celebrate";
import { Router } from "express";

import passwordController from "../controllers/PasswordController";
import recoverPasswordController from "../controllers/RecoverPasswordController";
import passwordValidators from "../validators/password.validators";

const passwordsRoutes = Router();

passwordsRoutes.put(
  "/reset",
  celebrate(passwordValidators.resetPassword),
  recoverPasswordController.update
);

passwordsRoutes.post(
  "/forgot",
  celebrate(passwordValidators.forgotPassword),
  recoverPasswordController.create
);

passwordsRoutes.put(
  "/:userId",
  celebrate(passwordValidators.updatePassword),
  passwordController.update
);

export default passwordsRoutes;
