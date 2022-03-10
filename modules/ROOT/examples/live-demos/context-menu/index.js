tinymce.init({
  selector: 'textarea#context-menu',
  height: 500,
  plugins: [
    'link image imagetools table spellchecker lists'
  ],
  contextmenu: 'link image imagetools table spellchecker lists',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});