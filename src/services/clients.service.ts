import clientsRepository from '../repositories/clients.repository';

class ClientsService {

  async findAll() {

    const clients = await clientsRepository.findAll();

    return clients;
  }

  async findById(id: string) {

    const client = await clientsRepository.findById(id);

    if (!client) {
      throw new Error('Cliente não encontrado');
    }

    return client;
  }

  async create(data: any) {

    const client = await clientsRepository.create(data);

    return client;
  }
}

export default new ClientsService();