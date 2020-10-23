import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";

class OrphanagesPendingController {
  public async update(request: Request, response: Response) {
    const { approved } = request.body;
    console.log(approved);
    // console.log(request);

    // const orphanagesRepository = getRepository(Orphanage);

    return response.json();
  }
}

export default new OrphanagesPendingController();
