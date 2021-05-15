const firestore = () => {
  return {
    // eslint-disable-next-line no-unused-vars
    collection: (namecollection) => {
      return {
        // eslint-disable-next-line no-unused-vars
        doc: (docId) => {
          return {
            set: () => {
              // eslint-disable-next-line no-unused-vars
              return new Promise((res, rej) => {
                res('la nota fué agregada');
              });
            },
          };
        },
      };
    },
  };
};

// eslint-disable-next-line object-shorthand
const firebase = { firestore: firestore };

export default jest.fn(() => {
  return firebase;
});
