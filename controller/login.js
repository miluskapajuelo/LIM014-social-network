// Sign In with credentials created
export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// Do new user, receives id and info
export const createUser = (id, info) => {
  return firebase.firestore()
    .collection('users').doc(id).set({
      id,
      info,
    });
};
// Create user
export const createUserBD = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Sign in with Google
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Sign in with Facebook
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
// Sign out
export const signOut = () => firebase.auth().signOut();

// Get current user
export const getUser = () => firebase.auth().currentUser;
