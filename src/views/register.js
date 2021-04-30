import { createUser } from '../model/firebase-login-model.js';
import { signIn, createUserBD, verifEmail } from '../controller/login-controller.js';

const Register = (() => {
  const viewRegister = `<section class="container-change">
  <figure class="figure-login">
    <img src="./img/undraw_Work_time_re_hdyv.svg" alt="">
  </figure>
  <form action="" class="col" id="col-form">
    <div class="text-welcome">
    <figure class="img-login">
      <img class="userPic" src="./img/undraw_female_avatar_w3jk.svg" alt="userPic">
    </figure>
      <H1 class="logo">W__coding</H1>
  </div>
   <div class="form">
        <div class="label">
          <span class="material-icons">person</span>
          <label class="flex" for="name"><h4>User Name</h4>
            <input class="" type="text" id="name">
          </label>
        </div>
        <div class="label">
        <span class="material-icons">mail_outline</span>
          <label class="flex" for="email"><h4>Email</h4>
            <input class="" type="text" id="email">
          </label>
        </div>
        <div class="label">
        <span class="material-icons">info</span>
          <label class="flex" for="info"><h4>User Information</h4>
            <input class="" type="text" id="info">
          </label>
        </div>
        <div class="label">
          <span class="material-icons">
            vpn_key
            </span>
          <label class="flex" for="password"><h4>Password</h4>
            <input class="" type="password" id="password">
          </label>
        </div>
        <div class="label">
        <span class="material-icons">password</span>
          <label class="flex" for="c-password"><h4>Confirm Password</h4>
            <input class="" type="password" id="c-password">
          </label>
        </div>
        <a class="log" href="#/login">Log in</a>
        <button type="submit">Register</button>
      </div>
      <div class="typeLog">
        <p>or enter with</p>
        <div>
          <button type="button" id="btn-gmail"><img src='./img/google-plus.svg'></button>
          <button type="button" id="btn-facebook"><img src='./img/facebook.svg'></button>
        </div>
      </div>
      </form> 
</section>`;
  const reg = document.getElementById('main-login');
  reg.innerHTML = '';
  reg.innerHTML = viewRegister;

  return reg;
});

const eventInitRegister = (() => {
  const label = document.querySelectorAll('.flex input');
  const form = document.querySelectorAll('.form .label');
  const singInForm = document.querySelector('#col-form');

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
    const username = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#password').value;
    const passCheck = document.querySelector('#c-password').value;
    const info = document.querySelector('#info').value;
    if (username === '') {
      console.log('usuario vacio');
    } else if (email === '') {
      console.log('email vacio');
    } else if (pass === '') {
      console.log('pass vacio');
    } else if (info === '') {
      console.log('info vacio');
    } else if (pass !== passCheck) {
      console.log('pass no coincide');
    } else {
      createUserBD(email, pass)
        .then((result) => { createUser(result.user.uid, username, email, info); })
        .then(() => signIn(email, pass))
        .then(() => {
          window.location.hash = '#/login';
          verifEmail();
        })
        .catch((err) => console.error(err));
    }
  });
});

export { Register, eventInitRegister };
