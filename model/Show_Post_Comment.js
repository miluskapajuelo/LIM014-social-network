import {
  addPost,
  updatePostBd,
  likePostBd,
} from '../controller/post.js';
import { updateCommentBd } from '../controller/comment.js';
import { getUser } from '../controller/login.js';
// Create Post
export const createPost = () => {
  const post = document.getElementById('input-new-note');
  const email = getUser().email;
  const userUid = getUser().uid;
  const userName = getUser().displayName;
  const photoUser = getUser().photoURL;
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  const dateTime = new Date().toLocaleDateString('es-AR', options);
  post.addEventListener('keyup', () => {
    const notePost = document.getElementById('btn-add-note');
    notePost.style.background = 'rgba(23, 129, 161, 0.2)';
    notePost.addEventListener('click', () => {
      if (post.value.length) {
        addPost(post.value, dateTime, email, userUid, userName, photoUser, dateP);
        document.getElementById('input-new-note').value = '';
        notePost.style.background = '#e7e7e7';
      }
    });
  });
};
// Edit Post by Modal
function showModal(doc) {
  const modalMode = document.getElementById('modal-mode');
  const modalWindow = document.getElementById('modal-window');
  modalMode.classList.toggle('hide');
  modalWindow.innerHTML = `<section class="headerPost"><h3>Edit</h3>
  <button title="Close" class="modal-close">Close</button></section> 
  <section id="body-modal" class="contentGeneral">
      <h5 class="nameP" id="modal-username">${doc.data().user}</h5>
      <textarea id="input-edit-note">${doc.data().publication}</textarea>
      <button id="btn-edit-note">Save</button>
      </section>
      `;
  const btnCloseModal = modalWindow.querySelector('.modal-close');

  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalMode.classList.toggle('hide');
  });
}
// Edit Post
export function updatePost(doc) {
  showModal(doc);
  const modalMode = document.getElementById('modal-mode');
  const button = document.getElementById('btn-edit-note');
  button.addEventListener('click', () => {
    const postEdit = document.getElementById('input-edit-note').value;
    updatePostBd(doc.id, postEdit);
    modalMode.classList.toggle('hide');
  });
}
// Edit Comment
export function updateComment(doc) {
  showModal(doc);
  const modalMode = document.getElementById('modal-mode');
  const button = document.getElementById('btn-edit-note');
  button.addEventListener('click', () => {
    const postEdit = document.getElementById('input-edit-note').value;
    updateCommentBd(doc.id, postEdit);
    modalMode.classList.toggle('hide');
  });
}
// Save User in Array
export function likePost(doc) {
  const array = doc.data().likePost;
  const getName = getUser().displayName;
  if (array.length > 0) {
    const user = array.filter((element) => element === getName);
    const i = array.indexOf(user.join());
    if (i !== -1) {
      array.splice(i, 1);
    } else {
      array.push(getName);
    }
  } else {
    array.push(getName);
  }
  return likePostBd(doc, array);
}
