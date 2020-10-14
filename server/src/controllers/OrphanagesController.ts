import { Request, Response } from "express";
import { getRepository } from "typeorm";

import orphanageView from "../views/orphanages_view";
import Orphanage from "../models/Orphanage";

class OrphanagesController {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"],
    });

    return response.json(orphanageView.renderMany(orphanages));
  }
  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const orphanagesRepository = getRepository(Orphanage);

      const orphanage = await orphanagesRepository.findOneOrFail(id, {
        relations: ["images"],
      });

      return response.json(orphanageView.render(orphanage));
    } catch (err) {
      return response.status(404).json({
        err: "Orphanage not found",
      });
    }
  }

  async create(request: Request, response: Response) {
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

      const requestImages = request.files as Express.Multer.File[];
      const images = requestImages.map((image) => ({ path: image.filename }));

      const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images,
      });

      await orphanagesRepository.save(orphanage);

      return response.status(201).json(orphanage);
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        err: "Fail to create orphanage",
      });
    }
  }
}

export default new OrphanagesController();
