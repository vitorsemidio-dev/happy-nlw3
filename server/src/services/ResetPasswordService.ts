import { getRepository } from 'typeorm';

import User from '../models/User';

interface IRequest {
  email: string;
  token: string;
}

class ResetPasswordService {
  public async execute({ email, token }: IRequest): Promise<void> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

  }
}

export default ResetPasswordService;
