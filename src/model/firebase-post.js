import {
  addPost,
  updatePostBd,
  likePostBd,
} from '../controller/post.js';
import { updateCommentBd } from '../controller/comment.js';
import { getUser } from '../controller/login.js';

export const createPost = () => {
  const post = document.getElementById('input-new-note');
  post.addEventListener('keyup', () => {
    const notePost = document.getElementById('btn-add-note');
    notePost.style.background = 'rgba(23, 129, 161, 0.2)';
    notePost.addEventListener('click', () => {
      if (post.value.length) {
        addPost(post.value);
        document.getElementById('input-new-note').value = '';
        notePost.style.background = '#e7e7e7';
      }
    });
  });
};

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
