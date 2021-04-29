const fs = firebase.firestore();

export default function addPost(post) {
  const dateP = Date.now();
  return fs.collection("post").add({
    publication: post,
    email: firebase.auth().currentUser.email,
    uid: firebase.auth().currentUser.uid,
    datePost: dateP,
  });
}

export function removePost(id) {
  const remove = document.querySelectorAll(`.removeBtn-${id}`);
  remove.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
      e.preventDefault();
      fs.collection("post")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    });
  });
}
function showModal() {
  const modalMode = document.getElementById("modal-mode");
  const modalWindow = document.getElementById("modal-window");
  modalMode.classList.toggle("hide");
  modalWindow.classList.toggle("hide");
  modalWindow.innerHTML = `   <h2>Editar publicación</h2><section id="body-modal" class="modal flex-wrap">
      <article id="NameModal" class="font f-medium f-green one-fraction"> 
      <p class="nameP">nombre de usuario</p>
      <div>
      publicación completa lista para cambiar
      </div>
      <a href="#" title="Close" class="modal-close">Close</a>
      </div><button>Guardar</button>
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
  update.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      showModal();

      const button = document.getElementById("btn-add-note");
      document.getElementById("input-new-note").value = post;

      button.innerHTML = "Editar";
      button.addEventListener("click", () => {
        var washingtonRef = fs.collection("post").doc(id);
        const post = document.getElementById("input-new-note").value;
        return washingtonRef
          .set({
            publication: post,
          })
          .then(() => {
            console.log("Document successfully updated!");
            button.innerHTML = "Share";
            document.getElementById("input-new-note").value = "";
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      });
    });
  });
}
