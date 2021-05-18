import MockFirebase from 'mock-cloud-firestore';
import * as post from '../src/controller/post.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        12346: {
          publication: 'Me encanta aprender muchas tecnologías',
          email: 'abigasilva@gmail.com',
          uid: '343547',
          datePost: '17/05/21',
          user: 'Abigail Silva',
          likePost: [],
          countLikes: 0,
        },
        12345: {
          publication: '',
          email: '',
          uid: '',
          datePost: '',
          user: '',
          likePost: [],
          countLikes: 0,
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData);

describe('Funciones addPost y getPost', () => {
  it('Debería agregar un post', (done) => {
    post.addPost('Estoy cansada de lucharle a la vida', '12/02/1997', 'euncieancajima@gmail.com', '12345', 'Eunice').then(() => {
      const callback = (publication) => {
        const result = publication.find(
          (elm) => elm['_data'].publication === ('Estoy cansada de lucharle a la vida'),
        );
        expect(result['_data'].publication).toBe('Estoy cansada de lucharle a la vida');
        done();
      };
      post.getPost(callback);
    });
  });
});
describe('Información de usuario por defecto', () => {
  it('Deberia devolver Frontend developer', () => {
    post.getInfo().then((msg) => {
      expect('Frontend developer - def').toBe(msg);
    });
  });
});
describe('Remove Post', () => {
  it('Deberia remover un post', (done) => {
    post.removePostBd('12346');
    post.getPost((arrayPost) => {
      const result = arrayPost.find(
        (element) => element['_id'] === '12346',
      );
      expect(result).toBe(undefined);
      done();
    });
  });
});
describe('Obtener los best post', () => {
  it('Deberia obtener los 5 best post', (done) => {
    console.log(done);
  });
});
/* describe('Remover post de BD', () => {
  it('Debería Remover un post', (done) => {
    post.removePostBd(12346).then(() => {
      const callback = (user) => {
        const result = user.find(
          (elm) => elm['_data'].uid === ('343547'),
        );
        expect(result['_data'].uid).toBe(null);
        done();
      };
      post.getPost(callback);
    });
  });
}); */
