import { components } from '../components.js';
import { createPost } from '../../model/Show_Post_Comment.js';

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
          components.home.nameUser();
          components.home.infoUser();
          components.home.logOut();
          createPost();
        } else {
          window.location.hash = '#/login';
        }
      });
      break;
    default:
      return components.fail();
  }
};

export { changeView };
