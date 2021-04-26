export default function addPost(post){ 
    const dateP = Date.now()
    return firebase.firestore().collection("post").add({
  publication: post,
  email: firebase.auth().currentUser.email,
  uid: firebase.auth().currentUser.uid,
  datePost: dateP
});}