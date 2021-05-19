import mockFirebase from '../__mocks__/firebase_mock.js';
import {
  addFileToStorage, getFileFromStorage,
} from '../src/controller/storage.js';

global.firebase = mockFirebase();

describe('addFileToStorage', () => {
  it('Deberia retornar', (done) => addFileToStorage('carpeta del user001', 'foto.jpg')
    .then((data) => {
      expect(data).toBe('El file foto.jpg fue agregado a carpeta del user001');
      done();
    }));
});

describe('getFileFromStorage', () => {
  it('Deberia retornar', (done) => getFileFromStorage('user001')
    .then((data) => {
      expect(data).toBe('Se obtuvo archivo de la carpeta user001');
      done();
    }));
});
