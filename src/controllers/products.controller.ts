import { Request, Response } from 'express';

import productsService from '../services/products.service';
import { z } from "zod";
import {
  createProductSchema,
  updateProductSchema
} from "../schemas/product.schema";
class ProductsController {
  async create(req: Request, res: Response) {

  try {

    const validatedData = createProductSchema.parse(req.body);

    const product = await productsService.create(validatedData);

    return res.status(201).json(product);

  } catch (error) {

    if (error instanceof z.ZodError) {

      return res.status(400).json({
        error: error.format()
      });
    }

    console.error(error);

    return res.status(500).json({
      error: 'Erro ao criar produto'
    });
  }
  }
  async index(req: Request, res: Response) {

    try {

      const products = await productsService.findAll();

      return res.json(products);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: 'Erro ao buscar produtos'
      });
    }
  }

  async show(req: Request, res: Response) {

  try {

    const id = req.params.id as string;

    const product = await productsService.findById(id);

    return res.json(product);

  } catch (error) {

    console.error(error);

    return res.status(404).json({
      error: 'Produto não encontrado'
    });
  }
}
async update(req: Request, res: Response) {

  try {

    const id = req.params.id as string;

    const validatedData =
      updateProductSchema.parse(req.body);

    const product =
      await productsService.update(
        id,
        validatedData
      );

    return res.status(200).json(product);

  } catch (error) {

    if (error instanceof z.ZodError) {

      return res.status(400).json({
        error: error.format()
      });
    }

    console.error(error);

    return res.status(500).json({
      error: "Erro ao atualizar produto"
    });
  }
}
}

export default new ProductsController();