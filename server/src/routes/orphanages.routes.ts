import { Router } from "express";
import { getRepository } from "typeorm";

import Orphanage from "../models/Orphanage";

const orphanagesRoutes = Router();

orphanagesRoutes.post("/", async (request, response) => {
  try {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);

    return response.json(orphanage);
  } catch (err) {
    console.log(err);
    return response.json({
      err: "Fail to create orphanage",
    });
  }
});

export default orphanagesRoutes;
