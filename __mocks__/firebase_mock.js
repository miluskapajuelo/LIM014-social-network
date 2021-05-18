const storage = () => ({
  ref: (refPath) => ({
    put: (file) => new Promise((resolve) => {
      resolve(`El file ${file} fue agregado a ${refPath}`);
    }),
    child: (path) => ({
      getDownloadURL: () => new Promise((resolve) => {
        resolve(`Se obtuvo archivo de la carpeta ${path}`);
      }),
    }),
  }),
});

const firebase = {
  storage,
};
export default jest.fn(() => firebase);
