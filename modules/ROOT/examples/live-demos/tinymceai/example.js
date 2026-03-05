// Step 1: Set up session - this should be part of the application's user management process.
tinymce.init({
  selector: 'textarea#tinymceai',
  height: '610px',
  plugins: ["tinymceai", "advlist", "anchor", "autolink", "charmap", "code"],
  toolbar: "undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  tinymceai_token_provider: async () => {
    // Step 2: Check we have a session then fetch JWT from your backend
    return fetch('/api/tinymceai-token', { credentials: "include" })
      .then(resp => resp.text())
      .then(token => ({ token }));
  }
});
