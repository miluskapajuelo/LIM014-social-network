const postsView = ((doc) => {
  const viewPosts = `<div class="posting show">
    <div class="more">
        <div>
            <img style="height: 30px; width: 30px;" src="./img/undraw_female_avatar_w3jk.svg" alt="Profile-pic">
            <p class="more-name">${doc.data().user}</p>
        </div>
        <button class="btn-more" type="button">...</button>
        <div class="btn-list hide">
          <button class="editBtn-${doc.id}">Update</button>
          <button class="removeBtn-${doc.id}">Delete</button>
      </div>
    </div>
    <section class="body-posting">
        <p>${doc.data().publication}</p>
    </section>
    <section class="btn-posting">
        <section class="btn-total">
            <p><span>12</span> likes</p>
            <p><span>102</span> comment</p>
        </section>
        <section class="btn-group">
            <button class="btn-like" type="button">
                <span class="material-icons">thumb_up_off_alt</span> Like</button>
            <button type="button" class="btn-cm"><span class="material-icons">chat_bubble_outline</span> Comments</button>
        </section>
    </section>
    <section class="show-comments">
        <section class="area-cm">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="button">Post</button>
        </section>
        <article class="one-cm">
            <div class="head-cm">
                <h5 class="name-cm">Pycode</h5>
                <button class="btn-more" type="button">...</button>
                <div class="btn-list hide">
                    <button>Update</button>
                    <button>Delete</button>
                </div>
            </div>
            <p>#Phyton ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore temporibus rerum saepe hic ex unde ducimus dicta velit sequi?</p>
        </article>
        <article class="one-cm">
            <div class="head-cm">
                <h5 class="name-cm">Imran White</h5>
                <button class="btn-more" type="button">...</button>
            </div>
            <p>Tengo que hacer mi Salat</p>
        </article>
    </section>
</div>`;
  return viewPosts;
});

export { postsView };
