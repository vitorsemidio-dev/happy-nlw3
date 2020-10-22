import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import OrphanagesController from "../controllers/OrphanagesController";

const orphanagesRoutes = Router();
const upload = multer(uploadConfig);

orphanagesRoutes.post("/", upload.array("images"), OrphanagesController.create);
orphanagesRoutes.get("/", OrphanagesController.index);
orphanagesRoutes.get("/:id", OrphanagesController.show);
orphanagesRoutes.delete("/:id", OrphanagesController.delete);

export default orphanagesRoutes;
