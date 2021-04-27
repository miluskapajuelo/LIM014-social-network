import addPost, { removePost , updatePost } from '../model/firebase-post-model.js'

export default () => {
  const viewRegister = `<header id="main-header" class ="header">
  <div class="menu-bar">
    <a href="#" class="bt-menu">W-coding</a>
  </div>
  <nav class="list">
    <ul >
      <li id="Profile">
        <a href="#"><span class="material-icons">account_circle</span>Profile</a>
      </li>
      <li id="logOut"><a href="#"><span class="material-icons">logout</span>Log Out</a>
      </li>
    </ul>
  </nav>
  <div class="menu">
    <span class="material-icons">menu</span>
  </div>
</header>
<!-- main header -->
<textarea name="" id="input-new-note" rows="4" cols="50" placeholder="¿Que quieres compartir?"></textarea>
<section id="botones-post">
<button type="button" id="btn-add-note">Publicar</button>
</section>
<section>
<div id="commentPublish">write here comment</div>
</section>
`;
  const reg = document.getElementById('main-login');
  reg.innerHTML = '';
  reg.innerHTML = viewRegister;
  const notePost = document.getElementById('btn-add-note')

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  notePost.addEventListener('click', ()=>{
    const post = document.getElementById('input-new-note').value
    addPost(post).then((docRef) => {
      console.log(docRef.id)
      document.getElementById("input-new-note").value = "";}).catch(function (err) {
        console.error("Error adding document: ", err);
      })
       
  }
  )
  fs.collection("post")
  .orderBy("datePost", "desc")
  .onSnapshot((querySnapshot) => {
    const commentPublish = document.getElementById('commentPublish')
    commentPublish.innerHTML = "";
    let i = 0;
    querySnapshot.forEach((doc) => {
      i++;
      commentPublish.innerHTML += `<div class = "publishRS"><span>-----------comentario ${i} ${
        doc.data().publication
      }<button type="button" class="removeBtn-${
        doc.id
      }" >remove<button type="button" class="editBtn-${
        doc.id
      }">edit</span></div> `;
    })
    querySnapshot.forEach((doc) => {
    if(doc.data().uid === firebase.auth().currentUser.uid){
      removePost(doc.id)
      updatePost(doc.id)
      }
    })
  });
}
  else{
  alert('necesitas loguearte para hacer esta operación')
  window.location.hash="#/login"
  }})
  return reg;
};
