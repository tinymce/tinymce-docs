tinymce.init({
  selector: 'textarea#spellcheckerpro',
  plugins: 'code tinymcespellchecker link',
  toolbar: 'spellchecker language spellcheckdialog',
  height: 500,
  spellchecker_language: 'en',
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]
});