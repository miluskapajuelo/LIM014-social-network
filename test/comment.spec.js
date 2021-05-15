import MockFirebase from 'mock-cloud-firestore';

import { addCommentBd, getComment } from '../src/controller/comment.js';

const fixtureData = {
  __collection__: {
    comments: {
      __doc__: {
        comment001: {
          publication: 'Hola este es el comentario del post001',
          uid: 'ID001',
          postId: 'post001',
          datePost: '',
          user: 'userName 1',
        },
        comment002: {
          publication: 'Hola este es el comentario del post002',
          uid: 'ID002',
          postId: 'post002',
          datePost: '',
          user: 'userName 2',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});

describe('create comments', () => {
  it('Deberia de poder agregar comentarios según post', (done) => addCommentBd('post001', 'Que lindo gatito', 'ID001', '', 'userName 1').then(() => {
    const callback = (publication) => {
      /*       console.log(publication); */
      const result = publication.find(
        (element) => element.publication === ('Que lindo gatito'),
      );
      expect(result.publication).toBe('Que lindo gatito');
      done();
    };
    getComment(callback, 'post001');
  }));
});
