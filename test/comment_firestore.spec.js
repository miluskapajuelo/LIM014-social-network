import MockFirebase from 'mock-cloud-firestore';

import {
  addCommentBd, getComment, removeCommentBd, updateCommentBd,
} from '../src/controller/comment.js';

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

// Test create comment
describe('create comments', () => {
  it('Deberia de poder agregar comentarios según post', (done) => addCommentBd('post001', 'Que lindo gatito', 'ID001', '', 'userName 1').then(() => {
    const callback = (publication) => {
      const result = publication.find(
        // eslint-disable-next-line dot-notation
        (element) => element['_data'].publication === ('Que lindo gatito'),
      );
        // eslint-disable-next-line dot-notation
      expect(result['_data'].publication).toBe('Que lindo gatito');
      done();
    };
    getComment('post001', callback);
  }));
});

// Test delete comment
describe('delete comment', () => {
  it('Deberia de poder eliminar un comentario', (done) => removeCommentBd('comment001').then(() => getComment('post001', (arrayComment) => {
    const result = arrayComment.find(
      (element) => element['_id'] === 'comment001',
    );
    expect(result).toBe(undefined);
    done();
  })));
});

// Test update comment
describe('update comments', () => {
  it('Deberia de poder actualizar comentarios', (done) => updateCommentBd('comment002', 'eres como Piolin').then(() => getComment('post002', (publication) => {
    const result = publication.find((element) => element['_id'] === 'comment002');
    expect(result['_data'].publication).toBe('eres como Piolin');
    done();
  })));
});
