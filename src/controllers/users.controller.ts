import { Request, Response } from 'express';

import usersService from '../services/users.service';
import {
  createUserSchema,
  updateUserSchema
} from "../schemas/user.schema";

import { z } from "zod";

class UsersController {

  async create(req: Request, res: Response) {

  try {

    const validatedData =
      createUserSchema.parse(req.body);

    const user =
      await usersService.create(validatedData);

    return res.status(201).json(user);

  } catch (error) {

    if (error instanceof z.ZodError) {

      return res.status(400).json({
        error: error.format()
      });
    }

    console.error(error);

    return res.status(500).json({
      error: "Erro ao criar usuário"
    });
  }
}

  async index(req: Request, res: Response) {

    try {

      const users = await usersService.findAll();

      return res.json(users);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: 'Erro ao listar usuários'
      });
    }
  }
  async update(req: Request, res: Response) {

  try {

    const id = req.params.id as string;

    const validatedData =
      updateUserSchema.parse(req.body);

    const user =
      await usersService.update(
        id,
        validatedData
      );

    return res.status(200).json(user);

  } catch (error) {

    if (error instanceof z.ZodError) {

      return res.status(400).json({
        error: error.format()
      });
    }

    console.error(error);

    return res.status(500).json({
      error: "Erro ao atualizar usuário"
    });
  }
}
}

export default new UsersController();
