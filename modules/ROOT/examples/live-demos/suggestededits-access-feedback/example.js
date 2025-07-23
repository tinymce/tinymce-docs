const tinymceElement = document.querySelector('textarea#suggested-edits');
const model = tinymceElement.getAttribute('suggestededits-model');

tinymce.init({
  selector: 'textarea#suggested-edits',
  height: 500,
  plugins: 'suggestededits advlist anchor autolink code charmap emoticons fullscreen help image link lists media preview searchreplace table',
  toolbar: 'undo redo | suggestededits | styles fontsizeinput | bold italic | align bullist numlist | table link image | code',
  user_id: 'michaelcook',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`/users/${userId}`) // Fetch user data from the server
      .then((response) => response.json())
      .catch(() => ({ id: userId })) // Still return a valid user object even if the fetch fails
  )),
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  readonly: false, // Set to true to prevent edits to the content
  suggestededits_access: 'feedback', // Set this value to restrict the permissions in the Suggested Edits view
  suggestededits_content: 'html',
  suggestededits_model: model
});