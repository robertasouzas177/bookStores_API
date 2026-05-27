import { z } from "zod";

export const createUserSchema = z.object({
  nome: z.string().min(3, {
    message: "Nome deve ter pelo menos 3 caracteres"
  }),

  email: z.string().email({
    message: "Email inválido"
  }),

  senha: z.string().min(6, {
    message: "Senha deve ter pelo menos 6 caracteres"
  }),

  telefone: z.string().min(10, {
    message: "Telefone inválido"
  }),

  ativo: z.boolean()
});

export const updateUserSchema =
  createUserSchema.partial();