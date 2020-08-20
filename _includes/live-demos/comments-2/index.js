tinymce.init({
  selector: '#tiny-ui .editor',
  toolbar: 'bold italic underline | addcomment showcomments',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  plugins: 'paste tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author',
  content_style: {{site.liveDemoIframeCSSStyles}}
});