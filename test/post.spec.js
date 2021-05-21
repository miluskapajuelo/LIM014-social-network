import MockFirebase from 'mock-cloud-firestore';
import * as post from '../src/controller/post.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        12346: {
          publication: 'Me encanta aprender muchas tecnologías',
          email: 'abigail@gmail.com',
          uid: '343547',
          datePost: '17/05/21',
          user: 'Abigail Silva',
          likePost: [],
          countLikes: 0,
          photoURL: 'www.photoFio.com',
          dataSer: '12/02/1997 12:21',
        },
        12335: {
          publication: 'Katherine canta muy extraño',
          email: 'abigail@gmail.com',
          uid: '343547',
          datePost: '03/20/21',
          user: 'Abigail Silva',
          likePost: ['Eunice'],
          countLikes: 1,
          photoURL: 'www.habbo.com',
          dataSer: '12/02/1997 12:23',
        },
        12235: {
          publication: 'Miluska y Katherine son las mejores compañeras de proyectos',
          email: 'abigail@gmail.com',
          uid: '343547',
          datePost: '03/20/21',
          user: 'Abigail Silva',
          likePost: ['Eunice'],
          countLikes: 1,
          photoURL: 'www.habbo.com',
          dataSer: '12/02/1997 12:25',
        },
        12236: {
          publication: 'Estas son las mañanitas que cantaba el rey David',
          email: 'rexona@gmail.com',
          uid: '343548',
          datePost: '03/20/21',
          user: 'Persona Anónima',
          likePost: ['Eunice', 'Persona Anónima'],
          countLikes: 2,
          photoURL: 'www.hellokitty.com',
          dataSer: '12/02/1997 12:27',
        },
        12336: {
          publication: 'Soy muchacho provinciano, me levanto muy temprano',
          email: 'chacalon@gmail.com',
          uid: '343549',
          datePost: '03/20/21',
          user: 'Persona Anónima',
          likePost: ['Eunice', 'Persona Anónima'],
          countLikes: 2,
          photoURL: 'www.hellokitty.com',
          dataSer: '12/02/1997 12:20',
        },
        12337: {
          publication: 'Sigue adelante. I was your man!',
          email: 'lluviapiurana@gmail.com',
          uid: '343540',
          datePost: '25/20/21',
          user: 'Lluvia Piura',
          likePost: ['Lluvia Piura', 'Eunice', 'Persona Anónima', 'Abigail Silva'],
          countLikes: 4,
          photoURL: 'www.hellomami.com',
          dataSer: '12/02/1997 12:30',
        },
        12347: {
          publication: 'Estoy trabajando en tecnología, es mi primer día de trabajo!!',
          email: 'lluviapiurana@gmail.com',
          uid: '343540',
          datePost: '25/20/21',
          user: 'Lluvia Piura',
          likePost: ['Lluvia Piura', 'Persona Anónima', 'Abigail Silva'],
          countLikes: 3,
          photoURL: 'www.hellomami.com',
          dataSer: '12/02/1997 12:31',
        },
        12345: {
          publication: '',
          email: '',
          uid: '',
          datePost: '',
          user: '',
          likePost: [],
          countLikes: 0,
          photoURL: '',
          dataSer: '',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData);

describe('Funciones addPost y getPost', () => {
  it('Debería agregar un post', (done) => {
    post.addPost('Estoy cansada de lucharle a la vida', '12/02/1997', 'efas@gmail.com', '12345', 'Elisa', 'www.google.com', '12/02/1997 12:20').then(() => {
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
      expect('Frontend developer').toBe(msg);
    });
  });
  it('Deberia devolver usuario autenticado', () => {
    post.getInfo().then((msg) => {
      expect('Frontend developer').toBe(msg);
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
    const prueba = ((array) => {
      const result = array.find(
        (elm) => elm['_data'].countLikes === 4,
      );
      expect(result['_data'].countLikes).toBe(4);
      done();
    });
    post.getBestPost(prueba);
  });
});
describe('Update post base de datos', () => {
  it('Actualizar post en BD', () => {
    expect(typeof post.updatePostBd).toBe('function');
  });
});
const array = ['Eunice', 'Persona Anónima', 'Lluvia Piura'];
describe('Los mejores likes de post', () => {
  it('función like', () => {
    expect(typeof post.likePostBd).toBe('function');
  });
  it('Actualizar arreglos de likes', (done) => {
    const prueba = ((search) => {
      const doc = search.find((elm) => elm['_id'] === '12336');
      post.likePostBd(doc, array);
      post.countLikesPost(doc, 3);
      expect(post.likePostBd(doc, array)).toBe(undefined);
      done();
    });
    post.getPost(prueba);
    // post.likePostBd(fixtureData, array);
  });
});
describe('Contador de likes', () => {
  it('Funcion contador de likes', () => {
    expect(typeof post.countLikesPost).toBe('function');
  });
});
