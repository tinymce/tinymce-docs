const API_URL = 'https://demouserdirectory.tiny.cloud/users';

const user_id = 'james-wilson';

const tinycomments_can_resolve = (req, done, _fail) => {
  const allowed = req.comments.length > 0 && req.comments[0].author === author;
  done({ canResolve: allowed });
};

tinymce.init({
  selector: 'textarea#comments-embedded',
  plugins: [ 'tinycomments', 'help', 'code', 'quickbars', 'link', 'lists', 'image' ],
  toolbar: 'addcomment showcomments code | bold italic underline',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',

  tinycomments_mode: 'embedded',
  sidebar_show: 'showcomments',
  tinycomments_can_resolve,
  
  user_id,
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
      .then((response) => response.json())
      .then((user) => ({
        id: user.id,
        name: user.name,
        avatar: user.image,
        custom: user
      }))
      .catch(() => ({ id: userId }))))
});
