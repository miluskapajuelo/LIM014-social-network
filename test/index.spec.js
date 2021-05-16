// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import MockFirebase from 'mock-cloud-firestore';
import { addPost } from '../src/controller/post.js';
// import mockConfig from '../__mocks__/mocksFire.js';
import MockFirebaseFake from '../__mocks__/loginFirebase.js';
import { createUser } from '../src/controller/login.js';

global.firebase = MockFirebaseFake();

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        12345: {
          publication: 'Tengo miedo',
          email: 'euncieancajima@gmail.com',
          uid: 12345,
          datePost: '13/05/2021',
          user: 'Eunice',
          likePost: [],
          countLikes: 0,
        },
      },
    },
  },
};
global.firebase = MockFirebase(fixtureData);
jest.mock('../src/configFirebase.js');

describe('my mock config', () => {
  it('debería mockear mi config', () => {
    return addPost().then((omg) => {
      expect(omg).toBe('Hola mundo');
    });
  });
});
describe('createUser', () => {
  it('debería ser una función', () => {
    return createUser('comprar pan').then((data) => {
      expect(data).toBe('comprar pan');
    });
  });
});
