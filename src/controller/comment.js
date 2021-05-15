import { getUser } from './login.js';

const dateP = firebase.firestore.FieldValue.serverTimestamp();
export const getComment = ((idPost, callback) => {
  firebase.firestore().collection('comments')
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

export const addCommentBd = ((id, inputcomment) => {
  firebase.firestore().collection('comments').add({
    publication: inputcomment,
    uid: getUser().uid,
    postId: id,
    datePost: dateP,
    user: getUser().displayName,
  });
});

export const removeCommentBd = (id) => {
  firebase.firestore().collection('comments').doc(id).delete();
};

export const updateCommentBd = (id, changedComment) => firebase.firestore()
  .collection('comments')
  .doc(id)
  .update({ publication: changedComment })
  .then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });
