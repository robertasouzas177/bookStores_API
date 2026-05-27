import { db } from '../config/firebase';

class ProductsRepository {
  async create(data: any) {

  const docRef = await db
    .collection('produtos')
    .add(data);

  return {
    id: docRef.id,
    ...data
  };
  }
  async findAll() {

    const snapshot = await db.collection('produtos').get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async findById(id: string) {

    const doc = await db.collection('produtos').doc(id).get();

    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      ...doc.data()
    };
  }
  async updateStock(productId: string, quantity: number) {

  const productRef = db.collection('produtos').doc(productId);

  const doc = await productRef.get();

  if (!doc.exists) {
    throw new Error('Produto não encontrado');
  }

  const productData = doc.data();

  const currentStock = productData?.estoque || 0;

  if (currentStock < quantity) {
    throw new Error('Estoque insuficiente');
  }

  await productRef.update({
    estoque: currentStock - quantity
  });
}

async update(id: string, data: any) {

  const docRef =
    db.collection('produtos').doc(id);

  await docRef.update(data);

  const updatedDoc = await docRef.get();

  return {
    id: updatedDoc.id,
    ...updatedDoc.data()
  };
}

}

export default new ProductsRepository();