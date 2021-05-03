// Iniciar sesion con credenciales creadas
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// Crear usuario
export const createUserBD = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
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
    url: 'http://localhost:5000/#/login',
  };
  firebase.auth().currentUser.sendEmailVerification(configuration).then(() => {
  // Email sent.
  }).catch((error) => {
    console.log(error);
  });
};
