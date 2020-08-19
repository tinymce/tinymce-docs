tinymce.init({
  selector: 'textarea#context-menu',
  height: 500,
  plugins: [
    'link image imagetools table spellchecker lists'
  ],
  contextmenu: "link image imagetools table spellchecker lists",
  content_css: '//www.tiny.cloud/css/codepen.min.css'
});