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

tinymce.init({
    selector: "textarea",
    plugins: [
      "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
      "help", "image", "insertdatetime", "link", "lists", "media",
      "preview", "searchreplace", "table", "visualblocks", "mentions"
    ],
    toolbar: "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    content_style: '.mymention{ color: gray; }',
    mentions_fetch,
    mentions_item_type: 'profile',
    mentions_menu_complete,
    mentions_selector: '.mymention',
    mentions_select,
    mentions_menu_hover,
    tinycomments_mode: 'embedded'
});