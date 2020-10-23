import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import OrphanagesController from "../controllers/OrphanagesController";
import OrphanagesPendingController from "../controllers/OrphanagesPendingController";

const orphanagesRoutes = Router();
const upload = multer(uploadConfig);

orphanagesRoutes.post("/", upload.array("images"), OrphanagesController.create);
orphanagesRoutes.get("/", OrphanagesController.index);
orphanagesRoutes.get("/:id", OrphanagesController.show);
orphanagesRoutes.delete("/:id", OrphanagesController.delete);
orphanagesRoutes.put(
  "/:id",
  upload.array("images"),
  OrphanagesController.update
);

orphanagesRoutes.put("/:id/status", OrphanagesPendingController.update);

export default orphanagesRoutes;
