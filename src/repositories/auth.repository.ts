import { db } from '../config/firebase';

class AuthRepository {

  async findByEmail(email: string) {

    const snapshot = await db
      .collection('usuariosAPI')
      .where('email', '==', email)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0]!;

    return {
      id: doc.id,
      ...doc.data()
    };
  }
}

export default new AuthRepository();