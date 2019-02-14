tinymce.init({
  selector: 'textarea#comments-2.0',
  // Paste can cause problems with getContent filtering, so good to keep it here
  plugins: 'paste tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'John',
  api_key: 'fake-key',
  content_css: [
    "//fonts.googleapis.com/css?family=Lato|Lobster|Noto+Serif|Permanent+Marker|Raleway|Roboto|Source+Code+Pro",
    "//tiny.cloud/css/content-standard.min.css"
  ],
  height: 600,
  imagetools_cors_hosts: ['picsum.photos'],
  toolbar: 'bold italic underline | addcomment'
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations',
    },
  },
});