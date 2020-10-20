import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default class CreateUserService {
  public async execute({ name, email, password, passwordConfirmation }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    if (password !== passwordConfirmation) {
      throw new AppError('Password does not match');
    }

    const checkEmailIsUsed = await usersRepository.findOne({
      where: { email },
    });

    if (checkEmailIsUsed) {
      throw new AppError('Email is already used', 409);
    }

    const passwordHashed = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    await usersRepository.save(user);

    return user;
  }
}
