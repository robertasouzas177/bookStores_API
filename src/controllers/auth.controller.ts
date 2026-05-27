import { Request, Response } from 'express';

import authService from '../services/auth.service';

class AuthController {

  async login(req: Request, res: Response) {

    try {

      const { email, senha } = req.body;

      const result = await authService.login(email, senha);

      return res.json(result);

    } catch (error) {

      console.error(error);

      return res.status(401).json({
        error: 'Email ou senha inválidos'
      });
    }
  }
}

export default new AuthController();
