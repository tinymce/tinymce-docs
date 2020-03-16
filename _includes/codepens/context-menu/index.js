tinymce.init({
  selector: 'textarea#context-menu',
  height: 500,
  plugins: [
    'link image imagetools table spellchecker'
  ],
  contextmenu: "link image imagetools table spellchecker",
  content_css: '//www.tiny.cloud/css/codepen.min.css'
});