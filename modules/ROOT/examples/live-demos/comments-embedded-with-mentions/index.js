const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const mentions_fetch = async (query, success) => {
  const searchPhrase = query.term.toLowerCase();
  await fetch(`${API_URL}?q=${encodeURIComponent(searchPhrase)}`)
    .then((response) => response.json())
    .then((users) => success(users.data.map((userInfo) => ({
      id: userInfo.id,
      name: userInfo.name,
      image: userInfo.avatar,
      description: userInfo.custom.role
    }))))
    .catch((error) => console.log(error));
};

const mentions_menu_complete = (editor, userInfo) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

const createCard = (userInfo) => {
  const div = document.createElement('div');
  div.innerHTML = (
    '<div class="card">' +
      '<img class="avatar" src="' + userInfo.image + '">' +
      '<h1>' + userInfo.name + '</h1>' +
      '<p>' + userInfo.description + '</p>' +
    '</div>'
  );
  return div;
};

const mentions_select = async (mention, success) => {
  const id = mention.getAttribute('data-mention-id');
  await fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((userInfo) => {
      const card = createCard({
        id: userInfo.id,
        name: userInfo.name,
        image: userInfo.avatar,
        description: userInfo.custom.role
      });
      success(card);
    })
    .catch((error) => console.error(error));
};

const mentions_menu_hover = async (userInfo, success) => {
  const card = createCard(userInfo);
  success(card);
};

const tinycomments_can_resolve = (req, done, _fail) => {
  const allowed = req.comments.length > 0 && req.comments[0].author === user_id;
  done({ canResolve: allowed });
};

const user_id = 'james-wilson';

tinymce.init({
  selector: 'textarea#comments-embedded-with-mentions',
  plugins: [ 'tinycomments', 'mentions', 'help', 'code', 'quickbars', 'link', 'lists', 'image' ],
  toolbar: 'addcomment showcomments code | bold italic underline',
  menubar: 'file edit view insert format tools tc help',
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',

  tinycomments_mode: 'embedded',
  sidebar_show: 'showcomments',
  tinycomments_mentions_enabled: true,
  tinycomments_can_resolve,
  tinycomments_author: user_id,
  tinycomments_author_avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',

  mentions_item_type: 'profile',
  mentions_min_chars: 0,
  mentions_selector: '.mymention',
  mentions_fetch,
  mentions_menu_hover,
  mentions_menu_complete,
  mentions_select,
  tinycomments_author: user_id,
  tinycomments_author_name: 'James Wilson',
  tinycomments_author_avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg'
});