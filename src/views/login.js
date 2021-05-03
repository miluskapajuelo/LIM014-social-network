import { signIn, signInWithFacebook, signInWithGoogle } from '../controller/login-controller.js';

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
            <input class="" id="email" type="text">
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

  for (let i = 0; i < label.length; i += 1) {
    label[i].addEventListener('focus', () => {
      form[i].classList.add('focus');
    });
    label[i].addEventListener('blur', () => {
      if (label[i].value === '') {
        form[i].classList.remove('focus');
      }
    });
  }

  singInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const singupEmail = document.querySelector('#email').value;
    const singupPassword = document.querySelector('#password').value;
    console.log(firebase.auth().currentUser);

    signIn(singupEmail, singupPassword)
      .then(() => {
        if (firebase.auth().currentUser.emailVerified === true) {
          window.location.hash = '#/Home';
        } else {
          alert('su correo no esta verificado');
        }
      })
      .catch((err) => {
        alert(`Usuario no registrado ${err}`);
      });
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
