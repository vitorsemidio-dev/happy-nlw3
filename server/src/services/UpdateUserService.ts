import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';

import User from '../models/User';

interface IRequest {
  id: number;
  name?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
}

export default class UpdateUserService {
  public async execute({ id, name, email, oldPassword, newPassword, newPasswordConfirmation }: IRequest): Promise<User> {
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

    if (newPassword && !oldPassword) {
      throw new Error(
        'You need to inform the old password to set a new password.',
      );
    }

    if (newPassword && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        throw new Error('Invalid password');
      }

      if (newPassword !== newPasswordConfirmation) {
        throw new Error('New password and password confirmation are not equals');
      }

      const passwordHashed = await hash(newPassword, 8);

      user.password = passwordHashed;
    }

    await usersRepository.save(user);

    return user;
  }
}
