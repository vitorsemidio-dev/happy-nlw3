import { getRepository } from 'typeorm';

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
      throw new Error('User not found');
    }

    user.name = name || user.name;

    if (email) {
      const checkEmailIsUsed = await usersRepository.findOne({
        where: { email },
      });

      if (checkEmailIsUsed && checkEmailIsUsed.id !== user.id) {
        throw new Error('Email is already used');
      }

      user.email = email;
    }

    await usersRepository.save(user);

    return user;
  }
}
