export default () => {
  const viewLogin = `
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
        <label class="flex" for="email"><h4>User Name</h4>
          <input class="" type="text">
        </label>
      </div>
      <div class="label">
        <span class="material-icons">person</span>
        <label class="flex" for="email"><h4>Email</h4>
          <input class="" type="text">
        </label>
      </div>
      <div class="label">
      <span class="material-icons">person</span>
        <label class="flex" for="email"><h4>Info</h4>
          <input class="" type="text">
        </label>
      </div>
      <div class="label">
        <span class="material-icons">
          vpn_key
          </span>
        <label class="flex" for="email"><h4>Password</h4>
          <input class="" type="password">
        </label>
      </div>
      <div class="label">
        <span class="material-icons">
          vpn_key
          </span>
        <label class="flex" for="email"><h4>Confirm Password</h4>
          <input class="" type="password">
        </label>
      </div>
      <a href="#/login">Log in</a>
      <button type="button"><a href="#/main">Register</a></button>
    </div>
    <div class="typeLog">
      <p>or enter with</p>
      <figure>
        <img src="./img/google-plus.svg" alt="">
        <img src="./img/facebook.svg" alt="">
      </figure>
    </div>
    </form>`;
  const element = document.createElement('div');
  element.className = 'reg-login';
  element.innerHTML = viewLogin;
  return element;
};
