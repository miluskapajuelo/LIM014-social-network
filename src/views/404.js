export default () => {
  const viewFail = `<section class="container-fail">
  <img src="./img/error.svg" alt="404 not found" srcset="">
  <p>The requested path could not be found</p>
</section>`;
  const mainLogin = document.getElementById('main-login');
  mainLogin.innerHTML = '';
  mainLogin.innerHTML = viewFail;
  return mainLogin;
};
