// Iniciar sesion con credenciales creadas
export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

/* Crea usuario, el documento recibe el nombre del id */
export const createUser = (id, info) => {
  return firebase.firestore()
    .collection('users').doc(id).set({
      id,
      info,
    });
};
// Crear usuario
export const createUserBD = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Inicia sesión con Google
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Inicia sesión con Facebook
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
  // Desconectar
export const signOut = () => firebase.auth().signOut();

export const getUser = () => firebase.auth().currentUser;
