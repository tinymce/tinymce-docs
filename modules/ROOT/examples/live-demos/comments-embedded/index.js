tinymce.init({
  selector: 'textarea#comments-embedded',
  height: 720,
  plugins: [
    'tinycomments', 'quickbars',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'addcomment showcomments | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  quickbars_selection_toolbar: 'addcomment | bold italic | quicklink',
  quickbars_insert_toolbar: false,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],

  // Conversations are saved inside the editor content, at the end of the HTML.
  tinycomments_mode: 'embedded',
  // Users can resolve only the conversations they started.
  tinycomments_can_resolve: (req, done) => done({
    canResolve: req.comments.length > 0 && req.comments[0].author === 'nicholas-butler'
  }),
  tinycomments_always_show_highlights: true,
  sidebar_show: 'showcomments',

  // The signed-in user, and a lookup for the name and avatar of each user ID.
  user_id: 'nicholas-butler',
  fetch_users: (userIds) => Promise.all(userIds.map((userId) =>
    fetch(`https://demouserdirectory.tiny.cloud/v1/users/${userId}`)
      .then((response) => response.json())
      .catch(() => ({ id: userId }))))
});
