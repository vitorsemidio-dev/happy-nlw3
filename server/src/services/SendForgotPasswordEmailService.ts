import { getRepository } from "typeorm";
import { randomBytes } from "crypto";
import path from "path";

import AppError from "../errors/AppError";
import User from "../models/User";
import UserToken from "../models/UserToken";
import MailProvider from "../shared/providers/mail/MailProvider";

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  private mailProvider: MailProvider;

  constructor() {
    this.mailProvider = new MailProvider();
  }
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getRepository(User);
    const userTokensRepository = getRepository(UserToken);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const token = randomBytes(3).toString("hex");
    console.log(token);

    const userToken = userTokensRepository.create({
      token,
      user_id: user.id,
    });

    await userTokensRepository.save(userToken);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      "..",
      "shared",
      "providers",
      "mail",
      "forgot_password.hbs"
    );

    await this.mailProvider.sendForgotPassword({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: "[Happy] Recuperação de senha",
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,
          token,
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
