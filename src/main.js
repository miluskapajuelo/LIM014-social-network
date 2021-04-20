// Este es el punto de entrada de tu aplicacion

import { changeView } from './views/view-controller/index.js';

const init = () => {
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};

window.addEventListener('load', init);
// myFunction();
