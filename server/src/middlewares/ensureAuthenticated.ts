import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const { authorization: authHeader } = request.headers;

  if(!authHeader) {
    throw new AppError('JWT is missing', 401);
  }

  const [type, token] = authHeader.split(' ');

  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub: userId } = decoded as TokenPayload;

    request.user = {
      id: userId,
    }

    return next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}
