tinymce.init({
  selector: 'textarea#valid-elements',
  height: 500,
  extended_valid_elements: 'img[class=myclass|!src|border:0|alt|title|width|height|style]',
  invalid_elements: 'strong,b,em,i',
  content_css: '//www.tiny.cloud/css/codepen.min.css'
});