import { components } from '../components.js';
import { createPost, showPosts } from '../../model/checkLogin-model.js';

const changeView = (route) => {
  switch (route) {
    case '':
    case '#/login':
      components.login.Login();
      components.login.eventInitLogin();
      break;
    case '#/Register':
      components.register.Register();
      components.register.eventInitRegister();
      break;
    case '#/Home':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          components.home.Home();
          components.home.eventInitHome();
          createPost();
          showPosts();
        } else {
          alert('Usuario no logeado');
          window.location.hash = '#/login';
        }
      });
      break;
    default:
      return components.fail();
  }
};

export { changeView };
