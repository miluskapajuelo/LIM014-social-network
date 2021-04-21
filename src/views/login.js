export default () => {
  const viewLogin = `<figure class="figure-login">
  <img src="./img/undraw_Work_time_re_hdyv.svg" alt="">
</figure>
<form action="" class="col" id="col-form">
  <div class="text-welcome">
  <figure class="img-login">
    <img class="userPic" src="./img/undraw_female_avatar_w3jk.svg" alt="userPic">
  </figure>
    <H1 class="logo">W__coding</H1>
    <p class="text-logo">¡Welcome coder!</p>
</div>
  <div class="form">
    <div class="label">
      <span class="material-icons">person</span>
      <label class="flex" for="email"><h4>Email</h4>
        <input id="email" type="text">
      </label>
    </div>
    <div class="label">
      <span class="material-icons">
        vpn_key
        </span>
      <label class="flex" for="email"><h4>Password</h4>
        <input id="password" type="password">
      </label>
    </div>
    <a href="#/Register">Are you new? sing me</a>
    <button type="submit" id="btnLogIn"><a href="#/Home">Log In</a></button>
  </div>
  <div class="typeLog">
    <p>or enter with</p>
    <figure>
      <img src="./img/google-plus.svg" alt="">
      <img src="./img/facebook.svg" alt="">
    </figure>
  </div>
</form> `;
  const element = document.createElement('main');
  element.className = 'main-login';
  element.innerHTML = viewLogin;
  const singupForm = element.querySelector('#col-form');

  singupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const singupEmail = document.querySelector('#email').value;
    const singupPassword = document.querySelector('#password').value;
    console.log(singupEmail, singupPassword);
  });
  return element;
};
