import salesRepository from '../repositories/sales.repository';
import productsRepository from '../repositories/products.repository';
import clientsRepository from '../repositories/clients.repository';

class SalesService {
  async findByClient(clientId: string) {

  return await salesRepository.findByClient(clientId);
  }
  async findAll() {

    return await salesRepository.findAll();
  }

  async findById(id: string) {

    const sale = await salesRepository.findById(id);

    if (!sale) {
      throw new Error('Venda não encontrada');
    }

    return sale;
  }

  async create(data: any) {

    let totalBruto = 0;
    let desconto = 0;

    for (const item of data.itens) {

      totalBruto += item.preco * item.quantidade;

      await productsRepository.updateStock(
        item.produtoId,
        item.quantidade
      );
    }
    

    /*
      Fidelidade
    */

    if (data.clienteId) {

      const client = await clientsRepository.findById(data.clienteId);

      if (client) {

        const pontos = (client as any).pontos || 0;

        if (pontos >= 100) {
          desconto = totalBruto * 0.10;
        }

        await clientsRepository.updatePoints(
          data.clienteId,
          10
        );
      }
    }

    const totalFinal = totalBruto - desconto;

    const saleData = {
      ...data,
      desconto,
      totalBruto,
      totalFinal,
      data: new Date()
    };

    return await salesRepository.create(saleData);
  }
}

export default new SalesService();