import { components } from '../components.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  const colfom = document.getElementById('col-form');
  switch (route) {
    case '':
    case '#/login':
      container.innerHTML = '';
      console.log(route);
      return container.appendChild(components.login());
    case '#/Register':
      colfom.innerHTML = '';
      console.log(route);
      return colfom.appendChild(components.register());
    default:
      break;
  }
};

export { changeView };
