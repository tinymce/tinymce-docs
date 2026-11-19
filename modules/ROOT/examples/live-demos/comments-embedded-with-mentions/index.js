const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

// The signed-in user. Replace with the ID of the user in your application.
const user_id = 'james-wilson';

// Mentions: search the user directory and insert a styled span for the selected person.
// In comments, a mention is stored as @ followed by the user ID.
const toMentionsUser = (userInfo) => ({
  id: userInfo.id,
  name: userInfo.name,
  image: userInfo.avatar,
  description: userInfo.custom.role
});

const mentions_fetch = (query, success) => {
  fetch(`${API_URL}?q=${encodeURIComponent(query.term.toLowerCase())}&limit=10`)
    .then((response) => response.json())
    .then((users) => success(users.data.map(toMentionsUser)))
    .catch((error) => console.error(error));
};

const mentions_menu_complete = (editor, userInfo) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

const mentions_menu_hover = (userInfo, success) => {
  success({ type: 'profile', user: userInfo });
};

const mentions_select = (mention, success) => {
  const id = mention.getAttribute('data-mention-id');
  fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((userInfo) => success({ type: 'profile', user: toMentionsUser(userInfo) }))
    .catch((error) => console.error(error));
};

// In embedded mode, conversations are saved inside the editor content.
// Users can resolve only the conversations they started.
const tinycomments_can_resolve = (req, done) => {
  const allowed = req.comments.length > 0 && req.comments[0].author === user_id;
  done({ canResolve: allowed });
};

tinymce.init({
  selector: 'textarea#comments-embedded-with-mentions',
  height: 680,
  plugins: 'tinycomments mentions quickbars lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'addcomment showcomments | undo redo | blocks | bold italic | ' +
    'bullist numlist | link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  menubar: 'file edit view insert format tools table comments help',
  menu: {
    comments: { title: 'Comments', items: 'addcomment showcomments deleteallconversations' }
  },
  quickbars_selection_toolbar: 'addcomment | bold italic | quicklink',
  quickbars_insert_toolbar: false,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mymention { color: #174ea6; font-weight: 600; }',

  tinycomments_mode: 'embedded',
  tinycomments_mentions_enabled: true,
  tinycomments_can_resolve,
  tinycomments_always_show_highlights: true,
  sidebar_show: 'showcomments',

  mentions_fetch,
  mentions_item_type: 'profile',
  mentions_min_chars: 0,
  mentions_menu_complete,
  mentions_menu_hover,
  mentions_selector: '.mymention',
  mentions_select,

  user_id,
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});
