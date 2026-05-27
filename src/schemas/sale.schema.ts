import { z } from "zod";

const saleItemSchema = z.object({
  produtoId: z.string().min(1, {
    message: "Produto obrigatório"
  }),

  titulo: z.string().min(1, {
    message: "Título obrigatório"
  }),

  preco: z.number().positive({
    message: "Preço inválido"
  }),

  quantidade: z.number().int().positive({
    message: "Quantidade inválida"
  })
});

export const createSaleSchema = z.object({

  clienteId: z.string().optional(),

  clienteNome: z.string().optional(),

  formaPagamento: z.string().min(1, {
    message: "Forma de pagamento obrigatória"
  }),

  vendedorId: z.string().min(1, {
    message: "Vendedor obrigatório"
  }),

  vendedorNome: z.string().min(1, {
    message: "Nome vendedor obrigatório"
  }),

  itens: z.array(saleItemSchema).min(1, {
    message: "Venda deve possuir ao menos 1 item"
  })
});