import { getRepository } from "typeorm";
import { randomBytes } from "crypto";
import nodemailer, { Transporter } from "nodemailer";
import path from "path";

import AppError from "../errors/AppError";
import User from "../models/User";

interface IRequest {
  email: string;
}

interface ITemplateVariables {
  [key: string]: string | number;
}

interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}

interface IMailContact {
  name: string;
  email: string;
}
interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}

class SendForgotPasswordEmailService {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then((account) => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const token = randomBytes(3).toString("hex");
    console.log(token);

    // send email

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      "..",
      "handlebars",
      "forgot_password.hbs"
    );
  }
}

export default SendForgotPasswordEmailService;
