import addPost from "./firebase-post-model.js";

const createPost = () => {
  const notePost = document.getElementById("btn-add-note");

  notePost.addEventListener("click", () => {
    const post = document.getElementById("input-new-note").value;
    addPost(post);
    document.getElementById("input-new-note").value = "";
  });
};

export { createPost };
