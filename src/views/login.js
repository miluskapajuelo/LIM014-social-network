import { signIn, signInWithFacebook, signInWithGoogle } from '../controller/login-controller.js';
import { auth } from '../configFirebase.js';

const Login = (() => {
  const viewLogin = `<section class="container-change">
  <figure class="figure-login">
    <img src="./img/undraw_Work_time_re_hdyv.svg" alt="">
  </figure>
  <form class="col" id="col-form">
    <div class="text-welcome">
      <figure class="img-login">
        <img class="userPic" src="./img/undraw_female_avatar_w3jk.svg" alt="userPic">
      </figure>
        <H1 class="logo">W__coding</H1>
        <p class="text-logo">¡Welcome coder!</p>
    </div>
      <div class="form">
        <div class="label">
        <span class="material-icons">mail_outline</span>
          <label class="flex" for="email"><h4>Email</h4>
            <input class="" id="email" type="email">
          </label>
        </div>
        <div class="label">
          <span class="material-icons">
            vpn_key
            </span>
          <label class="flex" for="password"><h4>Password</h4>
            <input class="" id="password" type="password">
          </label>
          </div>
          <div class="msg-text"></div>
        <a href="#/Register">Are you new? sing me</a>
        <button type="submit">Log In</button>
      </div>
      <div class="typeLog">
        <p>or enter with</p>
        <div>
          <button type="button" id="btn-gmail"><img src='./img/google-plus.svg'></button>
          <button type="button" id="btn-facebook"><img src='./img/facebook.svg'></button>
        <div>
      </div>
  </form>  
  </section>`;
  const log = document.getElementById('main-login');
  log.innerHTML = '';
  log.innerHTML = viewLogin;

  return log;
});

const eventInitLogin = (() => {
  const label = document.querySelectorAll('.flex input');
  const form = document.querySelectorAll('.form .label');
  const singInForm = document.querySelector('#col-form');
  const btnFacebook = document.querySelector('#btn-facebook');
  const btnGmail = document.querySelector('#btn-gmail');
  const msg = document.querySelector('.form .msg-text');

  for (let i = 0; i < label.length; i += 1) {
    label[i].addEventListener('focus', () => {
      msg.innerHTML = '';
      form[0].classList.remove('fail');
      form[1].classList.remove('fail');
      form[i].classList.add('focus');
    });
    label[i].addEventListener('blur', () => {
      if (label[i].value === '') {
        form[0].classList.remove('fail');
        form[1].classList.remove('fail');
        form[i].classList.remove('focus');
      }
    });
  }

  singInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const singupEmail = document.querySelector('#email').value;
    const singupPassword = document.querySelector('#password').value;

    if (singupEmail === '' || singupPassword === '') {
      msg.innerHTML = `<p>Inputs empty
                      <span class="material-icons">priority_high
                      </span></p>`;
      form[0].classList.add('fail');
      form[1].classList.add('fail');
    } else {
      signIn(singupEmail, singupPassword)
        .then(() => {
          if (auth.currentUser.emailVerified === true) {
            window.location.hash = '#/Home';
          } else {
            msg.innerHTML = `<p>Email not verified
                      <span class="material-icons">priority_high
                      </span></p>`;
            form[0].classList.add('fail');
          }
        })
        .catch((err) => {
          msg.innerHTML = `<p>${err}
                      <span class="material-icons">priority_high
                      </span></p>`;
        });
    }
  });

  // FACEBOOK
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithFacebook()
      .then(() => {
        console.log('Usuario creado fb');
        window.location.hash = '#/Home';
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // GOOGLE
  btnGmail.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(() => {
        console.log('Usuario creado google');
        window.location.hash = '#/Home';
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

export { Login, eventInitLogin };
