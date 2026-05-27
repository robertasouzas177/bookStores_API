import { z } from "zod";

export const createProductSchema = z.object({
   autor: z.string().min(3),
   codigo: z.string().min(3),
   estoque: z.number().int().nonnegative(),
   isbn: z.string().min(10),
   preco: z.number().positive(),
   titulo: z.string().min(3)
});

export const updateProductSchema = createProductSchema.partial();

