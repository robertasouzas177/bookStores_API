import { db } from '../config/firebase';

class SalesRepository {

  async findAll() {

    const snapshot = await db.collection('vendas').get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async findById(id: string) {

    const doc = await db.collection('vendas').doc(id).get();

    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      ...doc.data()
    };
  }

  async create(data: any) {

    const docRef = await db.collection('vendas').add(data);

    return {
      id: docRef.id,
      ...data
    };
  }
  async findByClient(clientId: string) {

  const snapshot = await db
    .collection('vendas')
    .where('clienteId', '==', clientId)
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
}

export default new SalesRepository();