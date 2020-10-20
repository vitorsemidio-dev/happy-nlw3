import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  id: number;
  name?: string;
  email?: string;
}

export default class UpdateUserService {
  public async execute({ id, name, email }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    user.name = name || user.name;

    if (email) {
      const checkEmailIsUsed = await usersRepository.findOne({
        where: { email },
      });

      if (checkEmailIsUsed && checkEmailIsUsed.id !== user.id) {
        throw new AppError('Email is already used', 409);
      }

      user.email = email;
    }

    await usersRepository.save(user);

    return user;
  }
}
