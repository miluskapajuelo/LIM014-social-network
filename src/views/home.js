import { getNameUser } from '../model/firebase-post-model.js';

const Home = (() => {
  const viewHome = `<header id="main-header" class ="header">
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
        <h2 class="className"></h2>
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
  const home = document.getElementById('main-login');
  home.innerHTML = '';
  home.innerHTML = viewHome;

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
  getNameUser().then((name) => {
    console.log(name);
    const nombre = document.querySelector('.className');
    nombre.textContent = name;
  });
});
export { Home, eventInitHome, nameUser };
