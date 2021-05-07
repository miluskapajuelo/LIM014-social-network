import { addPost } from './firebase-post-model.js';
// import { postsView } from '../views/posts.js';
// import { auth, fs } from '../configFirebase.js';

const createPost = (() => {
  const notePost = document.getElementById('btn-add-note');

  notePost.addEventListener('click', () => {
    const post = document.getElementById('input-new-note').value;
    addPost(post);
    document.getElementById('input-new-note').value = '';
  });
});
/* const removeandUpdate = (() => {
  fs.collection('post').where('uid', '==', auth.currentUser.uid)
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        updatePost(doc.id, doc.data().publication);
        removePost(doc.id);
      });
    });
}); */

export { createPost };
