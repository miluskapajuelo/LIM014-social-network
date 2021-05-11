import { removePostBd } from '../controller/post.js';
import { updatePost, likePost } from '../model/firebase-post.js';
import { commentView } from './comment.js';
import { getComment, addCommentBd } from '../controller/comment.js';

const showComment = (elm, idPost, cmElm) => {
  getComment(idPost, (post) => {
    elm.innerHTML = '';
    cmElm.textContent = post.length;
    post.forEach((doc) => {
      elm.appendChild(commentView(doc));
    });
  });
};

const postsView = ((doc) => {
  const likepost = doc.data().likePost;
  const divElem = document.createElement('div');
  divElem.classList.add('posting');
  const viewPosts = `<div class="more">
        <div class="img-post">
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
            <p><span>${likepost.length}</span> likes</p>
            <p><span class="countCm"></span> comment</p>
        </section>
        <section class="btn-group">
            <button id="btn-like" class="btn-like omg" type="button">
                <span class="material-icons">thumb_up_off_alt</span> Like</button>
            <button type="button" class="btn-cm omg"><span class="material-icons">chat_bubble_outline</span> Comments</button>
        </section>
    </section>
    <section class="show-comments show">
        <section class="area-cm">
        <textarea name="" class="input-new-comment" id="" cols="30" rows="10"></textarea>
        <button type="button" class="btn-add-comment">Post</button>
        </section>
        <section id="comment-article">
        </section>
    </section>`;
  divElem.innerHTML = viewPosts;
  const elm = divElem.querySelector('.more > .btn-more');
  const btnList = divElem.querySelector('.more > .btn-list');
  const btnCm = divElem.querySelector('.btn-cm');
  const showCm = divElem.querySelector('.show-comments');
  const btnRemove = divElem.querySelector('.removeBtn');
  const btnUpdate = divElem.querySelector('.editBtn');
  const btnLike = divElem.querySelector('.btn-like');

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

  btnLike.addEventListener('click', () => {
    likePost(doc);
  });
  const btnAddComment = divElem.querySelector('.btn-add-comment');
  btnAddComment.addEventListener('click', () => {
    const commentEdit = divElem.querySelector('.input-new-comment').value;
    addCommentBd(doc.id, commentEdit);
    divElem.querySelector('.input-new-comment').value = '';
  });
  const commentArticle = showCm.querySelector('#comment-article');
  const countElm = divElem.querySelector('.countCm');
  showComment(commentArticle, doc.id, countElm);
  return divElem;
});

export { postsView };
