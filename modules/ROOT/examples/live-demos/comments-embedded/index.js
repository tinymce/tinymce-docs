const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

// The signed-in user. Replace with the ID of the user in your application.
const user_id = 'james-wilson';

// In embedded mode, conversations are saved inside the editor content.
// Users can resolve only the conversations they started.
const tinycomments_can_resolve = (req, done) => {
  const allowed = req.comments.length > 0 && req.comments[0].author === user_id;
  done({ canResolve: allowed });
};

tinymce.init({
  selector: 'textarea#comments-embedded',
  height: 680,
  plugins: 'tinycomments quickbars lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
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

  tinycomments_mode: 'embedded',
  tinycomments_can_resolve,
  tinycomments_always_show_highlights: true,
  sidebar_show: 'showcomments',

  user_id,
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});
