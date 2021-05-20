import {
  createUserBD, createUser, getUser,
} from '../controller/login.js';
import { addFileToStorage, getFileFromStorage } from '../controller/storage.js';

const Register = (() => {
  const viewRegister = `<section class="container-change">
  <figure class="figure-login">
    <p>Connect and be part of the most important network of women in technology.</p>
    <img src="./img/undraw_Work_time_re_hdyv.svg" alt="">
  </figure>
  <form action="" class="col" id="col-form">
    <div class="text-welcome">
    <figure class="img-login">
    <span class="material-icons">add_a_photo</span>
    <input type="file" id="file_input" />
    <div class="hoverPhoto"></div>
    <img id='image_input' class="userPic" style="border-radius: 90px;" src="./img/undraw_female_avatar_w3jk.svg" alt="userPic">
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
            <input class="" type="email" id="email">
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
        <div class="msg-text"></div>
        <a class="log" href="#/login">Log in</a>
        <button type="submit">Register</button>
      </div>
      </form> 
</section>`;
  const reg = document.getElementById('main-login');
  reg.innerHTML = '';
  reg.innerHTML = viewRegister;
  // se guarda photo en storage
  const fileInput = document.querySelector('#file_input');
  const imageInput = document.querySelector('#image_input');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const refPath = `profilePhotoFile/${file.name}`;
    addFileToStorage(refPath, file).then((data) => {
      getFileFromStorage(data.metadata.fullPath).then((url) => {
        imageInput.setAttribute('src', url);
      });
    });
  });

  return reg;
});
const verifPassword = ((pass) => {
  return pass.search(/(?=.*[a-z])(?=.*[0-9])(?=.*[@$#!?])[a-zA-Z0-9@$#!?]{8,32}/g) !== -1;
});
const eventInitRegister = (() => {
  const label = document.querySelectorAll('.flex input');
  const form = document.querySelectorAll('.form .label');
  const singInForm = document.querySelector('#col-form');
  const msgWarning = document.querySelector('.form .msg-text');

  for (let i = 0; i < label.length; i += 1) {
    label[i].addEventListener('focus', () => {
      msgWarning.innerHTML = '';
      form[0].classList.remove('fail');
      form[1].classList.remove('fail');
      form[2].classList.remove('fail');
      form[3].classList.remove('fail');
      form[4].classList.remove('fail');
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
    const imageInput = document.querySelector('#image_input');

    if (username === '') {
      msgWarning.innerHTML = `<p>Username required
      <span class="material-icons">priority_high
      </span></p>`;
      form[0].classList.add('fail');
    } else if (email === '') {
      msgWarning.innerHTML = `<p>Email required
      <span class="material-icons">priority_high
      </span></p>`;
      form[1].classList.add('fail');
    } else if (pass === '') {
      msgWarning.innerHTML = `<p>Password required
      <span class="material-icons">priority_high
      </span></p>`;
      form[3].classList.add('fail');
    } else if (info === '') {
      msgWarning.innerHTML = `<p>Your area in technology?
                              </p>`;
      form[2].classList.add('fail');
    } else if (pass !== passCheck) {
      msgWarning.innerHTML = `<p>Repeat password
      <span class="material-icons">priority_high
      </span></p>`;
      form[4].classList.add('fail');
    } else if (verifPassword(pass) === false) {
      msgWarning.innerHTML = `<p>minimum 8 digits, 1 number and 1 special character $#@!?
      <span class="material-icons">priority_high
      </span></p>`;
      form[3].classList.add('fail');
      form[4].classList.add('fail');
    } else {
      // create user BD with displayName and photoURL
      createUserBD(email, pass)
        .then((result) => {
          getUser().updateProfile({
            displayName: username,
            photoURL: imageInput.src,
          }).then(() => {
          }).catch((error) => {
            console.log(error);
          });

          createUser(result.user.uid, info);
        })
        .then(() => {
          window.location.hash = '#/login';
          alert('Sending validation message to your email.');
          const configuration = {
            url: 'http://localhost:5000/',
          };
          getUser().sendEmailVerification(configuration);
        })
        .catch((err) => console.error(err));
    }
  });
});

export { Register, eventInitRegister };
