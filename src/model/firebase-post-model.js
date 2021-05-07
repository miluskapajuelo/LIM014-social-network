import { auth, fs } from "../configFirebase.js";

export const getInfo = () =>
  new Promise((resolve) => {
    const infodefault = "Frontend developer";
    if (auth.currentUser.displayName === null) {
      const prueba = fs.collection("users").get();
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

export const getNameUser = () =>
  new Promise((resolve) => {
    if (auth.currentUser.displayName === null) {
      const prueba = fs.collection("users").get();
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
export default function addPost(post) {
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  getNameUser().then((msg) => {
    fs.collection("post").add({
      publication: post,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      datePost: dateP,
      user: msg,
      likePost: [],
    });
  });
}

export function updatePost(id, post) {
  const update = document.querySelectorAll(`.editBtn-${id}`);
  const modalMode = document.getElementById('modal-mode');

  update.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      e.preventDefault();

      getNameUser().then((msg) => {
        showModal(msg);
        const button = document.getElementById('btn-edit-note');
        document.getElementById('input-edit-note').value = post;
        button.addEventListener('click', () => {
          const postId = fs.collection('post').doc(id);
          const postEdit = document.getElementById('input-edit-note').value;
          return postId
            .update({
              publication: postEdit,
            })
            .then(() => {
              console.log('Document successfully updated!');
              modalMode.classList.toggle('hide');
            })
            .catch((error) => {
              console.error('Error removing document: ', error);
            });
        });
      });
    });
  });
}


//firestore likes
/* const removeLike = (id,likePublication, msg, op) => {
  if(op==1){
    let array = likePublication.push(msg)
    return array
  }
  else{
    let i = likePublication.indexOf(msg)
    let array =likePublication.splice( i, 1 );
  return array
};
return fs
    .collection("post")
    .doc(id)
    .update({ 'likePost': array})
    .then(() => {
      console.log("Document successfully written!");
    });}
 */
/* export const likes = (id, likePublication) => {
  const btnLike = document.getElementById(`btn-like-${id}`)
  btnLike.addEventListener("click", (e) => {
      e.preventDefault();
      if (likePublication.length === 0) {
        getNameUser().then((msg) => {
          removeLike(id, likePublication, msg, 1);});
      } else {
        likePublication.forEach(element =>{
            getNameUser().then((msg) => {
              if(msg !== element){
              removeLike(id, likePublication, msg)}
              else{
                removeLike(id, likePublication,msg )
              }})
      })}})} */
