import { components } from '../components.js';

const changeView = (route) => {
  switch (route) {
    case '':
    case '#/login':
      return components.login();
    case '#/Register':
      return components.register();
    default:
      return components.fail();
  }
};

export { changeView };
