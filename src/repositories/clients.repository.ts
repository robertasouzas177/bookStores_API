import { db } from '../config/firebase';

class ClientsRepository {

  async findAll() {

    const snapshot = await db.collection('clientes').get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async findById(id: string) {

    const doc = await db.collection('clientes').doc(id).get();

    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      ...doc.data()
    };
  }

  async create(data: any) {

    const docRef = await db.collection('clientes').add(data);

    return {
      id: docRef.id,
      ...data
    };
  }
  async updatePoints(clientId: string, points: number) {

  const clientRef = db.collection('clientes').doc(clientId);

  const doc = await clientRef.get();

  if (!doc.exists) {
    throw new Error('Cliente não encontrado');
  }

  const clientData = doc.data();

  const currentPoints = clientData?.pontos || 0;

  await clientRef.update({
    pontos: currentPoints + points
  });
}

}

export default new ClientsRepository();