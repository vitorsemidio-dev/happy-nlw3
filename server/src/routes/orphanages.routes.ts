import { celebrate } from "celebrate";
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import OrphanagesController from "../controllers/OrphanagesController";
import OrphanagesPendingController from "../controllers/OrphanagesPendingController";
import orphanageValidators from "../validators/orphanage.validators";

const orphanagesRoutes = Router();
const upload = multer(uploadConfig);

orphanagesRoutes.post(
  "/",
  upload.array("images"),
  celebrate(orphanageValidators.createOrphanage, { abortEarly: false }),
  OrphanagesController.create
);

orphanagesRoutes.get(
  "/",
  celebrate(orphanageValidators.listOrphanages, { abortEarly: false }),
  OrphanagesController.index
);

orphanagesRoutes.get(
  "/:id",
  celebrate(orphanageValidators.showOrphanageDetail, { abortEarly: false }),
  OrphanagesController.show
);

orphanagesRoutes.delete(
  "/:id",
  celebrate(orphanageValidators.deleteOrphanage, { abortEarly: false }),
  OrphanagesController.delete
);

orphanagesRoutes.put(
  "/:id",
  upload.array("images"),
  celebrate(orphanageValidators.updateOrphanage, { abortEarly: false }),
  OrphanagesController.update
);

orphanagesRoutes.put(
  "/:id/status",
  celebrate(orphanageValidators.updateOrphanageStatus, { abortEarly: false }),
  OrphanagesPendingController.update
);

export default orphanagesRoutes;
