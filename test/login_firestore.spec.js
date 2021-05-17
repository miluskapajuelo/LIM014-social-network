/* import MockFirebase from '../__mocks__/loginFirebase.js';

global.firebase = MockFirebase(); */
import MockFirebase from 'mock-cloud-firestore';
import { createUser } from '../src/controller/login.js';

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        user123id: {
          id: 'id01',
          info: 'developer',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});

describe('createUser', () => {
  it('debería ser una función', () => {
    createUser('user123id', 'developer').then((user) => console.log(user));
    return expect(createUser('user123id', 'developer')).resolves.toBe('la nota fué agregada');
  });
});
