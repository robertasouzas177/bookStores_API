import { Request, Response } from 'express';

import salesService from '../services/sales.service';

import { createSaleSchema }
from "../schemas/sale.schema";

import { z } from "zod";

class SalesController {
  async findByClient(req: Request, res: Response) {

  try {

    const clientId = req.params.clientId as string;

    const sales = await salesService.findByClient(clientId);

    return res.json(sales);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: 'Erro ao buscar vendas do cliente'
    });
  }
 }
  async index(req: Request, res: Response) {

    try {

      const sales = await salesService.findAll();

      return res.json(sales);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: 'Erro ao buscar vendas'
      });
    }
  }

  async show(req: Request, res: Response) {

    try {

      const id = req.params.id as string;

      const sale = await salesService.findById(id);

      return res.json(sale);

    } catch (error) {

      console.error(error);

      return res.status(404).json({
        error: 'Venda não encontrada'
      });
    }
  }

  async create(req: Request, res: Response) {

  try {

    const validatedData =
      createSaleSchema.parse(req.body);

    const sale =
      await salesService.create(validatedData);

    return res.status(201).json(sale);

  } catch (error) {

    if (error instanceof z.ZodError) {

      return res.status(400).json({
        error: error.format()
      });
    }

    console.error(error);

    return res.status(500).json({
      error: "Erro ao criar venda"
    });
  }
}
  
}

export default new SalesController();