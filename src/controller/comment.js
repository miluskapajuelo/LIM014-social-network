export const getComment = ((idPost, callback) => {
  firebase.firestore().collection('comments')
    .where('postId', '==', idPost)
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
});

export const addCommentBd = ((id, inputcomment, idUser, dateP, nameDisplay) => {
  return firebase.firestore().collection('comments').add({
    publication: inputcomment,
    uid: idUser,
    postId: id,
    datePost: dateP,
    user: nameDisplay,
  });
});

export const removeCommentBd = (id) => firebase.firestore().collection('comments').doc(id).delete();

export const updateCommentBd = (id, changedComment) => firebase.firestore()
  .collection('comments')
  .doc(id)
  .update({ publication: changedComment });
