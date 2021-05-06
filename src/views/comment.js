/* const showComment = (() => {
  const commentsShow = document.querySelectorAll('.one-cm');
  firebase.firestore().collection('comments')
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      commentsShow[0].innerHTML = '';
      querySnapshot.forEach((doc) => {
        if (doc.data().postId === '5PhWzz0J0CkXgqhKhu8v') {
          commentsShow[0].innerHTML += `
                        <div class="head-cm">
                            <h5 class="name-cm">${doc.data().user}</h5>
                            <button class="btn-more" type="button">...</button>
                            <div class="btn-list hide">
                                <button class="editBtnComment-${doc.id}">Update</button>
                                <button class="removeBtnComment-${doc.id}">Delete</button>
                            </div>
                        </div>
                        <p>${doc.data().comment}</p>
                    `;
        }
      });
    });
}); */

const showComment = (() => {
  console.log('hola');
  const commentsShow = document.querySelectorAll('.one-cm');
  console.log(commentsShow);
  let i = 0;
  firebase.firestore().collection('post')
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection('comments')
          .where(doc.id, '==', 'postId').onSnapshot((querySnapshot2) => {
            querySnapshot2.forEach((doc2) => {
              commentsShow[i].innerHTML += `
                        <div class="head-cm">
                            <h5 class="name-cm">${doc2.data().user}</h5>
                            <button class="btn-more" type="button">...</button>
                            <div class="btn-list hide">
                                <button class="editBtnComment-${doc2.id}">Update</button>
                                <button class="removeBtnComment-${doc2.id}">Delete</button>
                            </div>
                        </div>
                        <p>${doc2.data().comment}</p>
                    `;
              i += 1;
            });
          });
      });
    });
});
export { showComment };
