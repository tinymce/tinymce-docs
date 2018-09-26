tinymce.init({
  selector: 'textarea',
  height: 500,
  extended_valid_elements: 'img[class=myclass|!src|border:0|alt|title|width|height|style]',
  invalid_elements: 'strong,b,em,i',
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]
});