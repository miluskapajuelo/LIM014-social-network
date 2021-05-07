import {
  addPost,
  updatePostBd,
  getNameUser,
  likePostBd,
} from "../controller/post.js";
import { updateCommentBd } from "../controller/comment.js";

export const createPost = () => {
  const notePost = document.getElementById("btn-add-note");
  notePost.addEventListener("click", () => {
    const post = document.getElementById("input-new-note").value;
    addPost(post);
    document.getElementById("input-new-note").value = "";
  });
};

function showModal(doc) {
  const modalMode = document.getElementById("modal-mode");
  const modalWindow = document.getElementById("modal-window");
  modalMode.classList.toggle("hide");
  modalWindow.innerHTML = `<section class="headerPost"><h3>Edit</h3>
  <button title="Close" class="modal-close">Close</button></section> 
  <section id="body-modal" class="contentGeneral">
      <h5 class="nameP" id="modal-username">${doc.data().user}</h5>
      <textarea id="input-edit-note">${doc.data().publication}</textarea>
      <button id="btn-edit-note">Save</button>
      </section>
      `;
  const btnCloseModal = modalWindow.querySelector(".modal-close");

  btnCloseModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalMode.classList.toggle("hide");
  });
}

export function updatePost(doc) {
  showModal(doc);
  const modalMode = document.getElementById("modal-mode");
  const button = document.getElementById("btn-edit-note");
  button.addEventListener("click", () => {
    const postEdit = document.getElementById("input-edit-note").value;
    updatePostBd(doc.id, postEdit);
    modalMode.classList.toggle("hide");
  });
}

export function updateComment(doc) {
  showModal(doc);
  const modalMode = document.getElementById("modal-mode");
  const button = document.getElementById("btn-edit-note");
  button.addEventListener("click", () => {
    const postEdit = document.getElementById("input-edit-note").value;
    updateCommentBd(doc.id, postEdit);
    modalMode.classList.toggle("hide");
  });
}

export function likePost(doc) {
  let array = doc.data().likePost;
    getNameUser().then((msg) => {
      if (array.length > 0) {
        const user = array.filter((element) => element === msg);
        let i = array.indexOf(user.join());
        if (i !== -1) {
        array.splice(i, 1);
      } else {
        array.push(msg);
      }}
      else {
      array.push(msg);
  } 
  return likePostBd(doc, array);
  })}

  


