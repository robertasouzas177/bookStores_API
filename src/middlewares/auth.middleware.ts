import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: 'Token não informado'
      });
    }

    const token = authHeader.split(' ')[1] as string;

    jwt.verify(token, 'secret_key');

    next();

  } catch (error) {

    return res.status(401).json({
      error: 'Token inválido'
    });
  }
}