/* Crea usuario, el documento recibe el nombre del id */
export const createUser = (id, user, email, info) => firebase.firestore()
  .collection('users').doc(id).set({
    id,
    user,
    email,
    info,
  });
