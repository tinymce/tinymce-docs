const config = {
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
}

const loadTinymce = async () => {
	const documentPromise = fetch(`/documents/${documentId}`); // Fetch the document from the server
	const modelPromise = fetch(`/models/${documentId}`); // Fetch the model from the same server

	await documentPromise
    .then((response) => response.text())
    .then(async (doc) => {
      const tinymceElement = document.querySelector('div#tinymce');
      tinymceElement.innerHTML = doc;
      
      await modelPromise
        .then((response) => response.json())
        .then((model) => {
          tinymce.init({
            ...config,
            suggestededits_model: model,
          });
        })
        .catch(() => {
          tinymce.init(config); // Initialize without a model if the model fetch fails
        });
    });
};

loadTinymce();
