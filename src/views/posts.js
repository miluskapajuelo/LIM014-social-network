import { removePostBd } from '../controller/post.js';
import { updatePost } from '../model/firebase-post.js';

const postsView = ((doc) => {
  const divElem = document.createElement('div');
  divElem.classList.add('posting');
  const viewPosts = `<div class="more">
        <div>
            <img style="height: 30px; width: 30px;" src="./img/undraw_female_avatar_w3jk.svg" alt="Profile-pic">
            <p class="more-name">${doc.data().user}</p>
        </div>
        <button class="btn-more" type="button">...</button>
        <div class="btn-list hide">
          <button class="editBtn">Update</button>
          <button class="removeBtn">Delete</button>
      </div>
    </div>
    <section class="body-posting">
        <p>${doc.data().publication}</p>
    </section>
    <section class="btn-posting">
        <section class="btn-total">
            <p><span>12</span> likes</p>
            <p><span>102</span> comment</p>
        </section>
        <section class="btn-group">
            <button class="btn-like" type="button">
                <span class="material-icons">thumb_up_off_alt</span> Like</button>
            <button type="button" class="btn-cm"><span class="material-icons">chat_bubble_outline</span> Comments</button>
        </section>
    </section>
    <section class="show-comments show">
        <section class="area-cm">
        <textarea name="" class="input-new-comment-${doc.id}" id="" cols="30" rows="10"></textarea>
        <button type="button" class="btn-add-comment-${doc.id}">Post</button>
        </section>
        <article class="one-cm">
        </article>
    </section>`;
  divElem.innerHTML = viewPosts;
  const elm = divElem.querySelector('.more > .btn-more');
  const btnList = divElem.querySelector('.more > .btn-list');
  const btnCm = divElem.querySelector('.btn-cm');
  const showCm = divElem.querySelector('.show-comments');
  const btnRemove = divElem.querySelector('.removeBtn');
  const btnUpdate = divElem.querySelector('.editBtn');

  btnCm.addEventListener('click', () => {
    showCm.classList.toggle('show');
  });

  if (doc.data().uid === firebase.auth().currentUser.uid) {
    elm.addEventListener('click', () => {
      btnList.classList.toggle('hide');
    });
    btnRemove.addEventListener('click', () => {
      removePostBd(doc.id);
    });
    btnUpdate.addEventListener('click', () => {
      updatePost(doc);
    });
  }
  return divElem;
});

export { postsView };
