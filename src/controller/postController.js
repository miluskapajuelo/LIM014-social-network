import { fs } from "../configFirebase.js";
export const getPost = (callback) => {
  fs.collection("post")
    .orderBy("datePost", "desc")
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push(doc);
      });
      callback(newArray);
    });
};

export const removePost = (id) =>
  fs.collection("post")
    .doc(id)
    .delete()
    .then(() => {
      alert("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });

export const updatePost = (id, postEdit, modalMode) => {
  fs.collection("post")
    .doc(id)
    .update({
      publication: postEdit,
    })
    .then(() => {
      console.log("Document successfully updated!");
      modalMode.classList.toggle("hide");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};
