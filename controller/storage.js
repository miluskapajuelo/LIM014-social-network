export const addFileToStorage = (refPath, file) => firebase.storage().ref(refPath).put(file);
export const getFileFromStorage = (path) => firebase.storage().ref().child(path).getDownloadURL();
