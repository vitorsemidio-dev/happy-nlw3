import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';

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
      throw new Error('User not found');
    }

    if (!oldPassword) {
      throw new Error('You must provide the old password');
    }

    const checkOldPassword = await compare(oldPassword, user.password);

    if (!checkOldPassword) {
      throw new Error('Invalid password');
    }

    if (newPassword !== newPasswordConfirmation) {
      throw new Error('New password and password conformation does not match');
    }

    const passwordHash = await hash(newPassword, 8);

    user.password = passwordHash;

    await usersRepository.save(user);
  }
}
