import { components } from '../components.js';

const changeView = (route) => {
  const container = document.getElementById('container');

  switch (route) {
    case '#/login':
      container.innerHTML = '';
      console.log(route);
      return container.appendChild(components.login());
    default:
      break;
  }
};

export { changeView };
