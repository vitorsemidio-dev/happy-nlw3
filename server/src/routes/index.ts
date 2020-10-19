import { Router } from "express";

import orphanagesRoutes from "./orphanages.routes";
import usersRoutes from './users.routes';
import passwordsRoutes from './passwords.routes';

const routes = Router();

routes.use('/passwords', passwordsRoutes);
routes.use("/orphanages", orphanagesRoutes);
routes.use('/users', usersRoutes);

export default routes;
