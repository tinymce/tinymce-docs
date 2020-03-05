// Initialize the TinyMCE editor
tinymce.init({
  selector: 'textarea#menu2',
  plugins: 'code',
  menu: {
    happy: {title: 'Happy', items: 'code'}
  },
  menubar: 'happy',

  content_css: '//www.tiny.cloud/css/codepen.min.css',
});