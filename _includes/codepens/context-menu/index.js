tinymce.init({
  selector: 'textarea',
  height: 500,
  plugins: [
    'link image imagetools table spellchecker'
  ],
  contextmenu: "link image imagetools table spellchecker",
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]
});