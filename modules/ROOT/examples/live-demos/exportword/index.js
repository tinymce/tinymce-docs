tinymce.init({
  selector: 'textarea.exportword',
  plugins: [
    'exportword', 'code',
  ],
  toolbar: 'code',
  height: 600,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
