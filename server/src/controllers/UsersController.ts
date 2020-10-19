import { Request, Response } from 'express';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ index: true });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json({ show: true });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json({ delete: true });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ create: true });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    return response.json({ update: true });
  }
}

export default new UsersController();
