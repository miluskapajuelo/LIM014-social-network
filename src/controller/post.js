import { auth, fs } from '../configFirebase.js';

//get info of user logged
export const getInfo = () => new Promise((resolve) => {
  const infodefault = 'Frontend developer';
  if (auth.currentUser.displayName === null) {
    const prueba = fs.collection('users').get();
    prueba.then((omg) => {
      omg.forEach((data) => {
        if (data.data().id === auth.currentUser.uid) {
          resolve(data.data().info);
        }
      });
    });
  } else {
    resolve(infodefault);
  }
});

//get name of user logged
export const getNameUser = () => new Promise((resolve) => {
  if (auth.currentUser.displayName === null) {
    const prueba = fs.collection('users').get();
    prueba.then((omg) => {
      omg.forEach((data) => {
        if (data.data().id === firebase.auth().currentUser.uid) {
          resolve(data.data().user);
        }
      });
    });
  } else {
    resolve(firebase.auth().currentUser.displayName);
  }
});

//Create post in firebase
export const addPost = ((post) => {
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  getNameUser().then((msg) => {
    fs.collection('post').add({
      publication: post,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      datePost: dateP,
      user: msg,
      likePost:[],
      countLikes:0
    });
  });
});

//Get doc of all post
export const getPost = ((callback) => {
  fs.collection('post')
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
});

//Delete post 
export const removePostBd = ((id) => {
  fs.collection('post').doc(id).delete()
    .then(() => {
      alert('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
});

//Update post where users edited post
export const updatePostBd = (id, postEdit) => fs.collection('post').doc(id)
  .update({
    publication: postEdit,
  }).then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });

//Update users who liked a post
export const likePostBd = (doc, likeUser) => {
  fs.collection('post').doc(doc.id)
  .update({
    'likePost': likeUser,
  }).then(() => {
    console.log('Document successfully liked!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });}

//Update number of likes
export const countLikesPost = (doc, countLikes) =>{
  fs.collection('post').doc(doc.id)
  .update({
    'countLikes': countLikes,
  }).then(() => {
    console.log('Document successfully counted!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });
}

//Get best post top(5)
export const getBestPost = ((callback) => {
    fs.collection('post')
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