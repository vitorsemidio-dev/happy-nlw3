import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

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

    const schema = Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório"),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

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
