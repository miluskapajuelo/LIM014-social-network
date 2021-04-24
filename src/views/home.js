export default () => {
  const viewRegister = `<header id="main-header" class ="header">
  <div class="menu-bar">
    <a href="#" class="bt-menu">W-coding</a>
  </div>
  <nav class="list">
    <ul >
      <li id="Profile">
        <a href="#"><span class="material-icons">account_circle</span>Profile</a>
      </li>
      <li id="logOut"><a href="#"><span class="material-icons">logout</span>Log Out</a>
      </li>
    </ul>
  </nav>
  <div class="menu">
    <span class="material-icons">menu</span>
  </div>
</header>
<!-- main header -->`;
  const reg = document.getElementById('main-login');
  reg.innerHTML = '';
  reg.innerHTML = viewRegister;
  return reg;
};
