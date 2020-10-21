import nodemailer, { Transporter } from "nodemailer";

import HandlebarsMailTemplateProvider from "./HandlebarsMailTemplateProvider";

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

export default class EtherealMailProvider {
  private mailClient: Transporter;
  private mailTemplateProvider: HandlebarsMailTemplateProvider;

  constructor() {
    this.mailTemplateProvider = new HandlebarsMailTemplateProvider();
  }

  public async sendForgotPassword({
    from,
    to,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    await this.setMailClient();

    const message = await this.mailClient.sendMail({
      from: {
        name: from?.name || "Equipe Happy",
        address: from?.email || "equipe@happy.com.br",
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }

  private async setMailClient(): Promise<void> {
    const account = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: false,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    this.mailClient = transporter;
  }
}
