import usersRepository from '../repositories/users.repository';

class UsersService {

  async create(data: any) {

    return await usersRepository.create(data);
  }

  async findAll() {

    return await usersRepository.findAll();
  }
  async update(id: string, data: any) {

  return await usersRepository.update(id, data);
}
}

export default new UsersService();