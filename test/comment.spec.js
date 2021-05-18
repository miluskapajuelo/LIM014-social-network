import MockFirebase from 'mock-cloud-firestore';
import * as user from '../src/controller/comment.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
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

describe('my mock config', () => {
  it('debería mockear mi config', () => {
    expect(typeof user.addCommentBd).toBe('function');
  });
  it('debería mockear mi getComment', () => {
    expect(typeof user.getComment).toBe('function');
  });
});
