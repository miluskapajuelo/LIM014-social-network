import { getNameUser } from './firebase-post-model.js';

const fs = firebase.firestore();

export function addComments(idpost) {
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  const noteComment = document.querySelectorAll(`.btn-add-comment-${idpost}`);
  const inputcomment = document.querySelectorAll(`.input-new-comment-${idpost}`);

  for (let i = 0; i < noteComment.length; i += 1) {
    noteComment[i].addEventListener('click', (e) => {
      e.preventDefault();
      getNameUser().then((msg) => {
        fs.collection('comments').add({
          comment: inputcomment[i].value,
          uid: firebase.auth().currentUser.uid,
          postId: idpost,
          datePost: dateP,
          user: msg,
        }).then(() => {
          inputcomment[i].value = '';
        });
      });
    });
  }
}
/* export function removeComment(id) {
  const remove = document.querySelectorAll(`.removeBtnComment-${id}`);
  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', (e) => {
      e.preventDefault();
      fs.collection('comments').doc(id).delete().then(() => {
        alert('Comment removing');
      })
        .catch((err) => {
          console.log('Error removing Comment: ', err);
        });
    });
  }
} */

export function removeComment(id) {
  const remove = document.querySelectorAll(`.removeBtnComment-${id}`);

  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', (e) => {
      e.preventDefault();
      fs.collection('comments').doc(id).delete().then(() => {
        alert('Comment removing');
      })
        .catch((err) => {
          console.log('Error removing Comment: ', err);
        });
    });
  }
}

export const updateComment = (id, changedComment) => firebase.firestore().collection('comments')
  .doc(id)
  .update({ comment: changedComment });
