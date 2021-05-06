import addPost, { removePost, updatePost } from './firebase-post-model.js';
import { postsView } from '../views/posts.js';
import { auth, fs } from '../configFirebase.js';

const showPosts = (() => {
  const commentPublish = document.getElementById('commentPublish');
  fs.collection('post')
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      commentPublish.innerHTML = '';
      querySnapshot.forEach((doc) => {
        commentPublish.innerHTML += postsView(doc);
        const elm = document.querySelectorAll('.more > .btn-more');
        const btnList = document.querySelectorAll('.more > .btn-list');

        for (let i = 0; i < elm.length; i += 1) {
          elm[i].addEventListener('click', () => {
            btnList[i].classList.toggle('hide');
          });
        }
      });
    });
});
const createPost = (() => {
  const notePost = document.getElementById('btn-add-note');

  notePost.addEventListener('click', () => {
    const post = document.getElementById('input-new-note').value;
    addPost(post);
    document.getElementById('input-new-note').value = '';
  });
});
const removeandUpdate = (() => {
  fs.collection('post').where('uid', '==', auth.currentUser.uid)
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        updatePost(doc.id, doc.data().publication);
        removePost(doc.id);
      });
    });
});

export { createPost, showPosts, removeandUpdate };
