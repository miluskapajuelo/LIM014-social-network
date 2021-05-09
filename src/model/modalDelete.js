import { removePostBd } from '../controller/post.js';
import { removeCommentBd } from '../controller/comment.js';

function showModalDelete() {
  const modalMode = document.getElementById('modal-mode');
  const modalWindow = document.getElementById('modal-window');
  modalMode.classList.toggle('hide');
  modalWindow.innerHTML = `<section class="headerPost"><h3>Delete</h3>
    </section> 
    <section id="body-modal" class="contentGeneralDelete">
        <h5 class="nameP" id="modal-username">If you delete this post, you will not be able to retrieve its content.</h5>
        <section class="buttonconfirm">
        <button id="btn-confirmar">Delete</button>
        <button id="btn-cancel">Cancel</button>
        </section>
        </section>
        `;
  const btnCancel = modalWindow.querySelector('#btn-cancel');
  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    modalMode.classList.toggle('hide');
  });
}
export function confirmDeletePost(doc) {
  showModalDelete();
  const modalMode = document.getElementById('modal-mode');
  const btnConfirm = document.querySelector('#btn-confirmar');
  btnConfirm.addEventListener('click', () => {
    removePostBd(doc.id);
    modalMode.classList.toggle('hide');
  });
}
export function confirmDeleteComment(doc) {
  showModalDelete();
  const modalMode = document.getElementById('modal-mode');
  const btnConfirm = document.querySelector('#btn-confirmar');
  btnConfirm.addEventListener('click', () => {
    removeCommentBd(doc.id);
    modalMode.classList.toggle('hide');
  });
}
