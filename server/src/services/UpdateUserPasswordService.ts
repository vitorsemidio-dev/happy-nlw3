import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  userId: number;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export default class UpdateUserPasswordService {
  public async execute({ userId, oldPassword, newPassword, newPasswordConfirmation }: Request): Promise<void> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    if (!oldPassword) {
      throw new AppError('You must provide the old password');
    }

    const checkOldPassword = await compare(oldPassword, user.password);

    if (!checkOldPassword) {
      throw new AppError('Invalid password');
    }

    if (newPassword !== newPasswordConfirmation) {
      throw new AppError('New password and password conformation does not match');
    }

    const passwordHash = await hash(newPassword, 8);

    user.password = passwordHash;

    await usersRepository.save(user);
  }
}
