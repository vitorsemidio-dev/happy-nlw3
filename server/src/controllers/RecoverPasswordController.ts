import { Request, Response } from "express";

import ResetPasswordService from "../services/ResetPasswordService";
import SendForgotPasswordEmailService from "../services/SendForgotPasswordEmailService";

class RecoverPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService();

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      token,
      password: String(password),
    });

    return response.status(204).json();
  }
}

export default new RecoverPasswordController();
