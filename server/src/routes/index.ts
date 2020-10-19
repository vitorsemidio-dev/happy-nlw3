import { Router } from "express";

import orphanagesRoutes from "./orphanages.routes";
import usersRoutes from './users.routes';

const routes = Router();

routes.use("/orphanages", orphanagesRoutes);
routes.use('/users', usersRoutes);

export default routes;
