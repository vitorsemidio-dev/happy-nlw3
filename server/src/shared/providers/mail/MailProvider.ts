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
  private client: Transporter;
  private mailTemplateProvider: HandlebarsMailTemplateProvider;

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

    this.mailTemplateProvider = new HandlebarsMailTemplateProvider();
  }

  public async sendMail({
    from,
    to,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: {
        name: from?.name || "Equipe GoBarber",
        address: from?.email || "equipe@gobarber.com.br",
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
}
