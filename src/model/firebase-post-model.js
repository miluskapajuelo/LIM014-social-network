const fs = firebase.firestore();

export const getNameUser = () => new Promise((resolve) => {
  if (firebase.auth().currentUser.displayName === null) {
    const prueba = fs.collection('users').get();
    prueba.then((omg) => {
      omg.forEach((data) => {
        if (data.data().id === firebase.auth().currentUser.uid) {
          resolve(data.data().user);
        }
      });
    });
  } else {
    resolve(firebase.auth().currentUser.displayName);
  }
});
export default function addPost(post) {
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  getNameUser().then((msg) => {
    fs.collection('post').add({
      publication: post,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      datePost: dateP,
      user: msg,
    });
  });
}

export function removePost(id) {
  const remove = document.querySelectorAll(`.removeBtn-${id}`);
  remove.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      e.preventDefault();
      // Modal, estás segura que quieres eliminar el post?
      fs.collection('post')
        .doc(id)
        .delete()
        .then(() => {
          alert('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });
  });
}

export function updatePost(id) {
  const updates = document.querySelectorAll(`.editBtn-${id}`);
  updates.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      console.log('holi Katty');
      e.preventDefault();
      fs.collection('post').doc(id).update({
        publication: 'holi eunice',
      });
    });
  });
}
