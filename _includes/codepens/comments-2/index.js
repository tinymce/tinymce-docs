tinymce.init({
  selector: '#tiny-ui .editor',
  toolbar: 'bold italic underline | addcomment',
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
  tinycomments_author: 'John'
});