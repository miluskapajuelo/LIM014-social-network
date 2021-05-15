import MockFirebase from '../__mocks__/loginFirebase.js';
import { createUser } from '../src/controller/login.js';

global.fs = MockFirebase();

describe('createUser', () => {
  it('debería ser una función', () => {
    return createUser('comprar pan').then((data) => {
      expect(data).toBe('comprar pan');
    });
  });
});
