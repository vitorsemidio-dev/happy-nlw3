import { getRepository } from "typeorm";
import { hash } from "bcryptjs";

import AppError from "../errors/AppError";
import User from "../models/User";
import UserToken from "../models/UserToken";

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  public async execute({ token, password }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);
    const userTokensRepository = getRepository(UserToken);

    const userToken = await userTokensRepository.findOne({
      where: { token },
    });

    if (!userToken) {
      throw new AppError("User Token does not exists");
    }

    const user = await usersRepository.findOne(userToken.user_id);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const passwordHashed = await hash(password, 8);

    user.password = passwordHashed;

    await usersRepository.save(user);

    return user;
  }
}

export default ResetPasswordService;
