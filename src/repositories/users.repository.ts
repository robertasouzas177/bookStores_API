import { db } from '../config/firebase';

class UsersRepository {

  async create(data: any) {

    const docRef = await db
      .collection('usuariosAPI')
      .add(data);

    return {
      id: docRef.id,
      ...data
    };
  }

  async findAll() {

    const snapshot = await db
      .collection('usuariosAPI')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
  async update(id: string, data: any) {

  const docRef =
    db.collection('usuariosAPI').doc(id);

  await docRef.update(data);

  const updatedDoc = await docRef.get();

  return {
    id: updatedDoc.id,
    ...updatedDoc.data()
  };
}
}

export default new UsersRepository();