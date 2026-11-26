tinymce.init({
  selector: 'textarea#comments-ui-mode',
  height: 700,
  plugins: [
    'tinycomments',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'addcomment showcomments | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tinycomments_mode: 'embedded',
  tinycomments_access: 'comment',
  sidebar_show: 'showcomments',
  user_id: 'maya-patel',
  fetch_users: (userIds) => Promise.all(userIds.map((userId) =>
    fetch(`https://demouserdirectory.tiny.cloud/v1/users/${userId}`)
      .then((response) => response.json())
      .catch(() => ({ id: userId }))))
});
