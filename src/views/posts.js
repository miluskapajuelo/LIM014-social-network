import { countLikesPost } from '../controller/post.js';
import { updatePost, likePost } from '../model/Show_Post_Comment.js';
import { commentView } from './comment.js';
import { getComment, addCommentBd } from '../controller/comment.js';
import { confirmDeletePost } from '../model/Delete_Post_Comment.js';
import { getUser } from '../controller/login.js';

const showComment = (elm, idPost, cmElm) => {
  getComment(idPost, (post) => {
    elm.innerHTML = '';
    cmElm.innerHTML = post.length;
    post.forEach((doc) => {
      elm.appendChild(commentView(doc));
    });
  });
};

const postsView = ((doc) => {
  const likepost = doc.data().likePost;
  const countLikes = likepost.length;
  const divElem = document.createElement('div');
  divElem.classList.add('posting');
  const viewPosts = `<div class="more">
        <div class="img-post">
            <img id="imgUser" style="height: 30px; width: 30px; border-radius: 90px;" src=${doc.data().photoURL} alt="Profile-pic">
            <div class="more-group">
            <p class="more-name">${doc.data().user}</p>
            <p class="more-date">posted on ${doc.data().datePost}</p>
            </div>
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
            <p><span>${countLikes}</span> likes</p>
            <p><span class="countCm"></span> comment</p>
        </section>
        <section class="btn-group">
            <button id="btn-like" class="btn-like omg" type="button">
                <span class="material-icons">thumb_up_off_alt</span> Like</button>
            <button type="button" class="btn-cm omg"><span class="material-icons">chat_bubble_outline</span>Comments</button>
        </section>
    </section>
    <section class="show-comments show">
        <section class="area-cm">
        <textarea name="" class="input-new-comment" id="" cols="30" rows="10"></textarea>
        <button type="button" class="btn-add-comment"><span class="material-icons">arrow_forward_ios</span></button>
        </section>
        <section id="comment-article">
        </section>
    </section>`;
  divElem.innerHTML = viewPosts;

  // queryselector of buttons in divElement
  const elm = divElem.querySelector('.more > .btn-more');
  const btnList = divElem.querySelector('.more > .btn-list');
  const btnCm = divElem.querySelector('.btn-cm');
  const showCm = divElem.querySelector('.show-comments');
  const btnRemove = divElem.querySelector('.removeBtn');
  const btnUpdate = divElem.querySelector('.editBtn');
  const btnLike = divElem.querySelector('.btn-like');
  const btnAddComment = divElem.querySelector('.btn-add-comment');
  const commentArticle = showCm.querySelector('#comment-article');
  // const redes = divElem.querySelector('.material-icons');
  btnCm.addEventListener('click', () => {
    showCm.classList.toggle('show');
  });

  // function no limited by logged in user
  btnLike.addEventListener('click', () => {
    likePost(doc);
  });
  // get number of likes per doc
  countLikesPost(doc, countLikes);

  // functions limited by logged in user
  if (doc.data().uid === getUser().uid) {
    elm.addEventListener('click', () => {
      btnList.classList.toggle('hide');
    });
    btnRemove.addEventListener('click', () => {
      confirmDeletePost(doc);
    });
    btnUpdate.addEventListener('click', () => {
      updatePost(doc);
    });
  }
  btnAddComment.addEventListener('click', () => {
    const commentEdit = divElem.querySelector('.input-new-comment').value;
    const idUser = firebase.auth().currentUser.uid;
    const dateP = firebase.firestore.FieldValue.serverTimestamp();
    const nameDisplay = getUser().displayName;
    if (commentEdit.length) {
      addCommentBd(doc.id, commentEdit, idUser, dateP, nameDisplay);
      divElem.querySelector('.input-new-comment').value = '';
    }
  });

  const countElm = divElem.querySelector('.countCm');
  showComment(commentArticle, doc.id, countElm);

  return divElem;
});

export { postsView };
