import { getRepository } from 'typeorm';

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
    }
}

export default SendForgotPasswordEmailService;
