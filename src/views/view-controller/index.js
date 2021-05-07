import { components } from '../components.js';
import { createPost } from '../../model/checkLogin-model.js';
import { auth } from '../../configFirebase.js';
import { addComments } from '../../model/firebase-comment-model.js';

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
      auth.onAuthStateChanged((user) => {
        if (user) {
          components.home.Home();
          components.home.eventInitHome();
          components.home.nameUser();
          components.home.infoUser();
          components.home.logOut();
          createPost();
          // removeandUpdate();
          addComments();
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
