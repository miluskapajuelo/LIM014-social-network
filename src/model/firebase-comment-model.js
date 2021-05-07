import { getNameUser } from './firebase-post-model.js';
import { fs, auth } from '../configFirebase.js';

export function addComments() {
  fs.collection('post').orderBy('datePost', 'desc')
    .get().then((omg) => {
      omg.forEach((que) => {
        const noteComment = document.querySelectorAll(`.btn-add-comment-${que.id}`);
        const inputcomment = document.querySelectorAll(`.input-new-comment-${que.id}`);
        const dateP = firebase.firestore.FieldValue.serverTimestamp();

        for (let i = 0; i < noteComment.length; i += 1) {
          noteComment[i].addEventListener('click', (e) => {
            e.preventDefault();
            getNameUser().then((msg) => {
              fs.collection('comments').add({
                comment: inputcomment[i].value,
                uid: auth.currentUser.uid,
                postId: que.id,
                datePost: dateP,
                user: msg,
              }).then(() => {
                inputcomment[i].value = '';
              });
            });
          });
        }
      });
    });
/*   const dateP = firebase.firestore.FieldValue.serverTimestamp();
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
  } */
}
