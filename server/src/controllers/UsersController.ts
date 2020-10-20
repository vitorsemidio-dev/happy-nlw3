import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';

import userView from '../views/users_view';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return response.json(userView.renderMany(users));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      return response.status(404).json({ err: 'User not found' });
    }

    return response.json(userView.render(user));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      return response.status(404).json({ err: 'User not found' });
    }

    await usersRepository.delete(user.id);

    return response.status(204).send();
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, passwordConfirmation } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      passwordConfirmation,
    });

    return response.json(userView.render(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      id: Number(id),
      name,
      email,
    });

    return response.json(userView.render(user));
  }
}

export default new UsersController();
