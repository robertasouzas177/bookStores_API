import { Request, Response } from 'express';

import clientsService from '../services/clients.service';

class ClientsController {

  async index(req: Request, res: Response) {

    try {

      const clients = await clientsService.findAll();

      return res.json(clients);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: 'Erro ao buscar clientes'
      });
    }
  }

  async show(req: Request, res: Response) {

    try {

      const id = req.params.id as string;

      const client = await clientsService.findById(id);

      return res.json(client);

    } catch (error) {

      console.error(error);

      return res.status(404).json({
        error: 'Cliente não encontrado'
      });
    }
  }

  async create(req: Request, res: Response) {

    try {

      const client = await clientsService.create(req.body);

      return res.status(201).json(client);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: 'Erro ao criar cliente'
      });
    }
  }
}

export default new ClientsController();