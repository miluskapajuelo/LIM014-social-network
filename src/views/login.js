export default () => {
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
          <span class="material-icons">person</span>
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
        <button type="button" id="btn-gmail"><img src='./img/google-plus.svg'></button>
        <button type="button" id="btn-facebook"><img src='./img/facebook.svg'></button>
      </div>
  </form>  
</section>`;
  const log = document.getElementById('main-login');
  log.innerHTML = '';
  log.innerHTML = viewLogin;

  const label = document.querySelectorAll('.flex input');
  const form = document.querySelector('.form');

  label.forEach((elm) => {
    elm.addEventListener('focus', () => {
      form.classList.add('focus');
    });
  });

  log.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.querySelector('#email').value);
    console.log(document.querySelector('#password').value);
  });
  return log;
};
