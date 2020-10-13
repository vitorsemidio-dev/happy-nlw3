import { Router } from "express";

import OrphanagesController from "../controllers/OrphanagesController";

const orphanagesRoutes = Router();

orphanagesRoutes.post("/", OrphanagesController.create);
orphanagesRoutes.get("/", OrphanagesController.index);
orphanagesRoutes.get("/:id", OrphanagesController.show);

export default orphanagesRoutes;
