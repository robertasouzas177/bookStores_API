import jwt from 'jsonwebtoken';

import authRepository from '../repositories/auth.repository';

class AuthService {

  async login(email: string, senha: string) {

    const user = await authRepository.findByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if ((user as any).senha !== senha) {
      throw new Error('Senha inválida');
    }

    const token = jwt.sign(
      {
        id: user.id
      },
      'secret_key',
      {
        expiresIn: '1d'
      }
    );

    return {
      user,
      token
    };
  }
}

export default new AuthService();