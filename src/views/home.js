import addPost, { removePost, updatePost } from '../model/firebase-post-model.js';

export default () => {
  const viewRegister = `<header id="main-header" class ="header">
  <nav class="nav-list">
      <div class="logo-nav">
          <a href="#" class="logo">W__coding</a>
      </div>
      <ul>
          <li id="Profile">
            <a href="#"><span class="material-icons">account_circle</span>Profile</a>
          </li>
          <li id="logOut"><a href="#"><span class="material-icons">logout</span>Log Out</a>
          </li>
      </ul>
    <div class="burger">
        <div class="line-burger"></div>
    </div>
  </nav>
</header>
<section class="grid">
  <header class="profile-header">
      <div class="profile">
          <img style="width: 100px; height: 100px;" src="./img/undraw_female_avatar_w3jk.svg" alt="profile" srcset="">
      </div>
      <div class="profile-name">
          <h2>Fulanita Pérez</h2>
          <p>Frontend developer</p>
      </div>
  </header>
  <section class="best-post">
      <h3>Best Post</h3>
      <div class="posting show">
          <div class="more">
              <div>
                  <img style="height: 30px; width: 30px;" src="./img/undraw_female_avatar_w3jk.svg" alt="Profile-pic">
                  <p class="more-name">Fulanita pérez</p>
              </div>
              <button class="btn-more" type="button">...</button>
              <div class="btn-list">
                  <button>Update</button>
                  <button>Delete</button>
              </div>
          </div>
          <section class="body-posting">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, est? Tempore</p>
          </section>
          <section class="btn-posting">
              <section class="btn-total">
                  <p><span>20</span> likes</p>
                  <p><span>102</span> comment</p>
              </section>
              <section class="btn-group">
                  <button type="button" class="btn-like">
                      <span class="material-icons">thumb_up</span>Like</button>
                  <button type="button" class="btn-cm"><span class="material-icons">chat_bubble_outline</span> Comments</button>
              </section>
          </section>
          <section class="show-comments">
              <section class="area-cm">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <button type="button">Post</button>
              </section>
          </section>
      </div>
  </section>
  <section class="search">
      <textarea id="input-new-note" placeholder="What do you want to share?" name="comment" cols="30" rows="10"></textarea>
      <div class="btn-group">
          <button class="btn" type="button">Photo</button>
          <button id="btn-add-note" class="btn" type="button">Share</button>
      </div>
  </section>
  <section class="search-body">
      <label for="search" class="search">
          <input type="text" id="search">
          <span>
              <span class="material-icons">
                  search
                  </span>
          </span>
      </label>
      <div class="buttom-nav">
          <button type="button" class="active">Latest</button>
          <button type="button">Best top</button>
      </div>
      <div id="commentPublish" class="posting-history">
          
      </div>
  </section>
</section>
`;
  const reg = document.getElementById('main-login');
  reg.innerHTML = '';
  reg.innerHTML = viewRegister;
  const notePost = document.getElementById('btn-add-note');

  const burger = document.querySelector('.burger');
  const list = document.querySelector('.nav-list ul');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    list.classList.toggle('open');
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      notePost.addEventListener('click', () => {
        const post = document.getElementById('input-new-note').value;
        addPost(post).then((docRef) => {
          console.log(docRef.id);
          document.getElementById('input-new-note').value = '';
        }).catch((err) => {
          console.error('Error adding document: ', err);
        });
      });
      firebase.firestore().collection('post')
        .orderBy('datePost', 'desc')
        .onSnapshot((querySnapshot) => {
          const commentPublish = document.getElementById('commentPublish');
          commentPublish.innerHTML = '';
          querySnapshot.forEach((doc) => {
            commentPublish.innerHTML += `<div class="posting show">
            <div class="more">
                <div>
                    <img style="height: 30px; width: 30px;" src="./img/undraw_female_avatar_w3jk.svg" alt="Profile-pic">
                    <p class="more-name">Fulanita pérez</p>
                </div>
                <button class="btn-more" type="button">...</button>
                <div class="btn-list">
                  <button class="editBtn-${doc.id}">Update</button>
                  <button class="removeBtn-${doc.id}">Delete</button>
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
            <section class="show-comments">
                <section class="area-cm">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="button">Post</button>
                </section>
                <article class="one-cm">
                    <div class="head-cm">
                        <h5 class="name-cm">Pycode</h5>
                        <button class="btn-more" type="button">...</button>
                        <select class="btn-list" size="2">
                            <option value="0">Update</option>
                            <option value="2">Delete</option>
                        </select>
                    </div>
                    <p>#Phyton ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore temporibus rerum saepe hic ex unde ducimus dicta velit sequi?</p>
                </article>
                <article class="one-cm">
                    <div class="head-cm">
                        <h5 class="name-cm">Imran White</h5>
                        <button class="btn-more" type="button">...</button>
                    </div>
                    <p>Tengo que hacer mi Salat</p>
                </article>
            </section>
        </div>`;
          });
          querySnapshot.forEach((doc) => {
            if (doc.data().uid === firebase.auth().currentUser.uid) {
              removePost(doc.id);
              updatePost(doc.id);
            }
          });
        });
    } else {
      alert('necesitas loguearte para hacer esta operación');
      window.location.hash = '#/login';
    }
  });
  return reg;
};
