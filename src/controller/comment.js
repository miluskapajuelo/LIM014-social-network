import { fs } from '../configFirebase.js';
import { getNameUser } from './post.js';

const dateP = firebase.firestore.FieldValue.serverTimestamp();
export const getComment = ((idPost, callback) => {
  fs.collection('comments')
    .where('postId', '==', idPost)
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
});

export const addCommentBd = (id, inputcomment) => getNameUser().then((msg) => {
  fs.collection('comments').add({
    publication: inputcomment,
    uid: firebase.auth().currentUser.uid,
    postId: id,
    datePost: dateP,
    user: msg,
  });
});

export const removeCommentBd = (id) => {
  fs.collection('comments')
    .doc(id)
    .delete()
    .then(() => {
      alert('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export const updateCommentBd = (id, changedComment) => firebase
  .firestore()
  .collection('comments')
  .doc(id)
  .update({ publication: changedComment })
  .then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });
