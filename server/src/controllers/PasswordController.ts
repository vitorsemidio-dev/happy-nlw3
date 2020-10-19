import { Request, Response } from 'express';

import UpdateUserPasswordService from '../services/UpdateUserPasswordService';

class PasswordController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { oldPassword, newPassword, newPasswordConfirmation } = request.body;

    const updateUserPassword = new UpdateUserPasswordService();

    await updateUserPassword.execute({
      userId: Number(userId),
      oldPassword: String(oldPassword),
      newPassword: String(newPassword),
      newPasswordConfirmation: String(newPasswordConfirmation),
    });

    return response.status(204).json();
  }
}

export default new PasswordController();
