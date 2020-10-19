import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUserService from '../services/CreateUserService';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne(id);

    if (!checkUserExists) {
      return response.status(404).json({ err: 'User not found' });
    }

    return response.json(checkUserExists);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const usersRepository = getRepository(User);

    const checkUserExist = await usersRepository.findOne(id);

    if (!checkUserExist) {
      return response.status(404).json({ err: 'User not found' });
    }

    await usersRepository.delete(checkUserExist.id);

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

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(User);
    const { id } = request.params;
    const { name, email, password, passwordConfirmation } = request.body;

    const checkUser = await usersRepository.findOne(id);

    if (!checkUser) {
      return response.status(404).json({ err: 'User not found' });
    }

    const userUpdated = {
      id: checkUser.id,
      name: name || checkUser.name,
      email: email || checkUser.email,
      password: password || checkUser.password,
    }

    await usersRepository.save(userUpdated);

    return response.json(userUpdated);
  }
}

export default new UsersController();
