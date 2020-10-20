import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';
import userView from '../views/users_view'

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autenticateUser = new AuthenticateUserService();

    const { user } = await autenticateUser.execute({
      email,
      password: String(password),
    });

    return response.json({ user: userView.render(user) });
  }
}

export default new SessionsController();
