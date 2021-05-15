/* eslint-disable no-unused-vars */
const collection = (nameCollection) => {
  return {
    doc: (docId) => {
      return {
        set: () => {
          return new Promise((res, rej) => {
            res('la nota fué agregada');
          });
        },
      };
    },
  };
};

// eslint-disable-next-line object-shorthand
const fs = { collection: collection };

export default jest.fn(() => {
  return fs;
});
