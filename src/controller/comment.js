import { fs } from '../configFirebase.js';
import { getUser } from './login.js';

const dateP = fs.FieldValue.serverTimestamp();
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

export const addCommentBd = ((id, inputcomment) => {
  fs.collection('comments').add({
    publication: inputcomment,
    uid: getUser().uid,
    postId: id,
    datePost: dateP,
    user: getUser().displayName,
  });
});

export const removeCommentBd = (id) => {
  fs.collection('comments').doc(id).delete();
};

export const updateCommentBd = (id, changedComment) => fs
  .collection('comments')
  .doc(id)
  .update({ publication: changedComment })
  .then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });
