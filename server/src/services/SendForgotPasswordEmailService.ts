import { getRepository } from 'typeorm';
import { randomBytes } from 'crypto';
import nodemailer, { Transporter } from 'nodemailer';

import AppError from '../errors/AppError';
import User from '../models/User';

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
    nodemailer.createTestAccount().then(account => {
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
        throw new AppError('User not found', 404);
      }

      const token = randomBytes(3).toString('hex');
      console.log(token);

      // send email
    }

    private async sendMail({
      from,
      to,
      subject,
      templateData,
    }: ISendMailDTO): Promise<void> {
      const message = await this.client.sendMail({
        from: {
          name: from?.name || 'Equipe Happy',
          address: from?.email || 'equipe@happy.com.br',
        },
        to: {
          name: to.name,
          address: to.email,
        },
        subject,
        // html: await this.mailTemplateProvider.parse(templateData),
      });

      console.log('Message sent: %s', message.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

export default SendForgotPasswordEmailService;
