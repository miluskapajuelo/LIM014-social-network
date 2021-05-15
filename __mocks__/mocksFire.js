import MockFirebase from 'mock-cloud-firestore';

/* const fixtureData = {
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
}; */
const firebase = new MockFirebase();

export default jest.fn(() => {
  return firebase;
});
