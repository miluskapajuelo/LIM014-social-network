// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import { addPost } from '../src/controller/post.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });
});
