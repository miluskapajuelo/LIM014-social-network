// Iniciar sesion con credenciales creadas
export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

/* Crea usuario, el documento recibe el nombre del id */
export const createUser = (id, info) => firebase.firestore()
  .collection('users').doc(id).set({
    id,
    info,
  });
// Crear usuario
export const createUserBD = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
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

// Verificar correo
export const verifEmail = () => {
  const configuration = {
    url: 'http://localhost:5000/',
  };
  auth.currentUser.sendEmailVerification(configuration).then(() => {
  // Email sent.
  }).catch((error) => {
    console.log(error);
  });
};
export const getUser = () => firebase.auth().currentUser;

export const updateProfile = (username) => {
  getUser().updateProfile({
    displayName: username,
  }).then(() => {
  }).catch((error) => {
    console.log(error);
  });
};
