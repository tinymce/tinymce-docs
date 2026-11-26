const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

// The model is saved alongside the content and holds the unreviewed suggestions and their feedback.
// This demo stores it in an attribute on the textarea.
const tinymceElement = document.querySelector('textarea#suggestededits-auto-approve');
const model = JSON.parse(tinymceElement.getAttribute('suggestededits-model'));

tinymce.init({
  selector: 'textarea#suggestededits-auto-approve',
  height: 600,
  plugins: [
    'suggestededits',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'suggestededits suggestededits-tracking | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  suggestededits_model: model,
  suggestededits_auto_approve: true, // Change this value to auto-approve suggested edits
  // The signed-in user. Replace with the ID of the user in your application.
  user_id: 'hazel-turner',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});
