const fs = firebase.firestore();

const getNameUser = () =>
  new Promise((resolve) => {
    if (firebase.auth().currentUser.displayName === null) {
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
    });
  });
}

export function removePost(id) {
  const remove = document.querySelectorAll(`.removeBtn-${id}`);
  remove.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
      e.preventDefault();
      // Modal, estás segura que quieres eliminar el post?
      fs.collection("post")
        .doc(id)
        .delete()
        .then(() => {
          alert("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    });
  });
}
function showModal(msg) {
  const modalMode = document.getElementById("modal-mode");
  const modalWindow = document.getElementById("modal-window");
  modalMode.classList.toggle("hide");
  modalWindow.classList.toggle("hide");
  modalWindow.innerHTML = `   <section id="body-modal" class="contentGeneral">
  <div class="contentArea">
  <div><h2>Editar publicación</h2></div>
      <div class="nameP" id="modal-username">${msg}</div>
      <textarea id="input-edit-note"></textarea>
      
      <div><button id="btn-edit-note">Guardar</button></div>
      <a href="#" title="Close" class="modal-close">Close</a>
      </div>
      </section>
      `;

  const btnCloseModal = modalWindow.querySelector(".modal-close");

  btnCloseModal.addEventListener("click", (e) => {
    e.preventDefault();

    modalMode.classList.toggle("hide");
    modalWindow.classList.toggle("hide");
  });
}

export function updatePost(id, post) {
  const update = document.querySelectorAll(`.editBtn-${id}`);
  const modalMode = document.getElementById("modal-mode");
  const modalWindow = document.getElementById("modal-window");
  update.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
      e.preventDefault()
      
      getNameUser().then((msg)=>{showModal(msg)
        const button = document.getElementById("btn-edit-note");
        document.getElementById("input-edit-note").value = post;
        button.addEventListener("click", () => {
          var washingtonRef = fs.collection("post").doc(id);
          const post = document.getElementById("input-edit-note").value;
          return washingtonRef
            .update({
              publication: post,
            })
            .then(() => {
              console.log("Document successfully updated!");
              /* button.innerHTML = "Guardar"; */
              modalMode.classList.toggle("hide");
              modalWindow.classList.toggle("hide");
              /*  document.getElementById("input-new-note").value = ""; */
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        });})
      

      /* button.innerHTML = "Habilitarse"; */
      
    });
  });
}
