import { Request, Response } from "express";

import SendForgotPasswordEmailService from "../services/SendForgotPasswordEmailService";
import ResetPasswordService from "../services/ResetPasswordService";

class RecoverPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService();

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.send();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      token,
      password: String(password),
    });

    return response.send();
  }
}

export default new RecoverPasswordController();
