import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'

import AppError from '../errors/AppError';
import User from '../models/User';


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User,
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError('Incorrect email/password combination')
    }

    const checkPassword = await compare(password, user.password);

    if(!checkPassword) {
      throw new AppError('Incorrect email/password combination')
    }

    return {
      user,
    }
  }
}

export default AuthenticateUserService;
