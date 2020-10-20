import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
    public async execute({ email }: IRequest): Promise<void> {
      const usersRepository = getRepository(User);

      const user = await usersRepository.findOne({
        where: { email },
      });

      if (!user) {
        throw new AppError('User not found', 404);
      }

      // send email
    }
}

export default SendForgotPasswordEmailService;
