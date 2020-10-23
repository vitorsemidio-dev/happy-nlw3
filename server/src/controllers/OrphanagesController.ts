import { Request, Response } from "express";
import { getRepository, IsNull } from "typeorm";

import Orphanage from "../models/Orphanage";
import orphanageView from "../views/orphanages_view";

class OrphanagesController {
  async index(request: Request, response: Response) {
    const { status } = request.query;

    const showPending = (status && status === "pending") || false;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"],
      where: {
        approved: showPending ? IsNull() : true,
      },
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

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === "true",
      images,
    };

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    await orphanagesRepository.delete(id);

    return response.status(204).json();
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

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

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === "true",
    };

    const orphanage = await orphanagesRepository.findOne(id);

    if (!orphanage) {
      return response.status(404).json({
        mensagem: "Orfanato não encontrado",
      });
    }

    const orphanageUpdated = Object.assign(orphanage, { ...data });

    await orphanagesRepository.save(orphanageUpdated);

    return response.json(orphanageUpdated);
  }
}

export default new OrphanagesController();
