const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';
const PAGE_SIZE = 10;

// Convert a user from the directory into the format the Mentions plugin expects
const toMentionsUser = (userInfo) => ({
  id: userInfo.id,
  name: userInfo.name,
  image: userInfo.avatar,
  description: userInfo.custom.role
});

// Search the directory one page at a time. When more results exist,
// an extra "Show more people" item reloads the list with the next page.
const mentions_fetch = (query, success) => {
  const offset = (query.meta && query.meta.offset) || 0;
  const params = new URLSearchParams({
    q: query.term.toLowerCase(),
    limit: PAGE_SIZE,
    offset
  });
  fetch(`${API_URL}?${params}`)
    .then((response) => response.json())
    .then((users) => {
      const nextOffset = offset + users.data.length;
      const extras = nextOffset < users.meta.total
        ? [{ text: 'Show more people', meta: { offset: nextOffset } }]
        : [];
      success(users.data.map(toMentionsUser), extras);
    })
    .catch((error) => console.error(error));
};

// Insert the selected person as a styled span that stores the user ID
const mentions_menu_complete = (editor, userInfo) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

// Show the built-in profile card next to the highlighted item in the list
const mentions_menu_hover = (userInfo, success) => {
  success({ type: 'profile', user: userInfo });
};

// Show the built-in profile card when hovering over a mention in the content
const mentions_select = (mention, success) => {
  const id = mention.getAttribute('data-mention-id');
  fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((userInfo) => success({ type: 'profile', user: toMentionsUser(userInfo) }))
    .catch((error) => console.error(error));
};

tinymce.init({
  selector: 'textarea#mentions',
  height: 700,
  plugins: [
    'mentions',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mymention { color: #335dff; font-weight: 600; }',
  mentions_fetch,
  mentions_item_type: 'profile',
  mentions_min_chars: 0,
  mentions_menu_complete,
  mentions_menu_hover,
  mentions_selector: '.mymention',
  mentions_select
});
