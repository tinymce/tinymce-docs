tinymce.init({
  selector: 'textarea#comments-2.0',
  api_key: 'YOUR_API_KEY',
  height: 600,
  tinycomments_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  toolbar: 'bold italic underline | addcomment'
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  // Paste can cause problems with getContent filtering, so good to keep it here
  plugins: 'paste tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'John',
});