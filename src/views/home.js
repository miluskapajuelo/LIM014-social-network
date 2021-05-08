import { signOut } from '../controller/login.js';
import { postsView } from './posts.js';
import { getPost, getNameUser, getInfo } from '../controller/post.js';

const showPosts = (elm) => {
  getPost((post) => {
    elm.innerHTML = '';
    post.forEach((doc) => {
      elm.appendChild(postsView(doc));
    });
  });
};
const filterPost = ((value, elm) => {
  getPost((post) => {
    elm.innerHTML = '';
    post.forEach((doc) => {
      if (doc.data().publication.toLowerCase().search(value.toLowerCase()) !== -1) {
        elm.appendChild(postsView(doc));
      }
    });
  });
});

const Home = (() => {
  const viewHome = `<header id="main-header" class ="header">
    <nav class="nav-list">
        <div class="logo-nav">
            <a href="#" class="logo">W__coding</a>
        </div>
        <ul>
            <li id="Profile">
              <button><span style="margin-right: 5px;" class="material-icons">account_circle</span>Profile</button>
            </li>
            <li id="logOut"><button type="button" class="log-out"><span style="margin-right: 5px;" class="material-icons">logout</span>Log Out</button>
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
        <h2 class="className"></h2>
            <p class="classInfo"></p>
        </div>
    </header>
    <section class="best-post">
        <h3>Best Post</h3>
        <div class="posting show">
            <div class="more">
                <div class="img-post">
                    <img style="height: 30px; width: 30px;" src="./img/undraw_female_avatar_w3jk.svg" alt="Profile-pic">
                    <p class="more-name">Fulanita de perez</p>
                </div>
                <button class="btn-more" type="button">...</button>
                <div class="btn-list hide">
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
            <input type="text" id="search" placeholder="#Share a topic">
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
  const home = document.querySelector('.main-login');
  home.innerHTML = '';
  home.innerHTML = viewHome;
  const commentPublic = home.querySelector('#commentPublish');
  const btnSearch = home.querySelector('#search');
  showPosts(commentPublic);

  btnSearch.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      filterPost(e.target.value, commentPublic);
    } else {
      showPosts(commentPublic);
    }
  });

  const commentPublish = home.querySelector('#commentPublish');
  showPosts(commentPublish);

  return home;
});

const eventInitHome = (() => {
  const burger = document.querySelector('.burger');
  const list = document.querySelector('.nav-list ul');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    list.classList.toggle('open');
  });
});

const nameUser = (() => {
  const nombre = document.querySelector('.className');
  getNameUser().then((name) => {
    nombre.textContent = name;
  });
});
const infoUser = (() => {
  const informacion = document.querySelector('.classInfo');
  getInfo().then((info) => {
    informacion.textContent = info;
  });
});
const logOut = (() => {
  const btnLogOut = document.querySelector('.log-out');
  btnLogOut.addEventListener('click', () => {
    signOut().then(() => {
      window.location.hash = '#/login';
    });
    console.log(signOut());
  });
});
export {
  Home, eventInitHome, nameUser, infoUser, logOut,
};
