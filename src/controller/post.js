import { auth, fs } from '../configFirebase.js';
import { removeCommentBd } from './comment.js';

export const getInfo = () => new Promise((resolve) => {
  const infodefault = 'Frontend developer';
  if (auth.currentUser.displayName === null) {
    const prueba = fs.collection('users').get();
    prueba.then((omg) => {
      omg.forEach((data) => {
        if (data.data().id === auth.currentUser.uid) {
          resolve(data.data().info);
        }
      });
    });
  } else {
    resolve(infodefault);
  }
});

export const getNameUser = () => new Promise((resolve) => {
  if (auth.currentUser.displayName === null) {
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

export const getPost = ((callback) => {
  fs.collection('post')
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
});

export const addPost = ((post) => {
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  getNameUser().then((msg) => {
    fs.collection('post').add({
      publication: post,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      datePost: dateP,
      user: msg,
      likePost: [],
    });
  });
});

export const removePostBd = ((id) => {
  fs.collection('post').doc(id).delete()
    .then(() => {
      alert('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
  const delateCm = fs.collection('comments').where('postId', '==', id).get();
  delateCm.then((omg) => {
    omg.forEach((cm) => {
      removeCommentBd(cm.id);
    });
  });
});

export const updatePostBd = (id, postEdit) => fs.collection('post').doc(id)
  .update({
    publication: postEdit,
  }).then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });

export const likePostBd = (doc, likeUser) => {
  fs.collection('post').doc(doc.id)
    .update({
      likePost: likeUser,
    }).then(() => {
      console.log('Document successfully liked!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
