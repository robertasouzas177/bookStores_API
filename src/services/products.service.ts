import productsRepository from '../repositories/products.repository';

class ProductsService {
  async create(data: any) {

  const productData = {
    ...data,
    createdAt: new Date()
  };

  return await productsRepository.create(productData);
  }
  async findAll() {

    const products = await productsRepository.findAll();

    return products;
  }

  async findById(id: string) {

    const product = await productsRepository.findById(id);

    if (!product) {
      throw new Error('Produto não encontrado');
    }

    return product;
  }

  async update(id: string, data: any) {

  return await productsRepository.update(id, data);
}

}

export default new ProductsService();