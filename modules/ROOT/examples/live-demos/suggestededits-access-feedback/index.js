const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

// The model is saved alongside the content and holds the unreviewed suggestions and their feedback.
// This demo stores it in an attribute on the textarea.
const tinymceElement = document.querySelector('textarea#suggestededits-access-feedback');
const model = JSON.parse(tinymceElement.getAttribute('suggestededits-model'));

tinymce.init({
  selector: 'textarea#suggestededits-access-feedback',
  height: 600,
  plugins: [
    'suggestededits',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'suggestededits | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  suggestededits_model: model,
  suggestededits_access: 'feedback', // Change this value to set the Review edits view permissions
  // The signed-in user. Replace with the ID of the user in your application.
  user_id: 'elena-rodriguez',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});
