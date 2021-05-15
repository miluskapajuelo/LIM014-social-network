// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import MockFirebase from 'mock-cloud-firestore';
import { addPost } from '../src/controller/post.js';
// import mockConfig from '../__mocks__/mocksFire.js';

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
