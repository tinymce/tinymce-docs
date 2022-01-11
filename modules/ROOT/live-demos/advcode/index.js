tinymce.init({
  selector: 'textarea.advcodedemo',
  plugins: 'advcode',
  toolbar: 'code',

  height: 600,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

tinymce.init({
  selector: 'textarea.codedemo',
  plugins: 'code',
  toolbar: 'code',

  height: 600,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});