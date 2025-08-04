const API_URL = 'https://demouserdirectory.tiny.cloud/users';

const tinymceElement = document.querySelector('textarea#suggestededits-access-read');
const model = JSON.parse(tinymceElement.getAttribute('suggestededits-model'));

tinymce.init({
    selector: 'textarea#suggestededits-access-read',
    height: 500,
    plugins: 'suggestededits advlist anchor autolink code charmap emoticons fullscreen help image link lists media preview searchreplace table',
    toolbar: 'undo redo | suggestededits | styles fontsizeinput | bold italic | align bullist numlist | table link image | code',
    user_id: 'kai-nakamura',
    fetch_users: (userIds) => Promise.all(userIds
        .map((userId) =>
            fetch(`${API_URL}/${userId}`)
            .then((response) => response.json())
            .then((user) => ({
                id: user.id,
                name: user.name,
                avatar: user.image,
                custom: user
            }))
            .catch(() => ({ id: userId })))),
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
    suggestededits_model: model,
    readonly: false, // Set to true to prevent edits to the content
    suggestededits_access: 'read', // Set this value to restrict the permissions in the Suggested Edits view
    suggestededits_content: 'html'
});
