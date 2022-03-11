tinymce.init({
  selector: 'textarea#context-menu',
  height: 500,
  plugins: [
    'link image table lists'
  ],
  contextmenu: 'link image table lists',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
