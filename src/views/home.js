import { signOut, getUser } from '../controller/login.js';
import { postsView } from './posts.js';
import {
  getPost, getInfo, getBestPost,
} from '../controller/post.js';

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

const showBestPosts = (elm) => {
  getBestPost((post) => {
    elm.innerHTML = '';
    post.forEach((doc) => {
      elm.appendChild(postsView(doc));
    });
  });
};

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
            <img style="width: 100px; height: 100px; border-radius: 90px;" src="${getUser().photoURL}" alt="profile" srcset="">
        </div>
        <div class="profile-name">
        <h2 class="className"></h2>
            <p class="classInfo"></p>
        </div>
    </header>
    <section class="best-post">
        <h3>Popular Post</h3>
        <div class="bestPost">
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

        <div id="commentPublish" class="posting-history">
            
        </div>
    </section>
    </section>
    <footer id="main-footer" class ="footer"><strong>Created by: </strong><br><a href="https://github.com/Katherine-fe" target="_blank"></strong>Katherine Serrano</a><a href="https://github.com/Eunice17" target="_blank">Eunice Fiorella </a><a href="https://github.com/miluskapajuelo" target="_blank"> Miluska Pajuelo </a></footer>`;
  const home = document.querySelector('.main-login');
  home.innerHTML = '';
  home.innerHTML = viewHome;
  const commentPublic = home.querySelector('#commentPublish');
  const btnSearch = home.querySelector('#search');
  const bestPost = home.querySelector('.bestPost');
  showBestPosts(bestPost);
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
  nombre.textContent = getUser().displayName;
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
