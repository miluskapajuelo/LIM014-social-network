import { getUser } from '../controller/login.js';
import { updateComment } from '../model/Show_Post_Comment.js';
import { confirmDeleteComment } from '../model/Delete_Post_Comment.js';

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
  const elm = divElem2.querySelector('.btn-more');
  const btnList = divElem2.querySelector('.btn-list');

  if (doc.data().uid === getUser().uid) {
    btnRemoveCm.addEventListener('click', () => {
      confirmDeleteComment(doc);
    });
    btnUpdateCm.addEventListener('click', () => {
      updateComment(doc);
    });
    elm.addEventListener('click', () => {
      btnList.classList.toggle('hide');
    });
  }
  return divElem2;
});
