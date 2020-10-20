import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  email: string;
  token: string;
  password: string;
}

class ResetPasswordService {
  public async execute({ email, token, password }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const passwordHashed = await hash(password, 8);

    user.password = passwordHashed;

    // await usersRepository.save(user);    // await usersRepository.save(user);

    return user;
  }
}

export default ResetPasswordService;
