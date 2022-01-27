tinymce.init({
  selector: 'textarea#valid-elements',
  plugins: 'code',
  height: 500,
  extended_valid_elements: 'img[class=myclass|!src|border:0|alt|title|width|height|style]',
  invalid_elements: 'strong,b,em,i',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});