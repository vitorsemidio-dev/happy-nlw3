import { Request, Response } from "express";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

import Orphanage from "../models/Orphanage";

class OrphanagesPendingController {
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { approved } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOne(id);

    if (!orphanage) {
      throw new AppError("Orphanage not found", 404);
    }

    orphanage.approved = approved;

    await orphanagesRepository.save(orphanage);

    return response.status(204).json();
  }
}

export default new OrphanagesPendingController();
