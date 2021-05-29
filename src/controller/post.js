import { removeCommentBd } from './comment.js';

// Get info of user logged
export const getInfo = () => firebase.firestore().collection('users').get().then((element) => {
  element.forEach((data) => {
    if (data.data().id === firebase.auth().currentUser.uid) {
      return data.data().info;
    }
  });
  return 'Frontend developert';
});

// Create post in firebase
export const addPost = ((post, dateP, emailUser, userUid, userName, photoUser, dateServer) => {
  return firebase.firestore().collection('post').add({
    publication: post,
    email: emailUser,
    uid: userUid,
    datePost: dateP,
    user: userName,
    likePost: [],
    countLikes: 0,
    photoURL: photoUser,
    dateSer: dateServer,
  });
});

// Get doc of all post
export const getPost = ((callback) => {
  firebase.firestore().collection('post')
    .orderBy('dateSer', 'desc')
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
});

// Get doc of all post
export const removePostBd = ((id) => {
  firebase.firestore().collection('post').doc(id).delete();
  const delateCm = firebase.firestore().collection('comments').where('postId', '==', id).get();
  delateCm.then((omg) => {
    omg.forEach((cm) => {
      removeCommentBd(cm.id);
    });
  });
});

// Update post where users edited post
export const updatePostBd = (id, postEdit) => firebase.firestore().collection('post').doc(id)
  .update({
    publication: postEdit,
  });

// Update users who liked a post
export const likePostBd = (doc, likeUser) => {
  firebase.firestore().collection('post').doc(doc.id)
    .update({
      likePost: likeUser,
    });
};
// Update number of likes
export const countLikesPost = (doc, countLikesPost1) => {
  firebase.firestore().collection('post').doc(doc.id)
    .update({
      countLikes: countLikesPost1,
    });
};
// Get best post top(5)
export const getBestPost = ((callback) => {
  firebase.firestore().collection('post')
    .orderBy('countLikes', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
});
