const fs = firebase.firestore();

export const getInfo = () => new Promise((resolve) => {
  const infodefault = 'Frontend developer';
  if (firebase.auth().currentUser.displayName === null) {
    const prueba = fs.collection('users').get();
    prueba.then((omg) => {
      omg.forEach((data) => {
        if (data.data().id === firebase.auth().currentUser.uid) {
          resolve(data.data().info);
        }
      });
    });
  } else {
    resolve(infodefault);
  }
});

export const getNameUser = () => new Promise((resolve) => {
  if (firebase.auth().currentUser.displayName === null) {
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
export default function addPost(post) {
  const dateP = firebase.firestore.FieldValue.serverTimestamp();
  getNameUser().then((msg) => {
    fs.collection('post').add({
      publication: post,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      datePost: dateP,
      user: msg,
    });
  });
}

export function removePost(id) {
  const remove = document.querySelectorAll(`.removeBtn-${id}`);
  remove.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      e.preventDefault();
      // Modal, estás segura que quieres eliminar el post?
      fs.collection('post')
        .doc(id)
        .delete()
        .then(() => {
          alert('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });
  });
}
function showModal(msg) {
  const modalMode = document.getElementById('modal-mode');
  const modalWindow = document.getElementById('modal-window');
  modalMode.classList.toggle('hide');

  modalWindow.innerHTML = `<section class="headerPost"><h3>Edit post</h3>
  <button title="Close" class="modal-close">Close</button></section> 
  <section id="body-modal" class="contentGeneral">
      <h5 class="nameP" id="modal-username">${msg}</h5>
      <textarea id="input-edit-note"></textarea>
      <button id="btn-edit-note">Save</button>
      </section>
      `;
  const btnCloseModal = modalWindow.querySelector('.modal-close');

  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalMode.classList.toggle('hide');
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
