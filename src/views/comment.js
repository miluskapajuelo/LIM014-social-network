import { removeCommentBd } from '../controller/comment.js';
import { updateComment } from '../model/firebase-post.js';

export const commentView = ((doc) => {
  const divElem2 = document.createElement('div');
  divElem2.classList.add('one-cm');
  const viewComment = `
              <div class="head-cm">
                  <h5 class="name-cm">${doc.data().user}</h5>
                  <button class="btn-more" type="button">...</button>
                  <div class="btn-list hide">
                      <button class="editBtnComment">Update</button>
                      <button class="removeBtnComment">Delete</button>
                  </div>
              </div>
                    <p>${doc.data().publication}</p>`;
  divElem2.innerHTML = viewComment;
  const btnRemoveCm = divElem2.querySelector('.removeBtnComment');
  const btnUpdateCm = divElem2.querySelector('.editBtnComment');

  if (doc.data().uid === firebase.auth().currentUser.uid) {
    btnRemoveCm.addEventListener('click', () => {
      removeCommentBd(doc.id);
    });
    btnUpdateCm.addEventListener('click', () => {
      updateComment(doc);
    });
  }
  return divElem2;
});
