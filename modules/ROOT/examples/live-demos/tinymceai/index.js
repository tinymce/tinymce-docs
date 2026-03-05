// Step 1: Set up session - this should be part of the application's user management process. We simulate that here by creating a session for a random user.
const apiKey = '{{tinymceai_demo_api_key}}';
const isLoggedIn = fetch(`https://demo.api.tiny.cloud/1/${apiKey}/auth/random`, { method: "POST", credentials: "include" });

tinymce.init({
  selector: 'textarea#tinymceai',
  height: '610px',
  plugins: ["tinymceai", "advlist", "anchor", "autolink", "charmap", "code"],
  toolbar: "undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  tinymceai_token_provider: async () => {
    // Step 2: Check we have a session then fetch JWT
    return isLoggedIn.then(() =>
      fetch(`https://demo.api.tiny.cloud/1/${apiKey}/jwt/tinymceai`, { credentials: "include" })
        .then(resp => resp.text())
        .then(token => ({ token }))
    );
  }
});
